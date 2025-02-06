"use server";

import { signIn } from "@/auth";

export async function magicLogin(email: string) {}

export async function googleLogin() {
    await signIn("google", {
        redirect: true,
        redirectTo: "/dashboard",
    });
}
