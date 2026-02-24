"use client";

import HeroScroll from "./components/hero-scroll";

export function RevealHero() {
  return (
    <section className="w-full bg-black">
      <HeroScroll videoSrc="https://player.vimeo.com/video/1093144245?background=1&autoplay=1&autopause=0&muted=1&loop=1&dnt=1">
        <div className="flex flex-col items-center text-center space-y-6">
          <h2 className="text-6xl md:text-8xl font-bold text-white tracking-tighter">
          Transparencia, Innovación, Alianzas estratégicas.
          </h2>

          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl">
            Muchos de nuestros productos están disponibles para entrega inmediata.
            Calidad y rapidez sin esperas.
          </p>
        </div>
      </HeroScroll>
    </section>
  );
}
