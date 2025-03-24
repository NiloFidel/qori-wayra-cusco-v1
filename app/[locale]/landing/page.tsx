"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { StaticImageData } from "next/image";

import {
  FaLeaf,
  FaStar,
  FaRecycle,
  FaHandshake,
  FaHeart,
  FaLightbulb,
  FaCrown,
} from "react-icons/fa";
import styles from "./landing.module.css";

// Importar imágenes para misión y visión
import imgMission from "@/public/images/Landing/Mision.jpeg";
import imgVision from "@/public/images/Landing/Vision.jpeg";

// Importar imágenes para el slider
import slide1 from "@/public/images/ValleVIP/andenes-chinchero-full.jpg";
import slide2 from "@/public/images/CityTour/qenqo-cusco2.jpg";
import slide3 from "@/public/images/ValleStantar/valle-sagrado.jpg";
import slide4 from "@/public/images/Machu Picchu/machupicchu_portada_datos.jpg";
import slide5 from "@/public/images/Machu-Valle/sacred-valley-new-1.jpg";

// 🔹 Interfaz de Traducciones
interface TranslationContent {
  mission: {
    title: string;
    content: string;
  };
  vision: {
    title: string;
    content: string;
  };
  values: {
    title: string;
    list: { title: string; description: string }[];
  };
  slider: {
    slides: { src: StaticImageData; description: string; route: string }[];
  };
}

// 🔹 Definición de traducciones para cada idioma
const translations: { es: TranslationContent; en: TranslationContent } = {
  es: {
    mission: {
      title: "Misión",
      content:
        "Preservar y proteger nuestro patrimonio cultural y natural mediante un turismo responsable, conectando a los viajeros con la esencia andina.",
    },
    vision: {
      title: "Visión",
      content:
        "Ser la agencia líder en Cusco, ofreciendo experiencias únicas y sostenibles y sirviendo de puente entre el mundo y la cultura andina.",
    },
    values: {
      title: "Valores de QORI WAYRA TRAVEL",
      list: [
        {
          title: "Respeto por la cultura y la naturaleza",
          description:
            "Valoramos nuestras raíces andinas y el entorno natural, promoviendo su preservación en cada experiencia.",
        },
        {
          title: "Compromiso con la calidad",
          description:
            "Ofrecemos un servicio personalizado y de excelencia, cuidando cada detalle.",
        },
        {
          title: "Turismo responsable y sostenible",
          description:
            "Fomentamos un turismo que beneficie a las comunidades y minimice el impacto ambiental.",
        },
        {
          title: "Integridad y transparencia",
          description:
            "Actuamos con ética y responsabilidad, construyendo relaciones de confianza.",
        },
        {
          title: "Pasión por el servicio",
          description:
            "Transmitimos calidez y autenticidad en cada viaje, disfrutando lo que hacemos.",
        },
        {
          title: "Innovación con identidad",
          description:
            "Exploramos nuevas formas de mostrar el Perú sin perder nuestra esencia cultural.",
        },
      ],
    },
    slider: {
      slides: [
        { src: slide1, description: "Valle Sagrado VIP", route: "/es/one-day/city-tour-cusco" },
        { src: slide2, description: "Machu Picchu Full Day", route: "/es/one-day/siete-colores" },
        { src: slide3, description: "City Tour Cusco", route: "/es/one-day/siete-lagunas" },
        { src: slide4, description: "Laguna Humantay", route: "/es/one-day/tour-mistico" },
        { src: slide5, description: "Montaña de 7 Colores", route: "/es/one-day/humantay" },
      ],
    },
  },
  en: {
    mission: {
      title: "Mission",
      content:
        "To preserve and protect our cultural and natural heritage through responsible tourism, connecting travelers with the Andean essence.",
    },
    vision: {
      title: "Vision",
      content:
        "To be the leading travel agency in Cusco, offering unique and sustainable experiences and serving as a bridge between the world and Andean culture.",
    },
    values: {
      title: "Values of QORI WAYRA TRAVEL",
      list: [
        {
          title: "Respect for Culture and Nature",
          description:
            "We value our Andean roots and natural environment, promoting their preservation in every experience.",
        },
        {
          title: "Commitment to Quality",
          description:
            "We provide personalized, high-quality service, taking care of every detail.",
        },
        {
          title: "Responsible and Sustainable Tourism",
          description:
            "We foster tourism that benefits local communities and minimizes environmental impact.",
        },
        {
          title: "Integrity and Transparency",
          description:
            "We act with ethics and responsibility, building trusting relationships.",
        },
        {
          title: "Passion for Service",
          description:
            "We deliver warm and genuine attention in every journey, loving what we do.",
        },
        {
          title: "Innovation with Identity",
          description:
            "We explore new ways to showcase Peru while staying true to our cultural essence.",
        },
      ],
    },
    slider: {
      slides: [
        { src: slide1, description: "Sacred Valley VIP", route: "/en/one-day/city-tour-cusco" },
        { src: slide2, description: "Machu Picchu Full Day", route: "/en/one-day/siete-colores" },
        { src: slide3, description: "City Tour Cusco", route: "/en/one-day/siete-lagunas" },
        { src: slide4, description: "Humantay Lagoon", route: "/en/one-day/tour-mistico" },
        { src: slide5, description: "Mountain of 7 Colors", route: "/en/one-day/humantay" },
      ],
    },
  },
};

