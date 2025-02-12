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

const seedPreferenceData: Waitlists["preferences"] = {
    font: "Bricolage Grotesque",
    badge: "Sign up now and get 50% off",
    cta: "Join the waitlist",
    h1Weight: "extrabold",
    h2Weight: "semibold",
    pWeight: "normal",
    headline: "Launch your waitlist without writing code",
    inputPlaceholder: "Your email address",
    logoType: "text",
    subtitle:
        "Unleash your creativity with our innovative software. From concept to creation, we provide the tools you need to bring your ideas to life.",
};

export async function createWaitlist(data: Omit<Waitlists, "id">) {
    return await db
        .insert(waitlists)
        .values({
            ...data,
            // preferences: seedPreferenceData,
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
