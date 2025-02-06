import { Provider as WrapBalancerProvider } from "react-wrap-balancer";

import { ThemeProvider } from "./theme-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <>
            <ThemeProvider
                attribute="class"
                defaultTheme="dark"
                disableTransitionOnChange
            >
                <WrapBalancerProvider>{children}</WrapBalancerProvider>
            </ThemeProvider>
        </>
    );
}
