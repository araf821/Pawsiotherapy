import { SafeAnimal } from "@/app/types";
import AnimalCard from "./AnimalCard";

interface AnimalClientProps {
  animals: SafeAnimal[];
}

const AnimalClient: React.FC<AnimalClientProps> = ({ animals }) => {
  return (
    <div className="my-8 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {animals.map((animal) => (
        <div key={animal.id} className={``}>
          <AnimalCard key={animal.id} animal={animal} />
        </div>
      ))}
    </div>
  );
};
export default AnimalClient;
