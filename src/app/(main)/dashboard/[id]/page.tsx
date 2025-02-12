import { LoadWebsiteId } from "./load-website.id";
import { getWaitlistById } from "@/db";
import { getCurrentUser } from "@/features/auth";
import { WaitlistOnboarder } from "@/features/main";

interface Props {
    params: Promise<{ id: string }>;
}

export default async function WaitlistSlugPage({ params }: Props) {
    const { id } = await params;
    const userId = await getCurrentUser().then((res) => res!.id);

    if (id === "create")
        return (
            <div className="flex items-center justify-center py-16 sm:py-24 md:py-36">
                <WaitlistOnboarder userId={userId} />
            </div>
        );

    const waitlist = await getWaitlistById(id);

    return (
        <div>
            this is the dashboard for: {waitlist.name}
            <LoadWebsiteId />
        </div>
    );
}
