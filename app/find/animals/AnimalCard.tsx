"use client";
import { SafeAnimal } from "@/app/types";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface AnimalCardProps {
  animal: SafeAnimal;
}

const AnimalCard: React.FC<AnimalCardProps> = ({ animal }) => {
  const router = useRouter();

  return (
    <div className="rounded-lg bg-white capitalize shadow-md transition duration-300 hover:shadow-2xl max-w-[400px] w-full">
      {/* Image Container */}
      <div className="relative mx-auto flex aspect-square w-full flex-col items-center justify-center overflow-hidden rounded-t-lg">
        <Image
          alt="animal card"
          src={animal.image}
          fill
          className="h-full w-full overflow-hidden object-cover"
        />
      </div>
      {/* Info */}
      <div className="mt-1 flex flex-col gap-1 p-2">
        <div className="flex items-center justify-between text-sm font-light text-neutral-800">
          <p>{animal.species}</p>
          <p>{animal.location}</p>
        </div>
        <p className="text-2xl font-semibold">{animal.name}</p>
        <p>
          <span className="bg-zinc-800 px-2 text-white">
            {animal.personality}
          </span>
        </p>
        <p>
          <span className="bg-zinc-800 px-2 text-white">
            {animal.age} Years Old
          </span>
        </p>
        <button
          onClick={() => {
            router.push(`/animal/${animal.id}`);
          }}
          className="my-1 w-full rounded-md border-2 border-zinc-800 p-2 transition duration-300 hover:bg-zinc-800 hover:text-white"
        >
          View More
        </button>
      </div>
    </div>
  );
};
export default AnimalCard;
