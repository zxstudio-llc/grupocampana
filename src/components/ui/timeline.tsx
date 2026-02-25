"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Tooltip } from "./tooltip-card";
import { Button } from "./button";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

interface TimelineEntry {
    title: string;
    content: React.ReactNode;
}
interface TimelineProps {
    data: TimelineEntry[];
    heading: string;
    description: string;
}

export const Timeline = ({
    data,
    heading,
    description,
}: TimelineProps) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const horizontalRef = useRef<HTMLDivElement>(null);
    const progressLineRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (!sectionRef.current || !horizontalRef.current) return;

        const mm = gsap.matchMedia();

        mm.add("(min-width: 1024px)", () => {
            const container = horizontalRef.current!;
            const totalWidth = container.scrollWidth;
            const viewportWidth = window.innerWidth;

            const scrollDistance = totalWidth - viewportWidth;

            if (scrollDistance <= 0) return;

            const ctx = gsap.context(() => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top top",
                        end: `+=${scrollDistance}`,
                        scrub: true,
                        pin: true,
                        anticipatePin: 1,
                        invalidateOnRefresh: true,
                    },
                });

                // Movimiento horizontal exacto
                tl.to(container, {
                    x: -scrollDistance,
                    ease: "none",
                });

                // Línea progreso sincronizada
                if (progressLineRef.current) {
                    tl.fromTo(
                        progressLineRef.current,
                        { width: "0%" },
                        { width: "100%", ease: "none" },
                        0
                    );
                }
            }, sectionRef);

            return () => ctx.revert();
        });

        return () => mm.revert();
    }, [data]);

    return (
        <section
            ref={sectionRef}
            className="w-full bg-white relative overflow-hidden py-24 h-screen"
        >
            <div className="max-w-7xl mx-auto px-6 mt-20 text-center">
                <h2 className="text-[#001D3D] text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-6">
                    {heading}
                </h2>

                {description && (
                    <p className="text-[#001D3D] text-xl max-w-4xl mx-auto">
                        {description}
                    </p>
                )}
            </div>

            {/* MOBILE VERSION (Original Vertical Line) */}
            <div className="lg:hidden relative max-w-7xl mx-auto pb-20 px-4">
                {/* Línea vertical decorativa */}
                <div className="absolute left-6 top-0 bottom-0 w-[2px] 
          bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] 
          from-transparent via-neutral-200 dark:via-neutral-700 
          to-transparent" />

                {data.map((item) => (
                    <div key={item.title} className="flex pt-12 relative">
                        <div className="w-6 flex justify-center">
                            <div className="h-4 w-4 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                        </div>
                        <div key={`${item.title}-mobile-content`} className="pl-6">
                            <h3 className="text-xl font-bold text-neutral-500 dark:text-neutral-500 mb-2">
                                {item.title}

                                {item.content}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>

            {/* DESKTOP VERSION */}
            <div className="hidden lg:block relative">                
                <div
                    className="absolute inset-0 left-0 right-0 h-[2px]
                    bg-[linear-gradient(to_right,var(--tw-gradient-stops))] 
                    from-transparent via-neutral-200 dark:via-neutral-800 to-transparent"
                    style={{ top: "50%", transform: "translateY(-50%)" }}
                />
                <div
                    ref={progressLineRef}
                    className="absolute h-[2px] 
                    bg-gradient-to-r from-[#b8912e] via-[#e3c16f] to-transparent"
                    style={{
                        top: "50%",
                        transform: "translateY(-50%)",
                        width: "0%",
                    }}
                />

                <div className="overflow-hidden">
                    <div
                        ref={horizontalRef}
                        className="flex gap-10 px-20 items-center h-[40vh] -mt-6"
                    >
                        {data.map((item) => (
                            <div
                                key={item.title}
                                className="min-w-[200px] flex-shrink-0 flex flex-col items-center justify-center relative"
                            >
                                
                                <h3 className="text-xl font-medium text-neutral-800  transition-colors duration-500 hover:text-[#b8912e]/20 select-none">
                                        {item.title}
                                    </h3>
                                <Tooltip
                                    containerClassName="cursor-pointer"
                                    content={
                                        <div key={`${item.title}-mobile-content`} className="max-w-md">
                                            {item.content}
                                        </div>
                                    }
                                >
                                    {/* Círculo idéntico a Aceternity con toque Dorado */}
                                    <div className="group relative flex items-center justify-center">
                                        <div className="absolute inset-0 rounded-full bg-[#b8912e] opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300" />
                                        <div className="h-10 w-10 rounded-full bg-slate-500 flex items-center justify-center shadow-sm relative z-20 transition-transform duration-300 group-hover:scale-110">
                                            <div className="h-4 w-4 rounded-full bg-[#001D3D] p-2 group-hover:bg-[#b8912e] transition-colors duration-300" />
                                        </div>
                                    </div>
                                </Tooltip>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 text-center">
            <Button
                asChild
                className="px-6 py-6 border-[#b5934a]/30 hover:bg-[#b5934a] transition-all group rounded-full bg-[#001D3D] w-full md:w-fit"
                >
                <Link href="/historia" target="_blank">
                    <span className="font-bold tracking-tight text-white">
                    Conoce Nuestra Historia
                    </span>
                </Link>
                </Button>
            </div>
        </section>
    );
};