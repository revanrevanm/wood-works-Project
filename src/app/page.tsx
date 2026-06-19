import { Hero } from "@/components/sections/Hero";
import { TrustStats } from "@/components/sections/TrustStats";
import { MeetOwner } from "@/components/sections/MeetOwner";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStats />
      <MeetOwner />
      <AboutPreview />
      <ServicesGrid />
      <FeaturedProjects />
      <WhyChooseUs />
      <Testimonials />
      <ContactCTA />
    </>
  );
}
