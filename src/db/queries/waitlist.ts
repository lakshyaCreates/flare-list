"use server";

import db from "..";
import { Waitlists, waitlists } from "../schema";
import { eq } from "drizzle-orm";

export async function getUserWaitlists(userId: string): Promise<Waitlists[]> {
    return await db
        .select()
        .from(waitlists)
        .where(eq(waitlists.userId, userId));
}

export async function getWaitlistBySlug(slug: string): Promise<Waitlists> {
    return await db
        .select()
        .from(waitlists)
        .where(eq(waitlists.slug, slug))
        .then((res) => res[0]);
}

export async function createWaitlist(data: Omit<Waitlists, "id">) {
    return await db
        .insert(waitlists)
        .values({
            ...data,
        })
        .returning({
            id: waitlists.id,
        })
        .then((res) => res[0]);
}

export async function getWaitlistByUserId(userId: string) {
    return await db
        .select()
        .from(waitlists)
        .where(eq(waitlists.userId, userId))
        .then((res) => res[0]);
}

export async function getWaitlistById(id: string) {
    return await db
        .select()
        .from(waitlists)
        .where(eq(waitlists.id, id))
        .then((res) => res[0]);
}
