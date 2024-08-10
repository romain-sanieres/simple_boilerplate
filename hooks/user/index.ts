"use server";

import { auth } from "@/auth";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getUser = async () => {
  const session = await auth();
  if (!session?.user?.email) {
    throw new Error("User ID is not available.");
  }
  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
    include: {
      accounts: true,
    },
  });
  return user;
};