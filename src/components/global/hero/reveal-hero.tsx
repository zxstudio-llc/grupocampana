"use client";

import { WordRotate } from "@/components/ui/word-rotate";
import HeroScroll from "./components/hero-scroll";

export function RevealHero() {
  return (
    <section className="w-full bg-black">
      <HeroScroll videoSrc="https://player.vimeo.com/video/1093144245?background=1&autoplay=1&autopause=0&muted=1&loop=1&dnt=1">
        <div className="reveal-rotate opacity-0 -mt-40 md:mt-0 md:translate-y-10 absolute">
          <WordRotate
            className="text-5xl md:text-8xl font-bold text-white tracking-tighter uppercase"
            words={["Transparencia", "Innovación", "Alianzas estratégicas"]}
            duration={2000}
          />
        </div>
        <div className="reveal-description opacity-0 -translate-y-10 absolute max-w-2xl">
          <p className="text-xl md:text-2xl text-gray-400">
            Somos un grupo empresarial orgullosamente comprometidos en generar un impacto positivo en nuestro país.
          </p>
        </div>
      </HeroScroll>
    </section>
  );
}
