import FaqSection from "./FaqSection";
import { Lilita_One } from "next/font/google";

const lilita = Lilita_One({
  weight: "400",
  subsets: ["latin"],
});

const AssuranceSection = () => {
  return (
    <div className="mx-auto w-full max-w-[2520px] bg-zinc-800 py-4 sm:px-6 md:px-10 xl:px-20">
      <div className="my-6 flex flex-col px-2">
        <div
          className={`flex flex-col gap-1 text-center text-yellow-300 ${lilita.className}`}
        >
          <p className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl tracking-wide">
            We Are Here For You
          </p>
          <p className="text-md font-light md:text-lg lg:text-xl">
            {/* <span className="p-1 bg-zinc-800 text-white rounded-lg"></span> */}
            And we&rsquo;re here to stay!
          </p>
        </div>
        <FaqSection />
      </div>
      <hr className="border-zinc-500" />
    </div>
  );
};
export default AssuranceSection;
