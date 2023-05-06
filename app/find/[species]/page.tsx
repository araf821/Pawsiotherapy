import getAnimalsBySpecies from "@/app/actions/getAnimalBySpecies";
import Container from "@/app/components/Container";
import EmptyState from "@/app/components/EmptyState";

interface IParams {
  species?: string;
}

const AnimalsBySpeciesPage = async ({ params }: { params: IParams }) => {
  //@ts-ignore
  const animals = await getAnimalsBySpecies(params);
  console.log(animals);
  
  if (animals?.length === 0) {
    return (
      <EmptyState
        title="No Animals? ;("
        subtitle="Looks like there are no animals available to book at the moment."
      />
    );
  }

  return (
    <Container>
      {/* Heading */}
      <div className="mt-6 text-xl font-semibold md:text-2xl lg:text-3xl">
        Find Animals Near You!
        <hr className="mt-2" />
      </div>
    </Container>
  );
};
export default AnimalsBySpeciesPage;
