"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Lilita_One } from "next/font/google";

const lilita = Lilita_One({
  weight: "400",
  subsets: ["latin"],
});

const Hero = () => {
  const router = useRouter();

  return (
    <section className="mx-auto flex max-w-[2520px] flex-col items-center justify-center bg-zinc-800 pb-10">
      {/* Hero components holder */}
      <div className="flex w-full max-w-[1350px] flex-col items-center justify-between gap-8 px-4 sm:px-6 md:flex-row md:px-10 xl:px-20">
        {/* Text section */}
        <div
          className={`flex select-none flex-col items-center justify-center text-center text-5xl text-white sm:text-6xl md:items-start lg:text-7xl xl:text-8xl ${lilita.className} `}
        >
          <p>Therapy</p>
          <p>Sessions</p>
          <p>With</p>
          <p>Animals</p>
          <button
            onClick={() => {
              router.push("/find/animals");
            }}
            className="mx-auto mt-4 w-full max-w-[400px] rounded-md border-2 border-white p-3 text-center font-sans text-lg font-semibold text-white transition duration-300 hover:bg-white hover:text-black md:text-2xl"
          >
            Browse
          </button>
        </div>

        {/* Image section */}
        <div className="relative aspect-square h-full w-full overflow-hidden rounded-md md:max-w-[450px] lg:max-w-[575px]">
          <Image
            fill
            src="/images/hero-bg.jpg"
            alt="blog background"
            className="w-full transform object-cover duration-500 hover:scale-125"
          />
        </div>
      </div>

      {/* Quote Container */}
      <div className="mt-8 flex px-4 text-center text-lg font-light text-zinc-300 md:text-xl lg:text-2xl xl:text-3xl">
        &rdquo;Pawsiotherapy will soon make psychotherapists obsolete.&rdquo; -
        Elon Musk
      </div>
    </section>
  );
};
export default Hero;