// Mapeo de íconos para los valores (en orden)
const valueIcons = [
  FaLeaf,
  FaStar,
  FaRecycle,
  FaHandshake,
  FaHeart,
  FaLightbulb,
];

export default function LandingPage() {
  const pathname = usePathname();
  // Extrae el idioma de la URL, asumiendo que la ruta es /{locale}/landing
  const locale = (pathname.split("/")[1] as "es" | "en") || "es";
  const t = translations[locale];

  // Estado para el slider: índice del slide actual
  const [currentSlide, setCurrentSlide] = useState(0);

  // Estados para mostrar/ocultar overlay en Misión y Visión
  const [showMission, setShowMission] = useState(true);
  const [showVision, setShowVision] = useState(true);

  // Funciones para cambiar de slide
  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === t.slider.slides.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? t.slider.slides.length - 1 : prev - 1
    );
  };

  return (
    <div className={styles.container}>
      {/* Columna 1: Valores */}
      <div className={styles.columnValues}>
        <h2 className={styles.subtitle}>{t.values.title}</h2>
        <ul className={styles.valuesList}>
          {t.values.list.map((value, index) => {
            const IconComponent = valueIcons[index];
            return (
              <li key={index} className={styles.valueItem}>
                <div className={styles.valueHeader}>
                  <IconComponent className={styles.valueIcon} />
                  <h3 className={styles.valueTitle}>{value.title}</h3>
                </div>
                <p className={styles.valueText}>{value.description}</p>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Columna 2: Misión, Visión y Slider */}
      <div className={styles.columnMissionVision}>
        <div className={styles.gridMissionVision}>
          {/* Tarjeta de Misión */}
          <div
            className={styles.card}
            onClick={() => setShowMission((prev) => !prev)}
          >
            <div className={styles.imageContainer}>
              <Image
                src={imgMission}
                alt="Misión"
                width={1000}
                height={1000}
                quality={100}
                className={styles.image}
              />
              {showMission ? (
                <div className={styles.overlay}>
                  <h2 className={styles.title}>{t.mission.title}</h2>
                  <p className={styles.text}>{t.mission.content}</p>
                </div>
              ) : (
                <div className={styles.overlayHidden}></div>
              )}
            </div>
          </div>
          {/* Tarjeta de Visión */}
          <div
            className={styles.card}
            onClick={() => setShowVision((prev) => !prev)}
          >
            <div className={styles.imageContainer}>
              <Image
                src={imgVision}
                alt="Visión"
                width={1000}
                height={1000}
                quality={100}
                className={styles.image}
              />
              {showVision ? (
                <div className={styles.overlay}>
                  <h2 className={styles.title}>{t.vision.title}</h2>
                  <p className={styles.text}>{t.vision.content}</p>
                </div>
              ) : (
                <div className={styles.overlayHidden}></div>
              )}
            </div>
          </div>
        </div>

        {/* Slider de Imágenes */}
        <div className={styles.slider}>
          <button onClick={prevSlide} className={styles.sliderButton}>
            &#10094;
          </button>
          <div className={styles.slide}>
            <Image
              src={t.slider.slides[currentSlide].src}
              alt={`Slide ${currentSlide + 1}`}
              width={1000}
              height={1000}
              quality={100}
              className={styles.slideImage}
            />
            <p className={styles.slideDescription}>
              <span className={styles.bestSeller}>
                <FaCrown className={styles.crownIcon} /> Best Seller
              </span>
               {t.slider.slides[currentSlide].description}
            </p>
            <Link href={t.slider.slides[currentSlide].route}>
              <button className={styles.slideButton}>
                {locale === "es" ? "Ver más" : "View more"}
              </button>
            </Link>
          </div>
          <button onClick={nextSlide} className={styles.sliderButton}>
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
}
