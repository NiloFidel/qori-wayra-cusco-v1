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
  mapImage:
    "https://guru-almacen.s3.us-east-1.amazonaws.com/quechua/mapa.jpg",
  smallImages: [
    img1.src,
    img2.src,
    img3.src,
    img4.src,
    img5.src,
  ],
};

/* 🔹 Definir objeto de traducciones para el tour completo del Valle Sagrado VIP */
const translations: { es: TranslationContent; en: TranslationContent } = {
  es: {
    generalTitle: "Tour Valle Sagrado VIP (Full Day)",
    tripOverview: {
      title: "Resumen del Viaje",
      content:
        "Disfruta de un tour VIP por el Valle Sagrado, recorriendo Chinchero, Moray, las Salineras de Maras, Ollantaytambo y Pisac en un día lleno de historia, cultura y paisajes impresionantes.",
    },
    itinerarySummary: {
      title: "Resumen del Itinerario",
      days: [
        {
          title: "Itinerario del Tour Valle Sagrado VIP",
          steps: [
            { iconType: "bus", text: "Recojo en el hotel y traslado a Chinchero" },
            { iconType: "walk", text: "Visita a Chinchero: ruinas, iglesia y mercado" },
            { iconType: "walk", text: "Recorrido por Moray y sus terrazas circulares" },
            { iconType: "walk", text: "Parada en las Salineras de Maras" },
            { iconType: "bus", text: "Visita a Ollantaytambo y Pisac" },
          ],
        },
      ],
    },
    itinerary: [
      {
        title: "Itinerario del Tour Valle Sagrado VIP",
        text: (
          <>
            <p>
              Comenzamos nuestro tour en Chinchero, donde exploramos ruinas incas, una iglesia colonial y un vibrante mercado de artesanías.
            </p>
            <p>
              Luego nos dirigimos a Moray para admirar sus inusuales terrazas agrícolas circulares, seguidas de una visita a las impresionantes Salineras de Maras.
            </p>
            <p>
              Finalizamos el recorrido en Ollantaytambo y Pisac, donde descubrimos antiguas fortificaciones y el encanto de los mercados locales.
            </p>
          </>
        ),
        services: [
          "Recojo en el hotel",
          "Transporte turístico VIP",
          "Guía profesional bilingüe",
          "Almuerzo Buffet en Urubamba",
        ],
      },
    ],
    additionalInfo: {
      title: "Detalles del Tour",
      physicalRating: "Moderada",
    },
    includedServices: "Servicios Incluidos:",
    notIncluded: [
      "Ingreso a las Salineras (cobro por parte de la comunidad)",
      "Boleto Turístico General",
    ],
    recommendations: [
      "Llevar ropa cómoda y abrigada",
      "Usar zapatos adecuados y protector solar",
      "Llevar agua y snacks",
    ],
    groupServices: {
      daysAndNights: "Full Day",
      price: "USD $450",
      quote: "Información adicionales",
      bookNow: "Reservar Ahora",
      tourForMe: "¿Este tour es para mí?",
    },
  },
  en: {
    generalTitle: "Sacred Valley VIP Tour (Full Day)",
    tripOverview: {
      title: "Trip Overview",
      content:
        "Enjoy a VIP tour of the Sacred Valley, visiting Chinchero, Moray, the Salineras de Maras, Ollantaytambo and Pisac in a full day of rich history, culture, and breathtaking landscapes.",
    },
    itinerarySummary: {
      title: "Itinerary Overview",
      days: [
        {
          title: "Sacred Valley VIP Tour Itinerary",
          steps: [
            { iconType: "bus", text: "Hotel pickup and transfer to Chinchero" },
            { iconType: "walk", text: "Visit Chinchero: ruins, church, and market" },
            { iconType: "walk", text: "Explore Moray and its circular terraces" },
            { iconType: "walk", text: "Stop at the Salineras de Maras" },
            { iconType: "bus", text: "Tour of Ollantaytambo and Pisac" },
          ],
        },
      ],
    },
    itinerary: [
      {
        title: "Sacred Valley VIP Tour Itinerary",
        text: (
          <>
            <p>
              Our tour begins in Chinchero, where we explore Inca ruins, a colonial church, and a vibrant local market.
            </p>
            <p>
              Next, we visit Moray to admire its unique circular terraces, followed by a stop at the breathtaking Salineras de Maras.
            </p>
            <p>
              The journey concludes with visits to Ollantaytambo and Pisac, where you’ll discover ancient fortifications and charming local markets.
            </p>
          </>
        ),
        services: [
          "Hotel pickup",
          "VIP transportation",
          "Professional bilingual guide",
          "Buffet lunch in Urubamba",
        ],
      },
    ],
    additionalInfo: {
      title: "Tour Details",
      physicalRating: "Moderate",
    },
    includedServices: "Included Services:",
    notIncluded: [
      "Entry to the Salineras (community fee)",
      "General Tourist Ticket",
    ],
    recommendations: [
      "Wear comfortable, warm clothing",
      "Bring proper walking shoes and sunscreen",
      "Carry water and snacks",
    ],
    groupServices: {
      daysAndNights: "Full Day",
      price: "USD $450",
      quote: "Additional information",
      bookNow: "Book Now",
      tourForMe: "Is this tour for me?",
    },
  },
};

export default function MarasMoray(){
    const params = useParams();
    const localeValue = params.locale === "en" ? "en" : "es";
    const content = { ...translations[localeValue], ...globalImages };
  
    return <ComponentePrincipal {...content} />;
  }
