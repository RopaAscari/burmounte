export const metadata = {
  title: "Get Started - Burmounte",
  description: "Page description",
};

import Link from "next/link";
import Image from "next/image";
import DerivIllustration from "@/assets/images/deriv.webp";

export default function GetStarted() {
  return (
    <>
      <main className="flex mt-24">
        {/* Content */}
        <div className="min-h-screen w-full lg:w-1/2">
          <div className="h-full">
            <div className="h-full w-full max-w-xl px-6 mx-auto flex flex-col after:mt-auto after:flex-1">
              <div className="flex-1 py-8">
                <div className="mb-10">
                  <h1 className="h2 font-cabinet-grotesk">Get started by creating an account on Deriv</h1>
                </div>

                <div className="text-sm font-cabinet-grotesk py-5 text-gray-600 mb-4">
                  Begin your trading journey with Burmounte Partners by seamlessly integrating with Deriv. To access our trading experience, simply create an
                  account or log in on the Deriv platform. Enjoy the best of both worlds as you unlock the power of financial markets through this strategic
                  partnership.
                </div>

                <div>
                  <a className="btn text-white rounded-full bg-rose-500 text-sm hover:opacity-80 w-full shadow" href={process.env.NEXT_PUBLIC_SIGNUP_ENDPOINT!}>
                    Create an account
                  </a>
                </div>
                <div className="flex items-center my-6">
                  <hr className="flex-grow border-t-1 border-gray-300" />
                  <div className="mx-4 text-gray-500 font-bold text-sm">OR</div>
                  <hr className="flex-grow border-t-1 border-gray-300" />
                </div>

                <div>
                  <a className="btn rounded-full text-white bg-black text-sm hover:opacity-80 w-full shadow" href={process.env.NEXT_PUBLIC_OAUTH_ENDPOINT!}>
                    Login
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="fixed right-0 top-0 bottom-0 hidden lg:block lg:w-1/2 overflow-hidden" aria-hidden="true">
          {/* Bg */}

          {/* Illustration */}
          <div className="absolute pointer-events-none -z-10">
            <Image alt="" src={DerivIllustration} className="object-cover h-screen" />
          </div>
        </div>
      </main>
    </>
  );
}
