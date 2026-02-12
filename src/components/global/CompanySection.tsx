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
                        <h2 className="text-3xl md:text-5xl font-bold text-[#001D3D] leading-tight">
                            Grupo Campana
                        </h2>
                        <h3 className="text-2xl md:text-4xl font-semibold text-[#001D3D] mt-1 mb-6">
                            Innovación Solidez Confianza
                        </h3>

                        <div className="space-y-4 max-w-2xl">
                            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                                Somos uno de los grupos empresariales más sólidos y visionarios del Ecuador.
                                Desde el desarrollo inmobiliario hasta los servicios de salud, financieros, infraestructura,
                                operación hotelera, alimentos, seguros, administración inmobiliaria y acción social,
                                impulsamos proyectos que generan valor sostenible y crecimiento económico.
                            </p>
                            <p className="text-gray-700 leading-relaxed text-base md:text-lg font-medium">
                                Nos distingue una filosofía clara: construir relaciones profesionales a largo plazo, basadas
                                en la excelencia, la confianza y el compromiso con el futuro.
                            </p>
                        </div>
                        
                        <Link
                            href="#"
                            className="mt-8 md:mt-10 px-8 py-4 bg-[#C29B4B] hover:bg-[#A6833D] text-white rounded-full text-base md:text-lg font-medium transition-all shadow-lg hover:shadow-xl w-full sm:w-auto text-center"
                        >
                            Conocer más sobre Grupo Campana
                        </Link>

                        {/* Badges - Centrados y con respiro en mobile */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4 mt-10 md:mt-12 w-full">
                            <div className="bg-[#C29B4B] text-white px-5 py-2.5 rounded-full text-xs md:text-base font-medium whitespace-nowrap shadow-sm">
                                711 Millones En activos
                            </div>
                            <div className="bg-[#C29B4B] text-white px-5 py-2.5 rounded-full text-xs md:text-base font-medium whitespace-nowrap shadow-sm">
                                + 10.000 Fuentes de empleo
                            </div>
                            <div className="bg-[#C29B4B] text-white px-5 py-2.5 rounded-full text-xs md:text-base font-medium whitespace-nowrap shadow-sm">
                                13 Unidades de Negocio
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default CompanySection;