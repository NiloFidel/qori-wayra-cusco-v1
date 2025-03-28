"use client"
// src/app/[locale]/camino-inca/camino-inca-2d/page.tsx
import React from "react";
import ComponentePrincipal from "@/app/components/utils/principal/pricipal";
import img1 from "@/public/images/ValleVIP/Pisac-donde-crece-y-florece-todo.jpg";
import img2 from "@/public/images/ValleVIP/ollantaytambo-cusco-peru.jpg";
import img3 from "@/public/images/ValleVIP/moray.jpg";
import img4 from "@/public/images/ValleVIP/SALINERAS-DE-MARAS.jpeg";
import img5 from "@/public/images/ValleVIP/iglesia-chinchero-full.jpg";
import { useParams } from "next/navigation";

/* 🔹 Definir la Interfaz */
interface TranslationContent {
  generalTitle: string;
  tripOverview: {
    title: string;
    content: string;
  };
  itinerarySummary: {
    title: string;
    days: {
      title: string;
      steps: { iconType: string; text: string }[];
    }[];
  };
  itinerary: {
    title: string;
    text: React.ReactNode;
    services: string[];
  }[];
  additionalInfo: {
    title: string;
    physicalRating: string;
  };
  includedServices: string;
  notIncluded: string[];
  recommendations: string[];
  groupServices: {
    daysAndNights: string;
    price: string;
    quote: string;
    bookNow: string;
    tourForMe: string;
  };
}

/* 🔹 Imágenes globales */
const globalImages = {
    mapImage: "https://guru-almacen.s3.us-east-1.amazonaws.com/quechua/mapa.jpg",
  smallImages: [
    img1.src,
    img2.src,
    img3.src,
    img4.src,
    img5.src,
  ],
};

/* 🔹 Definir objeto de traducciones */
const translations: { es: TranslationContent; en: TranslationContent } = {
  es: {
    generalTitle: "City Tour Cusco (1D)",
    tripOverview: {
      title: "Resumen del Viaje",
      content:
        "Descubre los tesoros históricos y culturales de Cusco en un tour de un día. Visita el Qoricancha, la Catedral, Sacsayhuamán y el vibrante Mercado de San Pedro para vivir una experiencia auténtica.",
    },
    itinerarySummary: {
      title: "Resumen del Itinerario",
      days: [
        {
          title: "Día 1: Recorrido por Cusco",
          steps: [
            { iconType: "bus", text: "Traslado desde el hotel al centro histórico" },
            { iconType: "walk", text: "Visita al Qoricancha" },
            { iconType: "walk", text: "Recorrido por la Catedral y Plaza de Armas" },
            { iconType: "walk", text: "Exploración de Sacsayhuamán" },
            { iconType: "market", text: "Paseo por el Mercado de San Pedro" },
          ],
        },
      ],
    },
    itinerary: [
      {
        title: "Día 1: Recorrido por Cusco",
        text: (
          <>
            <p>Tu día comienza con el traslado desde tu hotel al centro histórico de Cusco. Iniciaremos con una visita al Qoricancha, el templo del sol inca, y luego descubriremos la imponente Catedral y la vibrante Plaza de Armas.</p>
            <p>Continuaremos hacia Sacsayhuamán, donde disfrutarás de impresionantes vistas panorámicas de la ciudad, y finalizaremos con una visita al tradicional Mercado de San Pedro, donde podrás experimentar la auténtica vida cusqueña.</p>
          </>
        ),
        services: ["Traslado", "Guía profesional", "Entradas a sitios", "Visita al mercado"],
      },
    ],
    additionalInfo: {
      title: "Detalles del Tour",
      physicalRating: "Fácil",
    },
    includedServices: "Servicios Incluidos:",
    notIncluded: ["Propinas", "Gastos personales"],
    recommendations: ["Ropa cómoda", "Calzado adecuado", "Protector solar"],
    groupServices: {
      daysAndNights: "1D",
      price: "USD $90",
      quote: "Consulta disponibilidad y horarios",
      bookNow: "Reservar Ahora",
      tourForMe: "¿Este tour es para mí?",
    },
  },
  en: {
    generalTitle: "City Tour Cusco (1D)",
    tripOverview: {
      title: "Trip Overview",
      content:
        "Discover the historical and cultural treasures of Cusco in a one-day tour. Visit Qoricancha, the Cathedral, Sacsayhuamán, and the lively San Pedro Market for an authentic experience.",
    },
    itinerarySummary: {
      title: "Itinerary Overview",
      days: [
        {
          title: "Day 1: Cusco City Tour",
          steps: [
            { iconType: "bus", text: "Transport from your hotel to the historic center" },
            { iconType: "walk", text: "Visit to Qoricancha" },
            { iconType: "walk", text: "Tour of the Cathedral and Plaza de Armas" },
            { iconType: "walk", text: "Exploration of Sacsayhuamán" },
            { iconType: "market", text: "Visit to San Pedro Market" },
          ],
        },
      ],
    },
    itinerary: [
      {
        title: "Day 1: Cusco City Tour",
        text: (
          <>
            <p>Your day begins with transport from your hotel to Cuscos historic center. Start with a visit to Qoricancha, the Inca temple of the sun, followed by a tour of the impressive Cathedral and the vibrant Plaza de Armas.</p>
            <p>Next, explore Sacsayhuamán, an Incan fortress offering panoramic views of the city, and conclude with a visit to the traditional San Pedro Market, where you can experience authentic Cusco life.</p>
          </>
        ),
        services: ["Transport", "Professional guide", "Entrance fees", "Market visit"],
      },
    ],
    additionalInfo: {
      title: "Tour Details",
      physicalRating: "Easy",
    },
    includedServices: "Included Services:",
    notIncluded: ["Tips", "Personal expenses"],
    recommendations: ["Comfortable clothing", "Suitable footwear", "Sunscreen"],
    groupServices: {
      daysAndNights: "1D",
      price: "USD $90",
      quote: "Check availability and schedules",
      bookNow: "Book Now",
      tourForMe: "Is this tour for me?",
    },
  },
};

export default function CityTourCusco(){
    const params = useParams();
    const localeValue = params.locale === "en" ? "en" : "es";
    const content = { ...translations[localeValue], ...globalImages };
  
    return <ComponentePrincipal {...content} />;
  }