import HeroMedia from "@/components/Hero";
import GlobalAnimation from "@/components/GlobalAnimation/GlobalAnimation";
import DisclaimerSection from "@/components/DisclaimerSection";

export default function Disclaimer() {
    return (
        <main className="relative w-full pt-20 h-full pb-10 ">
            <GlobalAnimation />
            <HeroMedia
                type="image"
                desktopFile="/assets/hero-images/disclaimer.jpg"
                mobileFile="/assets/hero-images/disclaimer.jpg"
            />
            <DisclaimerSection />
        </main>
    );
}