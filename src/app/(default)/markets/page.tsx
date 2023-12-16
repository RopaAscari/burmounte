import { Metadata } from "next";
import { Loading } from "@/components/loading";
import { generateSeoMetadata } from "@/core/utils";
import { PageData } from "@/core/constants/page-data";

const { title, description, path } = PageData.Markets;

export const metadata: Metadata = {
  title,
  description,
  ...generateSeoMetadata(title, description, path),
};

export default function Markets() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="text-center mt-[400px] flex space-x-3">
        <span>Fetching market data. Please wait...</span>
        <Loading />
      </div>
    </div>
  );
}
