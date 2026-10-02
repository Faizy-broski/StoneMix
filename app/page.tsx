import { AreasSection } from "@/components/site/areas-section";
import { FaqSection } from "@/components/site/faq-section";
import { GallerySection } from "@/components/site/gallery-section";
import { Hero } from "@/components/site/hero";
import { MaterialLabSection } from "@/components/site/material-lab-section";
import { MaterialSection } from "@/components/site/material-section";
import { OutcomesSection } from "@/components/site/outcomes-section";
import { ReviewsSection } from "@/components/site/reviews-section";
import { ServicesSection } from "@/components/site/services-section";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { StatsSection } from "@/components/site/stats-section";
import { WhySection } from "@/components/site/why-section";

export default function Home() {
  return (
    <>
      <SiteHeader />
      {/* Clips sideways entrance animations so they never add a horizontal scrollbar. */}
      <main className="flex-1 overflow-x-clip">
        <Hero />
        <MaterialSection />
        <ServicesSection />
        <MaterialLabSection />
        <StatsSection />
        <OutcomesSection />
        <WhySection />
        <ReviewsSection />
        <FaqSection />
        <AreasSection />
        <GallerySection />
      </main>
      <SiteFooter />
    </>
  );
}
