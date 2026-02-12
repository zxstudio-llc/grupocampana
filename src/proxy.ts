import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
    // Por ahora, permitimos que todas las rutas pasen sin restricciones
    return NextResponse.next();
}

export const config = {
    // Este matcher mantiene el estándar de Next.js para excluir archivos estáticos e internos
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};