"use client";

import { useEffect } from "react";
import Image from "next/image";
import Client01 from "@/assets/images/client-01.svg";
import Client02 from "@/assets/images/client-02.svg";
import Client03 from "@/assets/images/client-03.svg";
import Client04 from "@/assets/images/client-04.svg";
import Client05 from "@/assets/images/client-05.svg";
import Client06 from "@/assets/images/client-06.svg";
import Client07 from "@/assets/images/client-07.svg";
import Client08 from "@/assets/images/client-08.svg";
import Client09 from "@/assets/images/client-09.svg";
import Client10 from "@/assets/images/client-10.svg";

// Import Swiper
import Swiper, { Autoplay } from "swiper";
import "swiper/swiper.min.css";
Swiper.use([Autoplay]);

export default function Clients() {
  useEffect(() => {
    const carousel = new Swiper(".clients-carousel", {
      slidesPerView: "auto",
      spaceBetween: 16,
      centeredSlides: true,
      loop: true,
      speed: 5000,
      noSwiping: true,
      noSwipingClass: "swiper-slide",
      autoplay: {
        delay: 0,
        disableOnInteraction: true,
      },
    });
  }, []);

  return (
    <section className="bg-black">
      <div className="py-12 md:py-20">
        {/* Section header */}

        {/* Carousel built with Swiper.js [https://swiperjs.com/] */}
        {/* * Custom styles in src/css/additional-styles/theme.scss */}
        <div className="clients-carousel swiper-container relative before:absolute before:inset-0 before:w-32 before:z-10 before:pointer-events-none after:inset-0 after:left-auto after:w-32 after:z-10 ">
          <div className="swiper-wrapper !ease-linear select-none">
            {/* Carousel items */}
            <div className="swiper-slide !h-32 !w-32 bg-black rounded-2xl flex items-center justify-center group">
              <Image className="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out" src={Client01} alt="Client 01" />
            </div>
            <div className="swiper-slide !h-32 !w-32 bg-gray-800 rounded-2xl flex items-center justify-center group">
              <Image className="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out" src={Client02} alt="Client 02" />
            </div>
            <div className="swiper-slide !h-32 !w-32 bg-gray-800 rounded-2xl flex items-center justify-center group">
              <Image className="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out" src={Client03} alt="Client 03" />
            </div>
            <div className="swiper-slide !h-32 !w-32 bg-gray-800 rounded-2xl flex items-center justify-center group">
              <Image className="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out" src={Client04} alt="Client 04" />
            </div>
            <div className="swiper-slide !h-32 !w-32 bg-gray-800 rounded-2xl flex items-center justify-center group">
              <Image className="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out" src={Client05} alt="Client 05" />
            </div>
            <div className="swiper-slide !h-32 !w-32 bg-gray-800 rounded-2xl flex items-center justify-center group">
              <Image className="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out" src={Client06} alt="Client 06" />
            </div>
            <div className="swiper-slide !h-32 !w-32 bg-gray-800 rounded-2xl flex items-center justify-center group">
              <Image className="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out" src={Client07} alt="Client 07" />
            </div>
            <div className="swiper-slide !h-32 !w-32 bg-gray-800 rounded-2xl flex items-center justify-center group">
              <Image className="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out" src={Client08} alt="Client 08" />
            </div>
            <div className="swiper-slide !h-32 !w-32 bg-gray-800 rounded-2xl flex items-center justify-center group">
              <Image className="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out" src={Client09} alt="Client 09" />
            </div>
            <div className="swiper-slide !h-32 !w-32 bg-gray-800 rounded-2xl flex items-center justify-center group">
              <Image className="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out" src={Client10} alt="Client 10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
