import { create } from "zustand";

interface GlobalState {
    activeIndex: number;
    setActiveIndex: (value: number) => void;
}
export const useActiveComponent = create<GlobalState>((set) => ({
    activeIndex: 0,
    setActiveIndex: (value: number) => set({ activeIndex: value }),

}));
