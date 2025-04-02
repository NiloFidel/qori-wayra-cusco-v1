"use client"
// src/app/[locale]/camino-inca/camino-inca-2d/page.tsx

import React from "react";
import ComponentePrincipal from "@/app/components/utils/principal/pricipal";
import img1 from "@/public/images/Macchu Picchu/MachuTrain/tren1.jpg";
import img2 from "@/public/images/Macchu Picchu/MachuTrain/tren2.jpg";
import img3 from "@/public/images/Macchu Picchu/MachuTrain/tren3.webp";
import img4 from "@/public/images/Macchu Picchu/MachuTrain/tren4.jpg";
import img5 from "@/public/images/Macchu Picchu/MachuTrain/tren5.jpg";
import mainImg from "@/public/images/Macchu Picchu/MachuTrain/main.jpg";
import { useParams } from "next/navigation";

/* 🔹 Definir la Interfaz para los textos de traducción */
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
  mapImage: mainImg.src,
  smallImages: [
    img1.src,
    img2.src,
    img3.src,
    img4.src,
    img5.src,
  ],
};

/* 🔹 Definir objeto de traducciones para el tour en tren a Machu Picchu (2D/1N) */
const translations: { es: TranslationContent; en: TranslationContent } = {
  es: {
    generalTitle: "Tour en Tren a Machu Picchu (2D/1N)",
    tripOverview: {
      title: "Resumen del Viaje",
      content:
        "Este tour de 2 días y 1 noche a Machu Picchu es ideal para quienes desean conocer la maravilla inca con más tranquilidad. Iniciaremos el viaje en tren desde Cusco o el Valle Sagrado hasta Aguas Calientes, donde pernoctaremos para al día siguiente visitar la majestuosa ciudadela de Machu Picchu.",
    },
    itinerarySummary: {
      title: "Resumen del Itinerario",
      days: [
        {
          title: "Día 1: Cusco - Aguas Calientes",
          steps: [
            { iconType: "train", text: "Recojo del hotel y traslado a la estación de tren." },
            { iconType: "hotel", text: "Viaje en tren hasta Aguas Calientes." },
            { iconType: "train", text: "Tiempo libre para explorar el pueblo o visitar los baños termales." },
            { iconType: "hotel", text: "Noche en hotel en Aguas Calientes." },
          ],
        },
        {
          title: "Día 2: Machu Picchu - Cusco",
          steps: [
            { iconType: "bus", text: "Desayuno temprano en el hotel." },
            { iconType: "walk", text: "Ascenso en bus a Machu Picchu." },
            { iconType: "train", text: "Recorrido guiado de aproximadamente 2 horas por la ciudadela inca." },
            { iconType: "bus", text: "Tiempo libre para explorar " },
            { iconType: "walk", text: "Retorno en bus a Aguas Calientes." },
            { iconType: "train", text: "Viaje en tren de regreso y traslado al hotel en Cusco." },
          
        ],
        },
      ],
    },
    itinerary: [
      {
        title: "Día 1: Cusco - Aguas Calientes",
        text: (
          <>
            <p>
              Inicia tu aventura tomando un cómodo tren desde Cusco a Aguas Calientes. Durante el trayecto, disfrutarás de vistas espectaculares del Valle Sagrado.
            </p>
            <p>
              A tu llegada, tendrás tiempo libre para explorar Aguas Calientes y relajarte antes del gran día.
            </p>
          </>
        ),
        services: ["Transporte en tren", "Pernocte en Aguas Calientes", "Tiempo libre"],
      },
      {
        title: "Día 2: Machu Picchu - Cusco",
        text: (
          <>
            <p>
              Despierta temprano y toma un traslado en bus a Machu Picchu. Únete a un tour guiado para descubrir los secretos y la historia de este sitio Patrimonio de la Humanidad.
            </p>
            <p>
              Luego, regresa a Cusco disfrutando de un relajante viaje en tren.
            </p>
          </>
        ),
        services: [
            "Bus turistico", 
            "Transporte en tren ida y vuelta.", 
            "Bus Aguas Calientes – Machu Picchu (ida y vuelta).",
            "Ingreso a Machu Picchu.",
            "Guía profesional.",
            "01 noche de hospedaje en Aguas Calientes.",
            "Desayuno en el hotel."
        ],
      },
    ],
    additionalInfo: {
      title: "Detalles del Tour",
      physicalRating: "Baja a Moderada",
    },
    includedServices: "Servicios Incluidos:",
    notIncluded: ["Almuerzos y cenas.", "Gastos personales."],
    recommendations: ["Llevar ropa cómoda", "Protector solar y agua", "Calzado adecuado"],
    groupServices: {
      daysAndNights: "2D/1N",
      price: "USD $350",
      quote: "Consulta más información",
      bookNow: "Reservar Ahora",
      tourForMe: "¿Este tour es para mí?",
    },
  },
  en: {
    generalTitle: "Train Tour to Machu Picchu (2D/1N)",
    tripOverview: {
      title: "Trip Overview",
      content:
        "This 2-day, 1-night Machu Picchu tour is perfect for travelers seeking to experience the Inca wonder at a more relaxed pace. The journey begins with a scenic train ride from Cusco or the Sacred Valley to Aguas Calientes, where you’ll spend the night. The following day, you’ll explore the majestic citadel of Machu Picchu.",
    },
    itinerarySummary: {
      title: "Itinerary Overview",
      days: [
        {
          title: "Day 1: Cusco - Aguas Calientes",
          steps: [
            { iconType: "train", text: "Hotel pickup and transfer to the train station." },
            { iconType: "hotel", text: "Train journey to Aguas Calientes." },
            { iconType: "train", text: "Free time to explore the town or visit the hot springs." },
            { iconType: "hotel", text: "Overnight stay at a hotel in Aguas Calientes." },
          ],
        },
        {
          title: "Day 2: Machu Picchu - Cusco",
          steps: [
            { iconType: "bus", text: "Early breakfast at the hotel." },
            { iconType: "walk", text: "Bus ride up to Machu Picchu." },
            { iconType: "train", text: "Guided tour (approximately 2 hours) of the Inca citadel." },
            { iconType: "bus", text: "Free time to explore on your own." },
            { iconType: "walk", text: "Return by bus to Aguas Calientes." },
            { iconType: "train", text: "Train journey back to Cusco, followed by transfer to your hotel." },
          ],
        },
      ],
    },
    itinerary: [
      {
        title: "Day 1: Cusco - Aguas Calientes",
        text: (
          <>
            <p>
              Begin your adventure with a comfortable train ride from Cusco to Aguas Calientes. Enjoy breathtaking views of the Sacred Valley along the way.
            </p>
            <p>
              Upon arrival, you will have free time to explore Aguas Calientes and relax before the big day.
            </p>
          </>
        ),
        services: ["Train transportation", "Overnight stay", "Free time"],
      },
      {
        title: "Day 2: Machu Picchu - Cusco",
        text: (
          <>
            <p>
              Wake up early and take a bus transfer to Machu Picchu. Join a guided tour to uncover the history and mysteries of this World Heritage site.
            </p>
            <p>
              Afterwards, enjoy a relaxing return train ride to Cusco.
            </p>
          </>
        ),
        services: [
            "Tourist bus transportation", 
            "Round-trip train tickets", 
            "Aguas Calientes – Machu Picchu bus (round-trip)",
        "Machu Picchu entrance ticket",
        "Professional bilingual guide",
        "01 night of accommodation in Aguas Calientes",
        "Breakfast at the hotel"
        ],
      },
    ],
    additionalInfo: {
      title: "Tour Details",
      physicalRating: "Low to Moderate",
    },
    includedServices: "Included Services:",
    notIncluded: ["Lunches and dinners", "Personal expenses"],
    recommendations: ["Wear comfortable clothing", "Sunscreen and water", "Proper footwear"],
    groupServices: {
      daysAndNights: "2D/1N",
      price: "USD $350",
      quote: "More details available",
      bookNow: "Book Now",
      tourForMe: "Is this tour for me?",
    },
  },
};

export default function MapiByTrain(){
    const params = useParams();
    // Definir el idioma según el parámetro. Si no es "en", se toma "es".
    const localeValue = params.locale === "en" ? "en" : "es";
    // Combinar textos de traducción con las imágenes globales
    const content = { ...translations[localeValue], ...globalImages };
  
    return <ComponentePrincipal {...content} />;
}
