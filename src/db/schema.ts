import type { AdapterAccountType } from "next-auth/adapters";

import {
    boolean,
    timestamp,
    pgTable,
    text,
    primaryKey,
    integer,
    index,
    pgEnum,
} from "drizzle-orm/pg-core";

const fontWeights = pgEnum("fontWeights", [
    "light",
    "normal",
    "medium",
    "semibold",
    "bold",
    "extrabold",
]);

const showcaseType = pgEnum("showcaseType", ["disabled", "video", "image"]);
const logoType = pgEnum("logoType", ["text", "image"]);

export const preferences = pgTable("preference", {
    id: text("id")
        .primaryKey()
        .$defaultFn(() => crypto.randomUUID()),
    waitlistId: text("waitlistId")
        .notNull()
        .references(() => waitlists.id, { onDelete: "cascade" }),

    logoType: logoType().default("text"),
    font: text("font").default("Bricolage Grotesque").notNull(),
    h1Weight: fontWeights().default("extrabold"),
    h2Weight: fontWeights().default("semibold"),
    pWeight: fontWeights().default("normal"),
    badge: text("badge").default("Sign up now and get 50% off at launch"),
    headline: text("headline").default("Software that sparks your imagination"),
    subtitle: text("subtitle").default(
        "Unleash your creativity with our innovative software. From concept to creation, we provide the tools you need to bring your ideas to life.",
    ),
    cta: text("Join The Waitlist"),
    inputPlaceholder: text("Your email"),
    socialProof: text("Join 1234+ others waiting for the best app ever!"),
    xUrl: text("https://x.com/yourcompany"),
    instaUrl: text("https://instagram.com/yourusernmae"),
    ytUrl: text("https://youtube.com/yourchannel"),
    linkedInUrl: text("https://linkedin.com/yourusername"),
    showcaseType: showcaseType().default("disabled"),
});

export const waitlists = pgTable(
    "waitlist",
    {
        id: text("id")
            .primaryKey()
            .$defaultFn(() => crypto.randomUUID()),
        name: text("name"),
        slug: text("slug").unique(),
        userId: text("userId")
            .notNull()
            .references(() => users.id, { onDelete: "cascade" }),
    },
    (waitlist) => [
        index("waitlist_user_idx").on(waitlist.name, waitlist.userId),
    ],
);
export type Waitlists = typeof waitlists.$inferSelect;

export const users = pgTable("user", {
    id: text("id")
        .primaryKey()
        .$defaultFn(() => crypto.randomUUID()),
    name: text("name"),
    email: text("email").unique(),
    emailVerified: timestamp("emailVerified", { mode: "date" }),
    image: text("image"),
});

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
