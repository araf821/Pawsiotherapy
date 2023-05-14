"use client";

import { SafeAnimal, SafeUser } from "@/app/types";
import MyList from "./MyList";
import MySessions from "./MySessions";
import Image from "next/image";

interface DashboardClientProps {
  animals: SafeAnimal[] | null;
  sessionAnimals: SafeAnimal[];
  currentUser: SafeUser | null;
}

const DashboardClient: React.FC<DashboardClientProps> = ({
  currentUser,
  animals,
  sessionAnimals,
}) => {

  if (!currentUser) {
    return null;
  }

  return (
    <div>
      <div className="relative my-8 flex items-start justify-normal gap-3 rounded-lg bg-zinc-800 p-4 text-white shadow-2xl md:flex-row md:gap-8">
        <div className="relative h-[100px] max-h-[200px] w-[100px] max-w-[200px] md:h-[200px] md:w-full">
          <Image
            //@ts-ignore
            src={currentUser?.image}
            alt="current user profile"
            fill
            className="h-[200px] rounded-lg object-cover"
          />
        </div>
        <div className="flex flex-col font-semibold">
          <p className="text-md lx:text-3xl text-neutral-200 md:text-lg lg:text-2xl">
            Hello,
          </p>
          <p className="text-lg md:text-2xl lg:text-3xl xl:text-4xl">
            {currentUser?.name}
          </p>
        </div>
        <div className="absolute bottom-0 right-0 px-2 py-1 text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          <span className="transition hover:text-neutral-400">D</span>
          <span className="transition hover:text-neutral-400">a</span>
          <span className="transition hover:text-neutral-400">s</span>
          <span className="transition hover:text-neutral-400">h</span>
          <span className="transition hover:text-neutral-400">b</span>
          <span className="transition hover:text-neutral-400">o</span>
          <span className="transition hover:text-neutral-400">a</span>
          <span className="transition hover:text-neutral-400">r</span>
          <span className="transition hover:text-neutral-400">d</span>
        </div>
      </div>
      <MyList animals={animals} />
      <MySessions sessionAnimals={sessionAnimals} />
    </div>
  );
};
export default DashboardClient;
