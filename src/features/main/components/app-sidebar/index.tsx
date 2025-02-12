"use client";

import { IoSettingsOutline } from "react-icons/io5";
import { LuChartArea, LuLayoutDashboard, LuPalette } from "react-icons/lu";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const pathname = usePathname();
    const router = useRouter();

    return (
        <Sidebar variant="inset" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/">
                                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                                    <Image
                                        src={"/flare-list-icon.svg"}
                                        alt="flare list icon logo"
                                        width={100}
                                        height={100}
                                        className="aspect-square size-6 object-cover object-center"
                                    />
                                </div>
                                <div className="flex flex-col leading-none">
                                    <span className="font-semibold">
                                        Flare List
                                    </span>
                                    <span className="text-xs">open-source</span>
                                </div>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent className="px-2 pt-1">
                <SidebarMenu>
                    {navItems.map((item) => (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton
                                onClick={() => {
                                    if (item.href === "/dashboard") {
                                        router.push(`${item.href}`);
                                        return;
                                    }

                                    router.push(`${pathname}${item.href}`);
                                }}
                                isActive={pathname.startsWith(item.href)}
                            >
                                <item.icon />
                                {item.title}
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarContent>
            <SidebarFooter>Made by Lakshya Sharma</SidebarFooter>
        </Sidebar>
    );
}

const navItems = [
    {
        title: "Dashboard",
        href: "/dashboard",
        icon: LuLayoutDashboard,
    },
    {
        title: "Analytics",
        href: "/analytics",
        icon: LuChartArea,
    },
    {
        title: "Appearance",
        href: "/appearance",
        icon: LuPalette,
    },
    {
        title: "Settings",
        href: "/settings",
        icon: IoSettingsOutline,
    },
];
