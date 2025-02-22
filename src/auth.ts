import NextAuth from "next-auth";

import { DrizzleAdapter } from "@auth/drizzle-adapter";

import authConfig from "./auth.config";
import db from "@/db";
import { getUserById } from "@/db";

export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter: DrizzleAdapter(db),
    session: { strategy: "jwt" },
    pages: {
        signIn: "/login",
    },
    callbacks: {
        async session({ token, session }) {
            if (!token.email) {
                throw new Error("No email found in token");
            }

            if (token.sub && session.user) {
                session.user.id = token.sub;
            }

            if (session.user) {
                session.user.name = token.name;
                session.user.email = token.email;
            }

            return session;
        },

        async jwt({ token }) {
            if (!token.sub) return token;

            const existingUser = await getUserById(token.sub);
            if (!existingUser) return token;

            token.name = existingUser.name;
            token.email = existingUser.email;

            return token;
        },
    },
    ...authConfig,
});
