import { Container, Icons } from "@/components";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";

const Navbar = () => {
    return (
        <header className="sticky top-0 z-[100] w-full bg-[#001229]">
            <Container>
                <div className="flex h-20 items-center justify-between mx-auto md:max-w-screen-xl px-4">

                    {/* Logo con el color dorado del diseño */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/assets/logo.png"
                                alt="Grupo Campana Logo"
                                width={160}
                                height={90}
                                className="object-contain"
                                priority
                            />
                        </Link>
                    </div>

                    {/* Navigation Links - Fiel al diseño Header.png */}
                    <nav className="hidden md:flex items-center gap-1">
                        <Link
                            href="/"
                            className="bg-[#b5934a]  text-[#f2f2f2] px-6 py-2 rounded-full text-sm font-medium transition-all"
                        >
                            Home
                        </Link>
                        <Link
                            href="#about"
                            className="text-[#b5934a] hover:bg-gray-100 px-6 py-2 rounded-full text-sm font-medium transition-all"
                        >
                            About Us
                        </Link>
                        <Link
                            href="#units"
                            className="text-[#b5934a] hover:bg-gray-100 px-6 py-2 rounded-full text-sm font-medium transition-all"
                        >
                            Business Units
                        </Link>
                        <Link
                            href="#investments"
                            className="text-[#b5934a] hover:bg-gray-100 px-6 py-2 rounded-full text-sm font-medium transition-all"
                        >
                            Investments
                        </Link>
                        <Link
                            href="#contact"
                            className="text-[#b5934a] hover:bg-gray-100 px-6 py-2 rounded-full text-sm font-medium transition-all"
                        >
                            Contact Us
                        </Link>
                    </nav>

                    {/* Botón CTA - Darkblue con texto dorado */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="/contact-us"
                            className={cn(
                                "hidden sm:flex bg-[#b5934a]  text-[#f2f2f2] px-6 py-2 rounded-full text-sm font-semibold border border-[#001229] hover:bg-[#f2f2f2] hover:text-[#001229] transition-all duration-300 shadow-md"
                            )}
                        >
                            Contact Us
                        </Link>

                        <div className="md:hidden">
                            <Menu className="w-6 h-6 text-[#b5934a]" />
                        </div>
                    </div>

                </div>
            </Container>
        </header>
    )
};

export default Navbar;