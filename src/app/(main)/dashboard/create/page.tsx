import { getUserWaitlists } from "@/db/queries/waitlist";
import { getCurrentUser } from "@/features/auth";
import { CreateWaitlist } from "@/features/main/components";

export default async function CreateWaitlistPage() {
    const user = await getCurrentUser();
    const userWaitlists = await getUserWaitlists(user!.id);

    return (
        <div className="flex items-center justify-center py-24 md:py-36">
            <CreateWaitlist onboard={userWaitlists.length > 0 ? false : true} />
        </div>
    );
}
