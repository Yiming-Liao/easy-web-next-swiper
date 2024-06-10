"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import MagneticButton from "@/components/MegneticButton"

const Navbar = () => {
    const [isScrollDown, setIsScrollDown] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isHero, setIsHero] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (window.scrollY > 300) {
                setIsScrollDown(currentScrollY > lastScrollY);
                setLastScrollY(currentScrollY);
                setIsHero(false)
            } else {
                setIsHero(true)
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const style1 = isHero ? "bg-none" : "bg-white";
    const style2 = !isScrollDown ? "h-16 bg-opacity-50" : "-translate-y-24 bg-opacity-0";

    const [isOnPhone, setIsOnPhone] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsOnPhone(window.innerWidth < 640);
        handleResize(); // Initial check
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    const onPhoneStyle1 = isHero ? "bg-none" : "bg-white";
    const onPhoneStyle2 = !isScrollDown ? "h-16" : "-translate-y-24 bg-opacity-0";


    return (
        <>
            {!isOnPhone ? (
                <header className={`w-full fixed top-0 ${style1} ${style2} duration-200 z-50 hover:bg-white`}>
                    <div className="h-full flex justify-between items-center px-6">
                        <div className="scale-150 hover:opacity-75  active:scale-125 duration-100">
                            <Link href="/">
                                <MagneticButton maxDistance={2}>
                                    🌍
                                </MagneticButton>
                            </Link>
                        </div>
                        <div>
                            <Link href="/about">
                                <button className="m-2 hover:text-slate-500 active:scale-90 duration-100">About</button>
                            </Link>
                            <Link href="/about">
                                <button className="m-2 hover:text-slate-500 active:scale-90 duration-100">Products</button>
                            </Link>
                            <Link href="/about">
                                <button className="m-2 hover:text-slate-500 active:scale-90 duration-100">News</button>
                            </Link>

                            <Link href="/contact">
                                <button className="w-28 h-12 rounded-full ml-3 hover:bg-slate-200 active:scale-90 duration-100 bg-white shadow-md text-slate-800"> ✉️ Contact</button>
                            </Link>
                        </div>
                    </div>
                </header>
            ) : (
                <header className={`w-full fixed top-0  ${onPhoneStyle1} ${onPhoneStyle2}  duration-200 z-50 h-16`}>
                    <div className="h-full flex justify-between items-center px-6">
                        <div className="scale-150 hover:opacity-75  active:scale-125 duration-100">
                            <Link href="/">
                                🌍
                            </Link>
                        </div>
                        <div>
                            <Link href="/about">
                                <button className="w-28 h-12 rounded-full ml-3 hover:bg-slate-200 active:scale-90 duration-100 bg-white shadow-md text-slate-800"> ✉️ Contact</button>
                            </Link>
                        </div>
                    </div>
                </header>
            )}
        </>

    )
}
export default Navbar


