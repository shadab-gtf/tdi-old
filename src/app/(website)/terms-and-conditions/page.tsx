import HeroMedia from "@/components/Hero";
import GlobalAnimation from "@/components/GlobalAnimation/GlobalAnimation";
import TermsSection from "@/components/TermsSection";

export default function TermsConditions() {
    return (
        <main className="relative w-full pt-20 h-full pb-10 ">
            <GlobalAnimation />
            <HeroMedia
                type="image"
                desktopFile="/assets/hero-images/terms.jpg"
                mobileFile="/assets/hero-images/terms.jpg"
            />
            <TermsSection />
        </main>
    );
}