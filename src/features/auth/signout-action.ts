"use server";

import { signOut } from "@/auth";

export async function signout() {
    await signOut({ redirect: true, redirectTo: "/" });
    return;
}
