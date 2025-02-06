import { LoadWebsiteId } from "./load-website.id";
import { getWaitlistById } from "@/db";

interface Props {
    params: Promise<{ id: string }>;
}

export default async function WaitlistSlugPage({ params }: Props) {
    const { id } = await params;
    const waitlist = await getWaitlistById(id);

    return (
        <div>
            this is the dashboard for: {waitlist.name}
            <LoadWebsiteId />
        </div>
    );
}
