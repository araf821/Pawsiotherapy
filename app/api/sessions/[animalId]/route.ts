import getCurrentUser from "@/app/actions/getCurrentUser";
import prismaClient from "@/app/lib/prismadb";
import { NextResponse } from "next/server";

interface IParams {
  animalId?: string;
}

export async function DELETE(
  request: Request,
  { params }: { params: IParams }
) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { animalId } = params;
  if (!animalId || typeof animalId !== "string") {
    throw new Error("Invalid animal ID.");
  }

  const sessions = await prismaClient.session.deleteMany({
    where: {
      animalId: animalId,
    },
  });

  return NextResponse.json(sessions);
}
