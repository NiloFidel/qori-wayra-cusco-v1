import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "es"];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  console.log("Middleware ejecutado con pathname:", pathname);

  const hasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`));
  if (hasLocale || pathname === "/") {
    return NextResponse.next();
  }
  const locale = "en";
  return NextResponse.redirect(new URL(`/${locale}${pathname}`, req.url));
}

export const config = {
  matcher: "/((?!_next|favicon.ico|public|api).*)",
};
