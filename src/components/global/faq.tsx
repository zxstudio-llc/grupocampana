import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus } from "lucide-react";

const faqs = [
    {
        question: "¿Cuál es el enfoque principal de Grupo Campana?",
        answer: "Somos un grupo empresarial diversificado enfocado en generar valor sostenible en sectores estratégicos como el desarrollo inmobiliario, salud, finanzas e infraestructura, siempre bajo pilares de innovación y confianza."
    },
    {
        question: "¿En qué sectores realizan inversiones actualmente?",
        answer: "Mantenemos una presencia sólida en la operación hotelera, alimentos, seguros, administración inmobiliaria y acción social, gestionando más de 711 millones en activos."
    },
    {
        question: "¿Cómo contribuye el grupo al desarrollo económico del Ecuador?",
        answer: "Impulsamos el crecimiento nacional a través de 13 unidades de negocio que generan más de 10,000 fuentes de empleo directo e indirecto."
    },
    {
        question: "¿Cuáles son los requisitos para establecer alianzas estratégicas?",
        answer: "Buscamos construir relaciones profesionales a largo plazo basadas en la excelencia. Puede contactarnos a través de nuestra sección de inversiones para evaluar proyectos conjuntos de alto impacto."
    },
    {
        question: "¿Ofrecen productos de entrega inmediata?",
        answer: "Sí, dentro de nuestra unidad de desarrollo inmobiliario contamos con una amplia gama de productos y proyectos listos para entrega inmediata, garantizando solidez y respaldo inmediato a su inversión."
    }
];

const FAQSection = () => {
    return (
        <section className="py-20 lg:py-32 overflow-hidden">
            {/* Contenedor con Padding Lateral para Mobile */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                    {/* Título Principal - Ocupa 5 columnas en desktop */}
                    <div className="lg:col-span-5 w-full">
                        <h2 className="text-4xl md:text-7xl font-bold text-[#001D3D] tracking-tighter leading-none">
                            Preguntas <br />
                            <span className="text-gray-400">frecuentes</span>
                        </h2>
                        <p className="mt-6 text-gray-600 text-lg hidden lg:block">
                            Resolvemos tus dudas sobre nuestra solidez y modelo de inversión.
                        </p>
                    </div>

                    {/* Acordeón - Ocupa 7 columnas en desktop */}
                    <div className="lg:col-span-7 w-full">
                        <Accordion type="single" collapsible className="w-full space-y-2">
                            {faqs.map((faq, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`item-${index}`}
                                    className="border-b border-[#001D3D]/10 px-0 w-full"
                                >
                                    <AccordionTrigger className="text-[#001D3D] hover:no-underline text-left py-6 group w-full">
                                        <div className="flex items-start gap-4 w-full">
                                            <Plus className="w-5 h-5 text-[#b5934a] shrink-0 mt-1 transition-transform duration-200 group-data-[state=open]:rotate-45" />
                                            {/* Eliminado truncate para permitir saltos de línea en mobile */}
                                            <span className="text-lg md:text-xl font-semibold leading-tight">
                                                {faq.question}
                                            </span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="text-gray-700 text-base md:text-lg pl-9 pb-8 leading-relaxed">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FAQSection;