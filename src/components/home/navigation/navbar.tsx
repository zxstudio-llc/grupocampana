"use client";

import { useState, useEffect } from "react";
import { Container } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "#about" },
        { name: "Business Units", href: "#units" },
        { name: "Investments", href: "#investments" },
        { name: "Contact Us", href: "/contact-us" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-[9999] w-full transition-all duration-500",
                isScrolled
                    ? "md:bg-[#001229]/70 md:backdrop-blur-lg md:border-b md:border-white/10 py-2 md:shadow-2xl bg-transparent"
                    : "bg-[#001229]/40 backdrop-blur-lg py-2"
            )}
        >
            <Container>
                <div className="flex h-12 items-center justify-between mx-auto md:max-w-screen-xl px-4">

                    {/* LOGO GLOBAL - Se oculta en mobile cuando isOpen es true */}
                    <div
                        className={cn(
                            "flex items-center transition-opacity duration-300",
                            isOpen ? "opacity-0 pointer-events-none md:opacity-100" : "opacity-100"
                        )}
                    >
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/assets/logo.svg"
                                alt="Grupo Campana Logo"
                                width={130}
                                height={70}
                                className={cn(
                                    "object-contain transition-all duration-300",
                                    "drop-shadow-[0_2px_10px_rgba(0,18,41,0.8)]",
                                    isScrolled && "md:drop-shadow-none"
                                )}
                                priority
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "px-6 py-2 rounded-full text-sm font-bold transition-all",
                                    pathname === link.href
                                        ? "bg-[#b5934a] text-white"
                                        : "text-white hover:bg-white/10"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                    <Button
                                            asChild
                                            className={cn(
                                                "hidden sm:flex bg-[#b5934a] text-white px-6 py-2 rounded-full text-sm font-bold border border-white/10 hover:bg-white hover:text-[#001229] transition-all duration-300 shadow-lg"
                                            )}
                                        >
                                            <Link
                                                href="/contact-us"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                Contact Us
                                            </Link>
                                        </Button>

                        {/* Mobile Menu (Sheet) */}
                        <div className="md:hidden flex items-center">
                            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                                <SheetTrigger asChild>
                                    <button
                                        className={cn(
                                            "p-2 text-white outline-none transition-opacity duration-300",
                                            isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
                                        )}
                                    >
                                        <Menu className="w-6 h-6 drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)]" />
                                    </button>
                                </SheetTrigger>

                                <SheetContent
                                    side="right"
                                    className="w-[300px] bg-white/20 backdrop-blur-xl border-l border-white/30 p-0 shadow-2xl"
                                >
                                    {/* LOGO CENTRADO EN EL SHEET */}
                                    <SheetHeader className="flex flex-col items-center justify-center pt-4 pb-4 border-b border-white/20">
                                        <SheetTitle>
                                            <Image
                                                src="/assets/logo.svg"
                                                alt="Logo"
                                                width={120}
                                                height={60}
                                                className="invert brightness-0"
                                            />
                                        </SheetTitle>
                                        <SheetDescription className="hidden" />
                                    </SheetHeader>

                                    <div className="flex flex-col h-full pt-12 px-6 gap-4">
                                        {navLinks.map((link) => {
                                            const isActive = pathname === link.href;
                                            return (
                                                <Link
                                                    key={link.name}
                                                    href={link.href}
                                                    onClick={() => setIsOpen(false)}
                                                    className={cn(
                                                        "w-full px-6 py-4 rounded-xl text-lg font-bold transition-all duration-300",
                                                        isActive
                                                            ? "bg-[#b5934a] text-white shadow-lg"
                                                            : "text-[#001229] hover:bg-white/40"
                                                    )}
                                                >
                                                    {link.name}
                                                </Link>
                                            );
                                        })}

                                        <div className="mt-auto mb-10">
                                            <Link
                                                href="/contact-us"
                                                onClick={() => setIsOpen(false)}
                                                className="block w-full text-center bg-[#001229] text-white py-4 rounded-xl font-bold shadow-xl"
                                            >
                                                Get in Touch
                                            </Link>
                                        </div>
                                    </div>
                                    <SheetFooter>
                                        <Button
                                            asChild
                                            className="w-full h-auto py-4 rounded-xl font-bold shadow-xl bg-[#001229] hover:bg-[#b5934a] text-white transition-all duration-300 border-none"
                                        >
                                            <Link
                                                href="/contact-us"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                Get in Touch
                                            </Link>
                                        </Button>
                                    </SheetFooter>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Navbar;