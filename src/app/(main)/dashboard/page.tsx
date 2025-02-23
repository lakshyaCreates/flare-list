import { redirect } from "next/navigation";

import { getUserWaitlists } from "@/db/queries/waitlist";
import { getCurrentUser } from "@/features/auth";

export default async function DashboardPage() {
    const user = await getCurrentUser();
    const userWaitlists = await getUserWaitlists(user!.id);

    if (userWaitlists.length === 0) redirect("/dashboard/create");
    if (userWaitlists.length > 0) redirect(`/dashboard/${userWaitlists[0].id}`);

    return null;
}
