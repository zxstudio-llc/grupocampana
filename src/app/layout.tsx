import { Footer, Navbar, ThemeProvider } from "@/components";
import { SITE_CONFIG } from "@/config";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Inter } from "next/font/google";

const font = Inter({ subsets: ["latin"] });

export const metadata = SITE_CONFIG;

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    "min-h-screen bg-[#f5f5f7] text-foreground antialiased",
                    font.className
                )}
            >
                <ThemeProvider 
                    attribute="class" 
                    defaultTheme="system" 
                    enableSystem
                >
                    <main className="relative flex flex-col min-h-screen">
                        {children}
                    </main>
                </ThemeProvider>
            </body>
        </html>
    );
};