import prismaClient from "../lib/prismadb";

interface IParams {
  animalId?: string;
}

export default async function getAnimalById(params: IParams) {
  try {
    const { animalId } = params;

    if (!animalId) {
      console.log("null");
      
      return null;
    }

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
    };
  } catch (error: any) {
    throw new Error(error);
  }
}