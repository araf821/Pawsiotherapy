import Container from "@/app/components/Container";
import getAnimals from "@/app/actions/getAnimals";
import EmptyState from "@/app/components/EmptyState";
import AnimalClient from "./AnimalClient";

const AllAnimalsPage = async () => {
  const animals = await getAnimals();

  if (animals.length === 0) {
    return <EmptyState />;
  }

  console.log(animals);

  return (
    <Container>
      {/* Heading */}
      <div className="mt-6 text-xl font-semibold md:text-2xl lg:text-3xl">
        Find Animals Near You!
        <hr className="mt-2" />
      </div>
      <AnimalClient
        //@ts-ignore
        animals={animals}
      />
    </Container>
  );
};
export default AllAnimalsPage;
