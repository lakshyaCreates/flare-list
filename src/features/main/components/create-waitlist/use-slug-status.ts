"use client";

import { useSession } from "next-auth/react";
import { useCallback, useEffect, useState } from "react";

export function useSlugStatus(slug: string) {
    const [slugStatus, setSlugStatus] = useState<
        "available" | "taken" | "checking" | null
    >(null);

    const { data: session } = useSession();
    const user = session?.user;
    const userId = user?.id;

    const checkSlugAvailability = useCallback(async () => {
        setSlugStatus("checking");
        try {
            if (!slug || !slug.trim()) {
                setSlugStatus(null);
                throw new Error("slug is empty");
            }

            const response = await fetch(
                `/api/fetch-waitlist/by-slug?slug=${slug}`,
            );

            const data = await response.json();
            const waitlist = data.waitlist;

            if (waitlist === null) {
                setSlugStatus("available");
            } else {
                setSlugStatus("taken");
            }
        } catch (error) {
            setSlugStatus(null);
        }
    }, [slug]);

    useEffect(() => {
        if (slug) {
            checkSlugAvailability();
        }
    }, [slug, checkSlugAvailability]);

    return slugStatus;
}
