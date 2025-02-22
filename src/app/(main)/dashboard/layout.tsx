import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import { AppSidebar, DashboardHeader } from "@/features/main/components";

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="max-h-screen">
            <SidebarProvider>
                <AppSidebar />
                <SidebarInset>
                    <DashboardHeader />
                    <div className="-mt-4 size-full p-4">
                        <div className="size-full pt-2">{children}</div>
                    </div>
                </SidebarInset>
            </SidebarProvider>
        </main>
    );
}
