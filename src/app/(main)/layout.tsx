import { redirect } from "next/navigation";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import { getCurrentUser } from "@/features/auth";
import { AppSidebar, Header } from "@/features/main";

export default async function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const user = await getCurrentUser();
    if (!user || !user.id) redirect("/login");

    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <Header />
                <div className="-mt-4 size-full p-4">
                    <div className="size-full pt-2">{children}</div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}
