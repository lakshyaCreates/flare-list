import { GiftIcon } from "lucide-react";
import Balancer from "react-wrap-balancer";

import { AvatarCircles } from "@/components/mods/avatar-circles";
import { PulsatingButton } from "@/components/mods/pulsating-button";

import { hero } from "./data";

export const Hero = () => {
    return (
        <div className="relative flex max-w-4xl flex-col items-center justify-center space-y-12 pt-16 text-center">
            <div className="bg-primary/10 text-primary flex w-fit items-center justify-center gap-1.5 rounded-full px-4 py-1.5 font-semibold">
                <GiftIcon className="bg-primary size-5 rounded-full p-0.5 text-white" />
                <span>{hero.badge}</span>
            </div>
            <div className="space-y-8">
                <Balancer>
                    <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-7xl">
                        {hero.headline}
                    </h1>
                </Balancer>
                <p className="text-muted-foreground text-lg">{hero.subtitle}</p>
            </div>
            <div className="space-y-4">
                <PulsatingButton className="">{hero.cta}</PulsatingButton>
                <p className="text-muted-foreground text-xs">{hero.ctaSub}</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4">
                <AvatarCircles numPeople={99} avatarUrls={hero.avatarUrls} />
                <p className="text-muted-foreground">
                    Join{" "}
                    <span className="text-primary/70 font-semibold">
                        1234+ founders
                    </span>{" "}
                    validating their ideas
                </p>
            </div>
        </div>
    );
};
