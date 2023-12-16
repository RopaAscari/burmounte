import Image from "next/image";
import QuoteAuthor from "@/assets/images/quote-author-01.jpg";
import FeatureImg02 from "@/assets/images/feature-image-02.png";
import Particles from "./particles";

export default function AIFeature() {
  return (
    <section data-aos-id-2="">
      <div className="relative mx-auto">
        {/* Bg */}
        <div className="absolute inset-0 mb-24 md:mb-0 bg-black pointer-events-none -z-10" aria-hidden="true" />
        <div className="absolute inset-0 max-w-6xl mx-auto px-4 sm:px-6">
          <Particles className="absolute inset-0 -z-10 " quantity={35} />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-12 md:py-20">
            {/* Section content */}
            <div className="relative max-w-xl mx-auto md:max-w-none text-center md:text-left">
              {/* Content */}
              <div className="md:max-w-lg">
                {/* Copy */}
                <h2 className="h2 text-white mb-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-2]" data-aos-delay="100">
                  Trade Smart with Our AI Prediction Bot!
                </h2>
                <p className="text-lg text-slate-400 mb-8" data-aos="fade-up" data-aos-anchor="[data-aos-id-2]" data-aos-delay="200">
                  Experience trading like never before with our state-of-the-art platform, designed for speed and intelligence. Make swift, informed decisions
                  and navigate the markets with confidence, all at your fingertips.
                </p>

                {/* Button */}
                <div className="max-w-xs mx-auto sm:max-w-none mb-8" data-aos="fade-up" data-aos-anchor="[data-aos-id-2]" data-aos-delay="300">
                  <div>
                    <a className="btn-sm rounded-full inline-flex items-center text-blue-50 bg-blue-500 hover:bg-blue-600 group shadow-sm" href="/alpha-trader">
                      Get started
                      <span className="tracking-normal text-sky-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-2">
                        <svg className="fill-current" width={12} height={10} xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 6.002h7.586L6.293 8.295a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.416l-4-4a1 1 0 0 0-1.414 1.416l2.293 2.293H1a1 1 0 1 0 0 2Z" />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="h-[100px] lg:hidden"></div>
              {/* Image */}
              <div className="hidden lg:flex lg:absolute lg:left-[500px]  md:top-0 -mb-12 mt-8 md:mt-20 md:mb-0">
                <div className="relative -mx-16 md:mx-0">
                  <Image className="lg:ml-32 object-contain" src={FeatureImg02} width={1200} height={1200} alt="Feature 02" />
                  <div data-aos="fade-up" data-aos-anchor="[data-aos-id-2]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
