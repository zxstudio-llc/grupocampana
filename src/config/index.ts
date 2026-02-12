import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
    title: {
        // Título único y profesional que refleja el liderazgo del holding
        default: "Grupo Campana | Innovación, Solidez y Confianza",
        template: `%s | Grupo Campana`
    },
    description: "Holding empresarial líder en Ecuador con más de 711 millones en activos. Especialistas en desarrollo inmobiliario con entrega inmediata, salud, seguros e infraestructura.",
    icons: {
        // icon: [
        //     {
        //         url: "/icons/favicon.ico",
        //         href: "/icons/favicon.ico",
        //     }
        // ]
    },
    openGraph: {
        title: "Grupo Campana | Líderes en Desarrollo e Inversión",
        description: "Descubre el holding más visionario del Ecuador. 13 unidades de negocio impulsando el crecimiento económico y proyectos inmobiliarios de vanguardia.",
        // images: [
        //     {
        //         url: "/assets/og-image.png", // Asegúrate de que esta imagen sea el logo o una foto del edificio corporativo
        //     }
        // ],
        type: "website",
        locale: "es_EC",
    },
    twitter: {
        card: "summary_large_image",
        title: "Grupo Campana | Solidez y Visión de Futuro",
        description: "Transformando el panorama empresarial del Ecuador. Inversiones seguras en bienes raíces, salud y sectores estratégicos.",
        // images: [
        //     {
        //         url: "/assets/og-image.png",
        //     }
        // ]
    },
    // Actualizado con la URL real si ya la tienes, sino usa la de producción
    metadataBase: new URL("https://grupocampana.ec"), 
};