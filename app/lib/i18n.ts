export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

export const translations = {
  en: {        
    machuPicchuTour: "Machu Picchu Tour",
    sacredValley: "Sacred Valley",
    oneDayTour: "One Day Tour",
    incaTrail: "Inca Trail",
    packages: "Complete Packages",
    // Dropdown Camino Inca
    incaTrail2d: "Inca Trail 2 Days",
    incaTrail4d: "Inca Trail 4 Days",
    salkantayTrek: "Trek Salkantay to Machu Picchu",
    // Dropdown Machu Picchu Tour
    machupicchuFullDay: "Machupicchu Full Day",
    machupicchuByCar: "Machupicchu 2D/1N",    
    // Dropdown Sacred Valley
    sacredValleyLite: "South Valley Tour",
    sacredValleyVip: "Sacred Valley VIP",
    marasMoray: "Maras Moray - Salt Mines",
    // Dropdown One Day Tour (Aventuras)
    cityTourCusco: "City Tour - Cusco",
    sieteLagunas: "Siete Lagunas",
    tourMistico: "Mystical Tour (4 in 1)",
    waqraPucara: "Waqra Pucara",
    tourPallcoyo: "Tour Pallcoyo",
    lagunaHumantay: "Laguna Humantay",
    montana7Colores: "Seven Colors Mountain",
  },
  es: {    
    machuPicchuTour: "Tour a Machu Picchu",
    sacredValley: "Valle Sagrado",
    oneDayTour: "Tour de un día",
    incaTrail: "Camino Inca",
    packages: "Paquetes Completos",
    // Dropdown Camino Inca
    incaTrail2d: "Camino Inca 2 Días",
    incaTrail4d: "Camino Inca 4 Días",
    salkantayTrek: "Salkantay hacia Machu Picchu",
    // Dropdown Machu Picchu Tour
    machupicchuFullDay: "Machupicchu Día Completo",
    machupicchuByCar: "Machupicchu 2D/1N",
    // Dropdown Valle Sagrado
    sacredValleyLite: "Tour del Valle Sur",
    sacredValleyVip: "Valle Sagrado VIP",
    marasMoray: "Maras Moray - Salineras",
    // Dropdown Tour de un día (Aventuras)
    cityTourCusco: "City Tour - Cusco",
    sieteLagunas: "Siete Lagunas",
    tourMistico: "Tour Místico (4 en 1)",
    waqraPucara: "Waqra Pucara",
    tourPallcoyo: "Tour Pallcoyo",
    lagunaHumantay: "Laguna Humantay",
    montana7Colores: "Montaña de 7 colores",
  },
};
