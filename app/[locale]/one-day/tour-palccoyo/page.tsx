"use client"
// src/app/[locale]/camino-inca/camino-inca-2d/page.tsx
import React from "react";
import ComponentePrincipal from "@/app/components/principal/pricipal";
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
    generalTitle: "Tour Montaña de Colores Palccoyo (1D)",
    tripOverview: {
      title: "Resumen del Viaje",
      content:
        "Disfruta de un tour único por la Montaña de Colores Palccoyo. Descubre los vibrantes matices de la tierra mientras recorres senderos andinos, y vive una experiencia inolvidable en contacto directo con la naturaleza.",
    },
    itinerarySummary: {
      title: "Resumen del Itinerario",
      days: [
        {
          title: "Día Único: Cusco - Palccoyo - Cusco",
          steps: [
            { iconType: "bus", text: "Recogida en el hotel en Cusco" },
            { iconType: "walk", text: "Transporte a Palccoyo" },
            { iconType: "walk", text: "Caminata y recorrido por la montaña de colores" },
            { iconType: "photo", text: "Tiempo libre para fotos" },
            { iconType: "bus", text: "Retorno a Cusco" },
          ],
        },
      ],
    },
    itinerary: [
      {
        title: "Tour de un Día: Cusco - Palccoyo - Cusco",
        text: (
          <>
            <p>El día inicia con el recogido en tu hotel en Cusco. Luego, un cómodo transporte te llevará a Palccoyo, donde te espera un paisaje natural de intensos colores y formaciones geológicas sorprendentes.</p>
            <p>Disfruta de una caminata guiada por senderos andinos, aprende sobre la mineralogía que da origen a estos vibrantes colores y aprovecha el tiempo para capturar fotos impresionantes. Finalmente, regresa a Cusco con recuerdos inolvidables.</p>
          </>
        ),
        services: [
          "Recogida en el hotel",
          "Transporte ida y vuelta",
          "Guía profesional bilingüe",
          "Tiempo libre para explorar y fotografiar",
        ],
      },
    ],
    additionalInfo: {
      title: "Detalles del Tour",
      physicalRating: "Baja",
    },
    includedServices: "Servicios Incluidos:",
    notIncluded: [
      "Entrada a sitios adicionales (si aplica)",
      "Propinas",
    ],
    recommendations: [
      "Usa ropa cómoda y zapatos de trekking",
      "Lleva protector solar, agua y snacks",
      "No olvides tu cámara",
    ],
    groupServices: {
      daysAndNights: "1D",
      price: "USD $120",
      quote: "Tour en grupo reducido",
      bookNow: "Reservar Ahora",
      tourForMe: "¿Es este tour para mí?",
    },
  },
  en: {
    generalTitle: "Palccoyo Color Mountain Tour (1D)",
    tripOverview: {
      title: "Trip Overview",
      content:
        "Experience a unique tour through the colorful Palccoyo Mountain. Discover the vibrant hues of the earth as you walk along Andean trails and create unforgettable memories in close contact with nature.",
    },
    itinerarySummary: {
      title: "Itinerary Overview",
      days: [
        {
          title: "One Day Tour: Cusco - Palccoyo - Cusco",
          steps: [
            { iconType: "bus", text: "Hotel pickup in Cusco" },
            { iconType: "walk", text: "Transport to Palccoyo" },
            { iconType: "walk", text: "Guided hike through the color mountain" },
            { iconType: "photo", text: "Free time for photos" },
            { iconType: "bus", text: "Return to Cusco" },
          ],
        },
      ],
    },
    itinerary: [
      {
        title: "One Day Tour: Cusco - Palccoyo - Cusco",
        text: (
          <>
            <p>Your day begins with a hotel pickup in Cusco. Enjoy a comfortable ride to Palccoyo, where you will be greeted by a natural landscape bursting with vibrant colors and stunning geological formations.</p>
            <p>Join a guided hike along Andean trails, learn about the minerals that create these vivid hues, and take plenty of photos. Finally, return to Cusco with unforgettable memories.</p>
          </>
        ),
        services: [
          "Hotel pickup",
          "Round-trip transport",
          "Professional bilingual guide",
          "Free time to explore and photograph",
        ],
      },
    ],
    additionalInfo: {
      title: "Tour Details",
      physicalRating: "Low",
    },
    includedServices: "Included Services:",
    notIncluded: [
      "Additional site entry (if applicable)",
      "Tips",
    ],
    recommendations: [
      "Wear comfortable clothing and trekking shoes",
      "Bring sunscreen, water, and snacks",
      "Do not forget your camera",
    ],
    groupServices: {
      daysAndNights: "1D",
      price: "USD $120",
      quote: "Small group tour",
      bookNow: "Book Now",
      tourForMe: "Is this tour for me?",
    },
  },
};

export default function Palccoyo(){
    const params = useParams();
    const localeValue = params.locale === "en" ? "en" : "es";
    const content = { ...translations[localeValue], ...globalImages };
  
    return <ComponentePrincipal {...content} />;
  }