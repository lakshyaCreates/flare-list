import { LuCreditCard, LuLogOut } from "react-icons/lu";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ThemeSwitcher } from "./theme-switcher";
import { signOutUser } from "@/features/auth";

interface Props {
    userName: string;
}

export const UserDropdown = ({ userName }: Props) => {
    async function handleSignOut() {
        "use server";
        await signOutUser();
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={"outline"}>{userName}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>
                    <LuCreditCard />
                    Billing
                </DropdownMenuItem>
                <ThemeSwitcher />
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSignOut}>
                    <LuLogOut />
                    Sign Out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
