// src/app/[locale]/camino-inca/camino-inca-2d/page.tsx
import React from "react";
import ComponentePrincipal from "@/app/components/principal/pricipal";

import img1 from "@/public/images/ValleVIP//Pisac-donde-crece-y-florece-todo.jpg";
import img2 from "@/public/images/ValleVIP//ollantaytambo-cusco-peru.jpg";
import img3 from "@/public/images/ValleVIP//moray.jpg";
import img4 from "@/public/images/ValleVIP//SALINERAS-DE-MARAS.jpeg";
import img5 from "@/public/images/ValleVIP//iglesia-chinchero-full.jpg";

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

const globalImages = {
  mapImage: "https://guru-almacen.s3.us-east-1.amazonaws.com/quechua/mapa.jpg",
  smallImages: [img1.src, img2.src, img3.src, img4.src, img5.src],
};

const translations: { es: TranslationContent; en: TranslationContent } = {
  es: {
    generalTitle: "Camino Inca Corto (2D/1N)",
    tripOverview: {
      title: "Resumen del Viaje",
      content:
        "Vive la experiencia del Camino Inca en una versión corta de 2 días y 1 noche. Camina por senderos ancestrales hasta la Puerta del Sol y explora Machu Picchu al amanecer.",
    },
    itinerarySummary: {
      title: "Resumen del Itinerario",
      days: [
        {
          title: "Día 1: Cusco - Wiñay Wayna - Aguas Calientes",
          steps: [
            { iconType: "bus", text: "Transporte de Cusco a Ollantaytambo" },
            { iconType: "train", text: "Tren a Km 104 - Inicio de caminata" },
            { iconType: "walk", text: "Caminata a Wiñay Wayna" },
            { iconType: "walk", text: "Llegada a la Puerta del Sol" },
            { iconType: "hotel", text: "Pernocte en Aguas Calientes" },
          ],
        },
        {
          title: "Día 2: Machu Picchu - Cusco",
          steps: [
            { iconType: "bus", text: "Subida en bus a Machu Picchu" },
            { iconType: "walk", text: "Tour guiado en Machu Picchu" },
            { iconType: "train", text: "Retorno a Cusco en tren" },
          ],
        },
      ],
    },
    itinerary: [
      {
        title: "Día 1: Cusco - Wiñay Wayna - Aguas Calientes",
        text: (
          <>
            <p>
              Salida temprano desde Cusco hacia Ollantaytambo, donde tomaremos el tren hacia el Km 104. Desde allí, comenzamos nuestra caminata por senderos incas rodeados de vegetación y montañas. Visitamos el sitio arqueológico de Wiñay Wayna y seguimos hasta la Puerta del Sol, con la primera vista panorámica de Machu Picchu.
            </p>
            <p>
              Tras una pausa para fotos, descendemos a Aguas Calientes, donde nos registramos en el hotel y disfrutamos de una cena bien merecida.
            </p>
          </>
        ),
        services: ["Transporte", "Boleto de tren", "Guía", "Cena y hotel"],
      },
      {
        title: "Día 2: Machu Picchu - Cusco",
        text: (
          <>
            <p>
              Nos levantamos temprano para tomar el bus a Machu Picchu y ver el amanecer en la ciudadela. Realizamos un recorrido guiado por los puntos más importantes y aprendemos sobre su historia.
            </p>
            <p>
              Después del tour, tenemos tiempo libre antes de tomar el tren y bus de regreso a Cusco.
            </p>
          </>
        ),
        services: ["Entrada a Machu Picchu", "Guía", "Transporte de regreso"],
      },
    ],
    additionalInfo: {
      title: "Detalles del Tour",
      physicalRating: "Moderada",
    },
    includedServices: "Servicios Incluidos:",
    notIncluded: ["Boleto Turístico Parcial", "Alimentación", "Propinas"],
    recommendations: ["Llevar ropa cómoda y abrigo", "Protector solar y agua", "Cámara fotográfica"],
    groupServices: {
      daysAndNights: "2D/1N",
      price: "USD $450",
      quote: "Información adiconales",
      bookNow: "Reservar Ahora",
      tourForMe: "¿Este tour es para mí?",
    },
  },
  en: {
    generalTitle: "Short Inca Trail (2D/1N)",
    tripOverview: {
      title: "Trip Overview",
      content:
        "Experience the Short Inca Trail in a 2-day, 1-night adventure. Walk through ancient paths to the Sun Gate and explore Machu Picchu at sunrise.",
    },
    itinerarySummary: {
      title: "Itinerary Overview",
      days: [
        {
          title: "Day 1: Cusco - Wiñay Wayna - Aguas Calientes",
          steps: [
            { iconType: "bus", text: "Transport from Cusco to Ollantaytambo" },
            { iconType: "train", text: "Train to Km 104 - Start of the hike" },
            { iconType: "walk", text: "Hike to Wiñay Wayna" },
            { iconType: "walk", text: "Arrival at the Sun Gate" },
            { iconType: "hotel", text: "Overnight stay in Aguas Calientes" },
          ],
        },
        {
          title: "Day 2: Machu Picchu - Cusco",
          steps: [
            { iconType: "bus", text: "Bus ride to Machu Picchu" },
            { iconType: "walk", text: "Guided tour in Machu Picchu" },
            { iconType: "train", text: "Return to Cusco by train" },
          ],
        },
      ],
    },
    itinerary: [
      {
        title: "Day 1: Cusco - Wiñay Wayna - Aguas Calientes",
        text: (
          <>
            <p>
              Early morning departure from Cusco to Ollantaytambo, where we board a train to Km 104, the starting point of our hike. Walking along ancient Inca trails, we pass through lush mountain landscapes and tropical vegetation. We reach the impressive archaeological complex of Wiñay Wayna, where our guide explains its historical significance.
            </p>
            <p>
              Continuing our hike, we arrive at the Sun Gate (Inti Punku) with a breathtaking first view of Machu Picchu. After enjoying the scenery, we descend to Aguas Calientes, where we check into our hotel and enjoy a well-deserved dinner.
            </p>
          </>
        ),
        services: ["Transport Cusco - Ollantaytambo", "Train ticket to Km 104", "Professional bilingual guide", "Entry to Inca Trail and Machu Picchu", "Dinner and hotel in Aguas Calientes"],
      },
      {
        title: "Day 2: Machu Picchu - Cusco",
        text: (
          <>
            <p>
              We wake up early to take the bus to Machu Picchu and witness the sunrise over the ancient citadel. Our guided tour explores the most significant areas, providing insights into its rich history and breathtaking architecture.
            </p>
            <p>
              After the tour, we have free time to explore before boarding the train and bus back to Cusco.
            </p>
          </>
        ),
        services: ["Machu Picchu entrance ticket", "Professional guide", "Return transport to Cusco"],
      },
    ],
    additionalInfo: {
      title: "Tour Details",
      physicalRating: "Moderate",
    },
    includedServices: "Included Services:",
    notIncluded: ["Partial Tourist Ticket", "Meals", "Tips"],
    recommendations: ["Bring comfortable clothing", "Sunscreen and water", "Camera"],
    groupServices: {
      daysAndNights: "2D/1N",
      price: "USD $450",
      quote: "Additional information",
      bookNow: "Book Now",
      tourForMe: "Is this tour for me?",
    },
  },
};

export default async function CaminoInca2D({ params }: { params: { locale: string } }) {
  const localeValue = params.locale === "en" ? "en" : "es";
  const content = { ...translations[localeValue], ...globalImages };

  return <ComponentePrincipal {...content} />;
}
