import { Particles } from "@/components/ui/particles";

import { Hero } from "./components/hero";

export default function HomePage() {
    return (
        <div className="space-y-12">
            <Particles
                className="absolute inset-0"
                quantity={60}
                ease={85}
                color={"#6d28d9"}
                refresh
                size={0.8}
            />
            <Hero />
        </div>
    );
}
