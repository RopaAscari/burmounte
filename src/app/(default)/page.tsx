export const metadata = {
  title: "Home - Burmounte",
  description: "Page description",
};

import Hero from "@/components/hero-home";
import Process from "@/components/process";
import Features from "@/components/features";
import AIFeature from "@/components/ai-feature";
import Features01 from "@/components/features-01";
import HeroWrapper from "@/components/hero-wrapper";
import Testimonials from "@/components/testimonials/testimonials";

export default function Home() {
  return (
    <>
      <HeroWrapper>
        <Hero />
      </HeroWrapper>
      <Features />
      <Features01 />
      <AIFeature />
      <Process />
      <Testimonials />
    </>
  );
}
