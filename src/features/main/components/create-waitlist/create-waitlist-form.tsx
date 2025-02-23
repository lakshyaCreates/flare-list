"use client";

import { useEffect, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { FaSpinner } from "react-icons/fa6";

import { zodResolver } from "@hookform/resolvers/zod";
import { useDebounce } from "@uidotdev/usehooks";
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

import { useSlugStatus } from "./use-slug-status";

interface Props {
    children: React.ReactNode;
}

const createWaitlistSchema = z.object({
    name: z.string(),
    slug: z.string(),
});

type CreateWaitlistSchema = z.infer<typeof createWaitlistSchema>;

export const CreateWaitlistForm = ({ children }: Props) => {
    const [ok, setOk] = useState(false);
    const [slug, setSlug] = useState("");

    const debouncedSlug = useDebounce(slug, 100);
    const slugStatus = useSlugStatus(debouncedSlug);

    const [isPending, startTransition] = useTransition();

    const form = useForm<CreateWaitlistSchema>({
        resolver: zodResolver(createWaitlistSchema),
        defaultValues: {
            name: "",
            slug: "",
        },
    });

    useEffect(() => {
        console.log(slugStatus);

        if (slugStatus === "available") {
            setOk(true);
        } else {
            setOk(false);
        }
    }, [slugStatus]);

    useEffect(() => {
        if (slug === "") {
            setOk(false);
        }
    }, [slug]);

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
                                        onChangeCapture={(e) => {
                                            setSlug(e.currentTarget.value);
                                        }}
                                        className="-ms-px rounded-s-none shadow-none"
                                        placeholder="ship-fast"
                                        type="text"
                                        {...field}
                                    />
                                </div>
                            </FormControl>
                            <FormDescription>
                                {slugStatus === "checking" && (
                                    <span className="flex items-center gap-1">
                                        <FaSpinner className="animate-spin" />
                                        Checking availability...
                                    </span>
                                )}

                                {slugStatus === "taken" && (
                                    <span className="text-red-600">
                                        This URL is already taken
                                    </span>
                                )}

                                {slugStatus === "available" && (
                                    <span className="text-emerald-600">
                                        This URL is available
                                    </span>
                                )}
                            </FormDescription>
                            <FormDescription>
                                You can add a custom domain later
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex items-center gap-2">
                    <Button type="submit" disabled={!ok || isPending}>
                        Create Waitlist
                    </Button>
                    {children}
                </div>
            </form>
        </Form>
    );
};
