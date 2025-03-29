"use client"
// src/app/[locale]/camino-inca/camino-inca-2d/page.tsx
import React from "react";
import ComponentePrincipal from "@/app/components/utils/principal/pricipal";
import img1 from "@/public/images/OneDayTour/Waqrapukara/waqra1.jpg";
import img2 from "@/public/images/OneDayTour/Waqrapukara/waqra2.jpg";
import img3 from "@/public/images/OneDayTour/Waqrapukara/waqra3.jpg";
import img4 from "@/public/images/OneDayTour/Waqrapukara/waqra4.jpg";
import img5 from "@/public/images/OneDayTour/Waqrapukara/waqra5.jpg";
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
    generalTitle: "Tour Waqrapukara (Full Day)",
    tripOverview: {
      title: "Resumen del Viaje",
      content:
        "Explora la misteriosa fortaleza de Waqrapukara, un impresionante sitio arqueológico en las alturas de Cusco. Disfruta de vistas panorámicas y conoce su fascinante historia en un tour guiado que te conectará con el legado inca.",
    },
    itinerarySummary: {
      title: "Resumen del Itinerario",
      days: [
        {
          title: "Día Único: Cusco - Waqrapukara - Cusco",
          steps: [
            { iconType: "bus", text: "Transporte desde Cusco a Waqrapukara" },
            { iconType: "walk", text: "Recorrido guiado por el sitio" },
            { iconType: "free", text: "Tiempo libre para explorar" },
            { iconType: "bus", text: "Retorno a Cusco" },
          ],
        },
      ],
    },
    itinerary: [
      {
        title: "Itinerario del Tour",
        text: (
          <>
            <p>El tour comienza con la recogida en Cusco y el traslado a Waqrapukara. Una vez allí, un guía experto te llevará a través de las ruinas y las impresionantes vistas panorámicas del valle. Tendrás tiempo para tomar fotografías y conocer los secretos de esta fortaleza incaica.</p>
            <p>Al finalizar el recorrido, regresarás a Cusco con recuerdos inolvidables.</p>
          </>
        ),
        services: ["Transporte", "Guía profesional"],
      },
    ],
    additionalInfo: {
      title: "Detalles del Tour",
      physicalRating: "Baja",
    },
    includedServices: "Servicios Incluidos:",
    notIncluded: ["Boleto de entrada", "Propinas"],
    recommendations: ["Llevar ropa cómoda", "Calzado adecuado", "Protector solar y agua"],
    groupServices: {
      daysAndNights: "1D",
      price: "USD $45",
      quote: "Info Adicional",
      bookNow: "Reservar Ahora",
      tourForMe: "¿Este tour es para mí?",
    },
  },
  en: {
    generalTitle: "Waqrapukara Tour (Full Day)",
    tripOverview: {
      title: "Trip Overview",
      content:
        "Discover the mysterious fortress of Waqrapukara, an impressive archaeological site high above Cusco. Enjoy breathtaking panoramic views and learn about its fascinating Inca history on a guided tour that connects you with the ancient legacy.",
    },
    itinerarySummary: {
      title: "Itinerary Overview",
      days: [
        {
          title: "One Day: Cusco - Waqrapukara - Cusco",
          steps: [
            { iconType: "bus", text: "Transport from Cusco to Waqrapukara" },
            { iconType: "walk", text: "Guided tour of the site" },
            { iconType: "free", text: "Free time to explore" },
            { iconType: "bus", text: "Return to Cusco" },
          ],
        },
      ],
    },
    itinerary: [
      {
        title: "Tour Itinerary",
        text: (
          <>
            <p>The tour starts with a pickup in Cusco and a transfer to Waqrapukara. Once there, an expert guide will take you through the ruins and the stunning panoramic views of the valley. You will have time to take photos and uncover the secrets of this Inca fortress.</p>
            <p>After the tour, you will return to Cusco with unforgettable memories.</p>
          </>
        ),
        services: ["Transport", "Professional guide"],
      },
    ],
    additionalInfo: {
      title: "Tour Details",
      physicalRating: "Low",
    },
    includedServices: "Included Services:",
    notIncluded: ["Entrance ticket", "Tips"],
    recommendations: ["Wear comfortable clothing", "Wear appropriate shoes", "Sunscreen and water"],
    groupServices: {
      daysAndNights: "1D",
      price: "USD $45",
      quote: "Additional Info",
      bookNow: "Book Now",
      tourForMe: "Is this tour for me?",
    },
  },
};

export default function Waqrapukara(){
    const params = useParams();
    const localeValue = params.locale === "en" ? "en" : "es";
    const content = { ...translations[localeValue], ...globalImages };
  
    return <ComponentePrincipal {...content} />;
  }