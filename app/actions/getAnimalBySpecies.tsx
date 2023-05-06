import prismaClient from "../lib/prismadb";

interface IParams {
  species?: string;
}

export default async function getAnimalsBySpecies(params: IParams) {
  try {
    let { species } = params;

    if (!species) {
      return null;
    }

    const animals = await prismaClient.animal.findMany({
      where: {
        species: species,
      },
    });

    if (!animals) {
      return null;
    }

    const safeAnimals = animals.map((animal) => ({
      ...animal,
      createdAt: animal.createdAt.toISOString(),
    }));

    return safeAnimals;
  } catch (error: any) {
    throw new Error(error);
  }
}
