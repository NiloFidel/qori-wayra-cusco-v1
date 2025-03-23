"use client";

import React, { FC } from "react";
import styles from "./footer.module.css";

interface FooterProps {
  locale: "es" | "en";
}

const Footer: FC<FooterProps> = ({ locale }) => {
  // Definición de textos según el idioma
  const texts = {
    es: {
      contact: "CONTÁCTENOS",
      office:
        "Oficina: PP.JJ. Construcción Civil L-3 Ruta Qapacñan, Cusco - PERÚ.",
      cellphone: "Celular: +51 924377454, +51 977608581",
      email: "Correo: qoriwayra.cuscotravel@gmail.com",
    },
    en: {
      contact: "CONTACT US",
      office:
        "Office: PP.JJ. Civil Construction L-3 Ruta Qapacñan, Cusco - PERU.",
      cellphone: "Mobile: +51 924377454, +51 977608581",
      email: "Email: qoriwayra.cuscotravel@gmail.com",
    },
  };

  const t = texts[locale];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.column}>
          <p className={styles.text}>{t.contact}</p>
        </div>
        <div className={styles.column}>
          <p className={styles.text}>
            {t.office}
            <br />
            {t.cellphone}
          </p>
        </div>
        <div className={styles.column}>
          <p className={styles.text}>{t.email}</p>
        </div>
      </div>
      <div className={styles.copy}>
        <p>© 2025 Qori Wayra. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
