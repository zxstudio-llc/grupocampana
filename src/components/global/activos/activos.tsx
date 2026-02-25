"use client";
import React from "react";
import { Showcase } from "./components/showcase";
import { NumberTicker } from "@/components/ui/number-ticker";

export function ActivosSection() {
    const content = [
        {
            title: "Activos bajo gestión",
            description: "Administramos un portafolio sólido de $890M, enfocado en la maximización de valor y rentabilidad sostenible para nuestros inversionistas.",
            renderContent: (
                <div className="flex flex-col items-center">
                    <div className="flex items-baseline">
                        <span className="text-white text-[120px] md:text-[200px] font-bold">$</span>
                        <NumberTicker
                            value={890}

                            className="text-[120px] md:text-[200px] font-bold tracking-tighter text-white leading-none"
                        />
                        <span className="text-white text-6xl md:text-[200px] font-bold">M</span>
                    </div>
                    <p className="text-[#b5934a] text-xl md:text-2xl font-bold tracking-widest mt-4 uppercase text-center max-w-xs md:max-w-lg mx-auto leading-tight">Activos Totales</p>
                </div>
            )
        },
        {
            title: "Proyectos en análisis",
            description: "Mantenemos una visión de futuro con $435M en proyectos bajo riguroso estudio de factibilidad técnica y financiera.",
            renderContent: (
                <div className="flex flex-col items-center">
                    <div className="flex items-baseline">
                        <span className="text-white text-[120px] md:text-[200px] font-bold">$</span>
                        <NumberTicker
                            value={435}

                            className="text-[120px] md:text-[200px] font-bold tracking-tighter text-white leading-none"
                        />
                        <span className="text-white text-6xl md:text-[200px]  font-bold">M</span>
                    </div>
                    <p className="text-[#b5934a] text-xl md:text-2xl font-bold tracking-widest mt-4 uppercase text-center max-w-xs md:max-w-lg mx-auto leading-tight">Proyectos en Análisis</p>
                </div>
            )
        },
        {
            title: "Fuentes de empleo",
            description: "Impactamos positivamente en la economía con más de 10,000 empleos directos e indirectos, fortaleciendo el tejido social.",
            renderContent: (
                <div className="flex flex-col items-center">
                    <div className="flex items-baseline">
                        <span className="text-white text-[180px] md:text-[200px] font-bold">+</span>
                        <NumberTicker
                            value={10}

                            className="text-[180px] md:text-[250px] font-bold tracking-tighter text-white leading-none"
                        />
                        <span className="text-white text-6xl md:text-[250px] font-bold">K</span>
                    </div>

                    <p className="text-[#b5934a] text-xl md:text-2xl font-bold tracking-widest mt-4 uppercase text-center max-w-xs md:max-w-lg mx-auto leading-tight">Fuentes de empleo directo e indirecto</p>
                </div>
            )
        },
        {
            title: "Unidades de negocio",
            description: "Nuestra estructura diversificada cuenta con 13 unidades estratégicas que operan en sectores clave del desarrollo nacional.",
            renderContent: (
                <div className="flex flex-col items-center">
                    <div className="flex items-baseline">
                        <NumberTicker
                            value={13}
                            className="text-[180px] md:text-[400px] font-bold tracking-tighter text-white leading-none"
                        />
                    </div>

                    <p className="text-[#b5934a] text-xl md:text-2xl font-bold tracking-widest mt-4 uppercase text-center max-w-xs md:max-w-lg mx-auto leading-tight">Unidades de negocio</p>
                </div>
            )
        },
        {
            title: "Proyectos Inmobiliarios Desarrollados",
            description: "Contamos con una trayectoria de 7 proyectos desarrollados con éxito.",
            renderContent: (
                <div className="flex flex-col items-center justify-center w-full h-full">
                    <div className="flex items-baseline">
                        <NumberTicker
                            value={7}
                            className="text-[180px] md:text-[400px] font-bold tracking-tighter text-white leading-none"
                        />
                    </div>

                    <p className="text-[#b5934a] text-xl md:text-2xl font-bold tracking-widest mt-4 uppercase text-center max-w-md md:max-w-lg mx-auto leading-tight">
                        Proyectos inmobiliarios desarrollados
                    </p>
                </div>
            )
        },
        {
            title: "Proyectos inmobiliarios en desarrollo",
            description: "Actualmente contamos con 11  en fase de desarrollo activo.",
            renderContent: (
                <div className="flex flex-col items-center">
                    <div className="flex items-baseline">
                        <NumberTicker
                            value={11}
                            className="text-[180px] md:text-[400px] font-bold tracking-tighter text-white leading-none"
                        />
                    </div>

                    <p className="text-[#b5934a] text-xl md:text-2xl font-bold tracking-widest mt-4 uppercase text-center max-w-md md:max-w-lg mx-auto leading-tight">Proyectos inmobiliarios en desarrollo</p>
                </div>
            )
        }
    ];

    return (
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
                <h2 className="text-[#001D3D] text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-6">
                    Activos <span className="text-[#b5934a]">estratégicos</span>
                </h2>
                <p className="text-[#001D3D] text-xl max-w-2xl mx-auto">
                    Cifras que respaldan nuestra solidez y compromiso con el desarrollo económico del país.
                </p>
            </div>

            <div className="w-full">
                <Showcase content={content} />
            </div>
        </section>
    );
}