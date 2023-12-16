"use client";
import Testimonial from "./testimonial";
import TestimonialImg01 from "@/assets/images/testimonial-01.jpg";
import TestimonialImg02 from "@/assets/images/testimonial-02.jpg";
import TestimonialImg03 from "@/assets/images/testimonial-03.jpg";
import TestimonialImg04 from "@/assets/images/testimonial-04.jpg";
import TestimonialImg05 from "@/assets/images/testimonial-05.jpg";
import TestimonialImg06 from "@/assets/images/testimonial-06.jpg";
import TestimonialImg07 from "@/assets/images/testimonial-07.jpg";
import TestimonialImg08 from "@/assets/images/testimonial-08.jpg";

export default function Testimonials() {
  const testimonials01 = [
    {
      image: TestimonialImg01,
      name: "John Smith",
      user: "@johntrader",
      link: "#0",
      content:
        "I've been trading for years, and this platform is a game-changer. It offers powerful tools and an intuitive interface, making trading a breeze.",
    },
    {
      image: TestimonialImg02,
      name: "Alice Johnson",
      user: "@alicetrader",
      link: "#0",
      content: "I've tried multiple trading platforms, but none come close to the features and reliability of this platform. It's my go-to choice for trading.",
    },
    {
      image: TestimonialImg03,
      name: "David Miller",
      user: "@davidtrades",
      link: "#0",
      content: "As a professional trader, I demand the best. This platform meets and exceeds my expectations. It's a must-have for serious traders.",
    },
    {
      image: TestimonialImg04,
      name: "Sarah Walker",
      user: "@sarahinvests",
      link: "#0",
      content:
        "The user-friendly interface and real-time data on this platform have transformed my trading experience. I highly recommend it to fellow traders.",
    },
  ];

  const testimonials02 = [
    {
      image: TestimonialImg05,
      name: "Robert Turner",
      user: "@roberttrader",
      link: "#0",
      content: "I've been in the trading game for a while, and this platform is a breath of fresh air. It's made trading more efficient and profitable for me.",
    },
    {
      image: TestimonialImg06,
      name: "Emma White",
      user: "@emmatrader",
      link: "#0",
      content: "The analytical tools and market insights provided by this platform are invaluable. It's like having a trading mentor by your side.",
    },
    {
      image: TestimonialImg07,
      name: "Michael Carter",
      user: "@michaelinvests",
      link: "#0",
      content: "I've seen my trading results improve significantly since I started using this platform. It's a game-changer for traders of all levels.",
    },
    {
      image: TestimonialImg08,
      name: "Sophia Davis",
      user: "@sophiatrader",
      link: "#0",
      content: "This platform has simplified my trading strategy and helped me achieve better returns. It's a must-have for anyone serious about trading.",
    },
  ];

  return (
    <section className="bg-black">
      <div className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="font-inter-tight text-3xl md:text-4xl font-bold text-zinc-200">Testimonials from Happy Traders</h2>
          </div>
        </div>
        <div className="max-w-[94rem] mx-auto space-y-6">
          {/* Row #1 */}
          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_28%,_black_calc(100%-28%),transparent_100%)] group">
            <div className="flex items-start justify-center md:justify-start [&>div]:mx-3 animate-infinite-scroll group-hover:[animation-play-state:paused]">
              {/* Items */}
              {testimonials01.map((testimonial, index) => (
                <Testimonial key={index} testimonial={testimonial}>
                  {testimonial.content}
                </Testimonial>
              ))}
            </div>
            {/* Duplicated element for infinite scroll */}
            <div
              className="flex items-start justify-center md:justify-start [&>div]:mx-3 animate-infinite-scroll group-hover:[animation-play-state:paused]"
              aria-hidden="true"
            >
              {/* Items */}
              {testimonials01.map((testimonial, index) => (
                <Testimonial key={index} testimonial={testimonial}>
                  {testimonial.content}
                </Testimonial>
              ))}
            </div>
          </div>
          {/* Row #2 */}
          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_28%,_black_calc(100%-28%),transparent_100%)] group">
            <div className="flex items-start justify-center md:justify-start [&>div]:mx-3 animate-infinite-scroll-inverse group-hover:[animation-play-state:paused] [animation-delay:-7.5s]">
              {/* Items */}
              {testimonials02.map((testimonial, index) => (
                <Testimonial key={index} testimonial={testimonial}>
                  {testimonial.content}
                </Testimonial>
              ))}
            </div>
            {/* Duplicated element for infinite scroll */}
            <div
              className="flex items-start justify-center md:justify-start [&>div]:mx-3 animate-infinite-scroll-inverse group-hover:[animation-play-state:paused] [animation-delay:-7.5s]"
              aria-hidden="true"
            >
              {/* Items */}
              {testimonials02.map((testimonial, index) => (
                <Testimonial key={index} testimonial={testimonial}>
                  {testimonial.content}
                </Testimonial>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
