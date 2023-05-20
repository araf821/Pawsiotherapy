import AnimalCard from "../../find/animals/AnimalCard";
import { SafeAnimal } from "../../types";
import { Lilita_One } from "next/font/google";

const lilita = Lilita_One({
  weight: "400",
  subsets: ["latin"],
});

interface FeaturedProps {
  animals: SafeAnimal[];
}

const FeaturedSection: React.FC<FeaturedProps> = ({ animals }) => {
  if (animals.length < 5) {
    return null;
  }

  return (
    <div className="mx-auto bg-yellow-300 w-full max-w-[2520px] pb-20 pt-3 sm:px-6 md:px-10 xl:px-20">
      <div className="my-6 px-2 text-center text-black">
        <p
          className={`${lilita.className} text-4xl font-semibold md:text-5xl lg:text-6xl xl:text-6xl`}
        >
          Featured Animals
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 px-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from(Array(4), (animal, i) => (
          <AnimalCard key={i} animal={animals[i]} lastFeatured={i} />
        ))}
      </div>
    </div>
  );
};
export default FeaturedSection;
