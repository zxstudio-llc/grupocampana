"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Plus, ChevronUp, ChevronDown, ChevronLeft, ChevronRight, X } from "lucide-react";

interface ShowcaseItem {
  title: string;
  description: string;
  image?: string;
  renderContent?: React.ReactNode;
}

export const Showcase = ({ content }: { content: ShowcaseItem[] }) => {
  const [activeCard, setActiveCard] = useState(0);

  const nextCard = () => setActiveCard((prev) => Math.min(content.length - 1, prev + 1));
  const prevCard = () => setActiveCard((prev) => Math.max(0, prev - 1));

  return (
    <div className="relative w-full max-w-7xl mx-auto h-[600px] md:h-[800px] bg-[#030b14] rounded-none md:rounded-[32px] overflow-hidden flex flex-col md:flex-row p-4 md:p-12 gap-4 md:gap-8">

      {/* --- LAYOUT ESCRITORIO (Visible solo en md+) --- */}
      <div className="hidden md:flex relative z-20 w-[40%] flex-col justify-center gap-4">
        <div className="flex flex-col gap-3">
          {content.map((item, index) => (
            <div key={index} className="flex flex-col items-start">
              <button
                onClick={() => setActiveCard(index)}
                className={cn(
                  "group flex items-center gap-3 px-5 py-3 rounded-full transition-all duration-300",
                  activeCard === index 
                    ? "bg-[#081c34] text-white" 
                    : "bg-transparent text-neutral-400 hover:bg-[#0d1e31]"
                )}
              >
                <div className={cn(
                  "p-1 rounded-full border transition-colors",
                  activeCard === index ? "border-white bg-white text-black" : "border-neutral-600 group-hover:border-neutral-400"
                )}>
                  <Plus size={16} strokeWidth={3} />
                </div>
                <span className="text-lg font-medium tracking-tight">{item.title}</span>
              </button>

              <AnimatePresence>
                {activeCard === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: 10 }}
                    animate={{ opacity: 1, height: "auto", y: 0 }}
                    exit={{ opacity: 0, height: 0, y: 10 }}
                    className="overflow-hidden w-full"
                  >
                    <div className="mt-4 p-6 rounded-[24px] bg-[#030b14]/60 backdrop-blur-xl border border-white/10 text-white">
                      <p className="text-base md:text-lg leading-relaxed">
                        <span className="font-bold">{item.title}.</span> {item.description}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Controles Verticales Desktop */}
        <div className="absolute left-[-40px] flex flex-col gap-2">
            <button onClick={prevCard} className="p-2 bg-[#081c34] rounded-full text-neutral-500 hover:text-white transition-colors">
                <ChevronUp size={20} />
            </button>
            <button onClick={nextCard} className="p-2 bg-[#081c34] rounded-full text-neutral-500 hover:text-white transition-colors">
                <ChevronDown size={20} />
            </button>
        </div>
      </div>

      {/* --- COLUMNA DERECHA / FONDO MÓVIL --- */}
      <div className="relative flex-1 h-[full] rounded-2xl overflow-hidden bg-[#26558b]/10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCard}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full flex items-center justify-center"
          >
            {content[activeCard].renderContent ? (
              <div className="w-full h-full flex items-center justify-center z-10 -mt-40">
                {content[activeCard].renderContent}
              </div>
            ) : (
              <img
                src={content[activeCard].image}
                className="absolute inset-0 w-full h-full object-cover"
                alt={content[activeCard].title}
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* --- UI MÓVIL (Visible solo en < md) --- */}
        <div className="md:hidden absolute inset-0 flex flex-col justify-end p-4 z-30 pointer-events-none">
          {/* Tarjeta Flotante Inferior */}
          <div className="pointer-events-auto bg-[#030b14]/80 backdrop-blur-xl p-5 rounded-[24px] border border-white/10 text-white mb-2 shadow-2xl">
            <p className="text-sm leading-relaxed">
              <span className="font-bold">{content[activeCard].title}.</span> {content[activeCard].description}
            </p>
          </div>

          {/* Controles Horizontales Móvil */}
          <div className="flex justify-between items-center pointer-events-auto">
            <button 
              onClick={prevCard}
              disabled={activeCard === 0}
              className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white disabled:opacity-30"
            >
              <ChevronLeft size={24} />
            </button>
            
            {/* Indicador de progreso (Puntos) */}
            <div className="flex gap-2">
              {content.map((_, i) => (
                <div key={i} className={cn("h-1.5 rounded-full transition-all", i === activeCard ? "w-6 bg-white" : "w-1.5 bg-white/30")} />
              ))}
            </div>

            <button 
              onClick={nextCard}
              disabled={activeCard === content.length - 1}
              className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white disabled:opacity-30"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
        
        {/* Overlay para imágenes claras */}
        {!content[activeCard].renderContent && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:bg-gradient-to-r md:from-[#030b14]/40" />
        )}
      </div>
    </div>
  );
};