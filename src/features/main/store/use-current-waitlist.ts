import { create } from "zustand";

interface State {
    waitlistId: string;
    newState: boolean;
}

interface Action {
    setWaitlistId: (waitlistId: string) => void;
    setNewState: (state: boolean) => void;
}

export const useCurrentWaitlist = create<State & Action>((set) => ({
    waitlistId: "",
    newState: false,

    setWaitlistId: (state) => set(() => ({ waitlistId: state })),
    setNewState: (state) => set(() => ({ newState: state })),
}));
