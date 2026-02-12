import { Container } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const CompanySection = () => {
    return (
        <section className="py-16 md:py-24 bg-white dark:bg-transparent overflow-hidden">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Columna de Información (Ahora a la izquierda en desktop) */}
                    {/* lg:order-1 asegura que en escritorio sea lo primero */}
                    <div className="lg:col-span-5 lg:order-1 relative w-full">
                        <div className="relative w-full max-w-[450px] aspect-[4/5] ml-auto">
                            {/* ml-auto empuja el contenedor hacia la derecha */}
                            <Image
                                src="https://grupocampana.ec/wp-content/uploads/2025/04/Pablo-Campana-1000x1498-1.png"
                                alt="Grupo Campana Representative"
                                fill
                                className="object-contain object-right z-10"
                                /* object-right asegura que el contenido de la imagen se pegue a la derecha */
                                priority
                            />
                        </div>
                    </div>
                    <div className="lg:col-span-7 lg:order-2 flex flex-col items-start text-left">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#001D3D]leading-tight">
                            Grupo Campana
                        </h2>
                        <h3 className="text-3xl md:text-4xl font-semibold text-[#001D3D] mt-2 mb-6">
                            Innovación Solidez Confianza
                        </h3>

                        <div className="space-y-4 max-w-2xl">
                            <p className="text-gray-700 leading-relaxed text-lg">
                                Somos uno de los grupos empresariales más sólidos y visionarios del Ecuador.
                                Desde el desarrollo inmobiliario hasta los servicios de salud, financieros, infraestructura,
                                operación hotelera, alimentos, seguros, administración inmobiliaria y acción social,
                                impulsamos proyectos que generan valor sostenible y crecimiento económico.
                            </p>
                            <p className="text-gray-700 leading-relaxed text-lg font-medium">
                                Nos distingue una filosofía clara: construir relaciones profesionales a largo plazo, basadas
                                en la excelencia, la confianza y el compromiso con el futuro.
                            </p>
                        </div>

                        {/* Botón Principal */}
                        <Link
                            href="#"
                            className="mt-10 px-8 py-4 bg-[#C29B4B] hover:bg-[#A6833D] text-white rounded-full text-lg font-medium transition-all shadow-lg hover:shadow-xl"
                        >
                            Conocer más sobre Grupo Campana
                        </Link>

                        {/* Badges Inferiores */}
                        <div className="flex flex-wrap gap-4 mt-12 w-full">
                            <div className="bg-[#C29B4B] text-white px-6 py-3 rounded-full text-sm md:text-base font-medium whitespace-nowrap">
                                711 Millones En activos
                            </div>
                            <div className="bg-[#C29B4B] text-white px-6 py-3 rounded-full text-sm md:text-base font-medium whitespace-nowrap">
                                + 10.000 Fuentes de empleo
                            </div>
                            <div className="bg-[#C29B4B] text-white px-6 py-3 rounded-full text-sm md:text-base font-medium whitespace-nowrap">
                                13 Unidades de Negocio
                            </div>
                        </div>
                    </div>

                    {/* Columna de Imagen (Ahora a la derecha en desktop) */}
                    {/* lg:order-2 asegura que en escritorio sea lo segundo */}

                </div>
            </Container>
        </section>
    );
};

export default CompanySection;