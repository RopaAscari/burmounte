"use client";

import { useState } from "react";

export default function SupportSidebar() {
  const [sidebarNavOpen, setSidebarNavOpen] = useState<boolean>(false);
  const [sidebarLinkOpen, setSidebarLinkOpen] = useState<boolean>(true);

  return (
    <aside className="relative my-12 md:my-0 md:w-64 md:mr-12 lg:mr-20 md:shrink-0">
      <div className="sticky top-28">
        {/* Search form */}
        <form className="mb-4 pb-4 border-b border-gray-200">
          <div className="flex flex-wrap">
            <div className="w-full">
              <label className="block text-sm sr-only" htmlFor="search">
                Search
              </label>
              <div className="relative flex items-center">
                <input id="search" type="search" className="form-input w-full text-gray-800 px-3 py-2 pl-10" placeholder="Search" />
                <button type="submit" className="absolute inset-0 right-auto" aria-label="Search">
                  <svg className="w-4 h-4 fill-current text-gray-400 mx-3 shrink-0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zM15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </form>

        <button
          className="flex items-center justify-between text-lg font-medium text-gray-900 w-full my-4 md:hidden"
          onClick={(e) => {
            e.preventDefault();
            setSidebarNavOpen(!sidebarNavOpen);
          }}
        >
          <span>Navigation</span>
          <svg className="w-3 h-3 fill-current text-blue-600 shrink-0 ml-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center transition duration-200 ease-out ${sidebarNavOpen && "!rotate-180"}`}
            />
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center rotate-90 transition duration-200 ease-out ${sidebarNavOpen && "!rotate-180"}`}
            />
          </svg>
        </button>

        {/* Docs nav */}
        <nav className={`md:block ${!sidebarNavOpen && "hidden"}`}>
          <ul className="font-medium -my-2">
            {/* 1st level */}
            <li className="py-2">
              <a
                className="flex items-center hover:underline"
                href="#0"
                onClick={(e) => {
                  e.preventDefault();
                  setSidebarLinkOpen(!sidebarLinkOpen);
                }}
                aria-expanded={sidebarLinkOpen}
              >
                <div className="flex items-center grow">
                  <svg className="w-4 h-4 fill-current text-blue-600 mr-3 shrink-0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 3.294L1.4 1.035C1.1.847.7.941.4 1.13c-.2.189-.4.471-.4.753v10.353c0 .377.2.753.6.847L7 15.718V3.294zM15.6 1.13c-.3-.189-.6-.189-.9-.095L9 3.295v12.423l6.4-2.542c.4-.188.6-.47.6-.847V1.882c0-.282-.2-.564-.4-.753z" />
                  </svg>
                  <span>Get Started</span>
                </div>
                <svg className="w-3 h-3 fill-current text-gray-400 cursor-pointer ml-1 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 4.305L5.989 8.598 1.695 4.305A1 1 0 00.28 5.72l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z" />
                </svg>
              </a>
              {/* 2nd level */}
              <ul className={`font-normal -mb-1 mt-1 ml-2 pl-5 border-l border-gray-300 ${!sidebarLinkOpen && "hidden"}`}>
                <li className="py-1">
                  <a className="text-gray-600 hover:underline" href="#quick">
                    Quick start
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
