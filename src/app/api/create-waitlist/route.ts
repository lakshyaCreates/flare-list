import { NextRequest, NextResponse } from "next/server";

import { createWaitlist, Waitlist } from "@/db";

export async function POST(req: NextRequest, res: NextResponse) {
    const {
        data,
    }: {
        data: Omit<Waitlist, "id" | "content">;
    } = await req.json();

    const response = await createWaitlist(data);
    if (response && response.id) {
        return NextResponse.json({ waitlistId: response.id });
    }

    return NextResponse.json({
        waitlistId: null,
    });
}
