"use client"

import { FC, useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const EntryAnimation: FC = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    const titleRef = useRef<HTMLDivElement | null>(null);
    useGSAP(() => {
        const tl = gsap.timeline({});
        tl.fromTo(titleRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: .5 })
            .to(titleRef.current, { opacity: 0, duration: .2, delay: .3 })
            .fromTo(ref.current, { opacity: 1 }, { opacity: 0, display: "none", duration: 1, }, "<")
    }, [])

    return (
        <div
            ref={ref}
            className={`w-full h-full absolute top-0 bg-slate-800 z-[999]
            `}>
            <div
                ref={titleRef}
                className="text-6xl fixed top-[50vh] translate-y-[-50%] left-[50%] translate-x-[-50%]
                opacity-0 text-white font-semibold">
                Reveal.
            </div>
        </div>
    )
}
export default EntryAnimation