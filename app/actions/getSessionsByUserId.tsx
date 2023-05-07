import prismaClient from "../lib/prismadb";

interface IParams {
  userId?: string;
}

export default async function getSessionsByUserId(params: IParams) {
  try {
    const { userId } = params;

    const sessions = await prismaClient.session.findMany({
      where: {
        bookerId: userId,
      },
    });

    if (!sessions) {
      return null;
    }

    const safeSessions = sessions.map((session) => ({
      ...session,
      createdAt: session.createdAt.toISOString,
      updatedAt: session.updatedAt.toISOString(),
    }));

    return safeSessions;
  } catch (error: any) {
    throw new Error(error);
  }
}
