import getCurrentUser from "@/app/actions/getCurrentUser";
import prismaClient from "@/app/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();

  const { date, providerId, bookerId, animalId } = body;

  const session = await prismaClient.session.create({
    data: {
      date,
      providerId,
      bookerId,
      animalId,
    },
  });

  const user = await prismaClient.user.update({
    where: {
      id: bookerId,
    },
    data: {
      sessionsAsBooker: {
        connect: {
          id: session.id,
        },
      },
    },
    include: { sessionsAsBooker: true },
  });

  return NextResponse.json({ session, user });
}
