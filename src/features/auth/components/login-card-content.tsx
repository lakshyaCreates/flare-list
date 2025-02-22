"use client";

import { useTransition } from "react";

import { GoogleLoginForm } from "./google-login-form";
import { MagicLinkForm } from "./magic-link-form";

export const LoginCardContent = () => {
    const [isPending, startTransition] = useTransition();

    return (
        <>
            <MagicLinkForm
                isPending={isPending}
                startTransition={startTransition}
            />
            <div className="before:bg-border after:bg-border flex items-center gap-3 before:h-px before:flex-1 after:h-px after:flex-1">
                <span className="text-muted-foreground text-xs uppercase">
                    or continue with
                </span>
            </div>
            <GoogleLoginForm
                disabled={isPending}
                startTransition={startTransition}
            />
        </>
    );
};
