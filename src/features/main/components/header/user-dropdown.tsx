"use client";

import { LuCreditCard, LuLogOut } from "react-icons/lu";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { signout } from "@/features/auth";

interface Props {
    userName: string;
}

export const UserDropdown = ({ userName }: Props) => {
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
                <DropdownMenuItem
                    onClick={async () => {
                        await signout();
                    }}
                >
                    <LuLogOut />
                    Sign Out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
