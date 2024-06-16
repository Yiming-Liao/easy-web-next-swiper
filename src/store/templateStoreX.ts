// src/store/bannerStore.ts
import { create } from 'zustand';

interface ContainerRefState {
    containerRef: React.RefObject<HTMLDivElement> | null;
    setContainerRef: (ref: React.RefObject<HTMLDivElement> | null) => void;
}

export const useContainerRefStore = create<ContainerRefState>((set) => ({
    containerRef: null,
    setContainerRef: (ref) => set({ containerRef: ref }),
}));



interface SvgRefState {
    svgRef: React.RefObject<SVGPathElement> | null;
    setSvgRef: (ref: React.RefObject<SVGPathElement> | null) => void;
}

export const useSvgRefStore = create<SvgRefState>((set) => ({
    svgRef: null,
    setSvgRef: (ref) => set({ svgRef: ref }),
}));
