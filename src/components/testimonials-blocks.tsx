import Image from "next/image";
import TestimonialImage01 from "@/assets/images/testimonial-01.jpg";
import TestimonialImage02 from "@/assets/images/testimonial-02.jpg";
import TestimonialImage03 from "@/assets/images/testimonial-03.jpg";
import TestimonialImage04 from "@/assets/images/testimonial-04.jpg";

export default function TestimonialsBlocks() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-transparent dark:border-gray-800">
          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:gap-12 items-start sm:max-w-none md:max-w-2xl lg:max-w-none">
            {/* 1st testimonial */}
            <div className="text-center">
              <div className="relative inline-flex flex-col mb-4">
                <Image className="rounded-full" src={TestimonialImage01} width={56} height={56} alt="Testimonial 01" />
                <svg className="absolute top-0 right-0 mt-1 -mr-8" width="27" height="12" xmlns="http://www.w3.org/2000/svg">
                  <path
                    className="fill-current text-purple-500"
                    d="M2.785 5.334C2.538 5.5-.2 2.944.011 2.646.826 1.483 2.183.836 3.62.5 5.064.158 6.582.117 7.92-.02c.017-.002.098.153.088.166-1.763 2.018-3.223 3.836-5.221 5.188zm3.676 6.519c-.862.184-1.937-3.403-1.07-3.711 3.422-1.22 7.078-1.671 10.728-1.766 3.655-.096 7.304.162 10.866.32.044.002.06.177.018.187-6.938 1.634-13.691 3.504-20.542 4.97z"
                  />
                </svg>
              </div>
              <blockquote className="text-xl text-gray-600 dark:text-gray-400">
                “ I can't express how impressed I am with this app. The real-time market data, reliable execution, and top-notch customer support have made
                trading more profitable and enjoyable for me. Highly recommended! “
              </blockquote>
              <div className="font-red-hat-display font-bold mt-2">
                <cite className="not-italic">—Andy Croll</cite>,{" "}
                <a className="text-teal-500 transition duration-150 ease-in-out" href="#0">
                  Appy.com
                </a>
              </div>
            </div>

            {/* 2nd testimonial */}
            <div className="text-center">
              <div className="relative inline-flex flex-col mb-4">
                <Image className="rounded-full" src={TestimonialImage02} width={56} height={56} alt="Testimonial 02" />
                <svg className="absolute top-0 right-0 mt-1 -mr-8" width="27" height="12" xmlns="http://www.w3.org/2000/svg">
                  <path
                    className="fill-current text-purple-500"
                    d="M2.785 5.334C2.538 5.5-.2 2.944.011 2.646.826 1.483 2.183.836 3.62.5 5.064.158 6.582.117 7.92-.02c.017-.002.098.153.088.166-1.763 2.018-3.223 3.836-5.221 5.188zm3.676 6.519c-.862.184-1.937-3.403-1.07-3.711 3.422-1.22 7.078-1.671 10.728-1.766 3.655-.096 7.304.162 10.866.32.044.002.06.177.018.187-6.938 1.634-13.691 3.504-20.542 4.97z"
                  />
                </svg>
              </div>
              <blockquote className="text-xl text-gray-600 dark:text-gray-400">
                “ As a seasoned trader, I've tried many platforms, and this app stands out. It offers a comprehensive set of features, quick order execution,
                and a strong community. It's a game-changer for traders of all levels.“
              </blockquote>
              <div className="font-red-hat-display font-bold mt-2">
                <cite className="not-italic">—Patricia Lepisov</cite>,{" "}
                <a className="text-teal-500 transition duration-150 ease-in-out" href="#0">
                  Nobi Bank
                </a>
              </div>
            </div>

            {/* 3rd testimonial */}
            <div className="text-center">
              <div className="relative inline-flex flex-col mb-4">
                <Image className="rounded-full" src={TestimonialImage03} width={56} height={56} alt="Testimonial 03" />
                <svg className="absolute top-0 right-0 mt-1 -mr-8" width="27" height="12" xmlns="http://www.w3.org/2000/svg">
                  <path
                    className="fill-current text-purple-500"
                    d="M2.785 5.334C2.538 5.5-.2 2.944.011 2.646.826 1.483 2.183.836 3.62.5 5.064.158 6.582.117 7.92-.02c.017-.002.098.153.088.166-1.763 2.018-3.223 3.836-5.221 5.188zm3.676 6.519c-.862.184-1.937-3.403-1.07-3.711 3.422-1.22 7.078-1.671 10.728-1.766 3.655-.096 7.304.162 10.866.32.044.002.06.177.018.187-6.938 1.634-13.691 3.504-20.542 4.97z"
                  />
                </svg>
              </div>
              <blockquote className="text-xl text-gray-600 dark:text-gray-400">
                “ This app is perfect for beginners like me. The educational resources, demo account, and responsive support team have helped me gain confidence
                in my trading skills. I'm already seeing positive results! “
              </blockquote>
              <div className="font-red-hat-display font-bold mt-2">
                <cite className="not-italic">—Zhenya Ritz</cite>,{" "}
                <a className="text-teal-500 transition duration-150 ease-in-out" href="#0">
                  Sync
                </a>
              </div>
            </div>

            {/* 4th testimonial */}
            <div className="text-center">
              <div className="relative inline-flex flex-col mb-4">
                <Image className="rounded-full" src={TestimonialImage04} width={56} height={56} alt="Testimonial 04" />
                <svg className="absolute top-0 right-0 mt-1 -mr-8" width="27" height="12" xmlns="http://www.w3.org/2000/svg">
                  <path
                    className="fill-current text-purple-500"
                    d="M2.785 5.334C2.538 5.5-.2 2.944.011 2.646.826 1.483 2.183.836 3.62.5 5.064.158 6.582.117 7.92-.02c.017-.002.098.153.088.166-1.763 2.018-3.223 3.836-5.221 5.188zm3.676 6.519c-.862.184-1.937-3.403-1.07-3.711 3.422-1.22 7.078-1.671 10.728-1.766 3.655-.096 7.304.162 10.866.32.044.002.06.177.018.187-6.938 1.634-13.691 3.504-20.542 4.97z"
                  />
                </svg>
              </div>
              <blockquote className="text-xl text-gray-600 dark:text-gray-400">
                “ I've been using this app for a year now, and it has completely transformed my trading experience. The user-friendly interface, powerful tools,
                and access to a wide range of markets make it my go-to trading platform. “
              </blockquote>
              <div className="font-red-hat-display font-bold mt-2">
                <cite className="not-italic">—Lisa Champ</cite>,{" "}
                <a className="text-teal-500 transition duration-150 ease-in-out" href="#0">
                  Appicu
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
