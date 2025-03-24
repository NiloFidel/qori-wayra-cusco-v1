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
    generalTitle: "Tour de la Montaña de 7 Colores (Vinicunca)",
    tripOverview: {
      title: "Resumen del Viaje",
      content:
        "Embárcate en una aventura única hacia Vinicunca, donde la naturaleza despliega un vibrante espectáculo de colores. Este tour te llevará desde Cusco por impresionantes paisajes hasta la cima, para disfrutar de una vista panorámica inigualable.",
    },
    itinerarySummary: {
      title: "Itinerario del Tour",
      days: [
        {
          title: "Día Único: Cusco - Vinicunca - Cusco",
          steps: [
            { iconType: "bus", text: "Traslado desde Cusco a la base del tour" },
            { iconType: "walk", text: "Inicio de la caminata hacia Vinicunca" },
            { iconType: "sun", text: "Disfruta del espectáculo de colores en la cima" },
            { iconType: "bus", text: "Regreso a Cusco" },
          ],
        },
      ],
    },
    itinerary: [
      {
        title: "Tour de la Montaña de 7 Colores",
        text: (
          <>
            <p>Partida desde Cusco en transporte privado. Comenzamos una caminata moderada hacia Vinicunca, enfrentando terrenos y altitudes que desafían, pero que te recompensan con una vista espectacular de la montaña de 7 colores.</p>
            <p>En la cima, disfrutarás de un paisaje natural único y vibrante. Tras disfrutar del momento, regresamos a Cusco en el mismo vehículo.</p>
          </>
        ),
        services: ["Transporte ida y vuelta", "Guía profesional", "Entrada al tour", "Snacks y bebidas"],
      },
    ],
    additionalInfo: {
      title: "Detalles del Tour",
      physicalRating: "Moderado",
    },
    includedServices: "Servicios Incluidos:",
    notIncluded: ["Almuerzo (opcional)", "Propinas"],
    recommendations: [
      "Llevar ropa cómoda y ligera",
      "Protector solar y gorra",
      "Calzado adecuado para caminatas",
      "Agua y snacks",
    ],
    groupServices: {
      daysAndNights: "1D",
      price: "USD $120",
      quote: "Información adicionales",
      bookNow: "Reservar Ahora",
      tourForMe: "¿Este tour es para mí?",
    },
  },
  en: {
    generalTitle: "7 Color Mountain Tour (Vinicunca)",
    tripOverview: {
      title: "Trip Overview",
      content:
        "Embark on a unique adventure to Vinicunca, where nature unfolds a vibrant display of colors. This tour takes you from Cusco through breathtaking landscapes to the summit for an unparalleled panoramic view.",
    },
    itinerarySummary: {
      title: "Tour Itinerary",
      days: [
        {
          title: "Single Day: Cusco - Vinicunca - Cusco",
          steps: [
            { iconType: "bus", text: "Transport from Cusco to the tour base" },
            { iconType: "walk", text: "Start the hike to Vinicunca" },
            { iconType: "sun", text: "Enjoy the colorful summit view" },
            { iconType: "bus", text: "Return to Cusco" },
          ],
        },
      ],
    },
    itinerary: [
      {
        title: "7 Color Mountain Tour",
        text: (
          <>
            <p>Depart from Cusco in private transport. We begin a moderate hike to Vinicunca, where challenging terrains and altitudes are rewarded with a spectacular view of the vibrant 7 Color Mountain.</p>
            <p>At the summit, take in the unique natural panorama before returning to Cusco.</p>
          </>
        ),
        services: ["Round-trip transport", "Professional guide", "Tour entrance", "Snacks and drinks"],
      },
    ],
    additionalInfo: {
      title: "Tour Details",
      physicalRating: "Moderate",
    },
    includedServices: "Included Services:",
    notIncluded: ["Lunch (optional)", "Tips"],
    recommendations: [
      "Wear comfortable, light clothing",
      "Bring sunscreen and a cap",
      "Wear proper hiking shoes",
      "Carry water and snacks",
    ],
    groupServices: {
      daysAndNights: "1D",
      price: "USD $120",
      quote: "Additional Information",
      bookNow: "Book Now",
      tourForMe: "Is this tour for me?",
    },
  },
};

export default function VinicuncaTour(){
    const params = useParams();
    const localeValue = params.locale === "en" ? "en" : "es";
    const content = { ...translations[localeValue], ...globalImages };
  
    return <ComponentePrincipal {...content} />;
  }