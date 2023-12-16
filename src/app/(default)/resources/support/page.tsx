import Content from "./content";
import { Metadata } from "next";
import Sidebar from "./nav-sidebar";
import { generateSeoMetadata } from "@/core/utils";
import { PageData } from "@/core/constants/page-data";

const { title, description, path } = PageData.Support;

export const metadata: Metadata = {
  title,
  description,
  ...generateSeoMetadata(title, description, path),
};

export default function Support() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="lg:pt-32 pt-10 pb-12 md:pt-40 md:pb-20">
          {/* Main content */}
          <div className="md:flex md:justify-between">
            {/* Sidebar */}
            <Sidebar />

            {/* Page container */}
            <Content />
          </div>
        </div>
      </div>
    </section>
  );
}
