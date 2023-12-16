import PageIllustration from "./page-illustration";
import Particles from "./particles";

type Props = {
  children: React.ReactNode;
};
export default function HeroWrapper({ children }: Props) {
  return (
    <section className="relative">
      {" "}
      <div
        className="absolute inset-0 bg-black pointer-events-none w-full  -z-1 [clip-path:polygon(0_0,_5760px_0,_5760px_calc(100%_-_1400px),_0_100%)]"
        aria-hidden="true"
      >
        <div className="absolute inset-0 w-screen max-w-full mx-auto px-4 sm:px-6">
          <Particles className="absolute w-full inset-0 -z-10 " quantity={60} />
        </div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="absolute px-4 sm:px-6 -z-500">
          <Particles className="absolute bg-white  -z-10" quantity={35} />
        </div>

        {children}
      </div>
    </section>
  );
}
