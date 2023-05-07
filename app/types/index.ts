import { Animal, Session, User } from "@prisma/client";

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};

export type SafeAnimal = Omit<Animal, "createdAt" | "updatedAt"> & {
  createdAt: string;
  updatedAt: string;
};

export type SafeSession = Omit<Session, "createdAt" | "updatedAt"> & {
  createdAt: string;
  updatedAt: string;
};
