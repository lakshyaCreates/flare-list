import { IoSettingsOutline } from "react-icons/io5";
import { LuChartArea, LuLayoutDashboard, LuPalette } from "react-icons/lu";

import { usePathname, useRouter } from "next/navigation";

import {
    SidebarContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";

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

export const AppSidebarContent = () => {
    const pathname = usePathname();
    const router = useRouter();

    return (
        <SidebarContent className="px-2 pt-1">
            <SidebarMenu>
                {navItems.map((item) => {
                    const isDashboard = item.href === "/dashboard";
                    const isActive = isDashboard
                        ? pathname.startsWith("/dashboard") &&
                          pathname.split("/").length <= 3
                        : pathname.endsWith(item.href);

                    return (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton
                                onClick={() => {
                                    if (
                                        pathname === "/dashboard" ||
                                        !pathname.endsWith(item.href)
                                    ) {
                                        if (item.href === "/dashboard") {
                                            router.push(`${item.href}`);
                                            return;
                                        }

                                        router.push(`${pathname}${item.href}`);
                                    }
                                }}
                                isActive={isActive}
                            >
                                <item.icon />
                                {item.title}
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    );
                })}
            </SidebarMenu>
        </SidebarContent>
    );
};
