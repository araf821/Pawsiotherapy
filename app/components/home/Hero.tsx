import { Lilita_One } from "next/font/google";
import Image from "next/image";
import { ImQuotesRight } from "react-icons/im";
import Button from "../Button";

const pacifico = Lilita_One({
  weight: "400",
  subsets: ["latin"],
});

// <div className={`mx-auto flex max-w-[2520px] justify-center`}>
//   <div
//     className="relative flex aspect-video h-[400px] max-h-[600px]
//     w-full flex-row items-center justify-center overflow-hidden text-center sm:h-[500px] lg:h-[60vw]"
//   >
//     <Image
//       fill
//       src="/images/hero-bg.jpg"
//       alt="blog background"
//       className="w-full object-cover"
//     />
//     <div className="absolute inset-0 z-10 bg-gradient-to-l from-black/40 via-transparent to-black/40" />

//     <div className="absolute bottom-10 z-20 m-4 rounded-2xl bg-black/60 p-2 md:p-4">
//       <div className="absolute -right-0 -top-[6px] text-xl text-white md:top-[-12px] md:text-2xl">
//         <ImQuotesRight />
//       </div>
//       <p className="text-lg text-white sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl ">
//         &rdquo;Pawsiotherapy will soon make psychotherapists
//         obsolete.&rdquo; - Elon Musk
//       </p>
//     </div>
//   </div>
// </div>

const Hero = () => {
  return (
    <section className="mx-auto flex max-w-[2520px] flex-col items-center justify-center bg-zinc-800 pb-10">
      {/* Hero components holder */}
      <div className="flex w-full max-w-[1750px] flex-col gap-8 px-4 sm:px-6 md:flex-row md:px-10 xl:px-20">
        {/* Text section */}
        <div
          className={`flex flex-col items-center justify-center text-center text-6xl text-white md:items-start md:text-start ${pacifico.className} `}
        >
          <p>Therapy</p>
          <p>Sessions</p>
          <p>With</p>
          <p>Animals</p>
        </div>

        {/* Image section */}
        <div className="relative aspect-square h-full w-full">
          <Image
            fill
            src="/images/hero-bg.jpg"
            alt="blog background"
            className="w-full rounded-md object-cover"
          />
        </div>
      </div>

      {/* Button container */}
      <div className="w-full px-4 text-center">
        <button className="font-semibold rounded-md hover:bg-white hover:text-black transition duration-300 mx-auto mt-8 w-full max-w-[400px] border-2 border-white p-3 text-center text-lg text-white md:text-2xl">
          Browse
        </button>
      </div>
    </section>
  );
};
export default Hero;
