import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Carousel from "@/components/HomePage/Section1/Carousel"


const Section1 = () => {
    const section1Ref = useRef<HTMLDivElement>(null);

    const words = "Powers adventure".split("").map(char => char === " " ? "\u00A0" : char);

    useGSAP(() => {
        gsap.to(section1Ref.current, {
            scale: .97,
            duration: 1,
            scrollTrigger: {
                trigger: section1Ref.current,
                start: "25% start",
                scrub: .5,
                // markers: true
            }
        })

        gsap.fromTo(".charS1", { y: 100, skewX: -50, rotateZ: 10 }, {
            rotateZ: 0,
            skewX: 0,
            y: -5,
            duration: 1.2,
            stagger: 0.01,
            ease: "back.out(1)",
            delay: 1.2
        })
    }, { scope: section1Ref });



    return (
        <section className="w-full h-[100svh] overflow-hidden" ref={section1Ref}>
            <div className="h-full">
                <Carousel />
            </div>

            <div className="absolute bottom-36 left-[50%] -translate-x-1/2 w-full flex justify-center items-center z-10 clipPath pointer-events-none">
                <h1 id="h1" className="sm:text-8xl text-4xl text-white opacity-90 flex font-semibold">
                    {words.map((el, idx) => (
                        <span className="charS1" key={idx}>{el}</span>
                    ))}
                </h1>
            </div>
        </section>
    )
}
export default Section1