import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export const HeaderCta = async () => {
    // Conditionally render the link based on the user's authentication status

    return <Button className="rounded-full">Get Started</Button>;
};

export const HeaderCtaSkeleton = () => {
    return <Skeleton className="h-8 w-24 rounded-full" />;
};
