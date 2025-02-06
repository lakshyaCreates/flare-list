"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { CreateWaitlistForm } from "./create-waitlist-form";

interface Props {
    userId: string;
}

export const WaitlistOnboarder = ({ userId }: Props) => {
    const [step, setStep] = useState(0);

    return (
        <Card className="w-96 drop-shadow-sm">
            <CardHeader>
                <CardTitle className="text-2xl">
                    {step == 0
                        ? "Welcome to Flare List"
                        : "Create Your Waitlist"}
                </CardTitle>
            </CardHeader>
            <CardContent>
                {step == 0 ? (
                    <p className="text-muted-foreground">
                        Thanks for signing up! Let's get you started with
                        creating your first waitlist page.
                    </p>
                ) : (
                    <CreateWaitlistForm setStep={setStep} userId={userId} />
                )}
            </CardContent>
            {step == 0 && (
                <CardFooter>
                    <Button
                        onClick={() => {
                            setStep(1);
                        }}
                    >
                        Get Started
                    </Button>
                </CardFooter>
            )}
        </Card>
    );
};
