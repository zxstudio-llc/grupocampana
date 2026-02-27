"use client";

import { WordRotate } from "@/components/ui/word-rotate";
import HeroScroll from "./components/hero-scroll";

export function RevealHero() {
  return (
    <section className="w-full bg-[#030910]">
      <HeroScroll videoSrc="https://player.vimeo.com/video/1168947259">
        <div className="reveal-rotate opacity-0 -mt-40 md:mt-0 md:translate-y-10 absolute">
          {/* <WordRotate
            className="text-5xl md:text-8xl font-bold text-white tracking-tighter uppercase"
            words={["Transparencia", "Innovación", "Alianzas estratégicas"]}
            duration={2000}
          /> */}
        </div>
      </HeroScroll>
    </section>
  );
}
