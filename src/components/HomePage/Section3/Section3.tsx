import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import Image from "next/image";
import { useRef, useState } from "react";

const Section3: React.FC = () => {
    const section3Ref = useRef<HTMLDivElement>(null);

    const pic1Ref = useRef<HTMLDivElement>(null);
    const pic2Ref = useRef<HTMLDivElement>(null);

    const titl1Ref = useRef<HTMLHeadingElement>(null);
    const titl2Ref = useRef<HTMLHeadingElement>(null);

    const tabRef = useRef<HTMLHeadingElement>(null);

    useGSAP(() => {
        gsap.fromTo(pic1Ref.current, { y: -200 }, {
            y: 200,
            scrollTrigger: {
                trigger: pic1Ref.current,
                scrub: 1,
            }
        });
        gsap.fromTo(pic2Ref.current, { y: -200 }, {
            y: 200,
            scrollTrigger: {
                trigger: pic2Ref.current,
                scrub: 1,
            }
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: pic2Ref.current,
                start: 'bottom-=100 bottom',  // 當 pic2Ref 進入畫面底部時開始
                // end: 'bottom top',   // 當 pic2Ref 離開畫面頂部時結束
                toggleActions: 'play none none reverse',  // 播放和反向播放
            }
        })
            .fromTo(titl1Ref.current, { opacity: 1, y: 0 }, { opacity: 0, y: 45, duration: 0.5 })
            .fromTo(tabRef.current, { yPercent: 0 }, { yPercent: 100, duration: 0.5 }, ".2")
            .fromTo(titl2Ref.current, { opacity: 0, y: 45 }, { opacity: 1, y: 0, duration: 0.5 }, '<')
    }, { scope: section3Ref });


    const [isScrolling, setIsScrolling] = useState(false);
    const scrollToElement = (element: HTMLDivElement | null) => {
        if (!element || isScrolling) return;
        setIsScrolling(true);
        window.scrollTo({
            top: element.offsetTop + 90, // 根據需要調整偏移量
            behavior: 'smooth'
        });
        setTimeout(() => setIsScrolling(false), 800); // 800 毫秒後允許再次滾動
    }
    return (
        <section className="w-full min-h-[200svh] px-[3vw] flex justify-between gap-3" ref={section3Ref}>

            <div className="relative w-52 max-h-[120svh]">
                <div className="sticky top-28 mt-8 flex flex-col justify-center text-sm">
                    <div className="flex items-center">
                        <div className="mx-1">
                            <div className="h-[42px] w-1 rounded-full bg-slate-200">
                                <div className="h-[21px] w-1 rounded-full bg-slate-400" ref={tabRef} />
                            </div>
                        </div>
                        <div>
                            <button onClick={() => scrollToElement(pic1Ref.current)}>Home charging</button>
                            <button onClick={() => scrollToElement(pic2Ref.current)}>System charging</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-[35%] h-[150svh]">
                <div className="sticky top-60 mt-60 h-48">
                    <h1 ref={titl1Ref} className="absolute top-0 text-3xl">1! Zaptec Go: Award-winning home charger, where minimalist design meets innovation</h1>

                    <h1 ref={titl2Ref} className="absolute top-0 text-3xl">2! a sd  ASDsAS ASDAS DASD AS DAS DAS DASD</h1>

                </div>
            </div>


            <div className="w-auto flex flex-col gap-10">
                <div className="h-[85svh] w-[45vw] overflow-hidden grid place-content-center" id="image1">
                    <div className="relative h-[120svh] w-[60vw]" ref={pic1Ref}>
                        <Image src="/images/1.jpg" alt="pic1" fill className="object-cover" />
                    </div>
                </div>
                <div className="h-[85svh] w-[45vw] overflow-hidden grid place-content-center" id="image2">
                    <div className="relative h-[120svh] w-[60vw]" ref={pic2Ref}>
                        <Image src="/images/2.jpg" alt="pic1" fill className="object-cover" />
                    </div>
                </div>
            </div>

        </section>
    )
}
export default Section3