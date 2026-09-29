import { Hero } from "@/components/site/hero";
import { MaterialLabSection } from "@/components/site/material-lab-section";
import { MaterialSection } from "@/components/site/material-section";
import { OutcomesSection } from "@/components/site/outcomes-section";
import { ServicesSection } from "@/components/site/services-section";
import { SiteHeader } from "@/components/site/site-header";
import { StatsSection } from "@/components/site/stats-section";
import { WhySection } from "@/components/site/why-section";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <MaterialSection />
        <ServicesSection />
        <MaterialLabSection />
        <StatsSection />
        <OutcomesSection />
        <WhySection />
      </main>
    </>
  );
}
