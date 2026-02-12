import { Container } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const CompanySection = () => {
    return (
        <section className="py-12 md:py-24 bg-white dark:bg-transparent overflow-hidden">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

                    {/* Contenedor de Imagen - OCULTO EN MOBILE */}
                    <div className="hidden lg:block lg:col-span-5 lg:order-1 relative w-full">
                        <div className="relative w-full max-w-[450px] aspect-[4/5] ml-auto">
                            <Image
                                src="https://grupocampana.ec/wp-content/uploads/2025/04/Pablo-Campana-1000x1498-1.png"
                                alt="Grupo Campana Representative"
                                fill
                                className="object-contain object-right z-10"
                                priority
                            />
                        </div>
                    </div>

                    {/* Contenedor de Texto - CON PADDING EN MOBILE */}
                    <div className="lg:col-span-7 lg:order-2 flex flex-col items-center lg:items-start text-center lg:text-left px-6 md:px-0">
                        {/* Label superior estilo Aceternity */}
                        <span className="text-[#b5934a] font-bold tracking-[0.2em] text-sm uppercase mb-2">
                            Nuestra Identidad
                        </span>

                        {/* Título Principal con Estilo de Impacto */}
                        <h2 className="text-[#001D3D] text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9]">
                            GRUPO <br className="hidden md:block" />
                            <span className="text-[#b5934a]">CAMPANA</span>
                        </h2>

                        {/* Subtítulo con estilo moderno */}
                        <h3 className="text-2xl md:text-3xl font-semibold text-[#001D3D] mt-4 mb-8 leading-tight">
                            Innovación, <span className="text-[#b5934a]">Solidez</span> y Confianza
                        </h3>

                        {/* Cuerpo de texto con énfasis en palabras clave */}
                        <div className="space-y-6 max-w-2xl">
                            <p className="text-[#001D3D] leading-relaxed text-lg md:text-xl">
                                Somos uno de los grupos empresariales más sólidos y visionarios del Ecuador.
                                Impulsamos proyectos en <span className="font-bold text-[#b5934a]">bienes raíces, salud, seguros e infraestructura</span>,
                                generando valor sostenible y crecimiento económico a nivel nacional.
                            </p>
                            <p className="text-[#001D3D] leading-relaxed text-lg font-medium italic border-l-4 border-[#b5934a] pl-4 lg:ml-0">
                                "Construimos relaciones a largo plazo basadas en la excelencia y el compromiso con el futuro."
                            </p>
                        </div>

                        {/* Botón CTA con Efecto de Resplandor (Glow) */}
                        <div className="relative group mt-10 w-full sm:w-fit">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#b5934a] to-[#001D3D] rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
                            <Link
                                href="#"
                                className="relative flex items-center justify-center gap-3 bg-[#001D3D] text-white px-10 py-4 rounded-xl font-bold text-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
                            >
                                <span>CONOCER MÁS</span>
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Link>
                        </div>

                        {/* Badges con estilo Premium (Outline / Solid) */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4 mt-12 w-full">
                            <div className="bg-[#001D3D] text-white border border-[#b5934a]/30 px-6 py-3 rounded-xl text-xs md:text-sm font-bold tracking-wider uppercase shadow-xl">
                                711M En activos
                            </div>
                            <div className="bg-[#b5934a] text-[#001D3D] px-6 py-3 rounded-xl text-xs md:text-sm font-bold tracking-wider uppercase shadow-xl">
                                +10k Empleos
                            </div>
                            <div className="bg-[#001D3D] text-white border border-[#b5934a]/30 px-6 py-3 rounded-xl text-xs md:text-sm font-bold tracking-wider uppercase shadow-xl">
                                13 Unidades
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default CompanySection;