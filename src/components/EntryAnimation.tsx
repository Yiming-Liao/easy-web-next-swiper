"use client"

import { FC, useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const EntryAnimation: FC = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    const titleRef = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        gsap.timeline()
            .fromTo(titleRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, ease: "power1.out", duration: .5 })
            .to(titleRef.current, { opacity: 0, duration: .5, delay: .5 })
            .to(ref.current, { opacity: 0, display: "none", duration: .5, }, "1.5")
    }, { scope: ref })

    return (
        <div
            ref={ref}
            className="w-full h-full fixed top-0 left=0 flex justify-center items-center
                        bg-slate-800 z-[999]"
        >
            <div
                className="h-fit w-fit"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
            >
                <div
                    ref={titleRef}
                    className="text-6xl
                opacity-0 text-white font-semibold">
                    Reveal.
                </div>
            </div>
        </div>
    )
}
export default EntryAnimation;