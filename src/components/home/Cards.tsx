"use client";

import React from "react";
import { Carousel, Card } from "@/components/global/apple-cards-carousel";
import Image from "next/image";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.title} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20 bg-[#001D3D]">
      <div className="max-w-7xl pl-4 mx-auto mb-10">
        <h2 className="text-xl md:text-5xl font-bold text-white font-sans tracking-tighter">
          Nuestras <span className="text-[#b5934a]">Unidades de Negocio</span>
        </h2>
        <p className="text-gray-400 mt-4 text-lg max-w-2xl">
          Un holding diversificado que impulsa el desarrollo económico del Ecuador a través de la excelencia y la innovación.
        </p>
      </div>
      <Carousel items={cards} />
    </div>
  );
}

const Content = ({ description, details, imageUrl }: { description: string, details: string, imageUrl: string }) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto leading-relaxed">
        <span className="font-bold text-[#001D3D] dark:text-white block mb-4 text-3xl">
          Compromiso con la excelencia
        </span>{" "}
        {description}
      </p>
      <div className="mt-8 text-neutral-500 dark:text-neutral-300 max-w-3xl mx-auto text-lg">
        {details}
      </div>
      <div className="relative w-full aspect-video mt-10 rounded-2xl overflow-hidden">
         <Image
            src={imageUrl}
            alt="Unidad de Negocio"
            fill
            className="object-cover"
         />
      </div>
    </div>
  );
};

const data = [
  {
    category: "Inmobiliaria",
    title: "Desarrollo con visión de futuro.",
    src: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <Content 
        description="Lideramos el mercado inmobiliario con proyectos icónicos que transforman ciudades." 
        details="Desde urbanizaciones exclusivas hasta complejos comerciales de vanguardia, muchos de nuestros productos están en entrega inmediata para asegurar el retorno de su inversión."
        imageUrl="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    ),
  },
  {
    category: "Salud",
    title: "Bienestar e innovación médica.",
    src: "https://images.unsplash.com/photo-1586773860383-dab5f3bc1bcc?q=80&w=2027&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <Content 
        description="Brindamos servicios de salud de alta calidad con tecnología de punta." 
        details="Nuestras unidades de salud están enfocadas en la atención integral del paciente, garantizando seguridad y confianza en cada procedimiento."
        imageUrl="https://images.unsplash.com/photo-1586773860383-dab5f3bc1bcc?q=80&w=2027&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    ),
  },
  {
    category: "Finanzas y Seguros",
    title: "Solidez que protege su futuro.",
    src: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?q=80&w=2352&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <Content 
        description="Gestión de riesgos y soluciones financieras con respaldo corporativo." 
        details="Ofrecemos asesoría y coberturas diseñadas para proteger los activos más importantes de nuestros clientes, apoyados en una sólida estructura financiera."
        imageUrl="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?q=80&w=2352&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    ),
  },
  {
    category: "Alimentos",
    title: "Calidad que nutre al país.",
    src: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <Content 
        description="Producción y distribución de alimentos bajo los más altos estándares." 
        details="Comprometidos con la soberanía alimentaria y la calidad, impulsamos procesos sostenibles que llevan lo mejor del campo a la mesa de los ecuatorianos."
        imageUrl="https://images.unsplash.com/photo-1599490659213-e2b9527bd087?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    ),
  },
  {
    category: "Infraestructura",
    title: "Construyendo las bases del Ecuador.",
    src: "https://images.unsplash.com/photo-1591645321243-3adc1e75cfdc?q=80&w=2403&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <Content 
        description="Obras civiles de gran escala que dinamizan la economía nacional." 
        details="Participamos en proyectos de infraestructura críticos para el desarrollo del país, demostrando capacidad técnica y cumplimiento riguroso."
        imageUrl="https://images.unsplash.com/photo-1591645321243-3adc1e75cfdc?q=80&w=2403&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    ),
  },
  {
    category: "Acción Social",
    title: "Responsabilidad con propósito.",
    src: "https://images.unsplash.com/photo-1759117709019-244917c56fbc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHNvY2lhbCUyMGFjdGlvbnxlbnwwfDB8MHx8fDA%3D",
    content: (
      <Content 
        description="Generamos un impacto positivo en las comunidades donde operamos." 
        details="A través de nuestras fundaciones e iniciativas sociales, trabajamos por la educación, el empleo y el bienestar de los sectores más vulnerables."
        imageUrl="https://images.unsplash.com/photo-1759117709019-244917c56fbc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHNvY2lhbCUyMGFjdGlvbnxlbnwwfDB8MHx8fDA%3D"
      />
    ),
  },
];