import { Suspense } from "react";

import Link from "next/link";

import { navItems } from "./data";
import { HeaderCta, HeaderCtaSkeleton } from "./header-cta";

export const Header = () => {
    return (
        <header className="bg-background w-fit rounded-full border lg:w-3/4">
            <div className="flex w-full items-center justify-between gap-24 py-2 pr-2 pl-6">
                <h3 className="text-lg font-bold tracking-tighter text-nowrap">
                    Flare List
                </h3>
                <div className="flex items-center gap-6">
                    <nav className="hidden md:block">
                        <ul className="text-muted-foreground flex items-center gap-5 text-sm">
                            {navItems.map((item) => (
                                <li key={item.label}>
                                    <Link href={item.href}>{item.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <Suspense fallback={<HeaderCtaSkeleton />}>
                        <HeaderCta />
                    </Suspense>
                </div>
            </div>
        </header>
    );
};
