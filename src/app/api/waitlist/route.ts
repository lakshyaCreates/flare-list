import { NextRequest, NextResponse } from "next/server";

import { type Waitlist, createWaitlist } from "@/db";
import { getWaitlistBySlug } from "@/db/queries/waitlist";

interface Props {
    slug?: string;
    userId: string;
    id?: string;
    createData?: Omit<Waitlist, "id" | "content">;
}

export async function POST(req: NextRequest, res: NextResponse) {
    const { slug, userId, id, createData }: Props = await req.json();

    if (!userId) {
        return NextResponse.json({
            error: "userId is required",
        });
    }

    if (slug !== undefined) {
        const response = await getWaitlistBySlug(slug);

        if (response && response.id) {
            return NextResponse.json({ waitlist: response });
        }
    }

    if (createData) {
        // console.log(createData);
        // const response = await createWaitlist(createData);
        // if (response && response.id) {
        //     return NextResponse.json({ waitlistId: response.id });
        // }
    }

    return NextResponse.json({
        waitlist: null,
    });
}
