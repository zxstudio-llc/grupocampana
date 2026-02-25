"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useState } from "react";
import { VideoVipSection } from "./components/video-section";

export function AboutSection() {
    return (
        <div className="relative mx-auto my-10 flex max-w-full flex-col items-center justify-center overflow-hidden">
            <div className="px-6 md:px-24 py-2 md:py-20 flex flex-col lg:flex-row-reverse items-center gap-2 md:gap-4 md:max-w-screen">

                {/* TEXTO - Viene desde la izquierda */}
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left px-6 md:px-0 w-full lg:w-1/2"
                >
                    <span className="text-[#b5934a] font-bold tracking-[0.2em] text-sm uppercase mb-2">
                        Sobre Nosotros
                    </span>

                    <h1 className="text-[#001D3D] text-5xl md:text-7xl font-bold tracking-[-0.05em] leading-[0.85] flex gap-4">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="block"
                        >
                            GRUPO
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-[#b5934a] block"
                        >
                            CAMPANA
                        </motion.span>
                    </h1>

                    <h2 className="text-2xl md:text-4xl font-bold tracking-tighter leading-[0.9] text-[#001D3D] mt-4 flex flex-wrap gap-x-3">
                        <motion.div
                            className="flex flex-wrap gap-x-3"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            {"Innovación, Solidez y Confianza".split(" ").map((word, index) => {
                                const isSolidez = word.replace(/[,.]/g, "") === "Solidez";

                                return (
                                    <motion.span
                                        key={index}
                                        variants={{
                                            hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
                                            visible: {
                                                opacity: 1,
                                                y: 0,
                                                filter: "blur(0px)",
                                                transition: {
                                                    duration: 0.6,
                                                    delay: index * 0.1,
                                                    ease: "easeOut"
                                                }
                                            }
                                        }}
                                        className={cn(
                                            "block",
                                            isSolidez ? "text-[#b5934a]" : "text-[#001D3D]"
                                        )}
                                    >
                                        {word}
                                    </motion.span>
                                );
                            })}
                        </motion.div>
                    </h2>

                    <div className="flex flex-col gap-2 w-full mt-2">

                        <p className="text-[#001D3D] leading-6 text-xl md:text-2xl font-bold tracking-tight text-center md:text-justify md:[text-justify:inter-word] md:[text-align-last:left]">
                            {"Somos uno de los grupos empresariales más sólidos y visionarios del Ecuador."
                                .split(" ")
                                .map((word, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ opacity: 0, filter: "blur(4px)" }}
                                        whileInView={{ opacity: 1, filter: "blur(0px)" }}
                                        viewport={{ once: false, amount: 0.2 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: index * 0.04,
                                            ease: "easeOut"
                                        }}
                                        className="inline"
                                    >
                                        {word}{" "}
                                    </motion.span>
                                ))}
                        </p>

                        <div className="text-[#001D3D]/80 leading-6 text-md md:text-lg text-justify [text-justify:inter-word] md:[text-align-last:left] [text-align-last:center]">
                            {"Desde el desarrollo inmobiliario hasta los servicios de salud, financieros, infraestructura, operación hotelera, alimentos, seguros, administración inmobiliaria y acción social, impulsamos proyectos que generan valor sostenible y crecimiento económico. Nos distingue una filosofía clara: construir relaciones profesionales a largo plazo, basadas en la excelencia, la confianza y el compromiso con el futuro."
                                .split(" ")
                                .map((word, index) => {
                                    const highlightWords = ["inmobiliario", "salud,", "financieros,", "infraestructura,", "hotelera,", "alimentos,", "seguros,", "inmobiliaria", "social,", "excelencia,", "confianza", "compromiso"];
                                    const isHighlight = highlightWords.includes(word.toLowerCase());

                                    return (
                                        <motion.span
                                            key={index}
                                            initial={{ opacity: 0, filter: "blur(4px)" }}
                                            whileInView={{ opacity: 1, filter: "blur(0px)" }}
                                            viewport={{ once: false, amount: 0.1 }}
                                            transition={{
                                                duration: 0.4,
                                                delay: index * 0.01,
                                                ease: "easeOut"
                                            }}
                                            className={cn(
                                                "inline",
                                                isHighlight ? "font-bold text-[#b5934a]" : ""
                                            )}
                                        >
                                            {word}{" "}
                                        </motion.span>
                                    );
                                })}
                        </div>
                    </div>
                </motion.div>

                {/* IMAGEN - VIDEO */}
                <div className="w-full lg:w-1/2">
                <VideoVipSection videoUrl="https://player.vimeo.com/video/1093144245" />
                </div>
            </div>
        </div>
    );
}