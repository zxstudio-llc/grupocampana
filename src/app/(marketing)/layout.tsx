import { Footer, Navbar } from "@/components";
import React from 'react'

interface Props {
    children: React.ReactNode;
}

const MarketingLayout = ({ children }: Props) => {
    return (
        // Añadimos w-full y overflow-x-hidden
        <div className="flex flex-col items-center w-full overflow-x-hidden">
            <Navbar />
            <main className="w-full">
                {children}
            </main>
            <Footer />
        </div>
    )
};

export default MarketingLayout
