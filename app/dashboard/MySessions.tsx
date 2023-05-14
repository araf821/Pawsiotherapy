'use client'

import Heading from "@/app/components/Heading";
import AnimalCard from "@/app/find/animals/AnimalCard";
import { SafeAnimal } from "@/app/types";
import { useRouter } from "next/navigation";

interface MySessionsProps {
  sessionAnimals: SafeAnimal[];
}

const MySessions: React.FC<MySessionsProps> = ({ sessionAnimals }) => {
  const router = useRouter();

  return (
    <section className="my-10">
      <div>
        <Heading title="My Sessions" />
        <hr />
      </div>
      {sessionAnimals?.length === 0 ? (
        <div className="flex h-[35vh] flex-col items-center justify-center gap-6">
          <p className="font-md text-center text-lg">
            Looks like you haven&rsquo;t booked any sessions yet.
          </p>
          <button
            onClick={() => {
              router.push("/find/animals");
            }}
            className="rounded-md duration-300 bg-zinc-800 p-4 text-white transition border-2 hover:border-zinc-800 hover:bg-transparent hover:text-zinc-800"
          >
            Find Animals
          </button>
        </div>
      ) : (
        <div className="my-4 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {sessionAnimals?.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} cancelBtn />
          ))}
        </div>
      )}
    </section>
  );
};
export default MySessions;
