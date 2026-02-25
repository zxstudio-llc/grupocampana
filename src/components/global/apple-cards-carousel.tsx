"use client";
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image, { ImageProps } from "next/image";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { ChevronLeft, ChevronRight, X, Play, Pause } from "lucide-react";

const AUTO_PLAY_DURATION = 5000;

interface CarouselProps {
  items: JSX.Element[];
}

type Card = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => { },
  currentIndex: 0,
});

export const Carousel = ({ items }: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // FUNCIÓN CORREGIDA: Calcula el desplazamiento por tarjeta exacta
  const scrollTo = (index: number) => {
    if (!carouselRef.current) return;

    const container = carouselRef.current;
    const cardElement = container.firstElementChild?.firstElementChild as HTMLElement;

    if (!cardElement) return;

    // Ancho de la tarjeta + el gap (16px es gap-4)
    const cardFullWidth = cardElement.offsetWidth + 16;

    let targetIndex = index;
    if (index < 0) targetIndex = items.length - 1;
    if (index >= items.length) targetIndex = 0;

    container.scrollTo({
      left: targetIndex * cardFullWidth,
      behavior: "smooth",
    });

    setCurrentIndex(targetIndex);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        scrollTo(currentIndex + 1);
      }, AUTO_PLAY_DURATION);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentIndex, items.length]);

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const cardElement = container.firstElementChild?.firstElementChild as HTMLElement;
    if (!cardElement) return;

    const cardFullWidth = cardElement.offsetWidth + 16;
    const index = Math.round(container.scrollLeft / cardFullWidth);

    if (index !== currentIndex && index >= 0 && index < items.length) {
      setCurrentIndex(index);
    }
  };

  return (
    <CarouselContext.Provider value={{ onCardClose: scrollTo, currentIndex }}>
      <div className="relative w-full group">
        <div
          className="flex w-full overflow-x-scroll snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          ref={carouselRef}
          onScroll={handleScroll}
        >
          {/* Añadimos padding lateral para que la primera y última card se centren bien */}
          <div className="flex flex-row gap-4 px-[5%] md:px-[10%] mb-4">
            {items.map((item, index) => (
              <div key={"card-container-" + index} className="snap-center shrink-0">
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Navegación */}
        <div className="absolute inset-y-0 left-4 md:left-10 flex items-center opacity-0 group-hover:opacity-100 transition-opacity z-30">
          <button
            onClick={() => { setIsPlaying(false); scrollTo(currentIndex - 1); }}
            className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-all"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
        </div>
        <div className="absolute inset-y-0 right-4 md:right-10 flex items-center opacity-0 group-hover:opacity-100 transition-opacity z-30">
          <button
            onClick={() => { setIsPlaying(false); scrollTo(currentIndex + 1); }}
            className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-all"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Indicadores con Barra de Progreso */}
        <div className="mt-8 flex items-center justify-center gap-6">
          <div className="flex items-center gap-3 bg-neutral-800/50 backdrop-blur-xl px-4 py-2.5 rounded-full border border-white/10">
            {items.map((_, index) => (
              <button
                key={"dot-" + index}
                onClick={() => { setIsPlaying(false); scrollTo(index); }}
                className="relative h-1.5 bg-white/20 rounded-full overflow-hidden transition-all duration-300"
                style={{ width: currentIndex === index ? "40px" : "8px" }}
              >
                {currentIndex === index && isPlaying && (
                  <motion.div
                    key={`progress-${index}`}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: AUTO_PLAY_DURATION / 1000, ease: "linear" }}
                    className="absolute inset-y-0 left-0 bg-white"
                  />
                )}
                {currentIndex === index && !isPlaying && (
                  <div className="absolute inset-0 bg-white" />
                )}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="h-10 w-10 flex items-center justify-center rounded-full bg-neutral-800/50 backdrop-blur-xl border border-white/10 text-white"
          >
            {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" className="ml-0.5" />}
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({ card, index, layout = false }: { card: Card; index: number; layout?: boolean }) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose } = useContext(CarouselContext);

  useOutsideClick(containerRef, () => handleClose());

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-2xl"
              onClick={handleClose}
            />

            <motion.div
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              className="relative z-[60] w-full max-w-7xl rounded-[32px] bg-[#030b14] border border-white/10 overflow-hidden h-[90vh] md:h-[80vh] flex flex-col md:flex-row mt-8 md:mt-20"
            >
              {/* Botón Cerrar */}
              <button
                className="absolute top-6 right-6 h-10 w-10 flex items-center justify-center rounded-full bg-[#001D3D] backdrop-blur-md text-[#b5934a] z-[70] hover:bg-white/20 transition-colors"
                onClick={handleClose}
              >
                <X size={20} />
              </button>

              {/* Renderizado del contenido que ahora se ajusta al h-[80vh] */}
              <div className="flex-1 w-full h-full overflow-hidden">
                {card.content}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={() => setOpen(true)}
        className="relative group h-[500px] w-[300px] md:h-[600px] md:w-[1000px] flex flex-col items-start justify-start overflow-hidden rounded-[32px] bg-neutral-900 border"
      >
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/80 via-transparent to-black/20" />
        <div className="relative z-30 p-10 md:p-14 text-left">
          <p className="font-bold text-[#b5934a] text-sm md:text-base uppercase tracking-[0.2em] mb-3">{card.category}</p>
          <p className="text-3xl md:text-5xl font-bold text-white leading-[0.95] tracking-tighter max-w-lg">{card.title}</p>
        </div>
        <BlurImage src={card.src} alt={card.title} fill className="absolute inset-0 z-10 object-cover transition-transform duration-700 group-hover:scale-105" />
      </motion.button>
    </>
  );
};

export const BlurImage = ({ src, className, alt, fill, ...rest }: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={cn("transition duration-300", isLoading ? "blur-sm" : "blur-0", className)}
      onLoad={() => setLoading(false)}
      src={src}
      alt={alt || "Grupo Campana Asset"}
      fill={fill}
      {...rest}
    />
  );
};