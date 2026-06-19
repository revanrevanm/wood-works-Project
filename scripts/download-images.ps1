# Downloads real wood / furniture / interior photos from Pexels (free, CDN allows
# direct download) into public/images. Uses curl -k to bypass the local
# self-signed proxy cert. Validates each file is a real JPEG.
#
# Run:  powershell -ExecutionPolicy Bypass -File scripts/download-images.ps1

$ErrorActionPreference = "Continue"
$UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36"
$root = Split-Path -Parent $PSScriptRoot
$out = Join-Path $root "public\images"
New-Item -ItemType Directory -Force -Path $out | Out-Null

# Pexels photo id -> built URL. w = target width, tall ones get portrait crop.
function Px($id, $w, $h) {
  $u = "https://images.pexels.com/photos/$id/pexels-photo-$id.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=$w"
  if ($h) { $u += "&h=$h" }
  return $u
}

# name = output file (no ext), id = pexels id, w/h target dimensions
$imgs = @(
  # Hero & section / page heroes — REAL carpentry/workshop work (not glossy showrooms)
  @{ n="hero";            id=3637837; w=1920; h=1280 },  # carpenter building a wooden cabinet
  @{ n="about-preview";   id=5089152; w=1000; h=1250 },  # craftsman's hands on wood block (portrait)
  @{ n="about-hero";      id=4491881; w=1920; h=1080 },  # carpenter in woodworking workshop
  @{ n="about-workshop";  id=5974417; w=1000; h=1200 },  # chiseling wood with mallet (portrait)
  @{ n="why-craftsman";   id=5974417; w=1000; h=1200 },  # hand-chisel work (portrait)
  @{ n="services-hero";   id=1094770; w=1920; h=1080 },  # workshop bench with tools & timber
  @{ n="projects-hero";   id=4491881; w=1920; h=1080 },  # carpenter at workbench
  @{ n="contact-hero";    id=3760529; w=1920; h=1080 },  # craftsman planning designs at bench
  @{ n="og";              id=3637837; w=1200; h=630  },  # social share — real carpentry

  # Gallery projects (1..12) — real wood furniture, doors, work-in-progress, finished pieces
  @{ n="project-01"; id=279746;  w=900;  h=1200 }, # solid wooden bed & furniture (tall)
  @{ n="project-02"; id=2724749; w=1200; h=700 },  # modular kitchen (wide)
  @{ n="project-03"; id=3637837; w=900;  h=700 },  # building a wardrobe / cabinet
  @{ n="project-04"; id=277559;  w=900;  h=1200 }, # wooden panel door (tall)
  @{ n="project-05"; id=175039;  w=900;  h=700 },  # carpentry tools (interior work prep)
  @{ n="project-06"; id=3990359; w=1200; h=700 },  # interior fit-out in progress (wide)
  @{ n="project-07"; id=1080696; w=900;  h=700 },  # solid wood dining table
  @{ n="project-08"; id=5089152; w=900;  h=1200 }, # craftsman shaping wood (tall)
  @{ n="project-09"; id=264507;  w=900;  h=700 },  # retail store wooden interior
  @{ n="project-10"; id=1094770; w=1200; h=700 },  # workshop tools & timber (wide)
  @{ n="project-11"; id=3760529; w=900;  h=700 },  # design / planning at bench
  @{ n="project-12"; id=279607;  w=900;  h=700 }   # wooden french doors & panelling
)

$ok = 0; $fail = @()
foreach ($img in $imgs) {
  $dest = Join-Path $out ("{0}.jpg" -f $img.n)
  $url = Px $img.id $img.w $img.h
  $code = & curl.exe -k -s -L -A $UA -o $dest -w "%{http_code}" --max-time 40 $url 2>&1
  $sz = if (Test-Path $dest) { (Get-Item $dest).Length } else { 0 }
  # validate JPEG magic bytes FF D8
  $valid = $false
  if ($sz -gt 3000) {
    $fs = [System.IO.File]::OpenRead($dest)
    $b0 = $fs.ReadByte(); $b1 = $fs.ReadByte(); $fs.Close()
    $valid = ($b0 -eq 0xFF -and $b1 -eq 0xD8)
  }
  if ($code -eq 200 -and $valid) {
    $ok++
    Write-Host ("  OK  {0,-16} {1,7} bytes" -f $img.n, $sz)
  } else {
    $fail += $img.n
    Write-Host ("FAIL  {0,-16} code={1} size={2}" -f $img.n, $code, $sz)
  }
}
Write-Host ""
Write-Host "Downloaded $ok / $($imgs.Count) images."
if ($fail.Count) { Write-Host ("Failed: " + ($fail -join ", ")) }
