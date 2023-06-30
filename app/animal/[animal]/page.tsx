import getAnimalById from "@/app/actions/getAnimalById";
import EmptyState from "@/app/components/EmptyState";
import Image from "next/image";
import BookingSection from "./BookingSection";
import getCurrentUser from "@/app/actions/getCurrentUser";
import getUserById from "@/app/actions/getUserById";
import { Lilita_One } from "next/font/google";

const lilita = Lilita_One({
  weight: "400",
  subsets: ["latin"],
});

export const dynamic = "force-dynamic";

interface IParams {
  animalId?: string;
}

const SingleAnimalPage = async ({ params }: { params: IParams }) => {
  //@ts-ignore
  const { animal } = params;
  const animalId = animal ? animal.toString() : undefined;

  const animalData = await getAnimalById({ animalId });

  if (!animalData) {
    return (
      <EmptyState
        button
        title="404 Page Not Found"
        subtitle="WHAT DID YOU DO?!"
      />
    );
  }

  const provider = await getUserById(animalData.userId);
  const currentUser = await getCurrentUser();

  return (
    <div className="mx-auto flex w-full max-w-[1250px] flex-col justify-center">
      {/* Animal Info and Showcase */}
      <div className="my-8 p-3 xl:p-0 ">
        <div className="w-full">
          {/* Name */}
          <div
            className={`${lilita.className} rounded-t-lg border-b-[1px] border-zinc-600 bg-zinc-800 py-2 text-center text-2xl text-white sm:text-3xl lg:text-4xl xl:text-5xl`}
          >
            {animalData.name}
          </div>

          <div className="flex flex-col gap-4 md:flex-row">
            {/* Image */}
            <div className="relative h-[300px] w-full overflow-hidden shadow-md transition duration-300 hover:shadow-2xl sm:h-[400px] lg:h-[500px]">
              <Image
                alt={animalData.name}
                src={animalData.image}
                fill
                className=" object-cover"
              />
            </div>

            {/* Info */}
            <div className="flex w-full flex-col justify-center gap-4 text-center capitalize">
              {/* Personality */}
              <div className="">
                <p className="text-sm font-semibold">PERSONALITY</p>
                <p className="text-lg font-light md:text-xl">
                  {animalData.personality}
                </p>
              </div>

              {/* Species */}
              <div className="">
                <p className="text-sm font-semibold">SPECIES</p>
                <p className="text-lg font-light md:text-xl">
                  {animalData.species}
                </p>
              </div>

              {/* Breed */}
              <div className="">
                <p className="text-sm font-semibold">BREED</p>
                <p className="text-lg font-light md:text-xl">
                  {animalData.breed === "" ? "N/A" : animalData.breed}
                </p>
              </div>

              {/* Age */}
              <div className="">
                <p className="text-sm font-semibold">AGE</p>
                <p className="text-lg font-light md:text-xl">
                  {animalData.age} Years Old
                </p>
              </div>

              {/* Location */}
              <div className="">
                <p className="text-sm font-semibold">LOCATION</p>
                <p className="text-lg font-light md:text-xl">
                  {animalData.location}
                </p>
              </div>
            </div>
          </div>

          <hr className="my-4" />

          {/* Bio */}
          <div className="flex flex-col items-center contain-word">
            <p className="text-sm font-semibold">BIO</p>
            <p className="max-w-[700px] text-justify text-lg font-light md:text-center md:text-2xl lg:max-w-[900px]">
              {animalData.description}
            </p>
          </div>
        </div>
      </div>

      <BookingSection
        animalId={animalData.id}
        animalName={animalData.name}
        currentUser={currentUser}
        //@ts-ignore
        provider={provider}
      />
    </div>
  );
};
export default SingleAnimalPage;
