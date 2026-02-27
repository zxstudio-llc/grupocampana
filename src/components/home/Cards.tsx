"use client";

import React from "react";
import { Carousel, Card } from "@/components/global/apple-cards-carousel";
import Image from "next/image";
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.title} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">

      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 mb-12 md:mb-16 overflow-hidden">

        {/* DIV 1: CONTENEDOR DEL TÍTULO */}
        <div className="w-full flex justify-center mb-8 md:mb-10">
          <h2 className="text-[#001D3D] text-5xl md:text-7xl font-bold tracking-[-0.05em] leading-[0.9] flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-center uppercase">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="block"
            >
              Nuestras
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="block"
            >
              Unidades de Negocio
            </motion.span>
          </h2>
        </div>

        {/* DIV 2: CONTENEDOR DEL PÁRRAFO ANIMADO */}
        <div className="w-full max-w-md md:max-w-4xl mx-auto">
          <p className="text-[#001D3D] leading-relaxed text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-center">
            {"Diversificación Estratégica para el Desarrollo del Ecuador"
              .split(" ")
              .map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, filter: "blur(0px)" }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.03,
                    ease: "easeOut"
                  }}
                  className="inline"
                >
                  {word}{" "}
                </motion.span>
              ))}
          </p>
        </div>
      </div>
      <Carousel items={cards} />
    </div>
  );
}

