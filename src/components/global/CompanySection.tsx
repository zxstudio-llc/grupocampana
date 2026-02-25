"use client";
import { Container } from "@/components";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Modal, ModalBody, ModalContent, ModalTrigger } from "../ui/animated-modal";
import { Play } from "lucide-react";

const CompanySection = () => {
    const videoUrl = "https://player.vimeo.com/video/1093144245";

    const ref = useRef(null);
    const isVisible = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="py-24 lg:py-40 overflow-hidden transition-colors duration-500">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

                    {/* LADO IZQUIERDO: Fotografía con desvanecimiento Apple Style */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="block lg:col-span-5 relative group"
                    >
                        <div className="relative w-full aspect-[4/5] rounded-none md:rounded-3xl overflow-hidden bg-neutral-900">
                            <div className="relative w-[60%] md:w-[75%] lg:w-[85%] max-w-[550px] mx-auto pt-8">
                                <Image
                                    src="/assets/logo.svg"
                                    alt="Logo"
                                    width={600} // Aumentamos la base para evitar pixelado
                                    height={150}
                                    className="w-full h-auto invert brightness-0 opacity-90 transition-opacity duration-500 group-hover:opacity-100"
                                    style={{ filter: "drop-shadow(0px 4px 20px rgba(0,0,0,0.1))" }}
                                />
                            </div>
                            <Image
                                src="https://grupocampana.ec/wp-content/uploads/2025/04/Pablo-Campana-1000x1498-1.png"
                                alt="Pablo Campana - CEO Grupo Campana"
                                fill
                                className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out z-10"
                                priority
                            />

                            {/* GRADIENTE: Con pointer-events-none para no bloquear el mouse */}
                            <div className="absolute inset-0 bg-gradient-to-t from-white/20 dark:from-[#030712]/40 to-transparent z-20 pointer-events-none" />
                        </div>

                        {/* Firma / Cargo flotante con Acento de Color */}
                        <div className="absolute z-30 -bottom-6 -right-6 bg-[#001D3D]/90 backdrop-blur-xl p-6 rounded-2xl border border-[#b5934a]/30 shadow-[0_20px_50px_rgba(0,0,0,0.3)] group">
                            {/* Reflejo superior para dar volumen */}
                            <p className="text-white font-bold text-xl leading-none tracking-tight drop-shadow-sm">
                                Pablo Campana
                            </p>

                            <div className="flex items-center gap-2 mt-2">
                                {/* Línea de acento dinámica */}
                                <div className="h-px w-4 bg-[#b5934a]" />
                                <p className="text-[#b5934a] text-xs font-bold tracking-[0.2em] uppercase brightness-110">
                                    CEO Grupo Campana
                                </p>
                            </div>

                            {/* Brillo ambiental interno */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#b5934a]/10 via-transparent to-transparent pointer-events-none" />
                        </div>
                    </motion.div>

                    {/* LADO DERECHO: Narrativa de Inversión */}
                    <div className="px-8 md:px-0 lg:col-span-7 flex flex-col items-center lg:items-start">

                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={isVisible ? { opacity: 1 } : {}}
                            className="text-[#b5934a] font-bold tracking-[0.3em] text-xs uppercase"
                        >
                            Liderazgo con Propósito
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.2 }}
                            className="text-[#001D3D] text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-4 text-center lg:text-left uppercase"
                        >
                            CONSTRUIR EL <br />
                            <span className="text-[#b5934a]">FUTURO HOY.</span>
                        </motion.h2>

                        <div className="max-w-2xl space-y-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.3 }}
                                className="text-neutral-500 text-lg leading-7"
                                style={{
                                    textAlign: "justify",
                                    textAlignLast: "left",
                                    textJustify: "inter-word"
                                }}
                            >
                                <p>
                                    En Grupo Campana creemos que invertir es mucho más que destinar capital; es confiar, construir y proyectar futuro. Durante años hemos trabajado con una visión clara: desarrollar proyectos sólidos, estructurados y sostenibles que generen valor real para quienes confían en nosotros y para el país.
                                </p>
                                <p>
                                    Ecuador es una tierra de oportunidades. Un país dolarizado, con sectores estratégicos en crecimiento y un enorme potencial de valorización. Creemos firmemente en su futuro, y por eso invertimos aquí, desarrollamos aquí y generamos empleo aquí. Cada proyecto que impulsamos está respaldado por disciplina financiera y una ejecución responsable.
                                </p>
                            </motion.div>
                        </div>
                        <div className="w-full mt-12">
                            <Modal>
                                {/* El contenedor principal debe estar DENTRO del Modal para que el Trigger y la Firma se alineen */}
                                <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-8">

                                    {/* LADO IZQUIERDO: Botón Disparador */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                                        transition={{ delay: 0.7 }}
                                        className="w-full sm:w-auto"
                                    >
                                        <ModalTrigger className="bg-transparent border-none w-full sm:w-auto block group">
                                            <Button
                                                asChild
                                                className="px-6 py-6 border-[#b5934a]/30 hover:bg-[#b5934a] group rounded-full bg-[#001D3D] w-full md:w-fit transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-4 cursor-pointer"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <span>Mensaje para inversionistas</span>
                                                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#b5934a] text-[#001D3D] transition-transform group-hover:scale-110 group-hover:bg-[#001D3D] group-hover:text-[#b5934a] shadow-lg">
                                                        <Play size={16} fill="currentColor" className="ml-0.5" />
                                                    </div>
                                                </div>
                                            </Button>
                                        </ModalTrigger>
                                    </motion.div>

                                    {/* LADO DERECHO: Firma */}
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                                        transition={{ delay: 0.5 }}
                                        className="text-center sm:text-right"
                                    >
                                        <div className="inline-block">
                                            <p className="font-bold text-[#001D3D] text-xl tracking-tight italic whitespace-nowrap">
                                                — Pablo Campana
                                            </p>
                                            <div className="h-0.5 w-12 bg-[#b5934a] ml-auto mt-1" />
                                        </div>
                                    </motion.div>
                                </div>

                                {/* CONTENIDO DEL MODAL */}
                                <ModalBody>
                                    <ModalContent className="max-w-7xl p-0 overflow-hidden bg-black border border-white/10 flex flex-col rounded-3xl shadow-2xl">
                                        {/* Contenedor del Video con Aspect Ratio Forzado */}
                                        <div className="relative w-full aspect-video bg-black flex items-center justify-center">
                                            <iframe
                                                src={`${videoUrl}?autoplay=1&api=1&background=0&mute=0`}
                                                className="absolute inset-0 w-full h-full border-none"
                                                allow="autoplay; fullscreen; picture-in-picture"
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </div>

                                        {/* Footer del Modal estilo Apple VIP */}
                                        <div className="p-8 bg-[#001D3D] border-t border-[#b5934a]/20">
                                            <h4 className="text-2xl font-bold text-[#b5934a] tracking-tight">
                                                Presentación Ejecutiva: Grupo Campana
                                            </h4>
                                            <p className="text-neutral-400 text-lg mt-1 font-medium">
                                                Innovación, Solidez y el futuro de la inversión en Ecuador.
                                            </p>
                                        </div>
                                    </ModalContent>
                                </ModalBody>
                            </Modal>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default CompanySection;