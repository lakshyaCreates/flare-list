"use client";

import { useForm } from "react-hook-form";
import { FaSpinner } from "react-icons/fa6";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface Props {
    children: React.ReactNode;
}

const createWaitlistSchema = z.object({
    name: z.string(),
    slug: z.string(),
});

type CreateWaitlistSchema = z.infer<typeof createWaitlistSchema>;

export const CreateWaitlistForm = ({ children }: Props) => {
    const form = useForm<CreateWaitlistSchema>({
        resolver: zodResolver(createWaitlistSchema),
        defaultValues: {
            name: "",
            slug: "",
        },
    });

    function onSubmit(values: CreateWaitlistSchema) {}

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input
                                    type="text"
                                    placeholder="Enter your waitlist name"
                                    required
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="slug"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>URL Ending</FormLabel>
                            <FormControl>
                                <div className="flex rounded-lg shadow-sm shadow-black/5">
                                    <span className="border-input bg-muted text-muted-foreground -z-10 inline-flex items-center rounded-s-lg border px-3 text-sm tracking-wide text-nowrap">
                                        flare-list.vercel.app/
                                    </span>
                                    <Input
                                        className="-ms-px rounded-s-none shadow-none"
                                        placeholder="ship-fast"
                                        type="text"
                                        {...field}
                                    />
                                </div>
                            </FormControl>
                            <FormDescription>
                                You can add a custom domain later
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex items-center gap-2">
                    <Button type="submit">Create Waitlist</Button>
                    {children}
                </div>
            </form>
        </Form>
    );
};
