import { redirect } from "next/navigation";

import { getWaitlistByUserId } from "@/db";
import { getCurrentUser } from "@/features/auth";

export default async function WaitlistSlugLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const user = await getCurrentUser();
    const waitlist = await getWaitlistByUserId(user!.id);

    if (!waitlist || !waitlist.id) {
        redirect("/dashboard");
    }

    return <>{children}</>;
}
