"use client";

import { useLayoutEffect } from "react";

import { useTheme } from "next-themes";

export const SetTheme = () => {
    const { setTheme } = useTheme();

    useLayoutEffect(() => {
        setTheme("light");
    });

    return null;
};
