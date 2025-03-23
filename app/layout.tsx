import "./globals.css";
import Navbar from "./[locale]/base/navbar/navbar";
import Footer from "./[locale]/base/footer/footer";
//import Whapa from "./components/utils/contact/contact"
import { ReactNode } from "react";
import "@/app/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gray-100 text-gray-900">
        <Navbar locale="es" />
        <main>{children}</main>
        
        <Footer locale="es" />
      </body>
    </html>
  );
}
