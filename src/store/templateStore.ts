import { create } from 'zustand';

interface MaskState {
    maskRef: React.RefObject<HTMLDivElement> | null;
    setMaskRef: (ref: React.RefObject<HTMLDivElement> | null) => void;
}

export const useMaskStore = create<MaskState>((set) => ({
    maskRef: null,
    setMaskRef: (ref) => set({ maskRef: ref }),
}));


interface ContainerState {
    containerRef: React.RefObject<HTMLDivElement> | null;
    setContainerRef: (ref: React.RefObject<HTMLDivElement> | null) => void;
}

export const useContainerStore = create<ContainerState>((set) => ({
    containerRef: null,
    setContainerRef: (ref) => set({ containerRef: ref }),
}));