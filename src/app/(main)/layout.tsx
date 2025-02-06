import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import { AppSidebar, Header } from "@/features/main";

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
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
