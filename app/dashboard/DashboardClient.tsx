"use client";

import { SafeAnimal, SafeUser } from "@/app/types";
import MyList from "./MyList";
import MySessions from "./MySessions";
import Image from "next/image";
import { Lilita_One } from "next/font/google";

const lilita = Lilita_One({
  weight: "400",
  subsets: ["latin"],
});

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
    <>
      <div
        className={`relative my-8 flex items-start justify-normal gap-3 rounded-lg bg-zinc-800 p-4 text-yellow-300 shadow-2xl md:flex-row md:gap-8 ${lilita.className}`}
      >
        <div className="relative h-[100px] max-h-[200px] w-[100px] max-w-[200px] md:h-[200px] md:w-full">
          <Image
            //@ts-ignore
            src={currentUser?.image || "/images/placeholder.jpg"}
            alt="current user profile"
            fill
            className="h-[200px] rounded-lg object-cover"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-md text-yellow-500 md:text-lg lg:text-2xl xl:text-3xl">
            Hello,
          </p>
          <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            {currentUser?.name}
          </p>
        </div>
        <div className="absolute bottom-0 right-0 px-2 py-1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          <span className="transition hover:text-yellow-500">D</span>
          <span className="transition hover:text-yellow-500">a</span>
          <span className="transition hover:text-yellow-500">s</span>
          <span className="transition hover:text-yellow-500">h</span>
          <span className="transition hover:text-yellow-500">b</span>
          <span className="transition hover:text-yellow-500">o</span>
          <span className="transition hover:text-yellow-500">a</span>
          <span className="transition hover:text-yellow-500">r</span>
          <span className="transition hover:text-yellow-500">d</span>
        </div>
      </div>
      <MyList animals={animals} />
      <MySessions sessionAnimals={sessionAnimals} />
    </>
  );
};
export default DashboardClient;
