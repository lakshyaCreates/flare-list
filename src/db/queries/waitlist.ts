"use server";

import db, { Waitlist, waitlists } from "..";
import { eq } from "drizzle-orm";

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
