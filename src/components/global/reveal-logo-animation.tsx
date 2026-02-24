"use client"
import React, { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function RevealLogoAnimation({ videoSrc, logoSvg, children }: {
  videoSrc: string
  logoSvg: React.ReactNode
  children: React.ReactNode
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Controlamos el tamaño del contenedor del video
  // Empieza en 100% (toda la pantalla) y baja a 250px de alto
  const clipWidth = useTransform(scrollYProgress, [0, 0.5], ["100%", "60%"])
  const clipHeight = useTransform(scrollYProgress, [0, 0.5], ["100vh", "250px"])
  const borderRadius = useTransform(scrollYProgress, [0, 0.5], ["0px", "20px"])
  
  // Aparecer el texto solo al final
  const textOpacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1])

  return (
    <div ref={containerRef} className="relative h-dvh bg-black w-full">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        {/* EL VIDEO: Se encoge hasta el tamaño del logo */}
        <motion.div 
          style={{ 
            width: clipWidth, 
            height: clipHeight,
            borderRadius: borderRadius
          }}
          className="relative z-10 overflow-hidden flex items-center justify-center bg-gray-900"
        >
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src={videoSrc} type="video/webm" />
          </video>

          {/* EL LOGO: Actúa como máscara sobre el video */}
          <div className="absolute inset-0 z-20 mix-blend-multiply bg-black flex items-center justify-center">
             {/* Este div negro con mix-blend hará que solo se vea el video donde el logo es blanco/transparente */}
             <div className="w-full h-full max-h-[250px] fill-white bg-black">
                {logoSvg}
             </div>
          </div>
        </motion.div>

        {/* EL CONTENIDO: Entrega Inmediata */}
        <motion.div 
          style={{ opacity: textOpacity }}
          className="mt-12 text-center"
        >
          {children}
        </motion.div>

      </div>
    </div>
  )
}