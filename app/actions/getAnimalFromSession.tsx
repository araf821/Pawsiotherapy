import prismaClient from "../lib/prismadb";

export default async function getAnimalFromSession(animalId: string) {
  try {
    const animal = await prismaClient.animal.findUnique({
      where: {
        id: animalId,
      },
    });

    if (!animal) {
      return null;
    }

    return {
      ...animal,
      createdAt: animal.createdAt.toISOString(),
      updatedAt: animal.updatedAt.toISOString(),
    };
  } catch (error: any) {
    throw new Error(error);
  }
}
