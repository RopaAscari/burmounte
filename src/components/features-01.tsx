"use client";

import Image from "next/image";
import { Loading } from "./loading";
import { Transition } from "@headlessui/react";
import Warning from "@/assets/images/warning.png";
import ActiveSymbolTable from "./active-symbol-table";
import { useState, useRef, useEffect, Fragment } from "react";
import { useGetActiveSymbolQuery } from "@/redux/slices/api/active-symbols-slice";
import { derivAPI } from "@/core/services/deriv-api-connection";

export default function Features01() {
  const [tab, setTab] = useState<number>(1);
  const tabs = useRef<HTMLDivElement>(null);

  const { isFetching, isError, data } = useGetActiveSymbolQuery(null);

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, []);

  // useEffect(() => {
  //   getHistory();
  // }, []);

  // const getHistory = async () => {
  //   setTimeout(async () => {
  //     const ticks = await derivAPI.getAPI().basic;

  //     console.log(ticks);
  //   }, 1000);
  // };
  return (
    <section className="relative bg-zinc-50">
      <div className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h2 className="font-inter-tight text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Explore our diverse assets</h2>
            <p className="text-lg text-zinc-500">Discover a world of possibilities as you explore the rich variety of assets we offer on our platform.</p>
          </div>
          <div>
            {isFetching && <Loading />}

            {isError && (
              <div className="flex flex-col justify-center items-center w-full">
                <p>An internal server error occured. We are unable to display the symbol listing.</p>
                <Image src={Warning} height={40} width={40} alt="error" />
              </div>
            )}

            {data?.data && data?.success && data?.data?.length > 0 && (
              <Fragment>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  {data?.data?.map((symbols, index) => (
                    <button
                      key={index}
                      className={`text-left px-4 py-5 border border-transparent rounded ${
                        tab !== index
                          ? "bg-zinc-100 opacity-60 hover:opacity-100 transition"
                          : "[background:linear-gradient(theme(colors.white),theme(colors.white))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box] shadow-sm rotate-1"
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        setTab(index);
                      }}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex space-x-3 items-center">
                          {getAssetByMarket(symbols.displayName)}
                          <div className="font-inter-tight font-semibold text-zinc-900">{symbols.displayName}</div>
                        </div>

                        <svg className={`fill-zinc-400 shrink-0 ml-2 ${tab !== 1 ? "hidden" : ""}`} xmlns="http://www.w3.org/2000/svg" width="10" height="10">
                          <path d="M8.667.186H2.675a.999.999 0 0 0 0 1.998h3.581L.971 7.469a.999.999 0 1 0 1.412 1.412l5.285-5.285v3.58a.999.999 0 1 0 1.998 0V1.186a.999.999 0 0 0-.999-.999Z" />
                        </svg>
                      </div>
                      <div className="text-sm text-zinc-500">{symbols.description}</div>
                    </button>
                  ))}
                </div>
                {/* Tabs items */}
                <div className="relative -mx-6">
                  <div className="relative flex flex-col pt-6  mx-6" ref={tabs}>
                    {data?.data?.map((symbols, index) => (
                      <Transition
                        key={index}
                        show={tab === index}
                        className="w-full text-center"
                        enter="transition ease-in-out duration-700 transform order-first"
                        enterFrom="opacity-0 -translate-y-4"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in-out duration-300 transform absolute"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-4"
                        beforeEnter={() => heightFix()}
                        unmount={false}
                      >
                        <div className="inline-flex relative align-top w-full">
                          <ActiveSymbolTable activeSymbols={symbols.symbols} />
                        </div>
                      </Transition>
                    ))}
                  </div>
                </div>
              </Fragment>
            )}
            <div className="flex flex-col justify-center text-center pt-10">
              <p className="text-slate-600">
                Ready to dive into the world of financial assets? Simply click the button below to explore all 77 instruments and take the next step in your
                trading journey.
              </p>
              <div className="max-w-xs mx-auto sm:max-w-none mb-8" data-aos="fade-up" data-aos-anchor="[data-aos-id-2]" data-aos-delay="300">
                {/* <div>
                  <a className="mt-4 btn-sm rounded-full inline-flex items-center text-blue-50 bg-blue-500 hover:bg-blue-600 group shadow-sm" href="/markets">
                    View All
                    <span className="tracking-normal text-sky-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-2">
                      <svg className="fill-current" width={12} height={10} xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 6.002h7.586L6.293 8.295a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.416l-4-4a1 1 0 0 0-1.414 1.416l2.293 2.293H1a1 1 0 1 0 0 2Z" />
                      </svg>
                    </span>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export const getAssetByMarket = (market: string) => {
  switch (market) {
    case "Commodities":
      return (
        <svg className="h-4 w-4" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <g>
            <g>
              <path
                d="M509.917,299.095l-44.912-53.895c-0.417-0.5-0.962-0.803-1.455-1.189c-0.34-0.268-0.576-0.624-0.962-0.847L166.168,72.5
         c-2.355-1.36-5.189-1.579-7.706-0.601L41.691,116.811c-0.882,0.339-1.59,0.899-2.292,1.458c-0.204,0.162-0.467,0.238-0.658,0.419
         c-0.908,0.862-1.598,1.899-2.077,3.036c-0.021,0.052-0.071,0.083-0.092,0.135l-35.93,89.824
         c-1.592,3.987-0.145,8.539,3.452,10.873l332.35,215.578c0.223,0.145,0.478,0.203,0.711,0.326c0.247,0.132,0.482,0.234,0.739,0.341
         c1.105,0.463,2.257,0.781,3.441,0.781h0.002h0.002c1.117,0,2.217-0.271,3.281-0.692c0.11-0.043,0.23-0.023,0.338-0.071
         c0.66-0.291,1.266-0.666,1.827-1.092c0.02-0.016,0.044,1.496,0.064,1.48l0.022,1.498c0.003,0,0.007,0,0.01,0l161.652-127.248
         c1.925-1.496,3.158-5.225,3.417-7.646C512.21,303.389,511.478,300.964,509.917,299.095z M160.914,90.206l280.713,161.623
         l-82.694,60.141L64.887,127.141L160.914,90.206z M334.724,415.608L20.068,211.503l29.184-72.969l300.205,188.696L334.724,415.608z
          M353.975,409.388l13.579-81.474l89.034-64.752l33.583,40.298L353.975,409.388z"
              />
            </g>
          </g>
        </svg>
      );
    case "Cryptocurrencies":
      return (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 8H14C15.1046 8 16 8.89543 16 10C16 11.1046 15.1046 12 14 12M10 8V12M10 8H8.5M10 8V6.5M14 12H10M14 12C15.1046 12 16 12.8954 16 14C16 15.1046 15.1046 16 14 16H10M10 12V16M10 16H8.5M10 16V17.5M13 8V6.5M13 17.5V16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    case "Stock Indices":
      return (
        <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 512 512">
          <g>
            <polygon
              className="st0"
              points="195.047,75.844 178.797,75.844 178.797,109.047 138.156,109.047 138.156,320.344 178.797,320.344 
		178.797,360.297 195.047,360.297 195.047,320.344 235.688,320.344 235.688,109.047 195.047,109.047 	"
            />
            <polygon
              className="st0"
              points="512,49.438 471.375,49.438 471.375,16.25 455.109,16.25 455.109,49.438 414.469,49.438 
		414.469,293.25 455.109,293.25 455.109,333.203 471.375,333.203 471.375,293.25 512,293.25 	"
            />
            <path
              className="st0"
              d="M56.875,203.172h-16.25v36.578H0v219.422h40.625v36.578h16.25v-36.578h40.656V239.75H56.875V203.172z
		 M81.281,256v186.922H16.25V256H81.281z"
            />
            <path
              className="st0"
              d="M333.203,151.703h-16.25v33.188h-40.641v227.563h40.641v39.953h16.25v-39.953h40.641V184.891h-40.641V151.703z
		 M357.594,201.156v195.047h-65.031V201.156H357.594z"
            />
          </g>
        </svg>
      );

    case "Forex":
      return (
        <svg className="h-4 w-4" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
          <path d="M 28.7500 45.3320 C 29.5469 45.3320 29.9922 45.0742 30.5781 44.2305 L 39.9532 31.4336 L 40.0937 31.4336 L 49.3986 44.2539 C 49.9376 45.0508 50.4767 45.3320 51.3205 45.3320 C 52.5392 45.3320 53.4296 44.4648 53.4296 43.2695 C 53.4296 42.7539 53.2424 42.2148 52.9376 41.7695 L 42.7656 28.0586 L 53.1954 14.0898 C 53.5468 13.6445 53.7109 13.1524 53.7109 12.6602 C 53.7109 11.5586 52.7970 10.6680 51.6954 10.6680 C 50.8280 10.6680 50.3360 10.9492 49.7500 11.7930 L 40.3984 24.7539 L 40.2578 24.7539 L 30.9532 11.7930 C 30.3672 10.9258 29.8984 10.6680 28.9844 10.6680 C 27.7422 10.6680 26.8516 11.5117 26.8516 12.6836 C 26.8516 13.1992 27.0156 13.7149 27.3672 14.1836 L 37.4219 27.9180 L 27.1797 41.8867 C 26.8281 42.3555 26.6641 42.8477 26.6641 43.3398 C 26.6641 44.4648 27.5781 45.3320 28.7500 45.3320 Z M 4.4453 45.2383 C 5.7578 45.2383 6.6250 44.3945 6.6250 43.0586 L 6.6250 30.2383 L 20.3828 30.2383 C 21.5313 30.2383 22.3516 29.5117 22.3516 28.3633 C 22.3516 27.1914 21.5313 26.4649 20.3828 26.4649 L 6.6250 26.4649 L 6.6250 15.0273 L 21.7422 15.0273 C 22.8906 15.0273 23.7344 14.3008 23.7344 13.1055 C 23.7344 11.9102 22.8906 11.1602 21.7422 11.1602 L 4.4219 11.1602 C 3.1094 11.1602 2.2891 12.0039 2.2891 13.3164 L 2.2891 43.0586 C 2.2891 44.3945 3.1094 45.2383 4.4453 45.2383 Z" />
        </svg>
      );
    case "Derived":
      return (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.8321 1.24802C11.5779 0.917327 12.4221 0.917327 13.1679 1.24802L21.7995 5.0754C23.7751 5.95141 23.1703 9 21.0209 9H2.97906C0.829669 9 0.224891 5.9514 2.20047 5.0754L10.8321 1.24802ZM12.3893 3.12765C12.1407 3.01742 11.8593 3.01742 11.6107 3.12765L3.41076 6.76352C3.31198 6.80732 3.34324 6.95494 3.45129 6.95494H20.5487C20.6568 6.95494 20.688 6.80732 20.5892 6.76352L12.3893 3.12765Z"
            fill="#0F0F0F"
          />
          <path d="M2 22C2 21.4477 2.44772 21 3 21H21C21.5523 21 22 21.4477 22 22C22 22.5523 21.5523 23 21 23H3C2.44772 23 2 22.5523 2 22Z" fill="#0F0F0F" />
          <path
            d="M11 19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V11C13 10.4477 12.5523 10 12 10C11.4477 10 11 10.4477 11 11V19Z"
            fill="#0F0F0F"
          />
          <path d="M6 20C5.44772 20 5 19.5523 5 19L5 11C5 10.4477 5.44771 10 6 10C6.55228 10 7 10.4477 7 11L7 19C7 19.5523 6.55229 20 6 20Z" fill="#0F0F0F" />
          <path
            d="M17 19C17 19.5523 17.4477 20 18 20C18.5523 20 19 19.5523 19 19V11C19 10.4477 18.5523 10 18 10C17.4477 10 17 10.4477 17 11V19Z"
            fill="#0F0F0F"
          />
        </svg>
      );
  }
};
