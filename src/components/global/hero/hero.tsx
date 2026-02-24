"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const MOCK_PROPERTIES = [
  { id: 1, location: "Quito, Ecuador", tag: "sell" },
  { id: 2, location: "Guayaquil, Ecuador", tag: "buy" },
  { id: 3, location: "Cuenca, Ecuador", tag: "sell" },
  { id: 4, location: "Manta, Manabí", tag: "buy" },
  { id: 5, location: "Samborondón", tag: "sell" },
];

const Hero = () => {
  const router = useRouter();
  const [propertiesData] = useState(MOCK_PROPERTIES);
  const [activeTab, setActiveTab] = useState("sell");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [location, setLocation] = useState("");
  const [error, setError] = useState('');

  const handleTabChange = (tab: any) => setActiveTab(tab);

  const suggestions = Array.from(new Set(propertiesData.map((item) => item.location)));
  const handleSelect = (value: any) => { setLocation(value); setShowSuggestions(false); };

  return (
    // CAMBIO: w-full h-screen y relativo para contener la imagen absoluta
    <section className="relative w-full h-screen overflow-hiddenn">
      {/* IMAGEN DE FONDO (BACKGROUND) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1635542846520-094c38c64f0e?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="background hero"
          fill
          priority
          className="object-cover object-center" // Hace que la imagen cubra todo el fondo
        />
        {/* Capa de overlay opcional para legibilidad si el fondo es muy claro */}
        <div className="absolute inset-0 bg-black/10 dark:bg-black/40" />
      </div>
    </section>
  );
};

export default Hero;