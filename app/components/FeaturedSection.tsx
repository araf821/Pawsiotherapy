import { AiOutlineDoubleRight } from "react-icons/ai";
import AnimalCard from "../find/animals/AnimalCard";
import { SafeAnimal } from "../types";

interface FeaturedProps {
  animals: SafeAnimal[];
}

const FeaturedSection: React.FC<FeaturedProps> = ({ animals }) => {
  if (animals.length < 5) {
    return null;
  }

  return (
    <div className="mx-auto w-full max-w-[2520px] bg-yellow-500 pt-3 pb-20 sm:px-6 md:px-10 xl:px-20 2xl:mt-10 ">
      <div className="my-6 px-2">
        <div className="flex items-center justify-between">
          <p className="text-2xl font-semibold lg:text-4xl">Featured Animals</p>
          <button className="peer flex items-center justify-center gap-2 rounded-md p-2 font-semibold">
            <p className="peer transition hover:scale-105">View All</p>
            <AiOutlineDoubleRight className="transition duration-500 peer-hover:translate-x-3" />
          </button>
        </div>
        <hr className="border-black/20" />
      </div>
      <div className="flex w-full flex-col items-center justify-around gap-6 px-3 md:flex-row">
        {Array.from(Array(3), (animal, i) => (
          <AnimalCard key={i} animal={animals[i]} />
        ))}
      </div>
    </div>
  );
};
export default FeaturedSection;
