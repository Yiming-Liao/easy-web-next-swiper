"use client"
import Section1 from "@/components/HomePage/Section1/Section1";
import Section2 from "@/components/HomePage/Section2/Section2";
import Section3 from "@/components/HomePage/Section3/Section3";
import Section4 from "@/components/HomePage/Section4/Section4";
import Section5 from "@/components/HomePage/Section5/Section5";

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from "react";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);

  // useEffect(() => {
  //   (async () => {
  //     const LocomotiveScroll = (await import("locomotive-scroll")).default;
  //     const locomotiveScroll = new LocomotiveScroll();
  //   })();
  // })

  return (
    <main className="flex min-h-screen flex-col items-center justify-start relative">

      <Section1 />

      <Section2 />

      <Section3 />

      <Section4 />

      <Section5 />
    </main>
  );
}
