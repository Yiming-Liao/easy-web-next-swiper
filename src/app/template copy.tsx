/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { FC, ReactNode, useEffect, useRef } from "react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import gsap from "gsap";
import { useMaskStore } from "@/store/templateStore";

const Template: FC<{ children: ReactNode }> = ({ children }) => {
    const { setMaskRef } = useMaskStore();
    const maskRef = useRef<HTMLDivElement | null>(null);

    // 在組件掛載時設定 bannerRef (為了給TransitionLink引用)
    useEffect(() => {
        setMaskRef(maskRef);
    }, []);

    // 載入時執行進入頁面動畫
    useEffect(() => {
        if (!maskRef.current) return;
        animatePageIn(maskRef.current);
    }, []);

    return (
        <>
            <div
                ref={maskRef}
                className=" w-full min-h-screen fixed top-0 left-0 bg-neutral-600 z-[99]"
            />
            {children}
        </>
    )
}

export default Template;


// 進入頁面動畫
const animatePageIn = (mask: HTMLDivElement) => {
    gsap.timeline()
        .set(mask, { yPercent: 0 })
        .to(mask, { yPercent: 100, delay: .5, duration: .5 });
}

// 離開頁面動畫
export const animatePageOut = (href: string, router: AppRouterInstance, mask: HTMLDivElement | null) => {
    gsap.timeline()
        .set(mask, { yPercent: 100, })
        .to(mask, {
            yPercent: 0,
            duration: .5,
            onComplete: () => {
                router.push(href);
            },
        })
}