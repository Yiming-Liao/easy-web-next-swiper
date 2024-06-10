import React, { useRef, useState } from 'react';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, Parallax } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const App: React.FC = () => {
    const progressCircle = useRef<SVGSVGElement | null>(null);

    // Autoplaying progress
    const [progress, setProgress] = useState<number>(0);
    const onAutoplayTimeLeft = (swiper: any, time: number, progress: number) => {
        setProgress(1 - progress);
    };

    // Swiper pause & resume
    const swiperRef = useRef<any>(null);
    const [isAutoplayRunning, setIsAutoplayRunning] = useState(true);
    const toggleAutoplay = () => {
        if (swiperRef.current) {
            if (isAutoplayRunning) swiperRef.current.autoplay.pause();
            else swiperRef.current.autoplay.resume();
            setIsAutoplayRunning(!isAutoplayRunning);
        }
    };

    return (
        <>
            <Swiper
                modules={[Autoplay, Pagination, Navigation, Parallax]}
                centeredSlides={true}
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true, }}
                // navigation={true}
                onAutoplayTimeLeft={onAutoplayTimeLeft}  // 處理 Autoplay 當前頁的 progress time
                onSlideChange={swiper => setIsAutoplayRunning(swiper.autoplay.running)} // 翻頁時一併更新自動播放狀態

                onSwiper={swiper => swiperRef.current = swiper}  // Swiper 初始化後儲存到 useRef
                style={{ '--progress': progress } as React.CSSProperties}
                className="mySwiper"
                parallax={{ enabled: true }}
            >
                <SwiperSlide>
                    <Image src="/images/1.jpg" alt="hero" fill className="opacity-80 object-cover" />
                </SwiperSlide>

                <SwiperSlide>
                    <Image src="/images/2.jpg" alt="hero" fill className="opacity-80 object-cover" />
                    <p className="w-[max(80vw,400px)] mx-auto relative top-[36%] text-8xl z-50"
                        data-swiper-parallax-y="-80"
                        data-swiper-parallax-duration="500"
                        data-swiper-parallax-opacity="0"
                    >
                        Lorem ipsum dolor sit amet, ...
                    </p>
                </SwiperSlide>

                <SwiperSlide>
                    <Image src="/images/3.jpg" alt="hero" fill className="opacity-80 object-cover" />
                </SwiperSlide>

                <SwiperSlide>
                    <Image src="/images/4.jpg" alt="hero" fill className="opacity-80 object-cover" />
                </SwiperSlide>

                <button onClick={toggleAutoplay} className="absolute right-[50%] translate-x-[260%] bottom-[10px] scale-125 z-50 w-8 h-8">
                    {isAutoplayRunning ? '⏸️' : '▶️'}
                </button>

                {/* <div className="autoplay-progress" slot="container-end" >
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                </div> */}
            </Swiper>
        </>
    );
};

export default App;
