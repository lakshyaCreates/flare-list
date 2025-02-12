"use client";

import { ChevronsUpDown, PlusIcon } from "lucide-react";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

import { Waitlists } from "@/db/schema";
import { useCurrentWaitlist } from "@/features/main";

interface Props {
    waitlists: Waitlists[];
    // waitlistId?: string;
}

export const SelectWaitlist = ({ waitlists }: Props) => {
    const pathname = usePathname();
    const router = useRouter();

    const { waitlistId, setWaitlistId, newState, setNewState } =
        useCurrentWaitlist();

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");

    const getWaitlistId = useCallback(() => {
        const active = waitlists.find((w) => w.name === value);
        if (!active || !active.id) return;
        return active.id;
    }, [value]);

    useEffect(() => {
        const id = getWaitlistId();
        if (!id) return;

        setWaitlistId(id);
        router.push(`/dashboard/${id}`);
    }, [value]);

    useEffect(() => {
        if (pathname !== "/dashboard/create") {
            const waitlistName = waitlists.find(
                (w) => w.id === waitlistId,
            )?.name;
            if (waitlistName) {
                setValue(waitlistName);
            }
        }
    }, [waitlistId, pathname]);

    useEffect(() => {
        const name = waitlists.find((w) => w.id === waitlistId)?.name;

        if (name) setValue(name);
        setNewState(false);
        router.push(`/dashboard/${waitlistId}`);
    }, [newState]);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                >
                    {value ? value : "Select a waitlist page"}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command value={value} onValueChange={setValue}>
                    <CommandInput placeholder="Search waitlist..." />
                    <CommandList>
                        <CommandEmpty>No waitlist found.</CommandEmpty>
                        <CommandGroup>
                            <Link href={"/dashboard/create"}>
                                <CommandItem>
                                    <PlusIcon />
                                    Create a new waitlist
                                </CommandItem>
                            </Link>
                            {waitlists.length > 0 &&
                                waitlists.map((waitlist) => (
                                    <CommandItem key={waitlist.name}>
                                        {waitlist.name}
                                    </CommandItem>
                                ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
};
