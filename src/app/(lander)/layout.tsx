import { Header } from "./components/header";

export default function LanderLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="mx-auto flex max-w-7xl flex-col items-center justify-start px-6 pt-6 sm:px-12 md:px-16">
            <Header />
            {children}
        </main>
    );
}
