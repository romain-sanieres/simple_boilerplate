import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";

// Import database to avoid multiple requests
import { db } from "./db";

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  adapter: PrismaAdapter(db), // Using Prisma as the database adapter
  session: { strategy: "jwt" }, // Using JWT for session management
  providers: [
    // Declare your environment variables with the names specified in the documentation to avoid having to enter clientId and client secret in this component
    // exemple google : https://authjs.dev/getting-started/providers/google
    Google({
      // Configuration to force account selection
      authorization: {
        params: {
          prompt: "select_account",
        },
      },
    }),
    Github({
      // Configuration to force account selection
      authorization: {
        params: {
          prompt: "select_account",
        },
      },
    }),
    // Add more providers
  ],
});
