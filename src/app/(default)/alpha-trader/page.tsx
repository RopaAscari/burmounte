import Hero from "./hero";
import { Metadata } from "next";
import Features02 from "./features-02";
import PricingTabs from "./pricing-tabs";
import { PageData } from "@/core/constants/page-data";
import { generateSeoMetadata } from "@/core/utils";

const { title, description, path } = PageData.AlphaTrader;

export const metadata: Metadata = {
  title,
  description,
  ...generateSeoMetadata(title, description, path),
};

export default function AlphaTrader() {
  return (
    <>
      <Hero />
      <Features02 />
      <PricingTabs />
    </>
  );
}
