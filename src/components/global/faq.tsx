import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components";
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
        <section className="py-20 md:py-32">
    <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Título Principal */}
            <div className="max-w-md">
                <h2 className="text-5xl md:text-7xl font-bold text-[#001D3D] tracking-tighter leading-none">
                    Preguntas <br /> 
                    <span className="text-gray-400">frecuentes</span>
                </h2>
            </div>
            <div className="w-full lg:max-w-2xl ml-auto"> 
                <Accordion type="single" collapsible className="w-full space-y-4">
                    {faqs.map((faq, index) => (
                        <AccordionItem 
                            key={index} 
                            value={`item-${index}`}
                            className="border-b border-[#001D3D]/10 px-2 w-full block"
                        >
                            <AccordionTrigger className="text-[#001D3D] hover:no-underline text-lg md:text-xl font-medium py-6 group w-full">
                                <div className="flex items-center text-left gap-4 w-full overflow-hidden">
                                    <Plus className="w-5 h-5 text-blue-500 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-45" />
                                    {/* truncate o line-clamp evita que preguntas largas rompan el layout */}
                                    <span className="truncate md:whitespace-normal">
                                        {faq.question}
                                    </span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-800 text-lg pl-9 pb-6 leading-relaxed w-full">
                                {/* Contenedor interno para asegurar que el texto respete el ancho del padre */}
                                <div className="max-w-full overflow-hidden break-words">
                                    {faq.answer}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>

        </div>
    </Container>
</section>
    );
};

export default FAQSection;