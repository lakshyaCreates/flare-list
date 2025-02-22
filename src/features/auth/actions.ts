"use server";

import { signIn } from "@/auth";
import { signOut } from "@/auth";

export async function magicLogin(email: string) {}

export async function googleLogin() {
    await signIn("google", {
        redirect: true,
        redirectTo: "/dashboard",
    });
}

export async function signInUser(type: "google" | "magicLink") {
    if (type === "google") {
        await signIn("google", {
            redirect: true,
            redirectTo: "/dashboard",
        });
    }

    if (type === "magicLink") {
    } else return;
}

export async function signOutUser() {
    "use server";
    await signOut({ redirect: true, redirectTo: "/" });
    return;
}
