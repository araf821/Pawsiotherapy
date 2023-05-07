import prismaClient from "../lib/prismadb";

export default async function getUserById(userId: string) {
  try {
    const user = await prismaClient.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      return null;
    }

    return {
      ...user,
      createdAt: user.createdAt.toISOString(),
      updatedAt: user.updatedAt.toISOString(),
      emailVerified: user.emailVerified?.toISOString(),
    };
  } catch (error: any) {
    throw new Error(error);
  }
}
