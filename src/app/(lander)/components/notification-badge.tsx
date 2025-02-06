import { GiftIcon } from "lucide-react";

export const NotificationBadge = () => {
    return (
        <div className="flex w-fit items-center justify-center gap-1.5 rounded-full bg-violet-100 px-4 py-1.5 font-semibold text-violet-800">
            <GiftIcon className="size-5 rounded-full bg-violet-800 p-0.5 text-white" />
            <span>Limited launch offer available</span>
        </div>
    );
};
