"use client";

import { useState } from "react";
import { Transition } from "@headlessui/react";
import { usePathname } from "next/navigation";
import { whileListedRoutes } from "@/core/constants/constants";

type DropdownProps = {
  title: string;
  isTop: boolean;
  active: boolean;
  children: React.ReactNode;
};

export default function Dropdown({ children, title, active, isTop }: DropdownProps) {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const textDisplay = !isTop
    ? `text-gray-600 hover:text`
    : `${whileListedRoutes.includes(pathname) ? "text-gray-200 hover:text-white" : "text-black hover:text-slate-900"}`;

  return (
    <li
      className="relative"
      onMouseEnter={() => setDropdownOpen(true)}
      onMouseLeave={() => setDropdownOpen(false)}
      onFocus={() => setDropdownOpen(true)}
      onBlur={() => setDropdownOpen(false)}
    >
      <a
        className={`${active ? "text-blue-500" : textDisplay} px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out`}
        href="#0"
        aria-expanded={dropdownOpen}
        onClick={(e) => e.preventDefault()}
      >
        {title}
        <svg
          className={`ml-2 w-3 h-3 fill-current ${active ? "text-blue-500" : textDisplay} ${
            !whileListedRoutes.includes(pathname) && "text-black"
          } cursor-pointer ml-1 shrink-0`}
          viewBox="0 0 12 12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10.28 4.305L5.989 8.598 1.695 4.305A1 1 0 00.28 5.72l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z" />
        </svg>
      </a>
      <Transition
        show={dropdownOpen}
        as="ul"
        className="origin-top-right absolute top-full left-0 w-[250px] bg-white dark:bg-gray-800 shadow-lg py-2 ml-4 rounded space-y-3"
        enter="transition ease-out duration-200 transform"
        enterFrom="opacity-0 -translate-y-2"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        {children}
      </Transition>
    </li>
  );
}
