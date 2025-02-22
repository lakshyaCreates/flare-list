import Image from "next/image";

import { Glow } from "@/components/mods/glow";
import { Mockup, MockupFrame } from "@/components/mods/mockup";

import { hero } from "./data";

export const AppMockup = () => {
    return (
        <div className="relative mt-24">
            <MockupFrame size={"border"} className="scale-110">
                <Mockup type="responsive">
                    <Image
                        src={hero.productShowcaseImage}
                        alt="Desktop application"
                        width={800}
                        height={450}
                        className="w-full"
                    />
                </Mockup>
            </MockupFrame>
            <Glow variant={"top"} className="opacity-60" />
        </div>
    );
};
