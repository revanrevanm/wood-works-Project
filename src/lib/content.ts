import {
  Armchair,
  ChefHat,
  DoorOpen,
  Hammer,
  LayoutGrid,
  Building2,
  Sofa,
  Tv,
  Flame,
  Warehouse,
  BedDouble,
  PanelsTopLeft,
} from "lucide-react";

export type Service = {
  slug: string;
  icon: typeof Armchair;
  title: string;
  titleTamil: string;
  desc: string;
  descTamil: string;
  features: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "custom-furniture",
    icon: Sofa,
    title: "Custom Furniture",
    titleTamil: "தனிப்பயன் மரச்சாமான்கள்",
    desc: "Bespoke sofas, beds, dining sets and tables — handcrafted to your space and taste with premium hardwood.",
    descTamil:
      "உங்கள் வீட்டிற்கு ஏற்ப தனிப்பயனாக வடிவமைக்கப்பட்ட சோபா, கட்டில், டைனிங் செட் மற்றும் மேசைகள்.",
    features: ["Solid teak & hardwood", "Made-to-measure", "Premium finishes"],
  },
  {
    slug: "beds-cots",
    icon: BedDouble,
    title: "Beds & Cots",
    titleTamil: "கட்டில் & கொட்டில்",
    desc: "Strong, beautiful wooden cots and beds — from simple frames to storage cots and grand carved headboards.",
    descTamil:
      "வலிமையான, அழகான மரக் கட்டில்கள் — எளிய ஃப்ரேம் முதல் சேமிப்பு கட்டில் மற்றும் செதுக்கப்பட்ட தலைப்பகுதி வரை.",
    features: ["Solid wood frame", "Storage cots", "Carved headboards"],
  },
  {
    slug: "modular-kitchen",
    icon: ChefHat,
    title: "Modular Kitchen",
    titleTamil: "மாடுலர் சமையலறை",
    desc: "Functional, beautiful modular kitchens with smart storage, soft-close hardware and water-resistant finishes.",
    descTamil:
      "ஸ்மார்ட் சேமிப்பு, மென்மையாக மூடும் கதவுகள் மற்றும் தண்ணீர் எதிர்ப்பு பூச்சுடன் கூடிய மாடுலர் சமையலறை.",
    features: ["Soft-close fittings", "Water-resistant ply", "Optimised storage"],
  },
  {
    slug: "wardrobes",
    icon: LayoutGrid,
    title: "Wardrobes",
    titleTamil: "அலமாரிகள்",
    desc: "Sliding and hinged wardrobes with elegant interiors, mirrors and intelligent compartments for every need.",
    descTamil:
      "நேர்த்தியான உட்புறம், கண்ணாடிகள் மற்றும் புத்திசாலித்தனமான பிரிவுகளுடன் கூடிய அலமாரிகள்.",
    features: ["Sliding & hinged", "Custom interiors", "Space-smart layout"],
  },
  {
    slug: "doors-windows",
    icon: DoorOpen,
    title: "Doors & Windows",
    titleTamil: "கதவுகள் & ஜன்னல்கள்",
    desc: "Strong, weather-sealed wooden doors and windows — from grand main doors to refined interior frames.",
    descTamil:
      "வலிமையான, வானிலை தாங்கும் மரக் கதவுகள் மற்றும் ஜன்னல்கள் — பிரதான கதவு முதல் உட்புற சட்டங்கள் வரை.",
    features: ["Seasoned timber", "Weather-sealed", "Custom carvings"],
  },
  {
    slug: "carved-doors",
    icon: PanelsTopLeft,
    title: "Carved & Designer Doors",
    titleTamil: "நிலவு கதவு & டிசைனர் கதவு",
    desc: "Eye-catching nilavu (moon) doors and custom carved designer doors that make a grand first impression.",
    descTamil:
      "கம்பீரமான முதல் பார்வையைத் தரும் நிலவு கதவு மற்றும் தனிப்பயன் செதுக்கப்பட்ட டிசைனர் கதவுகள்.",
    features: ["Nilavu (moon) doors", "Custom carving", "Seasoned teak"],
  },
  {
    slug: "interior-wood-works",
    icon: Armchair,
    title: "Interior Wood Works",
    titleTamil: "உட்புற மரவேலைகள்",
    desc: "Complete interior carpentry — panelling, false ceilings, partitions and feature walls with a luxury finish.",
    descTamil:
      "ஆடம்பர பூச்சுடன் முழு உட்புற தச்சு வேலை — பேனலிங், ஃபால்ஸ் சீலிங், பார்டிஷன் மற்றும் ஃபீச்சர் வால்.",
    features: ["Wall panelling", "False ceiling", "Feature walls"],
  },
  {
    slug: "commercial-projects",
    icon: Building2,
    title: "Commercial Projects",
    titleTamil: "வணிக திட்டங்கள்",
    desc: "Shop interiors, office cabins, reception units and retail fit-outs delivered on time, built to last.",
    descTamil:
      "கடை உட்புறம், அலுவலக கேபின்கள், வரவேற்பு யூனிட்கள் மற்றும் ரீடெய்ல் வேலைகள் சரியான நேரத்தில்.",
    features: ["Shops & offices", "Reception units", "On-time delivery"],
  },
  {
    slug: "tv-units",
    icon: Tv,
    title: "TV & Display Units",
    titleTamil: "டிவி யூனிட்கள்",
    desc: "Statement TV units and display shelving that anchor your living room with warmth and storage.",
    descTamil:
      "உங்கள் வரவேற்பறையை அழகுபடுத்தும் டிவி யூனிட்கள் மற்றும் டிஸ்ப்ளே ஷெல்ஃப்கள்.",
    features: ["Wall-mounted", "Hidden storage", "LED-ready"],
  },
  {
    slug: "pooja-units",
    icon: Flame,
    title: "Pooja Units",
    titleTamil: "பூஜை அறை",
    desc: "Sacred, intricately carved pooja units and mandirs crafted with devotion and traditional detailing.",
    descTamil:
      "பக்தியுடனும் பாரம்பரிய நுட்பத்துடனும் செதுக்கப்பட்ட புனிதமான பூஜை யூனிட்கள் மற்றும் மண்டபங்கள்.",
    features: ["Traditional carving", "Premium teak", "Custom design"],
  },
];

