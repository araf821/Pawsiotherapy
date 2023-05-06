import { SafeAnimal } from "@/app/types";

interface AnimalCardProps {
  count: number;
  animal: SafeAnimal;
}

const AnimalCard: React.FC<AnimalCardProps> = ({ count, animal }) => {
  console.log(animal);

  return (
    <div className="relative w-full rounded-2xl border-4 border-black">
      <div className="m-1 h-20 rounded-lg bg-yellow-500">{animal.name}</div>
    </div>
  );
};
export default AnimalCard;
