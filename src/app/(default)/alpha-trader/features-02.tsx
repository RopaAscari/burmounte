import Image from "next/image";

import FeatureImage01 from "@/assets/images/feature-post-01.png";
import FeatureImage02 from "@/assets/images/feature-post-02.png";
import FeatureImage03 from "@/assets/images/feature-post-03.png";
import FeatureImage04 from "@/assets/images/feature-post-04.png";
import FeatureImage05 from "@/assets/images/feature-image-02.png";
import Highlighter, { HighlighterItem } from "@/components/highlighter";

export default function Features02() {
  return (
    <section className="dark:bg-black">
      <div className="py-12 md:py-7">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="relative max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="font-inter-tight text-3xl md:text-4xl font-bold text-zinc-900 mb-4 dark:text-white">AI-powered features and effects</h2>
            <p className="text-lg text-zinc-500 dark:text-white">
              Instantly transform your financial vision into reality – No skills, no complicated trading strategies, no hassle .
            </p>
          </div>

          <div className="max-w-xs mx-auto sm:max-w-none grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-4 lg:gap-8">
            <article className="sm:col-span-2 dark:border-slate-600 flex flex-col border border-transparent [background:linear-gradient(theme(colors.white),theme(colors.zinc.50))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box] rounded-lg">
              <Highlighter>
                <HighlighterItem className="w-full dark:bg-black">
                  <div className="flex grow flex-col p-5 pt-6">
                    <div className="flex items-center space-x-3 mb-1">
                      <svg className="inline-flex fill-zinc-400" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                        <path d="M17 9c.6 0 1 .4 1 1v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h6c.6 0 1 .4 1 1s-.4 1-1 1H4v12h12v-6c0-.6.4-1 1-1Zm-.7-6.7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-8 8c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l8-8Z" />
                      </svg>
                      <h3 className="font-inter-tight font-semibold text-zinc-900 dark:text-white">Beautiful Data Visualization</h3>
                    </div>
                    <p className="grow max-w-md text-sm text-zinc-500 dark:text-white">
                      Explore stunning charts and intuitive data presentations that make understanding financial insights a breeze.
                    </p>
                  </div>

                  <figure className="ml-5 mr-5 h-auto opacity-70">
                    <Image className="h-[280px] rounded-lg object-contain sm:h-auto" src={FeatureImage01} width={721} height={280} alt="Feature Post 01" />
                  </figure>
                </HighlighterItem>{" "}
              </Highlighter>
            </article>

            <article className="flex flex-col border dark:border-slate-600 border-transparent [background:linear-gradient(theme(colors.white),theme(colors.zinc.50))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box] rounded-lg">
              <Highlighter>
                <HighlighterItem className="w-full dark:bg-black">
                  <div className="grow flex flex-col p-5 pt-6">
                    <div className="flex items-center space-x-3 mb-1">
                      <svg className="inline-flex fill-zinc-400" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                        <path d="m6.035 17.335-4-14c-.2-.8.5-1.5 1.3-1.3l14 4c.9.3 1 1.5.1 1.9l-6.6 2.9-2.8 6.6c-.5.9-1.7.8-2-.1Zm-1.5-12.8 2.7 9.5 1.9-4.4c.1-.2.3-.4.5-.5l4.4-1.9-9.5-2.7Z" />
                      </svg>
                      <h3 className="font-inter-tight font-semibold text-zinc-900 dark:text-white">Advanced AI</h3>
                    </div>
                    <p className="grow max-w-md text-sm text-zinc-500 dark:text-white">
                      Generate accurate financial predictions and explore innovative insights with AI.
                    </p>
                  </div>
                  <figure>
                    <Image
                      className="h-[280px] object-cover object-left mx-auto sm:object-contain sm:h-auto"
                      src={FeatureImage02}
                      width={342}
                      height={280}
                      alt="Feature Post 02"
                    />
                  </figure>
                </HighlighterItem>
              </Highlighter>
            </article>
            <article className="flex flex-col dark:border-slate-600 border border-transparent [background:linear-gradient(theme(colors.white),theme(colors.zinc.50))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box] rounded-lg">
              <Highlighter>
                <HighlighterItem className="w-full dark:bg-black">
                  <div className="grow flex flex-col p-5 pt-6">
                    <div className="flex items-center space-x-3 mb-1">
                      <svg className="inline-flex fill-zinc-400" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                        <path d="M8.974 16c-.3 0-.7-.2-.9-.5l-2.2-3.7-2.1 2.8c-.3.4-1 .5-1.4.2-.4-.3-.5-1-.2-1.4l3-4c.2-.3.5-.4.9-.4.3 0 .6.2.8.5l2 3.3 3.3-8.1c0-.4.4-.7.8-.7s.8.2.9.6l4 8c.2.5 0 1.1-.4 1.3-.5.2-1.1 0-1.3-.4l-3-6-3.2 7.9c-.2.4-.6.6-1 .6Z" />
                      </svg>
                      <h3 className="font-inter-tight font-semibold text-zinc-900 dark:text-white">Predictions on the go</h3>
                    </div>
                    <p className="grow max-w-md text-sm text-zinc-500 dark:text-white">
                      Access financial predictions effortlessly, whether you're on your phone or browser.
                    </p>
                  </div>
                  <figure>
                    <div className="relative h-full w-full flex justify-center items-center lg:mb-0 mb-24">
                      {/* Logo */}
                      <svg className="w-40 h-40 mt-16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient x1="0%" y1="32.443%" x2="104.18%" y2="50%" id="a">
                            <stop stopColor="#FFF" stopOpacity=".299" offset="0%" />
                            <stop stopColor="#7587E4" stopOpacity="0" offset="100%" />
                          </linearGradient>
                          <linearGradient x1="18.591%" y1="0%" x2="100%" y2="100%" id="b">
                            <stop stopColor="#818CF8" offset="0%" />
                            <stop stopColor="#C7D2FE" offset="100%" />
                          </linearGradient>
                        </defs>
                        <g fill="none" fillRule="evenodd">
                          <path fill="#3730A3" d="M16 18.5V32l15.999-9.25V9.25z" />
                          <path fill="#4F46E5" d="m0 23 16 9V18.501L0 9.251z" />
                          <path fillOpacity=".64" fill="url(#a)" d="M16 13 0 23l16 9 16-9z" />
                          <path fill="url(#b)" d="M16 0 0 9.25l16 9.25 15.999-9.25z" />
                        </g>
                      </svg>
                    </div>
                  </figure>
                </HighlighterItem>
              </Highlighter>
            </article>
            <article className="flex flex-col dark:border-slate-600 border border-transparent [background:linear-gradient(theme(colors.white),theme(colors.zinc.50))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box] rounded-lg">
              <Highlighter>
                {" "}
                <HighlighterItem className="w-full dark:bg-black">
                  <div className="grow flex flex-col p-5 pt-6">
                    <div className="flex items-center space-x-3 mb-1">
                      <svg className="inline-flex fill-zinc-400" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                        <path d="M16 2H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h8.667l3.733 2.8A1 1 0 0 0 18 17V4a2 2 0 0 0-2-2Zm0 13-2.4-1.8a1 1 0 0 0-.6-.2H4V4h12v11Z" />
                      </svg>
                      <h3 className="font-inter-tight font-semibold text-zinc-900 dark:text-white">Real-time Predictions</h3>
                    </div>
                    <p className="grow max-w-md text-sm text-zinc-500 dark:text-white">
                      AlphaTrader delivers real-time, live predictions, giving you up-to-the-minute insights to make informed decisions and stay ahead.
                    </p>
                  </div>
                  <figure>
                    <Image
                      className="h-[280px] object-cover object-left mx-auto sm:object-contain sm:h-auto"
                      src={FeatureImage04}
                      width={342}
                      height={280}
                      alt="Feature Post 04"
                    />
                  </figure>
                </HighlighterItem>{" "}
              </Highlighter>
            </article>
            <article className="flex dark:border-slate-600 flex-col border border-transparent [background:linear-gradient(theme(colors.white),theme(colors.zinc.50))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box] rounded-lg">
              <Highlighter>
                <HighlighterItem className="w-full dark:bg-black">
                  <div className="grow flex flex-col p-5 pt-6">
                    <div className="flex items-center space-x-3 mb-1">
                      <svg className="inline-flex fill-zinc-400" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                        <path d="M9.3 11.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0ZM9.3 17.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0ZM2.3 12.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0Z" />
                      </svg>
                      <h3 className="font-inter-tight font-semibold text-zinc-900 dark:text-white">Precise Activity</h3>
                    </div>
                    <p className="grow max-w-md text-sm text-zinc-500 dark:text-white">
                      AlphaTrader's advanced algorithms provide accurate and data-driven predictions, ensuring you have the most reliable insights for your
                      investment decisions.
                    </p>
                  </div>

                  <figure className="mb-6 opacity-90 flex flex-col justify-center items-center bg-zinc-800 ml-5 mr-5 h-auto rounded-lg text-center transform -rotate-3">
                    <Image className="object-contain mx-auto object-contain h-[210px]" src={FeatureImage05} alt="Feature Post 05" />
                  </figure>
                </HighlighterItem>
              </Highlighter>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
