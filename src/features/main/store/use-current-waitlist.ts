import { create } from "zustand";

interface State {
    waitlistId: string;
}

interface Action {
    setWaitlistId: (waitlistId: string) => void;
}

export const useCurrentWaitlist = create<State & Action>((set) => ({
    waitlistId: "",

    setWaitlistId: (state) => set(() => ({ waitlistId: state })),
}));
