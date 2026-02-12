import { Container } from "@/components";
import { Mail, Phone } from "lucide-react";

const ContactSection = () => {
    return (
        <section className="py-20 md:py-32 overflow-hidden">
            {/* El Container ya maneja el max-w-7xl, solo añadimos px-6 para mobile */}
            <Container className="px-6 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    
                    {/* Columna Izquierda: Información de Contacto (5 columnas en desktop) */}
                    <div className="lg:col-span-5 flex flex-col space-y-8 text-center lg:text-left">
                        
                        <div className="space-y-6">
                            <h2 className="text-5xl md:text-7xl font-bold text-[#001D3D] tracking-tighter leading-none">
                                Contáctanos
                            </h2>
                            <p className="text-gray-700 text-lg max-w-md mx-auto lg:mx-0 leading-relaxed">
                                Estamos comprometidos con la excelencia y la confianza. 
                                Contáctenos para conocer más sobre nuestras 13 unidades de negocio y oportunidades de inversión.
                            </p>
                        </div>

                        {/* Detalles de contacto rápidos - Centrados en mobile */}
                        <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-6 pt-4">
                            <div className="flex items-center justify-center lg:justify-start gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#001D3D]/5 flex items-center justify-center">
                                    <Mail className="w-5 h-5 text-[#001D3D]" />
                                </div>
                                <span className="text-gray-700 font-medium">contacto@grupocampana.ec</span>
                            </div>
                            <div className="flex items-center justify-center lg:justify-start gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#001D3D]/5 flex items-center justify-center">
                                    <Phone className="w-5 h-5 text-[#001D3D]" />
                                </div>
                                <span className="text-gray-700 font-medium">+593 4 123 4567</span>
                            </div>
                        </div>
                    </div>

                    {/* Columna Derecha: Formulario (7 columnas en desktop) */}
                    <div className="lg:col-span-7 relative group w-full">
                        <div className="relative bg-[#001D3D] p-6 md:p-12 rounded-3xl shadow-2xl overflow-hidden">
                            {/* Decoración sutil de fondo para el formulario */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl" />
                            
                            <form className="space-y-5 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300 ml-1">Nombre completo</label>
                                        <input 
                                            type="text" 
                                            placeholder="Tu nombre"
                                            className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C29B4B]/50 transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300 ml-1">Correo electrónico</label>
                                        <input 
                                            type="email" 
                                            placeholder="ejemplo@correo.com"
                                            className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C29B4B]/50 transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300 ml-1">Empresa (Opcional)</label>
                                    <input 
                                        type="text" 
                                        placeholder="Nombre de tu empresa"
                                        className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C29B4B]/50 transition-all"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300 ml-1">Mensaje</label>
                                    <textarea 
                                        rows={4}
                                        placeholder="¿Cómo podemos ayudarte?"
                                        className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C29B4B]/50 transition-all resize-none"
                                    ></textarea>
                                </div>

                                <button className="w-full bg-[#C29B4B] hover:bg-[#A6833D] text-white font-bold py-4 rounded-xl transition-all shadow-lg active:scale-[0.98] uppercase tracking-wider text-sm">
                                    Enviar Mensaje
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
};

export default ContactSection;