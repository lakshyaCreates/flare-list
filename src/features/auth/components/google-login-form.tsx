"use client";

import { TransitionStartFunction } from "react";
import { FaGoogle } from "react-icons/fa6";

import { googleLogin } from "../actions";

import { Button } from "@/components/ui/button";

export const GoogleLoginForm = ({
    disabled,
    startTransition,
}: {
    disabled: boolean;
    startTransition: TransitionStartFunction;
}) => {
    function handleGoogleLogin() {
        startTransition(async () => {
            await googleLogin();
        });
    }

    return (
        <form action={handleGoogleLogin}>
            <Button
                type="submit"
                disabled={disabled}
                variant={"outline"}
                className="w-full"
            >
                <FaGoogle />
                Login with Google
            </Button>
        </form>
    );
};
