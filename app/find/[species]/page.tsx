import getAnimalsBySpecies from "@/app/actions/getAnimalBySpecies";
import Container from "@/app/components/Container";
import EmptyState from "@/app/components/EmptyState";
import AnimalClient from "../animals/AnimalClient";
import { Lilita_One } from "next/font/google";

const lilita = Lilita_One({
  weight: "400",
  subsets: ["latin"],
});

interface IParams {
  species?: string;
}

const AnimalsBySpeciesPage = async ({ params }: { params: IParams }) => {
  //@ts-ignore
  const animals = await getAnimalsBySpecies(params);

  if (animals?.length === 0) {
    return (
      <EmptyState
        title="No Animals?"
        subtitle="Looks like there are no animals of that specie available at the moment."
        button
      />
    );
  }

  return (
    <Container>
      {/* Heading */}
      <div className="mt-6">
        <p
          className={`${lilita.className} text-3xl font-semibold capitalize lg:text-4xl xl:text-5xl`}
        >
          Find {params.species}s Near You!
        </p>
        <hr className="mt-2" />
        <AnimalClient
          //@ts-ignore
          animals={animals}
        />
      </div>
    </Container>
  );
};
export default AnimalsBySpeciesPage;
