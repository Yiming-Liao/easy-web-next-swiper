import { usePathname, useRouter } from "next/navigation";
import { animatePageOut } from "@/app/template";
import { useContainerStore, useMaskStore } from "@/store/templateStore";
import { useState } from "react";

const TransitionLink = ({
    href,
    children
}: {
    href: string,
    children: React.ReactNode
}) => {
    const router = useRouter();
    const pathname = usePathname();
    const { maskRef } = useMaskStore();
    const { containerRef } = useContainerStore();
    const [isAnimating, setIsAnimating] = useState<boolean>(false);

    const handleClick = () => {
        if (!maskRef?.current || !containerRef?.current || pathname === href || isAnimating) return;
        setIsAnimating(true);
        animatePageOut(href, router, maskRef.current, containerRef.current, setIsAnimating);
    };

    return (
        <div
            className="w-fit h-fit"
            onClick={handleClick}
        >
            {children}
        </div>
    );
}

export default TransitionLink;
