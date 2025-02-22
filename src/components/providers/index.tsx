import { Provider as WrapBalancerProvider } from "react-wrap-balancer";

import { Toaster } from "@/components/ui/sonner";

import { ThemeProvider } from "./theme-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <>
            <ThemeProvider
                attribute="class"
                defaultTheme="light"
                disableTransitionOnChange
            >
                <WrapBalancerProvider>
                    {children}
                    <Toaster position="bottom-center" />
                </WrapBalancerProvider>
            </ThemeProvider>
        </>
    );
}
