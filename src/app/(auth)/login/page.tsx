"use client";

import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa6";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { googleLogin } from "@/features/auth";

const loginFormSchema = z.object({
    email: z.string().email(),
});

type LoginFormSchema = z.infer<typeof loginFormSchema>;

export default function LoginPage() {
    const form = useForm<LoginFormSchema>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            email: "",
        },
    });

    const [isPending, startTransition] = useTransition();

    function onSubmit(values: LoginFormSchema) {
        startTransition(() => {
            console.log(values);
        });
    }

    return (
        <div className="flex max-h-screen min-h-screen items-center justify-center">
            <Card className="w-96 drop-shadow-xl">
                <CardHeader>
                    <CardTitle className="text-xl">Login</CardTitle>
                    <CardDescription>
                        Login using a magic link sent to your email or use the
                        available OAuth providers.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-4"
                        >
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                disabled={isPending}
                                                type="email"
                                                placeholder="john.doe@example.com"
                                                required
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="w-full">
                                Login
                            </Button>
                        </form>
                    </Form>
                    <div className="flex items-center gap-3 before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">
                        <span className="text-xs text-muted-foreground">
                            OR CONTINUE WITH
                        </span>
                    </div>
                    <form
                        action={async () => {
                            await googleLogin();
                        }}
                    >
                        <Button
                            type="submit"
                            variant={"outline"}
                            className="w-full"
                        >
                            <FaGoogle />
                            Login with Google
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
