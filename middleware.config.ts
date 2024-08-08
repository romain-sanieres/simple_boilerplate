import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";

export default async function middleware(request: NextRequest) {
  const session = await auth();
  console.log(session);
  // Liste des chemins protégés
  const protectedPaths = ["/dashboard", "/admin"];

  // Vérifiez si le chemin actuel est protégé
  const isProtectedPath = protectedPaths.some((path) =>
    request.nextUrl.pathname.startsWith(path)
  );

  if (isProtectedPath && !session) {
    // Redirigez vers la page de connexion si l'utilisateur n'est pas authentifié
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Continuez normalement si l'utilisateur est authentifié ou si le chemin n'est pas protégé
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
