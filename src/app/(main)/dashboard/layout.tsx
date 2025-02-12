import { getUserWaitlists } from "@/db/queries/waitlist";
import { getCurrentUser } from "@/features/auth";

export default async function DashboardLayout({
    children,
    create,
}: {
    children: React.ReactNode;
    create: React.ReactNode;
}) {
    const user = await getCurrentUser();
    const waitlists = await getUserWaitlists(user!.id);

    if (waitlists.length === 0) return <>{create}</>;

    return <>{children}</>;
}
