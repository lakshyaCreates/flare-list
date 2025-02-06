import { LuLogOut, LuCreditCard, LuExternalLink } from "react-icons/lu";

import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";

import { SelectWaitlist } from "./select-waitlist";
import { UserDropdown } from "./user-dropdown";
import { getUserWaitlists } from "@/db/queries/waitlist";
import { getCurrentUser } from "@/features/auth";

export const Header = async () => {
    const user = await getCurrentUser();
    const waitlists = await getUserWaitlists(user!.id);

    return (
        <header className="flex h-14 w-full shrink-0 items-center gap-2 border-b px-4">
            <div className="flex items-center gap-2 px-4 lg:hidden">
                <SidebarTrigger className="-ml-1" />
            </div>
            <div className="flex w-full items-center justify-between gap-6">
                <div className="flex items-center gap-2">
                    <SelectWaitlist waitlists={waitlists} />
                    <Button variant={"outline"} disabled size={"icon"}>
                        <LuExternalLink />
                    </Button>
                </div>
                <div>
                    <UserDropdown userName={user!.name!} />
                </div>
            </div>
        </header>
    );
};
