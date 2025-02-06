"use client";

import { useEffect } from "react";

import { usePathname } from "next/navigation";

import { useCurrentWaitlist } from "@/features/main";

export const LoadWebsiteId = () => {
    const { setWaitlistId } = useCurrentWaitlist();
    const pathname = usePathname();
    const id = pathname.split("/dashboard/")[1];
    useEffect(() => {
        setWaitlistId(id);
    }, [id]);

    return <></>;
};
