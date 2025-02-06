"use server";

import db from "..";
import { users } from "../schema";
import { eq } from "drizzle-orm";

export async function getUserById(id: string) {
    return await db
        .select()
        .from(users)
        .where(eq(users.id, id))
        .then((res) => res[0]);
}
