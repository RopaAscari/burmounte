"use client";

import "aos/dist/aos.css";
import "@/assets/css/style.css";

import AOS from "aos";
import { useEffect } from "react";
import Theme from "./theme-provider";
import localFont from "next/font/local";
import { ReduxProvider } from "@/redux/provider";
import { derivAPI } from "@/core/services/deriv-api-connection";
import { Inter, Red_Hat_Display, Architects_Daughter } from "next/font/google";

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
//   display: "swap",
// });

const redhat = Red_Hat_Display({
  subsets: ["latin"],
  variable: "--font-red-hat-display",
  display: "swap",
});

const architects_daughter = Architects_Daughter({
  subsets: ["latin"],
  variable: "--font-architects-daughter",
  weight: "400",
  display: "swap",
});

const inter = localFont({
  src: [
    {
      path: "../assets/fonts/Inter-Font.ttf",
      weight: "350",
    },
  ],
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });

    derivAPI.connect();
  });

  return (
    <html lang="en" suppressHydrationWarning>
      {/* suppressHydrationWarning: https://github.com/vercel/next.js/issues/44343 */}
      <body className={`${inter.variable} ${redhat.variable} ${architects_daughter.variable} font-inter antialiased bg-white text-gray-900 tracking-tight`}>
        <ReduxProvider>
          <Theme>
            <main className="grow">{children}</main>
          </Theme>
        </ReduxProvider>
      </body>
    </html>
  );
}
