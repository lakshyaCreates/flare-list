import { NextRequest, NextResponse } from "next/server";

import { getWaitlistBySlug } from "@/db";

export async function GET(req: NextRequest, res: NextResponse) {
    const searchParams = req.nextUrl.searchParams;
    const slug = searchParams.get("slug");

    if (!slug) {
        return NextResponse.json({
            error: "slug is required",
        });
    }

    const response = await getWaitlistBySlug(slug);

    if (response && response.id) {
        return NextResponse.json({ waitlist: response });
    }

    return NextResponse.json({
        waitlist: null,
    });
}
