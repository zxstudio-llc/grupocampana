import { AboutSection } from "@/components/global/about/about";
import { ActivosSection } from "@/components/global/activos/activos";
import CompanySection from "@/components/global/CompanySection";
import ContactSection from "@/components/global/contact";
import FAQSection from "@/components/global/faq";
import { RevealHero } from "@/components/global/hero/reveal-hero";
import InvestmentsSection from "@/components/global/investment";
import { Preloader } from "@/components/global/preloader/preloader";
import { StoryTimelineSection } from "@/components/global/story/story-section";
import { ValoresSection } from "@/components/global/valores/valores";
import { AppleCardsCarouselDemo } from "@/components/home/Cards";

const HomePage = () => {

    return (
        <>
            <Preloader />
            <section className="w-screen relative flex items-center justify-center flex-col px-0 md:px-0 py-0">
                {/* <Hero/> */}
                <RevealHero />
                <AboutSection />
                <div className="bg-gradient-to-b from-black to-[#00122d] w-screen">
                    <ValoresSection />
                    <ActivosSection />
                </div>
                <AppleCardsCarouselDemo />
                <StoryTimelineSection />
                <InvestmentsSection />
                <CompanySection />
                <FAQSection />
                <ContactSection />
            </section>
        </>
    )
};

export default HomePage
