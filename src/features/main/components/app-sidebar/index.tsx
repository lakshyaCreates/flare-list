"use client";

import { Sidebar, SidebarFooter } from "@/components/ui/sidebar";

import { AppSidebarContent } from "./app-sidebar-content";
import { AppSidebarHeader } from "./app-sidebar-header";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar variant="inset" {...props}>
            <AppSidebarHeader />
            <AppSidebarContent />
            <SidebarFooter>Made by Lakshya Sharma</SidebarFooter>
        </Sidebar>
    );
}
