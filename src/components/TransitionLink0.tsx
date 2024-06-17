import { usePathname, useRouter } from "next/navigation";
import { animatePageOut } from "@/app/template";
import { useBannerStore } from "@/store/bannerStore";

const TransitionLink = ({
    href,
    children
}: {
    href: string,
    children: React.ReactNode
}) => {
    const router = useRouter();
    const pathname = usePathname();
    const { bannerRef } = useBannerStore();

    const handleClick = () => {
        if (!bannerRef?.current || pathname === href) return;
        animatePageOut(href, router, bannerRef.current);
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
