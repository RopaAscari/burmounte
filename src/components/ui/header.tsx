import Link from "next/link";
import AppLogo from "../logo";
import Search from "../search";
import MobileMenu from "./mobile-menu";
import { navRoutes } from "./nav-routes";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Dropdown from "@/components/utils/dropdown";
import { whileListedRoutes } from "@/core/constants/constants";

export default function Header() {
  const pathname = usePathname();

  const [top, setTop] = useState<boolean>(true);

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  const hasDarkHeader = whileListedRoutes.includes(pathname);
  const textDisplay = !top ? `text-gray-600 hover:text` : `${hasDarkHeader ? "text-gray-200 hover:text-white" : "text-black hover:text-slate-900"}`;

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-95 transition duration-300 ease-in-out ${!top ? "bg-white backdrop-blur-sm border-b border-gray-150" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <AppLogo isPrimary />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="ml-10 flex grow flex-wrap items-center">
              {navRoutes.map((route, index) =>
                route.children.length > 0 ? (
                  <Dropdown isTop={top} key={index} title={route.title} active={route.children.some((x) => `${route.href}${x.href}` == pathname)}>
                    {route.children.map((child, index) => (
                      <li key={index}>
                        <Link
                          href={`${route.href}${child.href}`}
                          className={`
                     
                            
                          px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out`}
                        >
                          {child.title}
                        </Link>
                      </li>
                    ))}
                  </Dropdown>
                ) : (
                  <li key={index}>
                    <Link href={route.href} className={`${textDisplay} px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out`}>
                      {route.title}
                    </Link>
                  </li>
                )
              )}
            </ul>

            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Search />
              </li>

              <li>
                <Link
                  className="rounded-full ml-3 text-base -hero px-5 py-1 inline-flex items-center text-slate-100 bg-black hover:bg-slate-900 group shadow-sm"
                  href="/onboarding"
                >
                  Get Started
                  <span className="tracking-normal text-sky-400 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-2">
                    <svg className="fill-current" width="12" height="10" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 6.002h7.586L6.293 8.295a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.416l-4-4a1 1 0 0 0-1.414 1.416l2.293 2.293H1a1 1 0 1 0 0 2Z" />
                    </svg>
                  </span>
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
    // <header className="absolute w-full top-0 z-30">
    //   <div className="max-w-6xl mx-auto px-4 sm:px-6">
    //     <div className="flex items-center justify-between h-16">
    //       {/* Site branding */}
    //       <div className="shrink-0 mr-5">
    //         <Link href="/" className="block" aria-label="Cruip">
    //           <AppLogo isPrimary />
    //         </Link>
    //       </div>

    //       {/* Desktop navigation */}
    //       <nav className="hidden md:flex md:grow">
    //         {/* Desktop menu links */}
    //         <ul className="flex grow flex-wrap items-center font-medium">
    //           {navRoutes.map((route, index) =>
    //             route.children.length > 0 ? (
    //               <Dropdown key={index} title={route.title} active={route.children.some((x) => `${route.href}${x.href}` == pathname)}>
    //                 {route.children.map((child, index) => (
    //                   <li key={index}>
    //                     <Link
    //                       href={`${route.href}${child.href}`}
    //                       className={`${
    //                         pathname.includes(child.href) ? "text-blue-500" : "text-black"
    //                       } text-sm  dark:hover:text-teal-500 text-sm flex py-2 px-4 leading-tight hover:bg-slate-100`}
    //                     >
    //                       {child.title}
    //                     </Link>
    //                   </li>
    //                 ))}
    //               </Dropdown>
    //             ) : (
    //               <li key={index}>
    //                 <Link
    //                   href={route.href}
    //                   className={`${
    //                     route.href == pathname ? "text-blue-500" : textDisplay
    //                   }   px-5 py-2 flex items-center text-sm transition duration-150 ease-in-out`}
    //                 >
    //                   {route.title}
    //                 </Link>
    //               </li>
    //             )
    //           )}
    //         </ul>

    //         {/* Desktop CTA on the right */}
    //         <ul className="flex justify-end flex-wrap items-center">
    //           <Search />
    //           <li>
    //             <Link
    //               className="rounded-full ml-3 text-sm -hero px-5 py-1 inline-flex items-center text-slate-100 bg-black hover:bg-slate-900 group shadow-sm"
    //               href="/onboarding"
    //             >
    //               Get Started
    //               <span className="tracking-normal text-sky-400 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-2">
    //                 <svg className="fill-current" width="12" height="10" xmlns="http://www.w3.org/2000/svg">
    //                   <path d="M1 6.002h7.586L6.293 8.295a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.416l-4-4a1 1 0 0 0-1.414 1.416l2.293 2.293H1a1 1 0 1 0 0 2Z" />
    //                 </svg>
    //               </span>
    //             </Link>
    //           </li>
    //         </ul>
    //       </nav>

    //       <MobileMenu />
    //     </div>
    //   </div>
    // </header>
  );
}
