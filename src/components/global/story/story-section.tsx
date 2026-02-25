import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function StoryTimelineSection() {
    const data = [
        {
            title: "2012",
            content: (
                <div>
                    {/* Título: Usando el dorado de la marca para el año/hito */}
                    <h3 className="text-lg font-bold text-[#b8912e] mb-2">
                        Todo empieza con visión
                    </h3>

                    {/* Párrafo: Gris equilibrado para lectura larga */}
                    <p className="text-sm font-normal:text-neutral-300 leading-relaxed min-w-[20rem] ">
                        En el lobby de un hotel nace la PROMOTORA INMOBILIARIA MILLENIUM. Una visión clara, sin oficina propia, pero con la firme decisión de construir un legado a largo plazo. Así comienza la historia de un grupo que hoy impulsa el desarrollo del país con proyectos de alto impacto y un enfoque empresarial con propósito.
                    </p>
                </div>
            ),
        },
        {
            title: "2013",
            content: (
                <div>
                    {/* Título: Usando el dorado de la marca para el año/hito */}
                    <h3 className="text-lg font-bold text-[#b8912e] mb-2">
                        El primer paso concreto
                    </h3>

                    {/* Párrafo: Gris equilibrado para lectura larga */}
                    <p className="text-sm font-normal:text-neutral-300 leading-relaxed min-w-[20rem] ">
                    QUO se convierte en el primer proyecto inmobiliario de Millenium. Una torre de oficinas moderna que se vendió al 100% antes de su entrega. El resultado reafirma el modelo de negocio y abre camino para seguir creciendo con disciplina, innovación y planificación.
                    </p>
                </div>
            ),
        },
        {
            title: "2016",
            content: (
                <div>
                    {/* Título: Usando el dorado de la marca para el año/hito */}
                    <h3 className="text-lg font-bold text-[#b8912e] mb-2">
                        Apostamos por la especialización
                    </h3>

                    {/* Párrafo: Gris equilibrado para lectura larga */}
                    <p className="text-sm font-normal:text-neutral-300 leading-relaxed min-w-[20rem] ">
                       Con el lanzamiento de SOLARIS, incursionamos en un nuevo modelo: oficinas y consultorios médicos diseñados con eficiencia y funcionalidad. Un desarrollo que marcó un hito en la categoría y posicionó a Millenium como referente en proyectos especializados.
                    </p>
                </div>
            ),
        },
        {
            title: "2017",
            content: (
                <div>
                    {/* Título: Usando el dorado de la marca para el año/hito */}
                    <h3 className="text-lg font-bold text-[#b8912e] mb-2">
                        Ciudad Millenium toma forma
                    </h3>

                    {/* Párrafo: Gris equilibrado para lectura larga */}
                    <p className="text-sm font-normal:text-neutral-300 leading-relaxed min-w-[20rem] ">
                        PLATINUM I y II consolidan el concepto de “Ciudad Millenium”. Dos torres modernas, bien ubicadas y con una propuesta de valor clara: elevar la experiencia laboral con arquitectura, servicios y plusvalía sostenida.
                    </p>
                </div>
            ),
        },
        {
            title: "2019",
            content: (
                <div>
                    {/* Título: Usando el dorado de la marca para el año/hito */}
                    <h3 className="text-lg font-bold text-[#b8912e] mb-2">
                        Empezamos a diversificar
                    </h3>

                    {/* Párrafo: Gris equilibrado para lectura larga */}
                    <p className="text-sm font-normal:text-neutral-300 leading-relaxed min-w-[20rem] ">
                        Se funda ECUINVEST, empresa encargada de preservar la calidad de cada desarrollo inmobiliario. Ese mismo año nace el proyecto Torre Millenium, un nuevo ícono en Guayaquil que reafirma nuestro compromiso con el diseño, el detalle y la funcionalidad.
                    </p>
                </div>
            ),
        },
        {
            title: "2020",
            content: (
                <div>
                    {/* Título: Usando el dorado de la marca para el año/hito */}
                    <h3 className="text-lg font-bold text-[#b8912e] mb-2">
                        Expansión y compromiso social
                    </h3>

                    {/* Párrafo: Gris equilibrado para lectura larga */}
                    <p className="text-sm font-normal:text-neutral-300 leading-relaxed min-w-[20rem] ">
                        Lanzamos PROCAPITAl para brindar soluciones financieras a PYMES a través de factoring ágil. También nace la FUNDACIÓN CAMPANA, con una misión clara: generar impacto social desde la salud, la inclusión y el empoderamiento. Además, iniciamos ALL FIELDS ECUADOR, nuestra incursión en la industria de alimentos con enfoque exportador.
                    </p>
                </div>
            ),
        },
        {
            title: "2021",
            content: (
                <div>
                    {/* Título: Usando el dorado de la marca para el año/hito */}
                    <h3 className="text-lg font-bold text-[#b8912e] mb-2">
                        Desarrollo integral para todos
                    </h3>

                    {/* Párrafo: Gris equilibrado para lectura larga */}
                    <p className="text-sm font-normal:text-neutral-300 leading-relaxed min-w-[20rem] ">
                        Millenium Village propone un nuevo estilo de vida accesible y bien planificado. Nacen MILLENIUM SEGUROS y ECUAVIVIENDA: una para proteger sueños, otra para hacerlos realidad. Conectamos ciudad, inversión y bienestar con una visión de futuro cada vez más integral.
                    </p>
                </div>
            ),
        },
        {
            title: "2022",
            content: (
                <div>
                    {/* Título: Usando el dorado de la marca para el año/hito */}
                    <h3 className="text-lg font-bold text-[#b8912e] mb-2">
                        Visión vertical, expansión estratégica
                    </h3>

                    {/* Párrafo: Gris equilibrado para lectura larga */}
                    <p className="text-sm font-normal:text-neutral-300 leading-relaxed min-w-[20rem] ">
                        Iniciamos el desarrollo de proyectos como MAXXIMUS y GRAND BAY MANTA, íconos de diseño y visión en altura. Reforzamos la gobernanza, escalamos estructura y sentamos las bases para crecer como grupo corporativo multisectorial.
                    </p>
                </div>
            ),
        },
        {
            title: "2023",
            content: (
                <div>
                    {/* Título: Usando el dorado de la marca para el año/hito */}
                    <h3 className="text-lg font-bold text-[#b8912e] mb-2">
                        Hospitalidad y salud con propósito
                    </h3>

                    {/* Párrafo: Gris equilibrado para lectura larga */}
                    <p className="text-sm font-normal:text-neutral-300 leading-relaxed min-w-[20rem] ">
                        MILLENIUMMED HOSPITAL comienza su construcción: el complejo médico más innovador de la región. Nace Millerent, encargada de administrar unidades en renta con enfoque profesional. Invertimos en salud y rentabilidad con impacto real.
                    </p>
                </div>
            ),
        },
        {
            title: "2024",
            content: (
                <div>
                    {/* Título: Usando el dorado de la marca para el año/hito */}
                    <h3 className="text-lg font-bold text-[#b8912e] mb-2">
                        Diversificamos experiencias
                    </h3>

                    {/* Párrafo: Gris equilibrado para lectura larga */}
                    <p className="text-sm font-normal:text-neutral-300 leading-relaxed min-w-[20rem] ">
                        Se adquiere LA CASA DE MARITA, un hotel boutique frente al mar en Galápagos, abriendo una nueva línea en hospitalidad sustentable. Además, se crea MILLENIUM MECHANICAL para ampliar nuestra capacidad técnica en los proyectos. Seguimos creciendo, cuidando cada detalle.
                    </p>
                </div>
            ),
        },
        {
            title: "2025",
            content: (
                <div>
                    {/* Título: Usando el dorado de la marca para el año/hito */}
                    <h3 className="text-lg font-bold text-[#b8912e] mb-2">
                        Nuevas marcas, nuevos territorios y más impacto
                    </h3>

                    {/* Párrafo: Gris equilibrado para lectura larga */}
                    <p className="text-sm font-normal:text-neutral-300 leading-relaxed min-w-[20rem] ">
                        Nacen ECOWASH, un modelo de lavado de autos ecológico, y BELLTECH, enfocada en soluciones tecnológicas. Abrimos operaciones internacionales con MILLENIUM USA y MILLENIUM MADRID, llevando nuestros proyectos a nuevos mercados.
                        Además, lanzamos INSPIRALAB, un programa que impulsa a emprendedores con ideas de alto impacto social y económico. Apostamos por la innovación, el talento joven y el desarrollo sostenible desde la creatividad y la acción. 2025 marca un año clave de expansión, impacto y evolución.
                    </p>
                </div>
            ),
        },
    ];
    return (
        <div className="relative w-full overflow-clip">
            <Timeline heading="Desde 2012"
                description="Construyendo un legado de excelencia, con una visión clara: impulsar el crecimiento sostenible de Ecuador a través de proyectos de alto impacto en sectores estratégicos. Con esfuerzo, disciplina, perseverancia y un enfoque hacia el largo plazo, hemos evolucionado hasta convertirnos en uno de los grupos empresariales más importantes del país, consolidando una trayectoria basada en innovación, solidez y confianza."
                data={data} />
        </div>
    );
}
