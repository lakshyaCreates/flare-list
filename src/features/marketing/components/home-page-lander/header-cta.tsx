import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

import { getCurrentUser } from "@/features/auth";

export const HeaderCta = async () => {
    const user = await getCurrentUser();

    return (
        <Button className="rounded-full" asChild>
            <Link href={user ? "/dashboard" : "/login"}>
                <span>{user ? "Dashboard" : "Get Started"}</span>
            </Link>
        </Button>
    );
};

export const HeaderCtaSkeleton = () => {
    return (
        <Button type="button" className="rounded-full">
            <span className="animate-pulse">Loading...</span>
        </Button>
    );
};
