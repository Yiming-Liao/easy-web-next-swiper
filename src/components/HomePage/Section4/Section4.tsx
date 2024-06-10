import Image from "next/image"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap";

const Section4 = () => {
    const section4Ref = useRef<HTMLDivElement>(null);
    const bgChangeRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    useGSAP(() => {
        gsap.fromTo(section4Ref.current, { backgroundColor: "#FFF" }, {
            backgroundColor: "#000",
            scrollTrigger: {
                trigger: bgChangeRef.current,
                start: "top-=400 top",
                end: "bottom+=500 top",
                scrub: .5
            }
        });
        gsap.to(imageRef.current, {
            scale: 1,
            scrollTrigger: {
                trigger: imageRef.current,
                start: "top bottom-=600",
                end: "bottom+=500 top",
                scrub: .5,
            }
        })

    }, { scope: section4Ref });
    return (
        <section className="h-[580svh] mt-[-200svh] w-full relative bg-black z-[-5]" ref={section4Ref}>
            <div className="w-full h-[200svh]" />
            <div className="hidden" ref={bgChangeRef} />
            <div className="sticky top-0 h-[100svh] flex justify-center items-center z-20">
                <h1 className="text-5xl w-[85%] text-center text-white">A product of the rugged
                    Norwegian west coast
                </h1>
            </div>

            <div className="sticky top-0 h-[100vh] flex justify-center items-center z-10">
                <div className="relative w-full h-full scale-[.2]" ref={imageRef}>
                    <Image src="/images/4.jpg" alt="sec4" fill className="object-cover" />
                </div>
            </div>

            <div className="h-[100svh] w-full flex flex-col justify-center items-center mt-[-30svh]">
                <div className="relative w-64 h-48 top-6 left-[-30vw]">
                    <Image src="/images/1.jpg" alt="sec4" fill className="object-cover" />
                </div>
                <div className="relative w-48 h-64 top-[-10svh] right-[-35vw]">
                    <Image src="/images/2.jpg" alt="sec4" fill className="object-cover" />
                </div>
                <div className="relative w-48 h-64  left-[-28vw]">
                    <Image src="/images/3.jpg" alt="sec4" fill className="object-cover" />
                </div>
                <div className="relative w-48 h-48 top-[-50px] right-[-27vw]">
                    <Image src="/images/4.jpg" alt="sec4" fill className="object-cover" />
                </div>
            </div>
        </section>
    )
}
export default Section4