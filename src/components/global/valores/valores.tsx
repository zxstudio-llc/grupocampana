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
    { nombre: "Transparencia", desc: "Claridad total en nuestra gestión." },
    { nombre: "Trabajo en equipo", desc: "La unión multiplica resultados." },
    { nombre: "Orientación al cliente", desc: "Nuestra prioridad es el valor." },
    { nombre: "Perseverancia", desc: "Firmeza en alcanzar nuestras metas." },
    { nombre: "Liderazgo", desc: "Inspiramos el crecimiento del país." },
];

const firstRow = VALORES.slice(0, VALORES.length / 2);
const secondRow = VALORES.slice(VALORES.length / 2);

const ValorCard = ({ nombre, desc }: { nombre: string; desc: string }) => {
    return (
        <figure
            className={cn(
                "relative w-64 cursor-pointer overflow-hidden rounded-[28px] border p-6",
                // Estilo Apple: Fondo blanco puro, bordes sutiles y sombras de baja densidad
                "border-[#001D3D]/5 bg-white shadow-[0_8px_40px_rgba(0,0,0,0.02)]",
                "transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
                "hover:shadow-[0_20px_80px_rgba(0,0,0,0.06)] hover:-translate-y-2"
            )}
        >
            <div className="flex flex-col gap-3">
                {/* Detalle dorado de marca: Minimalista */}
                <div className="h-[2px] w-6 bg-[#b5934a] rounded-full opacity-80" />

                <figcaption className="text-xl font-bold tracking-tight text-[#001D3D]">
                    {nombre}
                </figcaption>

                <blockquote className="text-sm text-[#001D3D]/50 leading-relaxed font-medium">
                    {desc}
                </blockquote>
            </div>
        </figure>
    );
};

export function ValoresSection() {
    return (
        <section className="py-24 bg-[#fbfbfd]">
            <div className="w-full max-w-7xl mx-auto px-4 md:px-6 mb-12 md:mb-16 overflow-hidden">

                {/* DIV 1: CONTENEDOR DEL TÍTULO */}
                <div className="w-full flex justify-center mb-8 md:mb-10">
                    <h2 className="text-[#001D3D] text-5xl md:text-7xl font-bold tracking-[-0.05em] leading-[0.9] flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-center uppercase">
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
                            className="text-[#b5934a] block"
                        >
                            valores
                        </motion.span>
                    </h2>
                </div>

                {/* DIV 2: CONTENEDOR DEL PÁRRAFO ANIMADO */}
                <div className="w-full max-w-md md:max-w-4xl mx-auto">
                    <p className="text-[#001D3D] leading-relaxed text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-center">
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
                {/* Fila 1: Movimiento constante a 40s */}
                <Marquee pauseOnHover className="[--duration:40s] py-4">
                    {firstRow.map((valor) => (
                        <ValorCard key={valor.nombre} {...valor} />
                    ))}
                </Marquee>

                {/* Fila 2: Sentido opuesto y velocidad distinta (50s) para evitar sincronía mecánica */}
                <Marquee reverse pauseOnHover className="[--duration:50s] py-4">
                    {secondRow.map((valor) => (
                        <ValorCard key={valor.nombre} {...valor} />
                    ))}
                </Marquee>

                {/* Gradientes laterales Apple Style (Invisibles pero efectivos) */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#fbfbfd] z-10"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#fbfbfd] z-10"></div>
            </div>
        </section>
    );
}