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

            const response = await fetch(`/api/waitlist`, {
                method: "POST",
                body: JSON.stringify({
                    slug,
                    userId,
                }),
            });

            const data = await response.json();
            const waitlist = data.response;

            if (!waitlist) {
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
