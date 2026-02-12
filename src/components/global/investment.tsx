import React from "react";
import { useId } from "react";

export default function InvestmentsSection() {
    return (
        <section className="py-20 lg:py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                {/* Cabecera basada en la captura de pantalla */}
                <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 mb-10 items-center">
                    {/* Título con Estilo de Impacto */}
                    <div className="lg:col-span-6">
                        <div className="space-y-2">
                            <span className="text-[#b5934a] font-bold tracking-[0.2em] text-sm uppercase">
                                Oportunidades de Inversión
                            </span>
                            <h2 className="text-[#001D3D] text-5xl md:text-7xl font-bold tracking-tighter leading-none">
                                ¿POR QUÉ <br />
                                <span className="text-[#b5934a] inline-block mt-2">INVERTIR EN ECUADOR?</span>
                            </h2>
                        </div>
                    </div>

                    {/* Descripción con Borde Lateral Decorativo */}
                    <div className="lg:col-span-6 relative lg:pl-12">
                        {/* Línea decorativa vertical estilo Aceternity */}
                        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#b5934a] via-[#001229]/20 to-transparent hidden lg:block" />

                        <h3 className="text-2xl md:text-3xl font-semibold text-[#001D3D] mb-6 leading-tight">
                            Impulsa tu capital en un país de <span className="text-[#b5934a]">oportunidades</span>
                        </h3>

                        <p className="text-[#001D3D] text-lg leading-relaxed mb-10">
                            En Grupo Campana abrimos las puertas a un Ecuador lleno de potencial.
                            Nuestra experiencia en sectores clave como <span className="font-bold text-[#b5934a]">bienes raíces, salud, seguros y alimentación</span>,
                            combinada con un modelo de gestión transparente y ágil, convierte cada proyecto en una oportunidad <span className="font-bold text-[#b5934a] uppercase text-sm tracking-wider">rentable y segura</span>.
                        </p>

                        {/* Botón CTA Mejorado con Efecto de Resplandor */}
                        <div className="relative group w-fit">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#b5934a] to-[#e07a5f] rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
                            <button className="relative bg-[#001229] text-white px-10 py-4 rounded-xl font-bold text-lg transition-all flex items-center gap-3 hover:scale-[1.02] active:scale-[0.98]">
                                <span>INVIERTE EN ECUADOR AHORA</span>
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Grid de 3 Pilares Estratégicos */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {strategicGrid.map((feature) => (
                        <div
                            key={feature.id}
                            className="relative bg-white dark:bg-[#001D3D] p-10 rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-xl transition-all duration-300 group min-h-[400px]"
                        >
                            {/* Patrón de Fondo Aceternity */}
                            <Grid size={24} />

                            <div className="relative z-20">
                                <span className="text-5xl font-bold text-[#b5934a] mb-6 block group-hover:text-[#b5934a]/80 transition-colors">
                                    {feature.id}
                                </span>
                                {/* Logo Placeholder - Representando los iconos 3D de la captura */}
                                <div className="w-16 h-16 mb-8 bg-neutral-100 dark:bg-neutral-800 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <div className="w-10 h-10 bg-[#b5934a]/80 rounded-lg rotate-12 group-hover:rotate-45 transition-transform" />
                                </div>

                                <p className="text-2xl font-bold text-[#001229] dark:text-white mb-4 leading-tight">
                                    {feature.title}
                                </p>
                                <p className="text-neutral-600 dark:text-neutral-300 text-base leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const strategicGrid = [
    {
        id: "01",
        title: "Crecimiento sostenido en sectores estratégicos",
        description:
            "Ecuador ofrece un entorno favorable para la inversión en sectores como bienes raíces, salud, tecnología y turismo. El impulso de políticas de desarrollo genera condiciones propicias para capitalizar oportunidades de alto retorno.",
    },
    {
        id: "02",
        title: "Mercado con alto potencial de valorización",
        description:
            "La infraestructura en expansión y la demanda de espacios modernos están impulsando la valorización de activos en ciudades clave del país. Invertir hoy representa una ventaja competitiva para obtener plusvalía acelerada.",
    },
    {
        id: "03",
        title: "Impacto real y tangible en el desarrollo local",
        description:
            "Cada inversión en proyectos del Grupo Campana genera empleo, dinamiza la economía local y mejora la calidad de vida de cientos de familias. Es la oportunidad de crecer con propósito y dejar huella.",
    },
];

/* --- Componentes de Apoyo de Aceternity UI --- */

export const Grid = ({
    pattern,
    size,
}: {
    pattern?: number[][];
    size?: number;
}) => {
    const p = pattern ?? [
        [7, 1], [8, 2], [9, 3], [10, 4], [11, 5]
    ];
    const pId = useId();

    return (
        <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)] opacity-50">
            <div className="absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-[#b5934a]/10 from-[#001229]/5 to-transparent">
                <svg aria-hidden="true" className="absolute inset-0 h-full w-full mix-blend-overlay dark:fill-[#b5934a]/20 dark:stroke-[#b5934a]/20 stroke-[#001229]/10 fill-[#001229]/10">
                    <defs>
                        <pattern id={pId} width={size ?? 20} height={size ?? 20} patternUnits="userSpaceOnUse" x="-12" y="4">
                            <path d={`M.5 ${size ?? 20}V.5H${size ?? 20}`} fill="none" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${pId})`} />
                    <svg x="-12" y="4" className="overflow-visible">
                        {p.map(([x, y]: any, i) => (
                            <rect strokeWidth="0" key={i} width={(size ?? 20) + 1} height={(size ?? 20) + 1} x={x * (size ?? 20)} y={y * (size ?? 20)} />
                        ))}
                    </svg>
                </svg>
            </div>
        </div>
    );
};