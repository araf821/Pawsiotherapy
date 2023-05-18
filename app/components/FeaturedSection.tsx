"use client";

import { AiOutlineDoubleRight } from "react-icons/ai";
import AnimalCard from "../find/animals/AnimalCard";
import { SafeAnimal } from "../types";
import { useRouter } from "next/navigation";

interface FeaturedProps {
  animals: SafeAnimal[];
}

const FeaturedSection: React.FC<FeaturedProps> = ({ animals }) => {
  const router = useRouter();

  if (animals.length < 5) {
    return null;
  }

  return (
    <div className="mx-auto w-full max-w-[2520px] bg-[#e19233] pb-20 pt-3 sm:px-6 md:px-10 xl:px-20">
      <div className="my-6 px-2">
        <div className="flex items-center justify-between text-black">
          <p className="text-2xl font-semibold lg:text-3xl">
            <span className="bg-zinc-800 px-2 text-white">
              Featured Animals
            </span>
          </p>
          <button className="peer flex items-center justify-center gap-2 rounded-md p-2 font-semibold">
            <div
              onClick={() => router.push("/find/animals")}
              className="flex items-center justify-center gap-2 bg-zinc-800 px-2 py-1 text-white"
            >
              <p className="peer hidden transition hover:scale-105 sm:block lg:text-xl">
                View All
              </p>
              <AiOutlineDoubleRight
                size={20}
                className="transition duration-500 peer-hover:translate-x-1"
              />
            </div>
          </button>
        </div>
        <hr className="border-black/20" />
      </div>
      <div className="flex w-full flex-col items-center justify-around gap-4 px-3 md:flex-row md:gap-6 lg:gap-12">
        {Array.from(Array(4), (animal, i) => (
          <AnimalCard key={i} animal={animals[i]} lastFeatured={i} />
        ))}
      </div>
    </div>
  );
};
export default FeaturedSection;
