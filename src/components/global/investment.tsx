"use client";
import React, { useId, useRef } from "react";
import { motion, useInView, useMotionValue, useMotionTemplate } from "framer-motion";
import { Button } from "../ui/button";

export default function InvestmentsSection() {
    const containerRef = useRef(null);
    const isVisible = useInView(containerRef, { once: true, margin: "-100px" });

    return (
        <section ref={containerRef} className="py-24 lg:py-40 transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-6">

                {/* Cabecera Estilo Apple: Tipografía limpia y centrada en móvil, offset en desktop */}
                <div className="flex flex-col items-center text-left mb-10 space-y-10">
                    {/* Label Superior */}
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        className="text-[#b5934a] font-bold tracking-[0.2em] text-sm md:text-base uppercase text-center"
                    >
                        Oportunidades de Inversión
                    </motion.span>

                    {/* Headline Masivo - Respetando tus saltos de línea y texto */}
                    <div className="max-w-7xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="text-[#001D3D] gap-12 text-6xl md:text-[100px] font-bold tracking-tight leading-[0.9] uppercase text-center"
                        >
                            <span>¿POR QUÉ INVERTIR </span>
                            <span className="text-[#b5934a]">EN ECUADOR?</span>
                        </motion.h2>
                    </div>

                    {/* Descripción y Cuerpo - Distribución de dos niveles como en la captura */}
                    <div className="max-w-5xl space-y-8">
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-2xl font-semibold text-[#001D3D] leading-tight text-center"
                        >
                            Impulsa tu capital en un país de <span className="text-[#b5934a]">oportunidades</span>
                        </motion.h3>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.3 }}
                            className="text-[#001D3D] text-xl md:text-xl leading-relaxed max-w-4xl mx-auto"
                            style={{
                                textAlign: "justify",
                                textAlignLast: "center",
                                textJustify: "inter-word"
                            }}
                        >
                            En Grupo Campana abrimos las puertas a un Ecuador lleno de potencial.
                            Nuestra experiencia en sectores clave como <span className="font-bold text-[#b5934a]">bienes raíces, salud, seguros y alimentación</span>,
                            combinada con un modelo de gestión transparente y ágil, convierte cada proyecto en una oportunidad <span className="font-bold text-[#b5934a] uppercase tracking-wider">rentable y segura</span>.
                        </motion.p>
                    </div>
                </div>

                {/* Grid de Pilares: Minimalismo puro */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto px-6">
                    {strategicGrid.map((feature, idx) => (
                        <CardApple key={feature.id} index={idx}>
                            <div className="h-full flex flex-col justify-between relative z-10">
                                {/* Parte Superior: Identificador y Título */}
                                <div>
                                    <header className="mb-4 flex justify-between items-start">
                                        <span className="text-[10px] font-black text-[#b5934a] tracking-[0.3em] uppercase opacity-60">
                                            {feature.id}
                                        </span>
                                        {/* Decoración minimalista opcional: un punto dorado sutil */}
                                        <div className="h-3 w-3 rounded-full bg-[#b5934a]" />
                                    </header>

                                    <h4 className="text-2xl md:text-3xl font-semibold text-white tracking-tight leading-[1.1]">
                                        {feature.title}
                                    </h4>
                                </div>

                                {/* Parte Inferior: Descripción con tipografía más aireada */}
                                <footer className="mt-auto">
                                    <p className="text-neutral-400 text-base leading-relaxed font-light">
                                        {feature.description}
                                    </p>
                                </footer>
                            </div>
                        </CardApple>
                    ))}
                </div>

                {/* Botón CTA: Apple Style (Pastilla minimalista) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-20 flex justify-center"
                >
                    <Button
                        asChild
                        size="lg"
                        className="px-6 py-6 border-[#b5934a]/30 hover:bg-[#b5934a] transition-all group rounded-full bg-[#001D3D] w-full md:w-fit"
                    >
                        <motion.span
                            whileHover={{ y: -2 }}
                            whileTap={{ y: 0 }}
                        >
                            <span className="font-bold tracking-tight text-white relative z-10">Consultar Proyectos</span>

                            {/* Efecto de brillo sutil estilo Apple al hacer hover */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#b5934a]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.span>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}

const CardApple = ({ children, index }: { children: React.ReactNode; index: number }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            onMouseMove={(e) => {
                const { left, top } = e.currentTarget.getBoundingClientRect();
                mouseX.set(e.clientX - left);
                mouseY.set(e.clientY - top);
            }}
            className="group relative h-[400px] p-10 rounded-[2rem] bg-neutral-50 dark:bg-[#0a0a0a] border border-neutral-100 dark:border-white/5 overflow-hidden transition-colors hover:bg-white dark:hover:bg-[#111] hover:border-[#b5934a]/20"
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 group-hover:opacity-100 transition duration-500"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(181, 147, 74, 0.08), transparent 80%)
                    `,
                }}
            />
            {children}
        </motion.div>
    );
};

const strategicGrid = [
    {
        id: "ESTRATEGIA 01",
        title: "Crecimiento en sectores estratégicos",
        description: "Ecuador ofrece oportunidades sólidas en bienes raíces, salud, tecnología y turismo. La dolarización y la demanda interna generan un entorno atractivo para inversiones estructuradas.",
    },
    {
        id: "ESTRATEGIA 02",
        title: "Alto potencial de valorización",
        description: "La expansión urbana y el desarrollo de infraestructura impulsan la plusvalía en ciudades clave. Invertir en proyectos bien ubicados permite capturar crecimiento sostenido y rentabilidad a mediano y largo plazo.",
    },
    {
        id: "ESTRATEGIA 03",
        title: "Inversión con impacto real",
        description: "Invertir en Ecuador también es apostar por el desarrollo del país. Cada proyecto genera empleo, dinamiza la economía y contribuye a mejorar la calidad de vida, combinando rentabilidad con propósito.",
    },
];