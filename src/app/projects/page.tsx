import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Gallery } from "@/components/projects/Gallery";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects Gallery — Our Woodwork in Karur & Coimbatore",
  description:
    "Browse completed wood works projects by Natrayan Wood Works — custom furniture, modular kitchens, wardrobes, doors, interiors and commercial fit-outs across Karur & Coimbatore.",
  alternates: { canonical: `${SITE.url}/projects` },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        crumb="Projects"
        eyebrow="Our Portfolio · எங்கள் வேலைகள்"
        title="Spaces we've"
        titleAccent="brought to life"
        description="A curated gallery of furniture, kitchens, interiors and commercial work delivered across Karur and Coimbatore."
        tamil="கரூர் மற்றும் கோயம்புத்தூரில் நாங்கள் உருவாக்கிய வேலைகளின் தொகுப்பு."
        image="/images/projects-hero.jpg"
      />
      <Gallery />
      <ContactCTA />
    </>
  );
}
