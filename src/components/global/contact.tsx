import { Container } from "@/components";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
    return (
        <section className="py-20 md:py-32 overflow-hidden ">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl">
                    
                    {/* Columna Izquierda: Información de Contacto */}
                    <div className="flex flex-col space-y-8">
                        
                        <div className="space-y-6">
                            <h2 className="text-5xl md:text-7xl font-bold text-[#001D3D] tracking-tighter leading-none">
                                Contáctanos
                            </h2>
                            <p className="text-gray-900 text-lg max-w-md leading-relaxed">
                                Estamos comprometidos con la excelencia y la confianza. 
                                Contáctenos para conocer más sobre nuestras 13 unidades de negocio y oportunidades de inversión.
                            </p>
                        </div>

                        {/* Detalles de contacto rápidos */}
                        <div className="flex flex-wrap gap-8 pt-4">
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-[#001D3D]" />
                                <span className="text-gray-700 font-medium">contacto@grupocampana.ec</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-[#001D3D]" />
                                <span className="text-gray-700 font-medium">+593 4 123 4567</span>
                            </div>
                        </div>
                    </div>

                    {/* Columna Derecha: Formulario con Grid de fondo */}
                    <div className="relative group">
                        {/* Efecto de resplandor de fondo */}                        
                        <div className="relative bg-[#001D3D] backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-2xl shadow-2xl">
                            <form className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Nombre completo</label>
                                    <input 
                                        type="text" 
                                        placeholder="Tu nombre"
                                        className="w-full bg-[#020617]/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Correo electrónico</label>
                                    <input 
                                        type="email" 
                                        placeholder="ejemplo@correo.com"
                                        className="w-full bg-[#020617]/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Empresa (Opcional)</label>
                                    <input 
                                        type="text" 
                                        placeholder="Nombre de tu empresa"
                                        className="w-full bg-[#020617]/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Mensaje</label>
                                    <textarea 
                                        rows={4}
                                        placeholder="¿Cómo podemos ayudarte?"
                                        className="w-full bg-[#020617]/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all resize-none"
                                    ></textarea>
                                </div>

                                <button className="w-full bg-white text-[#001D3D] font-bold py-4 rounded-lg hover:bg-gray-200 transition-colors shadow-lg shadow-white/5">
                                    Enviar Mensaje
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
        </section>
    );
};

export default ContactSection;