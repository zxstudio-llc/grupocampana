"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Tooltip } from "./tooltip-card";
import { Button } from "./button";
import Link from "next/link";
import { motion } from "framer-motion";

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
    const progressLineMobileRef = useRef<HTMLDivElement>(null);
    const mobileContainerRef = useRef<HTMLDivElement>(null);

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

            mm.add("(max-width: 1023px)", () => {
                const ctx = gsap.context(() => {
                    gsap.fromTo(
                        progressLineMobileRef.current,
                        { height: "0%" },
                        {
                            height: "100%",
                            ease: "none",
                            scrollTrigger: {
                                trigger: ".mobile-timeline-container",
                                start: "top 20%",
                                end: "bottom 80%",
                                scrub: true,
                            },
                        }
                    );
                });
                return () => ctx.revert();
            });

            return () => ctx.revert();
        });

        mm.add("(max-width: 1023px)", () => {
            const container = mobileContainerRef.current;
            const progressLine = progressLineMobileRef.current;

            if (!container || !progressLine) return;

            const ctx = gsap.context(() => {

                // Línea vertical animada
                gsap.fromTo(
                    progressLine,
                    { height: "0%" },
                    {
                        height: "100%",
                        ease: "none",
                        scrollTrigger: {
                            trigger: container,
                            start: "top 80%",
                            end: "bottom 20%",
                            scrub: true,
                        },
                    }
                );

                // Animación de cada item
                gsap.utils.toArray<HTMLElement>(".timeline-item").forEach((item) => {
                    gsap.from(item, {
                        opacity: 0,
                        y: 40,
                        duration: 0.8,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: item,
                            start: "top 85%",
                            toggleActions: "play none none reverse",
                        },
                    });
                });

            }, sectionRef);

            return () => ctx.revert();
        });

        return () => mm.revert();
    }, [data]);

    return (
        <section
            ref={sectionRef}
            className="w-full bg-white relative py-24 lg:h-screen lg:overflow-hidden"
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
            <div
                ref={mobileContainerRef}
                className="lg:hidden relative max-w-7xl mx-auto px-6 pb-20 mobile-timeline-container"
            >
                {/* Línea de fondo */}
                <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-neutral-100" />

                {/* Línea progreso animada */}
                <div
                    ref={progressLineMobileRef}
                    className="absolute left-8 top-0 w-[2px] bg-[#b8912e] z-10 origin-top"
                />

                <div className="relative z-20">
                    {data.map((item) => (
                        <div
                            key={item.title}
                            className="timeline-item flex pt-12 relative"
                        >
                            <div className="w-4 flex justify-center mr-6">
                                <div className="h-4 w-4 rounded-full bg-white border-2 border-[#b8912e] shadow-sm" />
                            </div>

                            <div className="flex-1">
                                <h3 className="text-[#b8912e] font-bold tracking-[0.2em] text-sm uppercase mb-2">
                                    {item.title}
                                </h3>

                                <div className="text-[#001D3D] text-lg leading-relaxed font-medium">
                                    {item.content}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
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