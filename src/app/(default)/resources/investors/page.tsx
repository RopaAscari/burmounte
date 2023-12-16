import { Metadata } from "next";
import HeroInvestors from "./hero-investors";
import EmptyState from "./empty-investors-state";
import { generateSeoMetadata } from "@/core/utils";
import { PageData } from "@/core/constants/page-data";

const { title, description, path } = PageData.Investors;

export const metadata: Metadata = {
  title,
  description,
  ...generateSeoMetadata(title, description, path),
};

export default function Investors() {
  return (
    <>
      <HeroInvestors />
      <EmptyState />
    </>
  );
}
