import { SafeAnimal } from "@/app/types";
import AnimalCard from "./AnimalCard";

interface AnimalClientProps {
  animals: SafeAnimal[];
}

const AnimalClient: React.FC<AnimalClientProps> = ({ animals }) => {
  return (
    <div className="my-8">
      {animals.map((animal) => (
        <div key={animal.id} className={``}>
          <AnimalCard key={animal.id} animal={animal} count={1} />
        </div>
      ))}
    </div>
  );
};
export default AnimalClient;
