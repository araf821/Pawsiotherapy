"use client";

import Heading from "@/app/components/Heading";
import AnimalCard from "@/app/find/animals/AnimalCard";
import { SafeAnimal } from "@/app/types";
import { useRouter } from "next/navigation";

interface MyListProps {
  animals?: SafeAnimal[] | null;
}

const MyList: React.FC<MyListProps> = ({ animals }) => {
  const router = useRouter();

  return (
    <section className="my-10">
      <div>
        <Heading title="My Listings" />
        <hr />
      </div>
      {animals?.length === 0 ? (
        <div className="flex h-[35vh] flex-col items-center justify-center gap-6">
          <p className="font-md text-center text-lg">
            Looks like you do not have any listings yet.
          </p>
          <button
            onClick={() => {
              router.push("/feature-animal");
            }}
            className="rounded-md border-2 border-zinc-800 bg-zinc-800 p-4 text-white transition duration-300 hover:bg-transparent hover:text-zinc-800"
          >
            Feature An Animal
          </button>
        </div>
      ) : (
        <div className="sm:grid-cols-2lg:grid-cols-3 my-4 grid grid-cols-1 gap-6 xl:grid-cols-4">
          {animals?.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} deleteBtn />
          ))}
        </div>
      )}
    </section>
  );
};
export default MyList;
