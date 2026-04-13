import HeroMedia from "@/components/Hero";
import GlobalAnimation from "@/components/GlobalAnimation/GlobalAnimation";
import PrivacyPolicySection from "@/components/PrivacyPolicySection";

export default function PrivacyPolicy() {
    return (
        <main className="relative w-full pt-20 h-full pb-10 ">
            <GlobalAnimation />
            <HeroMedia
                type="image"
                desktopFile="/assets/hero-images/privacy.jpg"
                mobileFile="/assets/hero-images/privacy.jpg"
            />
            <PrivacyPolicySection />
        </main>
    );
}