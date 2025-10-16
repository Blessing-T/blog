import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";
import connectToDB from "@/lib/mongodb";
import User from "@/models/user";
import bcrypt from "bcryptjs";
import type { Types } from "mongoose";
import NextAuth from "next-auth";

export const authOptions: NextAuthConfig = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null;
        const { email, password } = credentials as { email: string; password: string };
  await connectToDB();
  const user = await User.findOne({ email }) as { _id: Types.ObjectId; name: string; email: string; password: string; username: string };
        if (!user) return null;
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) return null;
        return { id: user._id.toString(), name: user.name, email: user.email, username: user.username };
      },
    }),
  ],
  session: { strategy: "jwt" },
  pages: {
    signIn: "/signIn",
  },
};

export default authOptions;

// Initialize NextAuth with the provided options and export the
// handlers/auth helper for use in the app router.
const nextAuthResult = NextAuth(authOptions as NextAuthConfig);
export const { handlers, auth } = nextAuthResult;
export const GET = handlers.GET;
export const POST = handlers.POST;
