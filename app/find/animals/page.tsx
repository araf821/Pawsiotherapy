import Container from "@/app/components/Container";
import getAnimals from "@/app/actions/getAnimals";
import EmptyState from "@/app/components/EmptyState";
import AnimalClient from "./AnimalClient";

const AllAnimalsPage = async () => {
  let animals = await getAnimals();

  if (animals.length === 0) {
    return (
      <EmptyState
        title="No Animals? ;("
        subtitle="Looks like there are no animals available to book at the moment."
      />
    );
  }

  let shuffledAnimals = animals.sort(() => Math.random() - 0.5);

  return (
    <Container>
      {/* Heading */}
      <div className="mt-6 text-xl font-semibold md:text-2xl lg:text-3xl">
        Find Animals Near You!
        <hr className="mt-2" />
      </div>
      <AnimalClient
        //@ts-ignore
        animals={shuffledAnimals}
      />
    </Container>
  );
};
export default AllAnimalsPage;
