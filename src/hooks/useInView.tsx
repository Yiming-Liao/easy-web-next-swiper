import { useState, useEffect, useRef } from 'react';

interface UseInViewOptions extends IntersectionObserverInit {
    once?: boolean;
}

interface UseInViewResult {
    ref: React.RefObject<HTMLDivElement>;
    isInView: boolean;
}

const useInView = ({ once = false, ...options }: UseInViewOptions): UseInViewResult => {
    const [isInView, setIsInView] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const node = ref.current; // 直接在這裡獲取 current，避免在依賴陣列中包括 ref
        if (!node) return;

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    if (once) observer.unobserve(entry.target);
                } else if (!once) setIsInView(false);
            });
        }, options);

        observer.observe(node);

        return () => observer.unobserve(node);
    }, [once, options]); // 只包含確實需要作為依賴的選項

    return { ref, isInView };
};

export default useInView;
