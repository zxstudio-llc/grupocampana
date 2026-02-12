import Icons from "@/components/global/icons"
import Link from 'next/link'
import Image from "next/image"
import { Instagram, Linkedin } from "lucide-react"

const Footer = () => {
    return (
        <footer className="bg-[#020617] border-t border-white/5 pt-24 pb-12 px-6 w-full relative overflow-hidden">
            {/* Grid de fondo estilo Aceternity */}
            <div className="absolute inset-0 z-0 opacity-20 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 w-full">

                    {/* Columna 1: Branding Corporativo */}
                    <div className="flex flex-col items-start">
                        <div className="relative w-40 h-12 mb-6">
                            <Image
                                src="/assets/logo.png"
                                alt="Grupo Campana"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-[240px]">
                            Líderes en desarrollo inmobiliario con más de 711 millones en activos. 
                            Solidez y confianza en cada inversión.
                        </p>
                        <div className="mt-6 flex flex-col gap-2">
                            <span className="text-xs font-bold text-[#b5934a] tracking-widest uppercase">
                                Entrega Inmediata
                            </span>
                            <div className="h-[1px] w-12 bg-[#b5934a]"></div>
                        </div>
                    </div>

                    {/* Columna 2: Unidades de Negocio */}
                    <div className="flex flex-col">
                        <h3 className="text-white font-semibold text-sm mb-6 tracking-wider uppercase">
                            Unidades de Negocio
                        </h3>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link href="#units" className="hover:text-[#b5934a] transition-colors">Bienes Raíces</Link></li>
                            <li><Link href="#units" className="hover:text-[#b5934a] transition-colors">Salud y Seguros</Link></li>
                            <li><Link href="#units" className="hover:text-[#b5934a] transition-colors">Infraestructura</Link></li>
                            <li><Link href="#units" className="hover:text-[#b5934a] transition-colors">Alimentos</Link></li>
                        </ul>
                    </div>

                    {/* Columna 3: Inversiones */}
                    <div className="flex flex-col">
                        <h3 className="text-white font-semibold text-sm mb-6 tracking-wider uppercase">
                            Inversiones
                        </h3>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link href="#invest" className="hover:text-[#b5934a] transition-colors">¿Por qué Ecuador?</Link></li>
                            <li><Link href="#invest" className="hover:text-[#b5934a] transition-colors">Crecimiento Sostenido</Link></li>
                            <li><Link href="#invest" className="hover:text-[#b5934a] transition-colors">Plusvalía y Activos</Link></li>
                            <li><Link href="#invest" className="hover:text-[#b5934a] transition-colors">Proyectos Actuales</Link></li>
                        </ul>
                    </div>

                    {/* Columna 4: Corporativo */}
                    <div className="flex flex-col">
                        <h3 className="text-white font-semibold text-sm mb-6 tracking-wider uppercase">
                            Compañía
                        </h3>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link href="#about" className="hover:text-[#b5934a] transition-colors">Nuestra Historia</Link></li>
                            <li><Link href="#contact" className="hover:text-[#b5934a] transition-colors">Contacto</Link></li>
                            <li><Link href="/privacy" className="hover:text-[#b5934a] transition-colors">Política de Privacidad</Link></li>
                            <li><Link href="/terms" className="hover:text-[#b5934a] transition-colors">Términos y Condiciones</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Línea final y Copyright */}
                <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-xs tracking-tight">
                        &copy; {new Date().getFullYear()} Grupo Campana. 13 Unidades de Negocio impulsando el futuro.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link href="#" className="text-gray-500 hover:text-white transition-colors">
                            <span className="sr-only">Instagram</span>
                            <Instagram className="w-5 h-5" />
                        </Link>
                        <Link href="#" className="text-gray-500 hover:text-white transition-colors">
                            <span className="sr-only">LinkedIn</span>
                            <Linkedin className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer