import { Particles } from "@/components/mods/particles";

import { AppMockup } from "./app-mockup";
import { Header } from "./header";
import { Hero } from "./hero";

export const HomePageLander = () => {
    return (
        <main className="mx-auto flex max-w-7xl flex-col items-center justify-start px-6 pt-6 sm:px-12 md:px-16">
            <Particles
                className="absolute inset-0"
                quantity={60}
                ease={85}
                color="#0d0d0d"
                refresh
                size={0.8}
            />
            <Header />
            <Hero />
            <AppMockup />
        </main>
    );
};
