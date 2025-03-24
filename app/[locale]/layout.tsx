// components/LayoutWrapper.tsx
"use client";
import { useParams } from "next/navigation";
import Navbar from "@/app/components/base/navbar/navbar";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const params = useParams();
  const locale = params.locale as 'es' | 'en';

  return (
    <>
      <Navbar locale={locale} />
      {children}
    </>
  );
}