export type Project = {
  id: string;
  title: string;
  category: "Furniture" | "Kitchen" | "Wardrobe" | "Doors" | "Interior" | "Commercial";
  location: string;
  img: string;
  span?: "tall" | "wide" | "normal";
};

/**
 * Local images in /public/images (fetched by scripts/download-images.ps1).
 * To use your own real project photos, drop files with the same names into
 * /public/images, e.g. project-01.jpg.
 */
const img = (file: string) => `/images/${file}`;

export const PROJECTS: Project[] = [
  { id: "p1", title: "Solid Wood Bedroom Set", category: "Furniture", location: "Karur", img: img("project-01.jpg"), span: "tall" },
  { id: "p2", title: "Premium Modular Kitchen", category: "Kitchen", location: "Coimbatore", img: img("project-02.jpg"), span: "wide" },
  { id: "p3", title: "Custom Wardrobe in the Making", category: "Wardrobe", location: "Karur", img: img("project-03.jpg") },
  { id: "p4", title: "Solid Wooden Main Door", category: "Doors", location: "Karur", img: img("project-04.jpg"), span: "tall" },
  { id: "p5", title: "Interior Carpentry Work", category: "Interior", location: "Coimbatore", img: img("project-05.jpg") },
  { id: "p6", title: "Office Interior Fit-out", category: "Commercial", location: "Coimbatore", img: img("project-06.jpg"), span: "wide" },
  { id: "p7", title: "Dining Set in Solid Wood", category: "Furniture", location: "Karur", img: img("project-07.jpg") },
  { id: "p8", title: "Handcrafted Wood Detailing", category: "Interior", location: "Karur", img: img("project-08.jpg"), span: "tall" },
  { id: "p9", title: "Retail Shop Fit-out", category: "Commercial", location: "Coimbatore", img: img("project-09.jpg") },
  { id: "p10", title: "Our Workshop & Tools", category: "Interior", location: "Karur", img: img("project-10.jpg"), span: "wide" },
  { id: "p11", title: "Custom Design & Planning", category: "Furniture", location: "Coimbatore", img: img("project-11.jpg") },
  { id: "p12", title: "Wooden Doors & Partitions", category: "Doors", location: "Coimbatore", img: img("project-12.jpg") },
];

