import { IoSettingsOutline } from "react-icons/io5";
import { LuChartArea, LuLayoutDashboard, LuPalette } from "react-icons/lu";

import { useParams, usePathname, useRouter } from "next/navigation";

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
    const { id } = useParams();
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
                                    if (id) {
                                        if (item.href === "/dashboard") {
                                            router.push(`/dashboard/${id}`);
                                            return;
                                        }

                                        router.push(
                                            `/dashboard/${id}/${item.href}`,
                                        );
                                        return;
                                    }
                                }}
                                isActive={isActive}
                                disabled={!id}
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
