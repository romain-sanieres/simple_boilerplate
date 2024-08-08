import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";

// Import database to avoid multiple requests
import { db } from "./db";

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  adapter: PrismaAdapter(db), // Utilisation de Prisma comme adaptateur pour la base de données
  session: { strategy: "jwt" }, //Utilisation de JWT pour la gestion des sessions
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      // Configuration to force account selection
      authorization: {
        params: {
          prompt: "select_account",
        },
      },
    }),
  ],
});
