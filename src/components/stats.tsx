export default function Stats() {
  return (
    <section className="relative">
      {/* Background gradient (light version only) */}
      <div
        className="absolute bottom-0 left-0 right-0 h-128 bg-gradient-to-t from-gray-100 to-white pointer-events-none -z-10 dark:hidden"
        aria-hidden="true"
      ></div>
      {/* End background gradient (light version only) */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="grid grid-cols-2 gap-4 lg:gap-6 md:grid-cols-4 text-center" data-aos-id-stats>
            {/* 1st item */}
            <div
              className="border border-slate-100 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 py-8 px-1 shadow-sm"
              data-aos="fade-down"
              data-aos-anchor="[data-aos-id-stats]"
            >
              <div className="font-red-hat-display text-3xl font-black tracking-tighter mb-1 dark:text-white">1000H</div>
              <div className="text-gray-400 dark:text-gray-400">Predictive Models Trained</div>
            </div>
            {/* 2nd item */}
            <div
              className="border border-slate-100  dark:border-gray-700  rounded-lg bg-white dark:bg-gray-900 py-8 px-1"
              data-aos="fade-down"
              data-aos-anchor="[data-aos-id-stats]"
              data-aos-delay="100"
            >
              <div className="font-red-hat-display text-3xl font-black tracking-tighter mb-1 dark:text-white">80</div>
              <div className="text-gray-400 dark:text-gray-400">Financial Instruments Analyzed</div>
            </div>
            {/* 3rd item */}
            <div
              className="border border-slate-100 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 py-8 px-1"
              data-aos="fade-down"
              data-aos-anchor="[data-aos-id-stats]"
              data-aos-delay="200"
            >
              <div className="font-red-hat-display text-3xl font-black tracking-tighter dark:text-white mb-1">75%</div>
              <div className="text-gray-400 dark:text-gray-400">Accuracy in Price Predictions</div>
            </div>
            {/* 4th item */}
            <div
              className="border border-slate-100 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 py-8 px-1"
              data-aos="fade-down"
              data-aos-anchor="[data-aos-id-stats]"
              data-aos-delay="300"
            >
              <div className="font-red-hat-display text-3xl font-black dark:text-white tracking-tighter mb-1">49K</div>
              <div className="text-gray-400 font-italic dark:text-gray-400">Satisfied Traders Worldwide</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
