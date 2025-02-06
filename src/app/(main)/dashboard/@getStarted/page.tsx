import { getCurrentUser } from "@/features/auth";
import { WaitlistOnboarder } from "@/features/main";

export default async function GetStartedSlot() {
    const user = await getCurrentUser();
    const userId = user!.id;

    return (
        <div className="flex items-center justify-center py-16 sm:py-24 md:py-36">
            <WaitlistOnboarder userId={userId} />
        </div>
    );
}
