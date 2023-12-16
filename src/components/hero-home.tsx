"use client";

import AppButtons from "./app-buttons";
import VideoThumb from "@/assets/images/app.png";
import ModalVideoIphone from "@/components/modal-video-iphone";

export default function HeroHome() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 ">
        <div className="pt-0 pb-10 md:pt-10 md:pb-16">
          {/* Hero content */}
          <div className="md:grid md:grid-cols-12 md:gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div className="md:col-span-7 lg:col-span-7 mb-8 md:mb-0 text-center md:text-left">
              <div className="md:w-[600px] ">
                {/* Copy */}
                <h1 className="h1 font-inter-tight text-white mb-6 pt-20 sm:pt-0" data-aos="fade-up" data-aos-delay="100">
                  Where traders build financial
                  <span className="relative inline-flex items-center justify-center">
                    <svg className="absolute -z-110" width="246" height="76" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M55.224 10.087c-13.986 3.38-25.552 7.614-33.97 12.438-4.171 2.412-7.508 4.953-9.953 7.58-2.395 2.628-3.807 5.332-4.21 8.058-.266 1.99.075 3.985 1.02 5.955.922 1.973 2.37 3.919 4.327 5.819 7.028 6.749 20.696 12.657 39.108 16.904 18.475 4.28 40.791 6.693 63.89 6.91 20.527.186 40.83-1.353 58.737-4.452 11.396-1.964 21.73-4.463 30.631-7.407 8.905-2.941 16.508-6.232 22.611-9.788 3.663-2.222 4.978-1.73 3.59.491-1.13 1.509-2.83 2.971-5.067 4.357-3.235 1.976-7.254 3.82-11.962 5.49-4.686 1.628-9.745 3.15-15.139 4.553a273.749 273.749 0 0 1-17.309 3.752 339.58 339.58 0 0 1-19.111 2.822c-3.367.35-6.676.738-10.087 1.025-3.412.286-6.868.546-10.339.75-13.955.815-28.266.87-42.283.165-13.996-.735-27.452-2.236-39.729-4.435-14.867-2.672-27.78-6.263-37.927-10.548-10.21-4.343-17.115-9.34-20.204-14.618C.15 43.028-.38 40.095.268 37.176c.295-1.462.868-2.917 1.713-4.357.883-1.432 2.027-2.847 3.427-4.239 2.819-2.783 6.622-5.463 11.342-7.99 4.626-2.528 10.101-4.9 16.335-7.074C48.423 8.116 68.15 4.072 90.24 1.802A371.99 371.99 0 0 1 115.924.135c54.806-1.437 105.87 8.691 124.34 24.662 1.911 1.728 3.392 3.498 4.431 5.295 1.352 2.388 1.655 4.82.901 7.234-.223 1.092-1.189 2.158-2.836 3.127-.493.309-1.076.603-1.742.88-.916.272-1.27-.27-1.344-1.462-.074-1.193 0-3.05-.429-5.409-.722-3.525-3.213-6.994-7.384-10.284-4.32-3.334-10.299-6.44-17.723-9.206-7.488-2.813-16.364-5.247-26.304-7.211-9.952-1.996-20.87-3.493-32.344-4.434-17.147-1.405-35.144-1.505-52.444-.292-8.673.62-17.094 1.537-25.108 2.732-7.997 1.207-15.556 2.672-22.552 4.37l-.162-.05Z"
                        fill="#2DD4BF"
                        fillRule="nonzero"
                      />
                    </svg>
                    <span className="ml-3">success.</span>
                  </span>
                </h1>
                <p className="text-lg text-white mb-8 " data-aos="fade-up" data-aos-delay="200">
                  Our trading platform adapts to all devices, providing
                  <br className="hidden md:block" />a one-time setup for timeless trading excellence.
                </p>

                {/* Buttons */}
                <AppButtons />
              </div>
            </div>

            {/* Mobile mockup */}
            <div className="mt-32 md:col-span-5 lg:col-span-5 text-center md:text-right" data-aos="fade-up" data-aos-delay="450">
              <ModalVideoIphone
                thumb={VideoThumb}
                thumbWidth={290}
                thumbHeight={624}
                thumbAlt="Modal video thumbnail"
                video="/videos/video.mp4"
                videoWidth={1920}
                videoHeight={1080}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
