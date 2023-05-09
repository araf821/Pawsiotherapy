import getAnimalById from "@/app/actions/getAnimalById";
import Container from "@/app/components/Container";
import EmptyState from "@/app/components/EmptyState";
import Image from "next/image";
import BookingSection from "./BookingSection";
import getCurrentUser from "@/app/actions/getCurrentUser";
import getUserById from "@/app/actions/getUserById";

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
      <div className="px-2 lg:px-0">
        <div className="border-1 relative my-8 flex flex-col items-center justify-between gap-4 rounded-lg border-neutral-400  shadow-lg md:flex-row md:gap-8 lg:gap-12 xl:gap-16">
          {/* Image */}
          <div className="relative h-[300px] w-full overflow-hidden rounded-t-lg shadow-2xl sm:h-[400px] md:rounded-none lg:h-[500px] lg:rounded-l-lg">
            <Image
              alt={animalData.name}
              src={animalData.image}
              fill
              className=" object-cover transition duration-500 hover:scale-110"
            />
          </div>
          {/* Info */}
          <div className=" flex w-full flex-col gap-3 p-3 capitalize sm:gap-4">
            <p>
              <span className="bg-zinc-800 px-2 py-1 text-xl font-semibold text-white md:text-2xl">
                {animalData.name}
              </span>
            </p>
            <p className="text-lg md:text-xl">
              <span className="bg-zinc-800 px-2 py-1 text-white">
                <span className="font-semibold">Species: </span>
                {animalData.species}
              </span>
            </p>
            <p className="text-lg md:text-xl">
              <span className="bg-zinc-800 px-2 py-1 text-white">
                <span className="font-semibold">Personality: </span>
                {animalData.personality}
              </span>
            </p>

            <p className="text-lg md:text-xl">
              <span className="bg-zinc-800 px-2 py-1 text-white">
                <span className="font-semibold">Age: </span>
                {animalData.age}
              </span>
            </p>
              <p className="text-lg md:text-xl">
                <span className="bg-zinc-800 px-2 py-1 text-white">
                  <span className="font-semibold">Breed: </span>
                  {animalData?.breed || "N/A"}
                </span>
              </p>
            <p className="text-lg md:text-xl">
              <span className="bg-zinc-800 px-2 py-1 text-white">
                <span className="font-semibold">Located At: </span>
                {animalData.location}
              </span>
            </p>
            <p className="text-lg normal-case md:text-xl max-w-[500px] overflow-hidden">
              <span className="font-semibold">
                <span className="bg-zinc-800 px-1 text-white">Bio:</span>
              </span>{" "}
              {animalData.description}
            </p>
          </div>
        </div>
        <hr />
      </div>
      <BookingSection
        animalId={animalData.id}
        currentUser={currentUser}
        //@ts-ignore
        provider={provider}
      />
    </div>
  );
};
export default SingleAnimalPage;
