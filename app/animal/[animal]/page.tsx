import getAnimalById from "@/app/actions/getAnimalById";
import Container from "@/app/components/Container";
import EmptyState from "@/app/components/EmptyState";
import Image from "next/image";
import BookingSection from "./BookingSection";
import getCurrentUser from "@/app/actions/getCurrentUser";
import getUserById from "@/app/actions/getUserById";

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
      <Container small>
        <div className="my-8 flex flex-col items-center justify-between gap-4 rounded-lg border-2 border-neutral-400 p-2 shadow-lg sm:p-6 md:flex-row md:gap-8 lg:gap-12 xl:gap-16">
          {/* Image */}
          <div className="relative h-[400px] w-full overflow-hidden rounded-lg bg-yellow-500 p-4 shadow-2xl">
            <Image
              alt={animalData.name}
              src={animalData.image}
              fill
              className="rounded-lg object-cover transition duration-500 hover:scale-110"
            />
          </div>
          {/* Info */}
          <div className="flex w-full flex-col gap-3 capitalize sm:gap-4">
            <p>
              <span className="bg-zinc-800 px-2 py-1 text-3xl font-semibold text-white">
                {animalData.name}
              </span>
            </p>
            <p className="text-xl">
              <span className="bg-zinc-800 px-2 py-1 text-white">
                <span className="font-semibold">Species: </span>
                {animalData.species}
              </span>
            </p>
            <p className="text-xl">
              <span className="bg-zinc-800 px-2 py-1 text-white">
                <span className="font-semibold">Personality: </span>
                {animalData.personality}
              </span>
            </p>

            <p className="text-xl">
              <span className="bg-zinc-800 px-2 py-1 text-white">
                <span className="font-semibold">Age: </span>
                {animalData.age}
              </span>
            </p>
            {animal.breed !== "" && (
              <p className="text-xl">
                <span className="bg-zinc-800 px-2 py-1 text-white">
                  <span className="font-semibold">Breed: </span>
                  {animalData.breed}
                </span>
              </p>
            )}
            <p className="text-xl">
              <span className="bg-zinc-800 px-2 py-1 text-white">
                <span className="font-semibold">Located At: </span>
                {animalData.location}
              </span>
            </p>
            <p className="text-lg normal-case">
              <span className="font-semibold">Bio: </span>{" "}
              {animalData.description}
            </p>
          </div>
        </div>
        <hr />
      </Container>
      <BookingSection
        currentUser={currentUser}
        //@ts-ignore
        provider={provider}
      />
    </div>
  );
};
export default SingleAnimalPage;
