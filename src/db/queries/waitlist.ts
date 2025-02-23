"use server";

import db, { Waitlist, waitlists } from "..";
import { eq, and } from "drizzle-orm";

export async function getWaitlistById(id: string): Promise<Waitlist> {
    return await db
        .select()
        .from(waitlists)
        .where(eq(waitlists.id, id))
        .then((res) => res[0]);
}

export async function getUserWaitlists(userId: string): Promise<Waitlist[]> {
    return await db
        .select()
        .from(waitlists)
        .where(eq(waitlists.userId, userId));
}

export async function getWaitlistBySlug(
    slug: string,
    userId: string,
): Promise<Waitlist> {
    return await db
        .select()
        .from(waitlists)
        .where(and(eq(waitlists.slug, slug), eq(waitlists.userId, userId)))
        .then((res) => res[0]);
}
