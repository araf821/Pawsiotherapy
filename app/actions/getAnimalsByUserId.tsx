import prismaClient from "../lib/prismadb";

export default async function getAnimalsByUserId(userId: string) {
  try {

    const animals = await prismaClient.animal.findMany({
      where: {
        userId: userId,
      },
    });

    if (!animals) {
      return null;
    }

    const safeAnimals = animals.map((animal) => ({
      ...animal,
      createdAt: animal.createdAt.toISOString(),
      updatedAt: animal.updatedAt.toISOString(),
    }));

    return safeAnimals;
  } catch (error: any) {
    throw new Error(error);
  }
}
