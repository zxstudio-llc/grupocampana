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
                <div className="flex flex-col items-center justify-center">
                    <div className="flex items-baseline">
                        <span className="text-white text-[120px] md:text-[200px] font-bold">$</span>
                        <NumberTicker
                            value={890}

                            className="text-[120px] md:text-[200px] font-bold tracking-tighter text-white leading-none"
                        />
                        <span className="text-white text-[120px] md:text-[200px] font-bold">M</span>
                    </div>
                </div>
            )
        },
        {
            title: "Proyectos en análisis",
            description: "Mantenemos una visión de futuro con $435M en proyectos bajo riguroso estudio de factibilidad técnica y financiera.",
            renderContent: (
                <div className="flex flex-col items-center">
                    <div className="flex items-baseline ">
                        <span className="text-white text-[120px] md:text-[200px] font-bold">$</span>
                        <NumberTicker
                            value={435}

                            className="text-[120px] md:text-[200px] font-bold tracking-tighter text-white leading-none"
                        />
                        <span className="text-white text-[120px] md:text-[200px]  font-bold">M</span>
                    </div>
                </div>
            )
        },
        {
            title: "Fuentes de empleo",
            description: "Impactamos positivamente en la economía con más de 10,000 empleos directos e indirectos, fortaleciendo el tejido social.",
            renderContent: (
                <div className="flex flex-col items-center">
                    <div className="flex items-baseline">
                        <span className="text-white text-[120px] md:text-[200px] font-bold">+</span>
                        <NumberTicker
                            value={10}

                            className="text-[120px] md:text-[250px] font-bold tracking-tighter text-white leading-none"
                        />
                        <span className="text-white text-[120px] md:text-[250px] font-bold">K</span>
                    </div>
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
                </div>
            )
        },
    ];

    return (
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
                <h2 className="pointer-events-none text-white bg-clip-text text-center text-5xl md:text-8xl leading-none whitespace-pre-wrap text-transparent font-bold flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 uppercase">
                    Activos <span>estratégicos</span>
                </h2>
                <p className="text-white leading-relaxed text-lg md:text-xl font-semibold tracking-tight text-center">
                    Cifras que respaldan nuestra solidez y compromiso con el desarrollo económico del país.
                </p>
            </div>

            <div className="w-full">
                <Showcase content={content} />
            </div>
        </section>
    );
}