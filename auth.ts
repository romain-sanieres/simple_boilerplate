import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import bcrypt, { compare, compareSync } from "bcryptjs";
import { db } from "./db";
import Credentials from "next-auth/providers/credentials";
import { hashPassword } from "./utils/hash";
import { signInSchema } from "./schema";

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
    Credentials({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },

      authorize: async (credentials) => {
        const email = credentials.email as string;
        const hash = hashPassword(credentials.password);

        let user: any = await db.user.findUnique({
          where: {
            email,
          },
        });

        if (!user) {
          user = await db.user.create({
            data: {
              name: email,
              email,
              password: hash,
              createdAt: new Date(),
              accounts: {
                create: {
                  type: "credentials",
                  provider: "email",
                  providerAccountId: email,
                },
              },
            },
          });
        } else {
          const isPasswordValid = compareSync(
            credentials.password as string,
            user.password
          );
          if (!isPasswordValid) {
            return null;
          }
        }
        return user;
      },
    }),
    // Add more providers
  ],
});
