import prismaClient from "../lib/prismadb";

export default async function getAnimals() {
  try {
    const animals = await prismaClient.animal.findMany();

    const safeAnimals = animals.map((animal) => ({
      ...animal,
      createdAt: animal.createdAt.toISOString(),
      updated: animal.updatedAt.toISOString(),
    }));

    return safeAnimals;
  } catch (error: any) {
    throw new Error(error);
  }
}
