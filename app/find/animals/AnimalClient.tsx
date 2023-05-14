import { SafeAnimal } from "@/app/types";
import AnimalCard from "./AnimalCard";

interface AnimalClientProps {
  animals: SafeAnimal[];
}

const AnimalClient: React.FC<AnimalClientProps> = ({ animals }) => {
  return (
    <div className="my-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {animals.map((animal) => (
        <AnimalCard key={animal.id} animal={animal} />
      ))}
    </div>
  );
};
export default AnimalClient;
