"use client";

import {
    Dispatch,
    SetStateAction,
    useCallback,
    useEffect,
    useState,
    useTransition,
} from "react";
import { useForm, useFormState } from "react-hook-form";
import { FaSpinner } from "react-icons/fa6";

import { useRouter } from "next/router";

import { zodResolver } from "@hookform/resolvers/zod";
import { useDebounce } from "@uidotdev/usehooks";
import { debounce } from "lodash";
import { toast } from "sonner";
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

import { getWaitlistBySlug, createWaitlist } from "@/db/queries";

const createWaitlistSchema = z.object({
    name: z.string(),
    slug: z.string(),
});

type CreateWaitlistSchema = z.infer<typeof createWaitlistSchema>;

interface Props {
    setStep: Dispatch<SetStateAction<number>>;
    userId: string;
}

export const CreateWaitlistForm = ({ setStep, userId }: Props) => {
    const router = useRouter();
    const [ok, setOk] = useState(false);
    const [slug, setSlug] = useState("");
    const debouncedSlug = useDebounce(slug, 500);
    const [slugStatus, setSlugStatus] = useState<
        "available" | "taken" | "checking" | null
    >(null);

    const form = useForm<CreateWaitlistSchema>({
        resolver: zodResolver(createWaitlistSchema),
        defaultValues: {
            name: "",
            slug: "",
        },
    });

    const [isPending, startTransition] = useTransition();

    function onSubmit(values: CreateWaitlistSchema) {
        startTransition(async () => {
            const data = {
                ...values,
                userId,
            };

            await createWaitlist(data).then((res) => {
                if (res.id) {
                    toast.success("Waitlist created");
                    router.replace(`/dashboard/${res.id}`);
                    return;
                } else {
                    toast.error("Failed to create waitlist. Try again");
                    form.reset();
                    return;
                }
            });
        });
    }

    const fetchSlugAvailability = useCallback(async () => {
        return await getWaitlistBySlug(debouncedSlug);
    }, [debouncedSlug]);

    useEffect(() => {
        setSlugStatus("checking");
        setOk(false);

        if (debouncedSlug !== "") {
            fetchSlugAvailability().then((res) => {
                if (res || res === undefined) {
                    setSlugStatus("available");
                    setOk(true);
                    return;
                } else {
                    setSlugStatus("taken");
                    setOk(false);
                    return;
                }
            });
        }

        if (debouncedSlug === "" || !debouncedSlug) setSlugStatus(null);
    }, [debouncedSlug]);

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
                                    disabled={isPending}
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
                                    <span className="-z-10 inline-flex items-center text-nowrap rounded-s-lg border border-input bg-muted px-3 text-sm tracking-wide text-muted-foreground">
                                        flare-list.vercel.app/
                                    </span>
                                    <Input
                                        onChangeCapture={(e) => {
                                            setSlug(e.currentTarget.value);
                                        }}
                                        disabled={isPending}
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
                    <Button
                        onClick={() => {
                            setStep(0);
                        }}
                        type="button"
                        variant={"outline"}
                    >
                        Back
                    </Button>
                </div>
            </form>
        </Form>
    );
};
