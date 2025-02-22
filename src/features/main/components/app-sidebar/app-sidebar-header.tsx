import Image from "next/image";
import Link from "next/link";

import {
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";

export const AppSidebarHeader = () => {
    return (
        <SidebarHeader>
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton size="lg" asChild>
                        <Link href="/">
                            <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                                <Image
                                    src={"/flare-list-icon.png"}
                                    alt="flare list icon logo"
                                    width={100}
                                    height={100}
                                    className="aspect-square size-6 rounded-none object-cover object-center"
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
    );
};
