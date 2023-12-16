"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Menu, Transition } from "@headlessui/react";
import French from "@/assets/images/french.png";
import English from "@/assets/images/english.png";
import Spanish from "@/assets/images/spanish.png";
import { usePathname } from "next/navigation";

type Language = {
  code: string;
  label: string;
  name: string;
  display: StaticImageData;
};

export default function LanguageSelector({ align }: { align?: "left" | "right" }) {
  const pathname = usePathname();
  const whileListedRoutes = ["/", "/investors"];

  const textDisplay = `${whileListedRoutes.includes(pathname) ? "text-gray-200 hover:text-white" : "text-black hover:text-slate-900"}`;

  const languages: Language[] = [
    { code: "en", label: "EN", name: "English", display: English },
    { code: "es", label: "ES", name: "Spanish", display: Spanish },
    { code: "fr", label: "FR", name: "French", display: French },
  ];

  // State to track the selected language
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(languages[0]);

  // Function to handle language selection
  const handleLanguageSelect = (language: Language) => {
    setSelectedLanguage(language);
    // You can add logic here to change the language of your application.
  };

  return (
    <Menu as="div" className="relative inline-flex">
      {({ open }) => (
        <>
          <Menu.Button className={`w-8 h-8 flex items-center justify-center rounded-full ${open && "bg-slate-200"}`}>
            <div className="ml-8 flex items-center justify-center">
              <img src={selectedLanguage.display.src} alt="" height={27} width={27} />
              <span className={`${textDisplay} ml-2 font-cabinet-grotesk font-medium`}>{selectedLanguage.label}</span>
              <svg className="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400" viewBox="0 0 12 12">
                <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
              </svg>
            </div>
          </Menu.Button>
          <Transition
            className={`origin-top-right z-10 absolute top-full -mr-48 sm:mr-0 min-w-[10rem] bg-white  py-1.5 rounded shadow-lg overflow-hidden mt-1 ${
              align === "right" ? "right-0" : "left-[-100px]"
            }`}
            enter="transition ease-out duration-200 transform"
            enterFrom="opacity-0 -translate-y-2"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-out duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="space-y-4 text-sm font-semibold text-slate-400 dark:text-slate-500  pt-1.5 pb-2 px-4">
              {/* Language options */}
              {languages.map((language) => (
                <div
                  key={language.code}
                  onClick={() => handleLanguageSelect(language)}
                  className={`flex cursor-pointer hover:text-slate-800 dark:hover:text-slate-200 ${
                    selectedLanguage.code === language.code ? "font-semibold" : ""
                  }`}
                >
                  <img src={language.display.src} alt="" height={27} width={27} />
                  <span className={`${textDisplay} ml-2 font-cabinet-grotesk font-medium`}>{language.name}</span>
                </div>
              ))}
            </div>
          </Transition>
        </>
      )}
    </Menu>
  );
}
