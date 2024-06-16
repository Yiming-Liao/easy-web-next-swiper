"use client"

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const SquareToCircle: React.FC = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const svgRef = useRef<SVGPathElement | null>(null);
    const [toggle, setToggle] = useState(false);

    const initialPath = `M0 100 L${window.innerWidth} 100 Q${window.innerWidth / 2} -100 0 100`;
    const targetPath = `M0 100 L${window.innerWidth} 100 Q${window.innerWidth / 2} 100 0 100`;

    const tl = useRef(gsap.timeline({ paused: true, reversed: true }));

    useGSAP(() => {
        if (!svgRef.current) return;
        tl.current
            .to(svgRef.current, {
                duration: 1,
                attr: { d: targetPath },
            })
            .to(containerRef.current, {
                yPercent: -100,
                duration: 1
            }, 0)
    }, { scope: ref });

    useEffect(() => {
        toggle && tl.current.play();
        !toggle && tl.current.reverse();
    }, [toggle])
    return (
        <>
            <div
                ref={ref}
                className="fixed top-0 left-0 w-full h-screen flex justify-end overflow"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}

            >
                <div
                    className="w-full h-[calc(100vh+100px)] relative left-0 top-[100vh] flex flex-col"
                    ref={containerRef}
                >
                    <svg className="w-full h-[100px]">
                        <path
                            ref={svgRef}
                            d={initialPath}
                            fill="#A8A"
                        />
                    </svg>

                    <div className="w-full h-[100vh] bg-[#A8A]"></div>
                </div>
            </div>

            <button
                onClick={() => setToggle(prev => !prev)}
                className="absolute top-96 left-96 z-50 border-2 border-red-600"
            >
                Click
            </button>
        </>
    );
};

export default SquareToCircle;
