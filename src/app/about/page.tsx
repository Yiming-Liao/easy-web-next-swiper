"use client";

import MegneticButton from "@/components/MegneticButton";
import useInView from "@/hooks/useInView";

export default function Home() {

  const { ref, isInView } = useInView({
    once: false,  // 只在首次進入視口時觸發
    rootMargin: '-100px 0px',   // '-100px 0px -100px 0px' 上右下左
    threshold: 0.5  // 至少有 50% 的元素內容進入視口時觸發
  });


  return (
    <main className="w-full min-h-screen">

      <div className="w-full min-h-[200svh] flex justify-center items-center">

        <div
          ref={ref}
          className="h-28"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
        >
          <div
            className={`text-8xl font-semibold duration-[1000ms]
              ${!isInView && "opacity-0 translate-y-48 skew-y-[8deg]"}`}
          >
            Incoming
          </div>
        </div>

      </div>
    </main>
  );
}





{/* <div className="w-full min-h-screen flex flex-col items-center justify-center">
        <MegneticButton>
          <button className="w-20 h-20 bg-red-200"></button>
        </MegneticButton>
        <MegneticButton>
          <button className="w-20 h-20 bg-red-200"></button>
        </MegneticButton>
        <MegneticButton>
          <button className="w-20 h-20 bg-red-200"></button>
        </MegneticButton>
        <MegneticButton>
          <button className="w-20 h-20 bg-red-200"></button>
        </MegneticButton>
      </div> */}