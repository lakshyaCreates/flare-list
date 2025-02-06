import { getUserWaitlists } from "@/db/queries/waitlist";
import { getCurrentUser } from "@/features/auth";

export default async function DashboardLayout({
    children,
    getStarted,
}: {
    children: React.ReactNode;
    getStarted: React.ReactNode;
}) {
    const user = await getCurrentUser();
    const waitlists = await getUserWaitlists(user!.id);

    if (waitlists.length === 0) return <>{getStarted}</>;

    return <>{children}</>;
}
