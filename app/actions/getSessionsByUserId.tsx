import prismaClient from "../lib/prismadb";

export default async function getSessionsByUserId(userId: string) {
  try {

    const sessions = await prismaClient.session.findMany({
      where: {
        bookerId: userId,
      },
      select: {
        Animal: true,
      },
    });

    const animals = sessions.map((session) => ({
      ...session.Animal,
    }));

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
