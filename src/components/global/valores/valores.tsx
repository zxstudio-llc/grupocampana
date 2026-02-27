"use client";
import Marquee from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const VALORES = [
    { nombre: "Integridad", desc: "Actuamos con rectitud y honestidad." },
    { nombre: "Excelencia", desc: "Buscamos la calidad superior en todo." },
    { nombre: "Compromiso", desc: "Dedicación total con nuestros proyectos." },
    { nombre: "Confianza", desc: "Construimos relaciones duraderas." },
    { nombre: "Innovación", desc: "Creamos soluciones para el futuro." },
];

const cardsRow = VALORES;

const ValorCard = ({ nombre, desc }: { nombre: string; desc: string }) => {
    return (
        <figure
            className={cn(
                "relative w-72 overflow-hidden rounded-3xl p-8",
                // Glassmorphism: Fondo semitransparente con desenfoque
                "bg-white/80 backdrop-blur-xl border border-white/10",
                // Sombra sutil pero elegante (Apple style)
                "shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)]",
                // Transición suave
                "transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)]",
                "hover:bg-white/80 hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.12)] hover:-translate-y-1"
            )}
        >
            <div className="flex flex-col gap-4">
                {/* Línea decorativa más fina, estilo "Apple UI" */}
                <div className="h-[3px] w-10 bg-[#b5934a] rounded-full" />

                <figcaption className="text-2xl font-semibold tracking-[-0.02em] text-[#001D3D]">
                    {nombre}
                </figcaption>

                <blockquote className="text-[15px] text-[#001D3D]/60 leading-relaxed tracking-tight font-medium">
                    {desc}
                </blockquote>
            </div>
        </figure>
    );
};

export function ValoresSection() {
    return (
        <section className="py-24 h-screen flex flex-col justify-center">
            <div className="w-full max-w-7xl mx-auto px-4 md:px-6 mb-12 md:mb-16 overflow-hidden">

                <div className="w-full flex justify-center mb-8 md:mb-10">
                    <h2 className="pointer-events-none text-white bg-clip-text text-center text-5xl md:text-8xl leading-none whitespace-pre-wrap text-transparent font-bold flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 uppercase">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="block"
                        >
                            Nuestros
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="block"
                        >
                            valores
                        </motion.span>
                    </h2>
                </div>

                <div className="w-full max-w-md md:max-w-4xl mx-auto">
                    <p className="text-white leading-relaxed text-lg md:text-xl font-semibold tracking-tight text-center">
                        {"Actuamos con integridad, apostamos por la excelencia y creemos en el poder de construir relaciones de confianza que trasciendan en el tiempo."
                            .split(" ")
                            .map((word, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, filter: "blur(4px)" }}
                                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
                                    viewport={{ once: false, amount: 0.2 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.03,
                                        ease: "easeOut"
                                    }}
                                    className="inline"
                                >
                                    {word}{" "}
                                </motion.span>
                            ))}
                    </p>
                </div>
            </div>

            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                <Marquee pauseOnHover className="[--duration:50s] py-4">
                    {cardsRow.map((valor) => (
                        <ValorCard key={valor.nombre} {...valor} />
                    ))}
                </Marquee>
            </div>
        </section>
    );
}