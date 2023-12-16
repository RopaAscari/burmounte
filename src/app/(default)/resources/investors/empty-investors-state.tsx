export default function EmptyState() {
  return (
    <div className="border-t border-slate-200 dark:border-slate-700 h-[500px] ">
      <div className="max-w-6xl m-auto mt-16">
        <div className="text-center px-4 flex flex-col items-center justify-center mt-32">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-t from-slate-200 to-slate-100 dark:from-slate-700 dark:to-slate-800 mb-4">
            <svg className="w-5 h-6 fill-current" viewBox="0 0 20 24">
              <path className="text-slate-500 dark:text-slate-600" d="M10 10.562l9-5-8.514-4.73a1 1 0 00-.972 0L1 5.562l9 5z" />
              <path className="text-slate-300 dark:text-slate-400" d="M9 12.294l-9-5v10.412a1 1 0 00.514.874L9 23.294v-11z" />
              <path className="text-slate-400 dark:text-slate-500" d="M11 12.294v11l8.486-4.714a1 1 0 00.514-.874V7.295l-9 4.999z" />
            </svg>
          </div>
          <h2 className="text-2xl text-slate-800 dark:text-slate-100 font-bold mb-2">Investment Opportunities Coming Soon</h2>
          <p className="mb-6 mt-6 text-sm text-slate-600">
            Prepare for an exhilarating expedition into the realm of investment opportunities with Burmounte, your trusted trading platform. While we're
            fine-tuning our investor page, we're committed to delivering profitable prospects that will reshape your investment portfolio. Keep an eye out for
            upcoming announcements and gear up for a fulfilling investment voyage with us. Together, we'll explore fresh avenues of success and expansion in the
            dynamic landscape of trading.
          </p>
        </div>
      </div>
    </div>
  );
}
