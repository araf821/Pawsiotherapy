import prismaClient from "../lib/prismadb";

interface IParams {
  animalId?: string;
}

export default async function getAnimalById(params: IParams) {
  try {
    const { animalId } = params;

    const animal = await prismaClient.animal.findFirst({
      where: {
        id: animalId,
      },
      include: {
        user: true,
      },
    });

    if (!animal) {
      return null;
    }

    return {
      ...animal,
      createdAt: animal.createdAt.toISOString(),
      user: {
        ...animal.user,
        createdAt: animal.user.createdAt.toISOString(),
        updatedAt: animal.user.updatedAt.toISOString(),
        emailVerified: animal.user.emailVerified?.toISOString() || null,
      },
    };
  } catch (error: any) {
    throw new Error(error);
  }
}
