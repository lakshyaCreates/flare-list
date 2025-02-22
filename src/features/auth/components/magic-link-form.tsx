import { TransitionStartFunction } from "react";
import { useForm } from "react-hook-form";

import { googleLogin } from "../actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const loginFormSchema = z.object({
    email: z.string().email(),
});

type LoginFormSchema = z.infer<typeof loginFormSchema>;
export const MagicLinkForm = ({
    isPending,
    startTransition,
}: {
    isPending: boolean;
    startTransition: TransitionStartFunction;
}) => {
    const form = useForm<LoginFormSchema>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            email: "",
        },
    });

    function onSubmit(values: LoginFormSchema) {
        startTransition(async () => {
            await googleLogin();
        });
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                <Button disabled={isPending} type="submit" className="w-full">
                    Login
                </Button>
            </form>
        </Form>
    );
};
