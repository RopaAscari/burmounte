"use client";

import "aos/dist/aos.css";
import "@/assets/css/style.css";

import AOS from "aos";
import { useEffect } from "react";
import Theme from "../theme-provider";
import { useTheme } from "next-themes";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { useSearchParams } from "next/navigation";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { setTheme } = useTheme();
  const params = useSearchParams();
  const theme = params.get("theme");
  const platform = params.get("platform");

  useEffect(() => {
    if (theme) {
      setTheme(theme);
    } else {
      setTheme("light");
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {platform !== "mobile" && <Header />}

      <main className="grow">{children}</main>

      {platform !== "mobile" && <Footer />}
    </div>
  );
}
