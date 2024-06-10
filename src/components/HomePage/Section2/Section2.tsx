import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

const Section2 = () => {
    const ref = useRef<HTMLDivElement>(null);
    const words = "Fully charged for your next adventure".split('');
    const picRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.fromTo(".char", { color: "#EEE" }, {
            color: '#333',
            scrollTrigger: {
                trigger: ref.current,
                start: '500px bottom',
                end: '200px',
                scrub: 1.2,
            },
            stagger: { amount: 1, },
        });

        gsap.fromTo(picRef.current, { y: -1000 }, {
            y: -600,
            scale: 1.7,
            scrollTrigger: {
                trigger: ref.current,
                start: '300px bottom',
                end: 'bottom center',
                scrub: 1,
            },
        })

        gsap.fromTo(picRef.current, { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)", opacity: .5 }, {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)", opacity: 1,
            scrollTrigger: {
                trigger: ref.current,
                start: '500px bottom',
            },
            duration: 1.5
        });

    }, []);

    return (
        <section className="w-full h-[100svh] min-h-[800px] flex flex-col justify-center items-center" ref={ref}>
            <div className="w-4/5 h-fit my-24">
                <h1 className="text-7xl font-semibold">{words.map((el, idx) => (
                    <span key={idx} className="char">{el}</span>
                ))}</h1>
            </div>
            <div className="relative w-2/3 h-[30svh] min-h-[200px] mb-36 overflow-hidden">
                <div className="absolute inset-0 scale-[2] h-[100vh]" ref={picRef}>
                    <Image
                        src="/images/3.jpg"
                        alt="sec2"
                        fill
                        className="object-cover  opacity-90"
                    />
                </div>
            </div>
        </section>
    )
}
export default Section2