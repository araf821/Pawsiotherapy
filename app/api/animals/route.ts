import getCurrentUser from "@/app/actions/getCurrentUser";
import prismaClient from "@/app/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();
  const {
    imgSrc: image,
    name,
    species,
    breed,
    age,
    personality,
    location,
    description,
  } = body;

  const animal = await prismaClient.animal.create({
    data: {
      image,
      name,
      species,
      breed,
      age,
      personality,
      location,
      description,
      userId: currentUser.id,
    },
  });

  return NextResponse.json(animal);
}
