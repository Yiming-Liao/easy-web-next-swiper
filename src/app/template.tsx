/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { FC, ReactNode, useEffect, useRef } from "react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import gsap from "gsap";
import { useContainerStore, useMaskStore } from "@/store/templateStore";

const Template: FC<{ children: ReactNode }> = ({ children }) => {
    const { setMaskRef } = useMaskStore();
    const { setContainerRef } = useContainerStore();

    const maskRef = useRef<HTMLDivElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    // 在組件掛載時設定 bannerRef (為了給TransitionLink引用)
    useEffect(() => {
        setMaskRef(maskRef);
        setContainerRef(containerRef)
    }, []);

    // 載入時執行進入頁面動畫
    useEffect(() => {
        if (!maskRef.current || !containerRef.current) return;
        animatePageIn(maskRef.current, containerRef.current);
    }, []);

    return (
        <>
            <div
                ref={maskRef}
                className=" w-full min-h-screen fixed top-0 left-0 bg-neutral-600 z-[99]"
            />
            <div ref={containerRef}
            >
                {children}
            </div>
        </>
    )
}

export default Template;


// 進入頁面動畫
const animatePageIn = (mask: HTMLDivElement, container: HTMLDivElement) => {
    const scrollY = window.scrollY; // 避免 scale 時的 Origin 位置不一樣 (Scroll到不同位置時)

    gsap.timeline()
        .fromTo(mask, { yPercent: 0 }, {
            yPercent: 100,
            delay: .5,
            duration: .5
        })
        .fromTo(container, { filter: "brightness(60%)", scale: .9 }, {
            filter: "brightness(100%)",
            scale: 1,
            transformOrigin: `center ${scrollY}px`,
            duration: .5
        }, ".5");
}

// 離開頁面動畫
export const animatePageOut = (href: string, router: AppRouterInstance, mask: HTMLDivElement | null, container: HTMLDivElement | null, setIsAnimating: any) => {
    const scrollY = window.scrollY; // 避免 scale 時的 Origin 位置不一樣 (Scroll到不同位置時)

    gsap.timeline()
        .fromTo(container, { filter: "brightness(100%)", scale: 1 }, {
            filter: "brightness(60%)",
            scale: .9,
            transformOrigin: `center ${scrollY}px`,
            duration: .5
        })
        .fromTo(mask, { yPercent: 100 }, {
            yPercent: 0,
            duration: .5,
            onComplete: () => {
                router.push(href);
                setIsAnimating(false);
            },
        }, 0);
}
