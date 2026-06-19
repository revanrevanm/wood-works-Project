/**
 * Single source of truth for all business / brand data.
 * Update phone, address, content here and it flows across the whole site + SEO.
 */

export const PHONE = "+919843751633";
export const PHONE_DISPLAY = "+91 98437 51633";
export const WHATSAPP = "919843751633";

export const WHATSAPP_MESSAGE =
  "Vanakkam! Natrayan Wood Works website-la irundhu vanthen. Wood works pathi vivarangal venum.";

export const whatsappLink = (msg: string = WHATSAPP_MESSAGE) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

export const telLink = `tel:${PHONE}`;

export const INSTAGRAM = "https://www.instagram.com/natrayan1828";

export const SITE = {
  name: "Natrayan Wood Works",
  nameTamil: "நடராஜன் வுட் ஒர்க்ஸ்",
  owner: "Natrayan",
  tagline: "Crafting Quality Woodwork Since 1995",
  taglineTamil: "1995 முதல் தரமான மரவேலை கைவினைத்திறன்",
  established: 1995,
  experienceYears: "30+",
  craftsmen: 4,
  projectsDone: "1000+",
  url: "https://natrayanwoodworks.com",
  address: {
    locality: "Pallapatti",
    region: "Karur",
    state: "Tamil Nadu",
    country: "India",
    full: "Pallapatti, Karur, Tamil Nadu, India",
  },
  serviceAreas: ["Karur", "Coimbatore"],
  // Approx Pallapatti, Karur coords for map embed
  geo: { lat: 10.9601, lng: 78.0766 },
} as const;

export const NAV_LINKS = [
  { label: "Home", labelTamil: "முகப்பு", href: "/" },
  { label: "About", labelTamil: "எங்களை பற்றி", href: "/about" },
  { label: "Services", labelTamil: "சேவைகள்", href: "/services" },
  { label: "Projects", labelTamil: "வேலைகள்", href: "/projects" },
  { label: "Contact", labelTamil: "தொடர்பு", href: "/contact" },
] as const;
