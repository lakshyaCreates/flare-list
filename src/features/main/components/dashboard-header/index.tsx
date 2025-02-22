import { SidebarTrigger } from "@/components/ui/sidebar";

import { UserDropdown } from "./user-dropdown";
import { WaitlistSelector } from "./waitlist-selector";
import { getCurrentUser } from "@/features/auth";

export const DashboardHeader = async () => {
    const user = await getCurrentUser();

    return (
        <header className="flex h-14 w-full shrink-0 items-center gap-2 border-b px-4">
            <div className="flex items-center gap-2 px-4 lg:hidden">
                <SidebarTrigger className="-ml-1" />
            </div>
            <div className="flex w-full items-center justify-between gap-6">
                <WaitlistSelector />
                <UserDropdown userName={user!.name!} />
            </div>
        </header>
    );
};
