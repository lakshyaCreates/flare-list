import type { AdapterAccountType } from "next-auth/adapters";

import {
    boolean,
    integer,
    json,
    pgTable,
    primaryKey,
    text,
    timestamp,
} from "drizzle-orm/pg-core";
import { z } from "zod";

type FontWeight =
    | "light"
    | "normal"
    | "medium"
    | "semibold"
    | "bold"
    | "extrabold";

type Templates = "modern" | "minimalistic";

export type ContentData = {
    logoType: "text" | "image";
    logoText: string | null;
    logoImage: string | null;
    logoIcon: string | null;
    logoPosition: "left" | "right";
    font: string;
    fontWeights: {
        h1: FontWeight;
        h2: FontWeight;
        p: FontWeight;
    };
    template: Templates;
    badgeText: string;
    headline: string;
    subtitle: string;
    inputPlaceholder: string;
    cta: string;
    socialProof: string;
    socials: {
        x: string | null;
        medium: string | null;
        instagram: string | null;
        facebook: string | null;
        youtube: string | null;
        linkedin: string | null;
    };
    successModal: {
        title: string;
        description: string;
    };
    seo: {
        title: string;
        description: string;
    };
};

export const contentData = z.custom<ContentData>();

export const waitlists = pgTable("waitlist", {
    id: text("id")
        .primaryKey()
        .$defaultFn(() => crypto.randomUUID()),
    name: text("name"),
    slug: text("slug").unique(),
    userId: text("userId")
        .notNull()
        .references(() => users.id, { onDelete: "cascade" }),
    content: json()
        .$type<ContentData>()
        .notNull()
        .default({
            logoType: "text",
            logoText: "",
            logoImage: null,
            logoIcon: "",
            logoPosition: "left",
            font: "",
            fontWeights: {
                h1: "extrabold",
                h2: "semibold",
                p: "normal",
            },
            template: "modern",
            badgeText: "Sign up now and get 50% off at launch",
            headline: "Software that sparks your imagination",
            subtitle:
                "Unleash your creativity with our innovative software. From concept to creation, we provide the tools you need to bring your ideas to life.",
            inputPlaceholder: "Your email",
            cta: "Join The Waitlist",
            socialProof: "Join 2,146 others waiting for the best app ever!",
            socials: {
                x: "https://x.com/yourcompany",
                instagram: "https://instagram.com/your_username",
                facebook: null,
                medium: null,
                youtube: null,
                linkedin: null,
            },
            successModal: {
                title: "Thank your for joining",
                description: "Have some questions? Feel free to reach out!",
            },
            seo: {
                title: "Join waitlist",
                description: "Be the first to know when we launch",
            },
        }),
});

export type Waitlist = typeof waitlists.$inferSelect;

export const users = pgTable("user", {
    id: text("id")
        .primaryKey()
        .$defaultFn(() => crypto.randomUUID()),
    name: text("name"),
    email: text("email").unique(),
    emailVerified: timestamp("emailVerified", { mode: "date" }),
    image: text("image"),
});

export type User = typeof users.$inferSelect;

export const accounts = pgTable(
    "account",
    {
        userId: text("userId")
            .notNull()
            .references(() => users.id, { onDelete: "cascade" }),
        type: text("type").$type<AdapterAccountType>().notNull(),
        provider: text("provider").notNull(),
        providerAccountId: text("providerAccountId").notNull(),
        refresh_token: text("refresh_token"),
        access_token: text("access_token"),
        expires_at: integer("expires_at"),
        token_type: text("token_type"),
        scope: text("scope"),
        id_token: text("id_token"),
        session_state: text("session_state"),
    },
    (account) => [
        {
            compoundKey: primaryKey({
                columns: [account.provider, account.providerAccountId],
            }),
        },
    ],
);

export const sessions = pgTable("session", {
    sessionToken: text("sessionToken").primaryKey(),
    userId: text("userId")
        .notNull()
        .references(() => users.id, { onDelete: "cascade" }),
    expires: timestamp("expires", { mode: "date" }).notNull(),
});

export const verificationTokens = pgTable(
    "verificationToken",
    {
        identifier: text("identifier").notNull(),
        token: text("token").notNull(),
        expires: timestamp("expires", { mode: "date" }).notNull(),
    },
    (verificationToken) => [
        {
            compositePk: primaryKey({
                columns: [
                    verificationToken.identifier,
                    verificationToken.token,
                ],
            }),
        },
    ],
);

export const authenticators = pgTable(
    "authenticator",
    {
        credentialID: text("credentialID").notNull().unique(),
        userId: text("userId")
            .notNull()
            .references(() => users.id, { onDelete: "cascade" }),
        providerAccountId: text("providerAccountId").notNull(),
        credentialPublicKey: text("credentialPublicKey").notNull(),
        counter: integer("counter").notNull(),
        credentialDeviceType: text("credentialDeviceType").notNull(),
        credentialBackedUp: boolean("credentialBackedUp").notNull(),
        transports: text("transports"),
    },
    (authenticator) => [
        {
            compositePK: primaryKey({
                columns: [authenticator.userId, authenticator.credentialID],
            }),
        },
    ],
);
