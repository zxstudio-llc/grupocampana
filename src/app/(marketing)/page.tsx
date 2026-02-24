import CompanySection from "@/components/global/CompanySection";
import ContactSection from "@/components/global/contact";
import FAQSection from "@/components/global/faq";
import Hero from "@/components/global/hero/hero";
import { RevealHero } from "@/components/global/hero/reveal-hero";
import InvestmentsSection from "@/components/global/investment";
import { AppleCardsCarouselDemo } from "@/components/home/Cards";
import { reviews } from "@/constants";

const HomePage = () => {

    const firstRow = reviews.slice(0, reviews.length / 2);
    const secondRow = reviews.slice(reviews.length / 2);

    return (
        <section className="w-screen relative flex items-center justify-center flex-col px-0 md:px-0 py-0">
            {/* <Hero/> */}
            <RevealHero/>
            <CompanySection/>
            <AppleCardsCarouselDemo/>
            <InvestmentsSection/>
            <FAQSection/>
            <ContactSection/>
        </section>
    )
};

export default HomePage
