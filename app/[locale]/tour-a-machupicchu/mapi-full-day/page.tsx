"use client"
// src/app/[locale]/camino-inca/camino-inca-2d/page.tsx
import React from "react";
import ComponentePrincipal from "@/app/components/utils/principal/pricipal";
import img1 from "@/public/images/Macchu Picchu/Machu Picchu - Full day/Machu Picchu 1.jpg";
import img2 from "@/public/images/Macchu Picchu/Machu Picchu - Full day/Machu Picchu 2.jpg";
import img3 from "@/public/images/Macchu Picchu/Machu Picchu - Full day/Machu Picchu 3.jpg";
import img4 from "@/public/images/Macchu Picchu/Machu Picchu - Full day/Machu Picchu 4.jpg";
import img5 from "@/public/images/Macchu Picchu/Machu Picchu - Full day/Machu Picchu 5.jpg";
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
    generalTitle: "Machu Picchu Full Day",
    tripOverview: {
      title: "Resumen del Tour",
      content:
        "Disfruta de un día completo en Machu Picchu, con transporte desde Cusco, visita guiada por la ciudadela y tiempo libre para explorar este icónico sitio arqueológico.",
    },
    itinerarySummary: {
      title: "Itinerario Resumido",
      days: [
        {
          title: "Día Único: Cusco - Machu Picchu - Cusco",
          steps: [
            { iconType: "bus", text: "Transporte desde Cusco a Machu Picchu" },
            { iconType: "walk", text: "Tour guiado en Machu Picchu" },
            { iconType: "free", text: "Tiempo libre para explorar" },
            { iconType: "bus", text: "Retorno a Cusco" },
          ],
        },
      ],
    },
    itinerary: [
      {
        title: "Mañana: Salida y Llegada a Machu Picchu",
        text: (
          <>
            <p>
              Salida temprana desde Cusco en autobús hacia Machu Picchu. Durante el viaje, disfrutarás de paisajes impresionantes y la emoción de acercarte a uno de los destinos más icónicos del mundo.
            </p>
            <p>
              A tu llegada, un guía experto te conducirá por los principales puntos de interés de la ciudadela.
            </p>
          </>
        ),
        services: ["Transporte", "Guía profesional", "Entrada a Machu Picchu"],
      },
      {
        title: "Tarde: Exploración y Retorno",
        text: (
          <>
            <p>
              Tras el tour guiado, tendrás tiempo libre para explorar Machu Picchu a tu propio ritmo, tomar fotos y disfrutar del entorno.
            </p>
            <p>
              Finalmente, se te trasladará de regreso a Cusco en autobús.
            </p>
          </>
        ),
        services: ["Tiempo libre", "Retorno en autobús"],
      },
    ],
    additionalInfo: {
      title: "Detalles del Tour",
      physicalRating: "Baja a Moderada",
    },
    includedServices: "Servicios Incluidos:",
    notIncluded: ["Alimentación", "Propinas", "Bebidas"],
    recommendations: ["Llevar ropa cómoda", "Protector solar", "Agua"],
    groupServices: {
      daysAndNights: "Full Day",
      price: "USD $250",
      quote: "Consulta más detalles",
      bookNow: "Reservar Ahora",
      tourForMe: "¿Es este tour para mí?",
    },
  },
  en: {
    generalTitle: "Machu Picchu Full Day",
    tripOverview: {
      title: "Tour Overview",
      content:
        "Experience a full day at Machu Picchu with transportation from Cusco, a guided tour of the citadel, and free time to explore this iconic archaeological site.",
    },
    itinerarySummary: {
      title: "Itinerary Summary",
      days: [
        {
          title: "Single Day: Cusco - Machu Picchu - Cusco",
          steps: [
            { iconType: "bus", text: "Transportation from Cusco to Machu Picchu" },
            { iconType: "walk", text: "Guided tour at Machu Picchu" },
            { iconType: "free", text: "Free time to explore" },
            { iconType: "bus", text: "Return to Cusco" },
          ],
        },
      ],
    },
    itinerary: [
      {
        title: "Morning: Departure and Arrival at Machu Picchu",
        text: (
          <>
            <p>
              Early departure from Cusco by bus to Machu Picchu. Enjoy breathtaking views and the anticipation of reaching one of the world’s most iconic destinations.
            </p>
            <p>
              Upon arrival, a professional guide will take you through the main highlights of the citadel.
            </p>
          </>
        ),
        services: ["Transportation", "Professional guide", "Entrance ticket"],
      },
      {
        title: "Afternoon: Exploration and Return",
        text: (
          <>
            <p>
              After the guided tour, you’ll have free time to explore Machu Picchu at your own pace—take photos and soak in the environment.
            </p>
            <p>
              Finally, you’ll be transported back to Cusco by bus.
            </p>
          </>
        ),
        services: ["Free time", "Return transportation"],
      },
    ],
    additionalInfo: {
      title: "Tour Details",
      physicalRating: "Low to Moderate",
    },
    includedServices: "Included Services:",
    notIncluded: ["Meals", "Tips", "Drinks"],
    recommendations: ["Wear comfortable clothing", "Sunscreen", "Water"],
    groupServices: {
      daysAndNights: "Full Day",
      price: "USD $250",
      quote: "More details available",
      bookNow: "Book Now",
      tourForMe: "Is this tour for me?",
    },
  },
};

export default function MapiFullDay(){
    const params = useParams();
    const localeValue = params.locale === "en" ? "en" : "es";
    const content = { ...translations[localeValue], ...globalImages };
  
    return <ComponentePrincipal {...content} />;
  }