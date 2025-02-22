import { redirect } from "next/navigation";

import { getCurrentUser } from "@/features/auth";

export default async function LoginLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const user = await getCurrentUser();
    if (user) redirect("/dashboard");

    return (
        <div className="flex min-h-screen items-center justify-center">
            {children}
        </div>
    );
}