export const PROJECT_CATEGORIES = [
  "All",
  "Furniture",
  "Kitchen",
  "Wardrobe",
  "Doors",
  "Interior",
  "Commercial",
] as const;

export type Testimonial = {
  name: string;
  role: string;
  location: string;
  quoteTamil: string;
  quote: string;
  rating: number;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Saravanan M.",
    role: "Villa Owner",
    location: "Karur",
    quoteTamil:
      "எங்க வீட்டுக்கு முழு interior வேலையும் Natrayan அண்ணா செஞ்சாரு. மரத்தோட தரம், finishing எல்லாமே first class. நேரத்துக்கு முடிச்சு கொடுத்தாங்க.",
    quote:
      "Natrayan did the complete interior of our home. The wood quality and finishing are first class, and everything was delivered on time.",
    rating: 5,
  },
  {
    name: "Lakshmi Priya",
    role: "Homeowner",
    location: "Coimbatore",
    quoteTamil:
      "என் modular kitchen-ஐ பார்த்த எல்லாரும் கேக்குறாங்க யாரு பண்ணது-ன்னு. Design super, விலையும் reasonable. மிக்க நன்றி!",
    quote:
      "Everyone who sees my modular kitchen asks who built it. The design is superb and the price was very reasonable. Thank you so much!",
    rating: 5,
  },
  {
    name: "Anand Kumar",
    role: "Shop Owner",
    location: "Karur",
    quoteTamil:
      "என் கடைக்கு full wooden interior பண்ணாங்க. 30 வருஷ அனுபவம் அவங்க வேலையில தெரியுது. நம்பிக்கையா வேலை செய்யுற team.",
    quote:
      "They did the full wooden interior for my shop. Their 30 years of experience shows in the work. A team you can truly trust.",
    rating: 5,
  },
  {
    name: "Deepa Rajendran",
    role: "Interior Client",
    location: "Coimbatore",
    quoteTamil:
      "Wardrobe-um TV unit-um romba neat- a பண்ணி கொடுத்தாங்க. Wood quality top. Karur, Coimbatore-la best wood works இவங்க தான்.",
    quote:
      "The wardrobe and TV unit were done very neatly. Top wood quality. For Karur and Coimbatore, they are the best wood works team.",
    rating: 5,
  },
  {
    name: "Murugan S.",
    role: "Builder",
    location: "Karur",
    quoteTamil:
      "எங்க project-ku doors and windows எல்லாம் இவங்க தான் செஞ்சாங்க. Bulk order-um time-ku deliver பண்ணுவாங்க. Recommend பண்றேன்.",
    quote:
      "For our project they made all the doors and windows. Even bulk orders are delivered on time. I highly recommend them.",
    rating: 5,
  },
  {
    name: "Revathi & Family",
    role: "Homeowner",
    location: "Coimbatore",
    quoteTamil:
      "பூஜை அறை carving பார்க்கவே ரொம்ப அழகா இருக்கு. கைவினைத்திறன் அபாரம். வீட்டுக்கு ஒரு பெருமை.",
    quote:
      "The carving on our pooja unit is just beautiful to look at. The craftsmanship is exceptional — a true pride for our home.",
    rating: 5,
  },
];

export const WHY_CHOOSE = [
  {
    icon: Hammer,
    title: "Experienced Team",
    titleTamil: "அனுபவமிக்க குழு",
    desc: "30+ years and 4 skilled craftsmen behind every joint and finish.",
  },
  {
    icon: Warehouse,
    title: "Quality Wood",
    titleTamil: "தரமான மரம்",
    desc: "Carefully seasoned teak and hardwoods that last for generations.",
  },
  {
    icon: LayoutGrid,
    title: "Custom Designs",
    titleTamil: "தனிப்பயன் வடிவமைப்பு",
    desc: "Every piece designed around your space, lifestyle and budget.",
  },
  {
    icon: Sofa,
    title: "Affordable Pricing",
    titleTamil: "நியாயமான விலை",
    desc: "Premium craftsmanship at honest, transparent prices.",
  },
  {
    icon: DoorOpen,
    title: "On-Time Delivery",
    titleTamil: "சரியான நேரத்தில்",
    desc: "We respect your timeline — projects finished as promised.",
  },
];
