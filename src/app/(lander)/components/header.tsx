import Link from "next/link";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

export const Header = () => {
    return (
        <header className="w-fit rounded-full border bg-background lg:w-3/4">
            <div className="flex w-full items-center justify-between gap-24 py-2 pl-6 pr-2">
                <Logo />
                <div className="flex items-center gap-7">
                    <nav className="hidden md:block">
                        <ul className="flex items-center gap-5">
                            {navItems.map((item) => (
                                <li key={item.label}>
                                    <Link href={item.href}>{item.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <Button className="rounded-full bg-violet-600 !ring-violet-600 ring-offset-2 hover:bg-violet-500">
                        Get Started
                    </Button>
                </div>
            </div>
        </header>
    );
};

const navItems = [
    { label: "Features", href: "#features" },
    { label: "Blog", href: "/blogs" },
    { label: "Contact Us", href: "#contact-us" },
];
