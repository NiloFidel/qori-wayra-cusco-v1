"use client"
// src/app/[locale]/camino-inca/camino-inca-2d/page.tsx
import React from "react";
import ComponentePrincipal from "@/app/components/utils/principal/pricipal";
import img1 from "@/public/images/Valle/ValleStantar/valle1.jpg";
import img2 from "@/public/images/Valle/ValleStantar/valle2.jpg";
import img3 from "@/public/images/Valle/ValleStantar/valle3.jpg";
import img4 from "@/public/images/Valle/ValleStantar/valle4.jpg";
import img5 from "@/public/images/Valle/ValleStantar/valle5.jpg";
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

/* 🔹 Definir objeto de traducciones para Valle Sagrado Sur */
const translations: { es: TranslationContent; en: TranslationContent } = {
  es: {
    generalTitle: "Tour Valle Sagrado Sur (Full Day)",
    tripOverview: {
      title: "Resumen del Viaje",
      content:
        "Explora los tesoros del Valle Sagrado Sur en un tour VIP. Visita el Parque Arqueológico de Tipón, el Parque Arqueológico de Pikillacta y la histórica iglesia de San Pedro Apóstol de Andahuaylillas.",
    },
    itinerarySummary: {
      title: "Resumen del Itinerario",
      days: [
        {
          title: "Itinerario del Tour Valle Sagrado Sur",
          steps: [
            { iconType: "bus", text: "Recojo en el hotel y traslado a Tipón" },
            { iconType: "walk", text: "Recorrido por el Parque Arqueológico de Tipón" },
            { iconType: "bus", text: "Traslado a Pikillacta" },
            { iconType: "walk", text: "Visita al Parque Arqueológico de Pikillacta" },
            { iconType: "bus", text: "Traslado a Andahuaylillas" },
            { iconType: "walk", text: "Visita a la iglesia de San Pedro Apóstol" },
          ],
        },
      ],
    },
    itinerary: [
      {
        title: "Tour Valle Sagrado Sur",
        text: (
          <>
            <p>
              Iniciamos nuestro recorrido en el Parque Arqueológico de Tipón, famoso por sus ingeniosos acueductos y terrazas incas.
            </p>
            <p>
              A continuación, nos dirigimos al Parque Arqueológico de Pikillacta, donde descubrimos vestigios de una antigua civilización preincaica.
            </p>
            <p>
              El tour culmina en Andahuaylillas, hogar de la imponente iglesia de San Pedro Apóstol, un ejemplo destacado del arte colonial.
            </p>
          </>
        ),
        services: [
          "Recojo en el hotel",
          "Transporte turístico",
          "Guía profesional bilingüe",
        ],
      },
    ],
    additionalInfo: {
      title: "Detalles del Tour",
      physicalRating: "Moderado",
    },
    includedServices: "Servicios Incluidos:",
    notIncluded: [
      "Alimentación",
      "Boleto Turístico General",
    ],
    recommendations: [
      "Llevar ropa cómoda",
      "Usar calzado adecuado",
      "Agua, snacks y protector solar",
    ],
    groupServices: {
      daysAndNights: "Full Day",
      price: "USD $20",
      quote: "Info Adicional",
      bookNow: "Reservar Ahora",
      tourForMe: "¿Este tour es para mí?",
    },
  },
  en: {
    generalTitle: "Sacred Valley South Tour (Full Day)",
    tripOverview: {
      title: "Trip Overview",
      content:
        "Discover the treasures of the Southern Sacred Valley on a VIP tour. Visit the Archaeological Park of Tipón, the Archaeological Park of Pikillacta, and the historic Church of San Pedro Apóstol de Andahuaylillas.",
    },
    itinerarySummary: {
      title: "Itinerary Overview",
      days: [
        {
          title: "Sacred Valley South Tour Itinerary",
          steps: [
            { iconType: "bus", text: "Hotel pickup and transfer to Tipón" },
            { iconType: "walk", text: "Visit the Archaeological Park of Tipón" },
            { iconType: "bus", text: "Transfer to Pikillacta" },
            { iconType: "walk", text: "Explore the Archaeological Park of Pikillacta" },
            { iconType: "bus", text: "Transfer to Andahuaylillas" },
            { iconType: "walk", text: "Visit the Church of San Pedro Apóstol" },
          ],
        },
      ],
    },
    itinerary: [
      {
        title: "Sacred Valley South Tour",
        text: (
          <>
            <p>
              Our tour begins at the Archaeological Park of Tipón, renowned for its impressive aqueducts and Inca terraces.
            </p>
            <p>
              Next, we head to the Archaeological Park of Pikillacta, a pre-Inca site offering a glimpse into an ancient civilization.
            </p>
            <p>
              Finally, we conclude the tour in Andahuaylillas, home to the magnificent Church of San Pedro Apóstol, a highlight of colonial history.
            </p>
          </>
        ),
        services: [
          "Hotel pickup",
          "Tour transportation",
          "Professional bilingual guide",
        ],
      },
    ],
    additionalInfo: {
      title: "Tour Details",
      physicalRating: "Moderate",
    },
    includedServices: "Included Services:",
    notIncluded: [
      "Foods",
      "General Tourist Ticket",
    ],
    recommendations: [
      "Wear comfortable clothing",
      "Proper walking shoes",
      "Water, snacks and sunscreen",
    ],
    groupServices: {
      daysAndNights: "Full Day",
      price: "USD $20",
      quote: "Additional Info",
      bookNow: "Book Now",
      tourForMe: "Is this tour for me?",
    },
  },
};

export default function ValleSagradoSur() {
    const params = useParams();
    const localeValue = params.locale === "en" ? "en" : "es";
    const content = { ...translations[localeValue], ...globalImages };
  
    return <ComponentePrincipal {...content} />;
  }