import Balancer from "react-wrap-balancer";

import Image from "next/image";

import { Glow } from "@/components/glow";
import { Button } from "@/components/ui/button";
import { Mockup, MockupFrame } from "@/components/ui/mockup";

import { NotificationBadge } from "./notification-badge";

export const Hero = () => {
    return (
        <div className="relative flex max-w-4xl flex-col items-center justify-center space-y-12 py-8 text-center">
            <NotificationBadge />
            <div className="space-y-8">
                <Balancer>
                    <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-7xl">
                        Validate your idea without writing code
                    </h1>
                </Balancer>
                <p className="text-lg text-muted-foreground">
                    Validate your next product idea without writing a single
                    line of code.
                </p>
            </div>
            <div className="space-y-4">
                <Button className="rounded-xl bg-violet-600 text-white">
                    Create your first waitlist
                </Button>
                <p className="text-xs text-muted-foreground">
                    No credit card required
                </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4">
                <UserAvatarGroup />
                <p className="text-muted-foreground">
                    Join{" "}
                    <span className="font-semibold text-primary/70">
                        1234+ founders
                    </span>{" "}
                    validating their ideas
                </p>
            </div>
            <div className="relative pt-12">
                <MockupFrame size={"border"} className="scale-110">
                    <Mockup type="responsive">
                        <Image
                            src="https://www.launchuicomponents.com/app-light.png"
                            alt="Desktop application"
                            width={800}
                            height={450}
                            className="w-full"
                        />
                    </Mockup>
                </MockupFrame>
                <Glow variant={"top"} />
            </div>
        </div>
    );
};

const UserAvatarGroup = () => {
    return (
        <div className="flex -space-x-3">
            <img
                className="rounded-full ring-2 ring-background"
                src="https://originui.com/avatar-80-03.jpg"
                width={40}
                height={40}
                alt="Avatar 01"
            />
            <img
                className="rounded-full ring-2 ring-background"
                src="https://originui.com/avatar-80-04.jpg"
                width={40}
                height={40}
                alt="Avatar 02"
            />
            <img
                className="rounded-full ring-2 ring-background"
                src="https://originui.com/avatar-80-05.jpg"
                width={40}
                height={40}
                alt="Avatar 03"
            />
            <img
                className="rounded-full ring-2 ring-background"
                src="https://originui.com/avatar-80-06.jpg"
                width={40}
                height={40}
                alt="Avatar 04"
            />
        </div>
    );
};
