import { Pacifico } from "next/font/google";
import Image from "next/image";
import { ImQuotesRight } from "react-icons/im";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

const Hero = () => {
  return (
    <div className={`mx-auto flex max-w-[2520px] justify-center 2xl:px-20`}>
      <div
        className="relative flex aspect-video h-[400px] max-h-[600px]
        w-full flex-row items-center justify-center overflow-hidden text-center sm:h-[500px] lg:h-[60vw] 2xl:rounded-b-xl"
      >
        <div className="absolute inset-0 z-10 bg-gradient-to-l from-black/40 via-transparent to-black/40" />
        <Image
          fill
          src="/images/hero-bg.jpg"
          alt="blog background"
          className="w-full object-cover xl:object-none"
        />

        <div className="absolute bottom-10 z-20 m-4 rounded-2xl bg-black/60 p-2 md:p-4">
          <div className="absolute -right-0 -top-[6px] text-xl text-white md:top-[-12px] md:text-2xl">
            <ImQuotesRight />
          </div>
          <p className="text-lg text-white sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl ">
            &rdquo;Pawsiotherapy will soon make psychotherapists
            obsolete.&rdquo; - Elon Musk
          </p>
        </div>
      </div>
    </div>
  );
};
export default Hero;
