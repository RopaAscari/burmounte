import { Metadata } from "next/types";
import Hero from "@/components/hero-about";
import TeamImages from "@/components/team-images";
import Newsletter from "@/components/newsletter";
import { generateSeoMetadata } from "@/core/utils";
import { PageData } from "@/core/constants/page-data";
import FeatureGlobe from "@/components/feature-globe";
import FeaturesGallery from "@/components/features-gallery";

const { title, description, path } = PageData.About;

export const metadata: Metadata = {
  title,
  description,
  ...generateSeoMetadata(title, description, path),
};

export default function About() {
  return (
    <>
      <Hero />
      <TeamImages />
      <FeaturesGallery />
      <FeatureGlobe />
      <Newsletter />
    </>
  );
}