const Content = ({ category, title, description, details, ctaProject, urlProject, imageUrl }: any) => {

  const formatText = (text: string) => {
    if (!text) return null;

    // Dividimos el texto por saltos de línea reales
    const lines = text.split(/\r?\n/);

    return lines.map((line, index) => {
      const trimmedLine = line.trim();
      if (!trimmedLine) return <div key={index} className="h-4" />; // Espacio entre bloques

      // VALIDACIÓN 1: ¿Es una viñeta/lista?
      if (trimmedLine.startsWith("-")) {
        const bulletContent = trimmedLine.substring(1).trim();
        const formatted = bulletContent.replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#001D3D] font-bold">$1</strong>');

        return (
          <div key={index} className="flex items-start ml-2 gap-0">
            <span className="text-[#b5934a] flex-shrink-0 text-sm">•</span>
            <span
              className="text-neutral-600 text-sm leading-snug"
              dangerouslySetInnerHTML={{ __html: formatted }}
            />
          </div>
        );
      }

      // VALIDACIÓN 2: ¿Es un título de sección (ej: **Impacto**)?
      const isHeader = trimmedLine.startsWith("**") && trimmedLine.endsWith("**");

      // PROCESAMIENTO: Negritas normales dentro de párrafos (Caso Millenium)
      const formattedLine = trimmedLine.replace(/\*\*(.*?)\*\*/g, (match, p1) => {
        if (isHeader) {
          return `<strong class="text-[#001D3D] font-extrabold block text-lg leading-5 tracking-tight">${p1}</strong>`;
        }
        return `<strong class="text-[#001D3D] font-bold">${p1}</strong>`;
      });

      return (
        <p
          key={index}
          className={`text-neutral-600 text-sm ${isHeader ? "mb-0" : "text-justify"}`}
          dangerouslySetInnerHTML={{ __html: formattedLine }}
        />
      );
    });
  };

  return (
    <div className="flex flex-col md:flex-row h-full w-full overflow-hidden">
      {/* Columna de Texto - Ajustada para Scroll Perfecto */}
      <div className={cn(
        "flex-1 p-6 md:p-10 bg-[#f5f5f7] w-full md:max-w-[500px]",
        "flex flex-col md:justify-center", // Centrado solo en desktop
        "overflow-y-auto custom-scrollbar" // El scroll se aplica aquí
      )}>
        {/* Contenedor interno para asegurar que el padding funcione con el scroll */}
        <div className="flex flex-col h-fit">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-[#b5934a] font-bold uppercase tracking-tighter text-xl pt-4 md:pt-0"
          >
            {category}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-[#001D3D] font-extrabold uppercase tracking-tighter text-lg mb-2 md:mb-4"
          >
            {title}
          </motion.span>

          <div className="text-[#001D3D] text-base font-sans leading-relaxed flex flex-col gap-2 text-justify">
            <span className="block leading-snug text-sm text-neutral-600">{description}</span>
            <div className="text-neutral-600">
              {formatText(details)}
            </div>
          </div>

          <div className="mt-8 pb-6 md:pb-0">
            <Button
              asChild
              className="px-6 py-6 border-[#b5934a]/30 hover:bg-[#b5934a] transition-all group rounded-full bg-[#001D3D] w-full md:w-fit"
            >
              <Link href={urlProject} target="_blank">
                <span className="font-bold tracking-tight text-white">
                  {ctaProject}
                </span>
                <ExternalLink className="ml-2 h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity text-white" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Columna de Imagen */}
      <div className="flex-1 relative min-h-[250px] md:h-full">
        <Image
          src={imageUrl}
          alt="Unidad de Negocio"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent hidden md:block" />
      </div>
    </div>
  );
};

const data = [
  {
    category: "Promotora Inmobiliaria",
    title: "Millenium S.A",
    src: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <Content
        category="Promotora Inmobiliaria"
        title="Millenium S.A"
        description="MILLENIUM es la primera empresa de Grupo Campana y el pilar inmobiliario del holding. Está especializada en la promoción y desarrollo de edificaciones AAA en altura, dirigidas a los segmentos medio–alto y alto del mercado."
        details="La compañía estructura sus proyectos a través de **Fideicomisos Inmobiliarios Integrales**, aportando terrenos estratégicos y articulando recursos de inversionistas. Este modelo permite garantizar rentabilidad, eficiencia operativa y un sólido gobierno corporativo en cada desarrollo. Actualmente, MILLENIUM cuenta con un portafolio de más de **508.000 m² en construcción** y **USD 529 millones en proyectos en ejecución**, consolidándose como uno de los desarrolladores inmobiliarios más relevantes del país."
        imageUrl="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ctaProject="Visitar Proyecto"
        urlProject="https://grupomillenium.com"
      />
    ),
  },
  {
    category: "Hospital",
    title: "MilleniumMed Hospital",
    src: "https://images.unsplash.com/photo-1586773860383-dab5f3bc1bcc?q=80&w=2027&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <Content
        category="Hospital"
        title="MilleniumMed Hospital"
        description="Es un complejo integral de salud ubicado en Guayaquil, diseñado para ofrecer atención médica de alta complejidad bajo estándares internacionales."
        details={`**El proyecto contempla:**
          - Hospital de tercer nivel con 113 camas en su fase inicial (expandible a 140).
          - Tres torres médicas.
          - Una torre de parqueos.
          - Certificación internacional JCI.
          
          **Impacto**
          - 1.100 empleos directos en construcción.
          - 2.650 empleos indirectos.
          - 610 empleos durante operación.
          
          **E1: Hospital + Torre Hospitalaria**
          - Inversión: USD 105,7 millones
          
          **E2: Torre Médica 1**
          - Inversión: USD 27,2 millones`}
        imageUrl="https://images.unsplash.com/photo-1586773860383-dab5f3bc1bcc?q=80&w=2027&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ctaProject="Visitar Proyecto"
        urlProject="https://grupomillenium.com"
      />
    ),
  },
  {
    category: "Promotora Inmobiliaria",
    title: "MIA Ecuador",
    src: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?q=80&w=2352&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <Content
        category="Promotora Inmobiliaria"
        title="MIA Ecuador"
        description="Unidad encargada de promover e implementar complejos residenciales funcionales de vivienda unifamiliar en diferentes ciudades del Ecuador."
        details={`**Proyecto desarrollado**
        Millenium Village: 
        - Urbanización privada de 114 casas
        - Ubicación: Daule
        - Total: $ 20,334,733
        **Proyecto en curso**
        Millenium Gardens:
        - Complejo urbanístico privado de viviendas unifamiliares.
        - Ubicación: Daule
        - Etapa 1 y 2
        - Total: $ 26, 974, 117`}
        imageUrl="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?q=80&w=2352&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ctaProject="Visitar Proyecto"
        urlProject="https://grupomillenium.com"
      />
    ),
  },
  {
    category: "Broker de seguros",
    title: "Millenium Seguros",
    src: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <Content
        category="Broker de seguros"
        title="Millenium Seguros"
        description="Es la unidad asesora especializada en el diseño estratégico de soluciones de aseguramiento, estructuradas de acuerdo con el perfil de riesgo de cada cliente. Su enfoque técnico y transparente garantiza protección, estabilidad y continuidad para patrimonios personales y proyectos empresariales."
        details={`**Alianzas con las principales aseguradoras de la región:**
        - Best Doctor
        - Zurich
        - Saludsa
        - Bupa
        - Humana
        - BMI
        - Mapfre
        - ConfiaMED
        - Chubb
        - AIG
        - Asisken
        - Generali
        - Equivida
        - Seguros Equinoccial`}
        imageUrl="https://images.unsplash.com/photo-1599490659213-e2b9527bd087?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ctaProject="Visitar Proyecto"
        urlProject="https://grupomillenium.com"
      />
    ),
  },
  {
    category: "Factoring",
    title: "Bell Factor",
    src: "https://images.unsplash.com/photo-1591645321243-3adc1e75cfdc?q=80&w=2403&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <Content
        category="Factoring"
        title="Bell Factor"
        description="Unidad de negocio especializada en servicios de factoring, orientada a inyectar liquidez estratégica a pequeñas y medianas empresas. A través de soluciones financieras ágiles y estructuradas, facilita el flujo de caja y fortalece la capacidad de crecimiento y rentabilidad de sus clientes."
        details="Se proyecta la gestión de un portafolio estimado en USD 10 millones para el año 2026"
        imageUrl="https://images.unsplash.com/photo-1591645321243-3adc1e75cfdc?q=80&w=2403&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ctaProject="Visitar Proyecto"
        urlProject="https://grupomillenium.com"
      />
    ),
  },
  {
    category: "División Hotelera",
    title: "Hotel La Casa de Marita",
    src: "https://images.unsplash.com/photo-1759117709019-244917c56fbc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHNvY2lhbCUyMGFjdGlvbnxlbnwwfDB8MHx8fDA%3D",
    content: (
      <Content
        category="División Hotelera"
        title="Hotel La Casa de Marita"
        description="Hotel boutique frente al mar ubicado en Isabela, Galápagos, con una localización estratégica cercana a los principales atractivos naturales de la isla y zonas privilegiadas para snorkel y avistamiento de vida silvestre. Cuenta con 20 habitaciones y suites cuidadosamente diseñadas, cada una con una propuesta estética que integra confort y la esencia natural del entorno. Su restaurante ofrece una propuesta gastronómica de origen local, brindando a los huéspedes una experiencia integral sin necesidad de salir de la propiedad."
        details=""
        imageUrl="https://images.unsplash.com/photo-1759117709019-244917c56fbc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHNvY2lhbCUyMGFjdGlvbnxlbnwwfDB8MHx8fDA%3D"
        ctaProject="Visitar Proyecto"
        urlProject="https://grupomillenium.com"
      />
    ),
  },
  {
    category: "Alimento",
    title: "All Fields",
    src: "https://images.unsplash.com/photo-1759117709019-244917c56fbc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHNvY2lhbCUyMGFjdGlvbnxlbnwwfDB8MHx8fDA%3D",
    content: (
      <Content
        category="Alimento"
        title="All Fields"
        description="ALL FIELDS Ecuador nace en 2020, producto de la adquisición de PLATAYUC, destacada empresa de procesamiento de plátano y yuca, cuyos productos llegaron a 12 países y 4 continentes. El mandato de ALL FIELDS Ecuador es la producción de snacks premium, y su comercialización en el mercado internacional. Su primer portafolio consiste en una familia de productos derivados del plátano bajo la marca TORTIS."
        details=""
        imageUrl="https://images.unsplash.com/photo-1759117709019-244917c56fbc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHNvY2lhbCUyMGFjdGlvbnxlbnwwfDB8MHx8fDA%3D"
        ctaProject="Visitar Proyecto"
        urlProject="https://grupomillenium.com"
      />
    ),
  },
  {
    category: "Gestión Inmobiliaria",
    title: "EcuInvest",
    src: "https://images.unsplash.com/photo-1759117709019-244917c56fbc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHNvY2lhbCUyMGFjdGlvbnxlbnwwfDB8MHx8fDA%3D",
    content: (
      <Content
        category="Gestión Inmobiliaria"
        title="EcuInvest"
        description="Nace como empresa hermana de la promotora Millenium, con la finalidad de administrar los proyectos inmobiliarios entregados, y así asegurar el buen mantenimiento de su infraestructura e imagen, así como un servicio personalizado a sus usuarios."
        details=""
        imageUrl="https://images.unsplash.com/photo-1759117709019-244917c56fbc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHNvY2lhbCUyMGFjdGlvbnxlbnwwfDB8MHx8fDA%3D"
        ctaProject="Visitar Proyecto"
        urlProject="https://grupomillenium.com"
      />
    ),
  },
  {
    category: "Gestión Inmobiliaria",
    title: "MilleRent",
    src: "https://images.unsplash.com/photo-1759117709019-244917c56fbc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHNvY2lhbCUyMGFjdGlvbnxlbnwwfDB8MHx8fDA%3D",
    content: (
      <Content
        category="Gestión Inmobiliaria"
        title="MilleRent"
        description="Es la empresa gestora del Retail & Renting de unidades inmobiliarias en los proyectos entregados."
        details=""
        imageUrl="https://images.unsplash.com/photo-1759117709019-244917c56fbc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHNvY2lhbCUyMGFjdGlvbnxlbnwwfDB8MHx8fDA%3D"
        ctaProject="Visitar Proyecto"
        urlProject="https://grupomillenium.com"
      />
    ),
  },
  {
    category: "Ingeniería Hidrosanitaria y Climatización",
    title: "Millenium Mechanical Solutions",
    src: "https://images.unsplash.com/photo-1759117709019-244917c56fbc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHNvY2lhbCUyMGFjdGlvbnxlbnwwfDB8MHx8fDA%3D",
    content: (
      <Content
        category="Ingeniería Hidrosanitaria y Climatización"
        title="Millenium Mechanical Solutions"
        description="División encargada de brindar servicios especializados de ingeniería hidrosanitaria y sistema de climatización, desde el diseño hasta la implementación, asegurando altos niveles de calidad y seguridad."
        details=""
        imageUrl="https://images.unsplash.com/photo-1759117709019-244917c56fbc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHNvY2lhbCUyMGFjdGlvbnxlbnwwfDB8MHx8fDA%3D"
        ctaProject="Visitar Proyecto"
        urlProject="https://grupomillenium.com"
      />
    ),
  },
  {
    category: "Energía Renovable",
    title: "Bell Ec",
    src: "https://images.unsplash.com/photo-1759117709019-244917c56fbc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHNvY2lhbCUyMGFjdGlvbnxlbnwwfDB8MHx8fDA%3D",
    content: (
      <Content
        category="Energía Renovable"
        title="Bell Ec"
        description="División dedicada a impulsar la transición energética, mediante el aprovechamiento de la radiación solar para ofrecer energía confiable y fomentar el desarrollo regional."
        details={`
        -Planta Fotovoltaica:
        -Capacidad: 100MW
        -Almacenamiento en batería: 10%
        -Generación Anual: 164.4 GWh
        -Ubicación: El Morro - Santa Elena`}
        imageUrl="https://images.unsplash.com/photo-1759117709019-244917c56fbc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHNvY2lhbCUyMGFjdGlvbnxlbnwwfDB8MHx8fDA%3D"
        ctaProject="Visitar Proyecto"
        urlProject="https://grupomillenium.com"
      />
    ),
  },
  {
    category: "Gestión Inmobiliaria",
    title: "Millenium Deco",
    src: "https://images.unsplash.com/photo-1759117709019-244917c56fbc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHNvY2lhbCUyMGFjdGlvbnxlbnwwfDB8MHx8fDA%3D",
    content: (
      <Content
        category="Gestión Inmobiliaria"
        title="Millenium Deco"
        description="Es la división de diseño interior, especializada en crear experiencias de alto nivel. Brinda diseño integral, asesoría personalizada y soluciones “llave en mano” con equipamiento completo, transformando cada espacio con precisión y estilo."
        details=""
        imageUrl="https://images.unsplash.com/photo-1759117709019-244917c56fbc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHNvY2lhbCUyMGFjdGlvbnxlbnwwfDB8MHx8fDA%3D"
        ctaProject="Visitar Proyecto"
        urlProject="https://grupomillenium.com"
      />
    ),
  },
  {
    category: "Impacto Social",
    title: "Fundación Campana",
    src: "https://images.unsplash.com/photo-1759117709019-244917c56fbc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHNvY2lhbCUyMGFjdGlvbnxlbnwwfDB8MHx8fDA%3D",
    content: (
      <Content
        category="Impacto Social"
        title="Fundación Campana"
        description="Fundación Campana articula iniciativas de impacto social orientadas a salud, desarrollo productivo y fortalecimiento de capacidades. Desde 2012 impulsa atención médica comunitaria y, desde septiembre de 2019, opera el Dispensario SUAZIO en la comuna Limoncito (aprox. 500 familias), brindando medicina general, odontología y entrega gratuita de medicinas, con más de 2.902 consultas realizadas hasta diciembre de 2025."
        details="Su gestión se apalanca en cooperación internacional, alianzas estratégicas y enlace filantrópico, destacando acciones de apoyo durante la pandemia COVID-19. Además, promueve proyectos de desarrollo económico local —como Produce Orgánico, Exporta— en coordinación con PADF y fondos USAID, y fortalece el emprendimiento a través de InspiraLAB, un programa que ofrece formación práctica, estructura empresarial, mentoría, acceso a financiamiento y networking para convertir ideas en negocios sostenibles y escalar emprendimientos en marcha."
        imageUrl="https://images.unsplash.com/photo-1759117709019-244917c56fbc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHNvY2lhbCUyMGFjdGlvbnxlbnwwfDB8MHx8fDA%3D"
        ctaProject="Visitar Proyecto"
        urlProject="https://grupomillenium.com"
      />
    ),
  },
];