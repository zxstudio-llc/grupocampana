"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Plus,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface ShowcaseItem {
  title: string;
  description: string;
  image?: string;
  renderContent?: React.ReactNode;
}

interface ShowcaseProps {
  content: ShowcaseItem[];
}

export const Showcase = ({ content }: ShowcaseProps) => {
  const [activeCard, setActiveCard] = useState(0);

  const nextCard = () =>
    setActiveCard((prev) => Math.min(content.length - 1, prev + 1));

  const prevCard = () =>
    setActiveCard((prev) => Math.max(0, prev - 1));

  return (
    <div className="relative w-full max-w-7xl mx-auto h-[600px] md:h-[700px] bg-[#030b14] rounded-none md:rounded-[32px] overflow-hidden">
      <DesktopUI
        content={content}
        activeCard={activeCard}
        setActiveCard={setActiveCard}
        nextCard={nextCard}
        prevCard={prevCard}
      />

      <MobileUI
        content={content}
        activeCard={activeCard}
        nextCard={nextCard}
        prevCard={prevCard}
      />
    </div>
  );
};

/* ============================= */
/* DESKTOP VERSION */
/* ============================= */

const DesktopUI = ({
  content,
  activeCard,      // usado SOLO para content display
  setActiveCard,
  nextCard,
  prevCard,
}: any) => {

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(prev => prev === index ? null : index);
  };

  return (
    <div className="hidden md:flex h-full p-12 gap-8">
      {/* Sidebar */}
      <div className="relative z-20 w-[40%] flex flex-col justify-center gap-4">

        {content.map((item: ShowcaseItem, index: number) => (
          <div key={index}>

            {/* Title / Button */}
            <button
              onClick={() => handleToggle(index)}
              className={cn(
                "group flex items-center justify-between px-5 py-3 rounded-full transition-all duration-300",
                activeIndex === index
                  ? "bg-[#081c34] text-[#f1ba0a]"
                  : "bg-transparent text-neutral-400 hover:bg-[#0d1e31]"
              )}
            >
              <span className="flex items-center gap-3">
                <div
                  className={cn(
                    "p-1 rounded-full border transition-colors",
                    activeIndex === index
                      ? "border-[#f1ba0a] bg-[#f1ba0a] text-neutral-600"
                      : "border-neutral-600 group-hover:border-neutral-400"
                  )}
                >
                  <Plus size={16} strokeWidth={3} />
                </div>

                <span className="text-lg font-medium tracking-tight">
                  {item.title}
                </span>
              </span>
            </button>

            {/* Expandable Panel */}
            <AnimatePresence initial={false}>
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35 }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 p-6 rounded-[24px] bg-[#030b14]/60 backdrop-blur-xl border border-white/10 text-white">
                    <p className="text-base md:text-lg leading-relaxed">
                      <span className="font-bold">{item.title}.</span>{" "}
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        ))}

        {/* Vertical Controls */}
        <div className="absolute left-[-40px] flex flex-col gap-2 pt-4">
          <button
            onClick={prevCard}
            className="p-2 bg-[#081c34] rounded-full text-neutral-500 hover:text-[#f1ba0a] transition-colors"
          >
            <ChevronUp size={20} />
          </button>
          <button
            onClick={nextCard}
            className="p-2 bg-[#081c34] rounded-full text-neutral-500 hover:text-[#f1ba0a] transition-colors"
          >
            <ChevronDown size={20} />
          </button>
        </div>

      </div>

      {/* Content */}
      <ContentDisplay content={content} activeCard={activeCard} />
    </div>
  );
};

/* ============================= */
/* MOBILE VERSION */
/* ============================= */

const MobileUI = ({
  content,
  activeCard,
  nextCard,
  prevCard,
}: any) => {
  const isFirst = activeCard === 0;
  const isLast = activeCard === content.length - 1;

  const easing = [0.25, 0.1, 0.25, 1]; // Apple cubic-bezier
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    if (isLast) return;
    setDirection(1);
    nextCard();
  };

  const handlePrev = () => {
    if (isFirst) return;
    setDirection(-1);
    prevCard();
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 36 : -36,
      opacity: 0,
      scale: 0.985,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -36 : 36,
      opacity: 0,
      scale: 0.985,
    }),
  };

  return (
    <div className="md:hidden relative h-full w-screen overflow-hidden bg-black">

      {/* Background */}
      <ContentDisplay content={content} activeCard={activeCard} />

      {/* Bottom Glass Section */}
      <div className="absolute inset-x-0 bottom-12 z-40 flex justify-center px-4">

        <div className="relative w-full max-w-full flex items-end justify-center gap-8">

          {/* Left Arrow */}
          <AnimatePresence>
            {!isFirst && (
              <motion.button
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 0.7, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.35, ease: easing }}
                onClick={handlePrev}
                className="
                  absolute -left-8 bottom-0
                  h-14 w-10
                  rounded-r-full
                  bg-white/[0.06]
                  backdrop-blur-2xl
                  border border-white/10
                  border-l-0
                  flex items-center justify-center
                  text-white
                "
              >
                <ChevronLeft size={22} strokeWidth={1.5} />
              </motion.button>
            )}
          </AnimatePresence>

          {/* Glass Card con animación lateral EXACTA */}
          <div className="relative w-full max-w-[92%]">

            <div className="relative">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeCard}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    duration: 0.55,
                    ease: easing,
                  }}
                  className="rounded-[30px]"
                >
                  <div className="w-full px-6 py-5 bg-white/[0.06] backdrop-blur-2xl border border-white/10 rounded-[30px]">
                    <h3 className="text-[15px] font-medium text-white mb-1">
                      {content[activeCard].title}
                    </h3>

                    <p className="text-[13px] text-white/70 leading-[1.6]">
                      {content[activeCard].description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

          {/* Right Arrow */}
          <AnimatePresence>
            {!isLast && (
              <motion.button
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 0.7, x: 0 }}
                exit={{ opacity: 0, x: 12 }}
                transition={{ duration: 0.35, ease: easing }}
                onClick={handleNext}
                className="
                  absolute -right-8 bottom-0
                  h-14 w-10
                  rounded-l-full
                  bg-white/[0.06]
                  backdrop-blur-2xl
                  border border-white/10
                  border-r-0
                  flex items-center justify-center
                  text-white
                "
              >
                <ChevronRight size={22} strokeWidth={1.5} />
              </motion.button>
            )}
          </AnimatePresence>

        </div>
      </div>
    </div>
  );
};

/* ============================= */
/* SHARED CONTENT DISPLAY */
/* ============================= */

const ContentDisplay = ({
  content,
  activeCard,
}: {
  content: ShowcaseItem[];
  activeCard: number;
}) => {
  return (
    <div className="relative w-full flex-1 rounded-2xl overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCard}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.5 }}
          className="w-full flex items-center justify-center"

        >
          {content[activeCard].renderContent ? (
            <div className={cn(
              "relative w-full h-[400px] flex items-center justify-center",
              "md:absolute md:inset-0 md:h-full"
            )}>
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

      {/* Overlay gradient */}
      {!content[activeCard].renderContent && (
        <div className="absolute inset-0 bg-gradient-to-t from-[#030b14]/80 via-transparent to-transparent md:bg-gradient-to-r md:from-[#030b14]/40" />
      )}
    </div>
  );
};