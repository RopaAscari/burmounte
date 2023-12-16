"use client";

import Image from "next/image";
import { useState } from "react";
import Tooltip from "@/components/tooltip";
import Accordion from "@/components/accordion";
import PricingDecoration from "@/assets/images/pricing-decoration.png";

export default function PricingTabs() {
  const [isAnnual, setIsAnnual] = useState<boolean>(true);

  const openSubscription = () => {
    window.location.replace(process.env.NEXT_PUBLIC_STRIPE_SUBSCRIPTION_LINK!);
  };

  const faqs = [
    {
      title: "Is AlphaTrader available for free?",
      text: "Yes, AlphaTrader offers a free plan with basic features for users to get started with financial predictions.",
      active: false,
    },
    {
      title: "What are the available payment methods for premium features?",
      text: "AlphaTrader supports various payment methods to access premium features. You can choose from credit cards, PayPal, and more.",
      active: false,
    },
    {
      title: "Can I switch between monthly and yearly billing?",
      text: "Yes, AlphaTrader provides the flexibility to switch between monthly and yearly billing based on your preferences.",
      active: false,
    },
    // {
    //   title: "Is AlphaTrader suitable for personal, client, and commercial projects?",
    //   text: "Absolutely! AlphaTrader is designed to cater to a wide range of users, including personal, client, and commercial use cases.",
    //   active: true,
    // },
    {
      title: "How can I get assistance or ask additional questions about AlphaTrader's pricing?",
      text: "For any questions or assistance regarding AlphaTrader's pricing, you can contact our support team through our customer support portal.",
      active: false,
    },
    {
      title: "Are there discounts available for students and non-profit organizations?",
      text: "AlphaTrader offers special discounts for students and non-profit organizations. Please reach out to us for more details on eligibility and discounts.",
      active: false,
    },
  ];

  return (
    <section className="dark:bg-black">
      <div className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="relative max-w-3xl mx-auto text-center pb-12">
            <h2 className="font-inter-tight text-3xl md:text-4xl font-bold text-zinc-900 mb-4 dark:text-white">Start your journey today</h2>
            <p className="text-lg text-zinc-500 dark:text-white">
              Commence your AlphaTrader journey today by accessing real-time financial predictions for free. Enhance your experience with premium features and
              seamless team collaboration through our upgrade options.
            </p>
          </div>

          {/* Pricing tabs component */}
          <div className="pb-12 md:pb-20 lg:flex">
            {/* Pricing toggle */}
            <div className="flex justify-center max-w-[16rem] m-auto mb-8 lg:mb-12">
              <div className="relative flex w-full p-1 bg-zinc-100 rounded">
                <span className="absolute inset-0 m-1 pointer-events-none" aria-hidden="true">
                  <span
                    className={`absolute inset-0 w-1/2 border border-transparent [background:linear-gradient(theme(colors.white),theme(colors.white))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box] rounded shadow-sm transform transition-transform duration-150 ease-in-out ${
                      isAnnual ? "translate-x-0" : "translate-x-full"
                    }`}
                  ></span>
                </span>
                <button
                  className={`relative flex-1 text-sm font-medium h-8 rounded transition-colors duration-150 ease-in-out ${
                    isAnnual ? "text-zinc-700" : "text-zinc-400"
                  }`}
                  onClick={() => setIsAnnual(true)}
                  aria-pressed={isAnnual}
                >
                  Bill Yearly <span className={`${isAnnual ? "text-emerald-500" : ""}`}>-20%</span>
                </button>
                <button
                  className={`relative flex-1 text-sm font-medium h-8 rounded transition-colors duration-150 ease-in-out ${
                    isAnnual ? "text-zinc-400" : "text-zinc-700"
                  }`}
                  onClick={() => setIsAnnual(false)}
                  aria-pressed={isAnnual}
                >
                  Bill Monthly
                </button>
              </div>
            </div>

            <div className="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none">
              {/* Pricing tab 1 */}
              <div className="h-full">
                <div className="relative flex flex-col h-full p-6 rounded-lg border border-transparent [background:linear-gradient(theme(colors.zinc.50),theme(colors.zinc.50))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box]">
                  <div className="mb-4">
                    <div className="text-lg text-zinc-900 font-semibold mb-1">Essential</div>
                    <div className="font-inter-tight inline-flex items-baseline mb-2">
                      <span className="text-zinc-900 font-bold text-2xl">$</span>
                      <span className="text-zinc-900 font-bold text-3xl">{isAnnual ? "110" : "10.99"}</span>
                      {<span className="text-zinc-500 font-medium">{isAnnual ? "/yr" : "/mo"}</span>}
                    </div>
                    <div className="text-zinc-500">For users seeking essential financial predictions.</div>
                  </div>
                  <div className="grow">
                    <div className="text-sm text-zinc-900 font-medium mb-4">Includes:</div>
                    <ul className="text-zinc-600 dark:text-zinc-400 text-sm space-y-3 grow">
                      <li className="flex items-center">
                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <Tooltip id="01" content="Access base financial predictions for your portfolio.">
                          1000 Daily Predictions
                        </Tooltip>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <Tooltip id="02" content="">
                          Portfolio Insights
                        </Tooltip>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <Tooltip id="03" content="">
                          Customer Support
                        </Tooltip>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-8">
                    <a
                      onClick={openSubscription}
                      className="btn text-zinc-100 bg-gradient-to-r from-zinc-700 to-zinc-900 hover:from-zinc-900 hover:to-zinc-900 w-full shadow"
                      href="#0"
                    >
                      Try for Free
                    </a>
                  </div>
                </div>
              </div>

              {/* Pricing tab 2 */}
              <div className="h-full">
                <div className="relative flex flex-col h-full p-6 rounded-lg bg-zinc-800">
                  <Image
                    className="absolute right-6 -top-5 mix-blend-exclusion"
                    src={PricingDecoration}
                    alt="Pricing decoration"
                    width={76}
                    height={74}
                    aria-hidden="true"
                  />
                  <div className="mb-4">
                    <div className="text-lg text-zinc-200 font-semibold mb-1">Premium</div>
                    <div className="font-inter-tight inline-flex items-baseline mb-2">
                      <span className="text-zinc-200 font-bold text-2xl">$</span>
                      <span className="text-zinc-200 font-bold text-3xl">{isAnnual ? "250" : "24.99"}</span>
                      {<span className="text-zinc-500 font-medium">{isAnnual ? "/yr" : "/mo"}</span>}
                    </div>
                    <div className="text-zinc-500">For creative hard core traders that need full control & support.</div>
                  </div>
                  <div className="grow">
                    <div className="text-sm text-zinc-200 font-medium mb-4">Includes:</div>
                    <ul className="text-zinc-600 dark:text-zinc-400 text-sm space-y-3 grow">
                      <li className="flex items-center">
                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <Tooltip id="01" content="Access base financial predictions for your portfolio.">
                          10000 Daily Predictions
                        </Tooltip>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <Tooltip id="08" content="" dark>
                          Realtime stream of price predictions
                        </Tooltip>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <Tooltip id="02" content="">
                          Portfolio Insights <strong>(+ Extra chart tools)</strong>
                        </Tooltip>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <Tooltip id="09" content="Lorem Ipsum is simply dummy text of the printing." dark>
                          Email Updates
                        </Tooltip>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <Tooltip id="09" content="Lorem Ipsum is simply dummy text of the printing." dark>
                          Customer Support
                        </Tooltip>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-8">
                    <a onClick={openSubscription} className="btn text-zinc-600 bg-white hover:text-zinc-900 w-full shadow" href="#0">
                      Try for Free
                    </a>
                  </div>
                </div>
              </div>

              {/* Pricing tab 3 */}
              <div className="h-full">
                <div className="relative flex flex-col h-full p-6 rounded-lg border border-transparent [background:linear-gradient(theme(colors.zinc.50),theme(colors.zinc.50))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box]">
                  <div className="mb-4">
                    <div className="text-lg text-zinc-900 font-semibold mb-1">Enterprise</div>
                    <div className="font-inter-tight inline-flex items-baseline mb-2">
                      <span className="text-zinc-900 font-bold text-2xl">$</span>
                      <span className="text-zinc-900 font-bold text-3xl">{isAnnual ? "420" : "39.99"}</span>
                      {<span className="text-zinc-500 font-medium">{isAnnual ? "/yr" : "/mo"}</span>}
                    </div>
                    <div className="text-zinc-500">For creative organizations that need full control & support.</div>
                  </div>
                  <div className="grow">
                    <div className="text-sm text-zinc-900 font-medium mb-4">Includes:</div>
                    <ul className="text-zinc-600 dark:text-zinc-400 text-sm space-y-3 grow">
                      <li className="flex items-center">
                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <Tooltip id="13" content="Lorem Ipsum is simply dummy text of the printing.">
                          Unlimited predictions
                        </Tooltip>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <Tooltip id="14" content="Lorem Ipsum is simply dummy text of the printing.">
                          API Access and Integration
                        </Tooltip>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <Tooltip id="15" content="Lorem Ipsum is simply dummy text of the printing.">
                          Advanced Reporting and Analytics
                        </Tooltip>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <Tooltip id="09" content="Lorem Ipsum is simply dummy text of the printing." dark>
                          24/7 Customer Support
                        </Tooltip>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <Tooltip id="17" content="Lorem Ipsum is simply dummy text of the printing.">
                          Custom Predictive Models
                        </Tooltip>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-8">
                    <a
                      onClick={openSubscription}
                      className="btn text-zinc-100 bg-gradient-to-r from-zinc-700 to-zinc-900 hover:from-zinc-900 hover:to-zinc-900 w-full shadow"
                      href="#0"
                    >
                      Try for Free
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className="w-full mx-auto">
            <div className="space-y-4 ">
              {faqs.map((faq, index) => (
                <Accordion key={index} title={faq.title} id={`faqs-${index}`} active={faq.active}>
                  {faq.text}
                </Accordion>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
