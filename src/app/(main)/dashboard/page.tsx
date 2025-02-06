import { redirect } from "next/navigation";

import { getUserWaitlists } from "@/db";
import { getCurrentUser } from "@/features/auth";

export default async function DashboardPage() {
    const user = await getCurrentUser();
    const waitlists = await getUserWaitlists(user!.id);

    redirect(`/dashboard/${waitlists[0].id}`);
}
