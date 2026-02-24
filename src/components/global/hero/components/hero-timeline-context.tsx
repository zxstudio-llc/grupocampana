"use client";

import { createContext, useContext } from "react";
import gsap from "gsap";

export const HeroTimelineContext =
  createContext<gsap.core.Timeline | null>(null);

export const useHeroTimeline = () => {
  return useContext(HeroTimelineContext);
};
