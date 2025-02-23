import { NextRequest, NextResponse } from "next/server";

import { getWaitlistBySlug } from "@/db/queries/waitlist";

export async function POST(req: NextRequest, res: NextResponse) {
    const { slug, userId, id } = await req.json();

    if (!userId) {
        return NextResponse.json({
            error: "userId is required",
        });
    }

    if (slug) {
        const response = await getWaitlistBySlug(slug, userId);

        if (response && response.id) {
            return NextResponse.json({ waitlist: response });
        }
    }

    return NextResponse.json({
        waitlist: null,
    });
}
