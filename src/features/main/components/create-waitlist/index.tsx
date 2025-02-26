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
    onboard: boolean;
}

export const CreateWaitlist = ({ onboard }: Props) => {
    const [step, setStep] = useState(0);

    return (
        <Card className="w-96 drop-shadow-xs">
            <CardHeader>
                <CardTitle className="text-2xl">
                    {onboard && step == 0
                        ? "Welcome to Flare List"
                        : "Create Your Waitlist"}
                </CardTitle>
            </CardHeader>
            <CardContent>
                {onboard && step == 0 ? (
                    <p className="text-muted-foreground">
                        Thanks for signing up! Let's get started by creating
                        your first waitlist page.
                    </p>
                ) : (
                    <CreateWaitlistForm>
                        {onboard && step == 0 && (
                            <Button
                                onClick={() => {
                                    setStep(0);
                                }}
                                variant={"outline"}
                            >
                                Back
                            </Button>
                        )}
                    </CreateWaitlistForm>
                )}
            </CardContent>
            {onboard && step == 0 ? (
                <CardFooter>
                    <Button
                        onClick={() => {
                            setStep(1);
                        }}
                    >
                        Get Started
                    </Button>
                </CardFooter>
            ) : (
                <></>
            )}
        </Card>
    );
};
