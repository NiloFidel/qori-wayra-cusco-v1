"use client";

import React, { FC, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.css";

// Objeto de textos para internacionalización
const texts = {
  es: {
    contact: "CONTÁCTENOS",
    office: "Oficina: PP.JJ. Construcción Civil L-3 Ruta Qapacñan, Cusco - PERÚ.",
    cellphone: "Celular: +51 924377454, +51 977608581",
    email: "Correo: qoriwayra.cuscotravel@gmail.com",
    privacyPolicy: "Políticas de Privacidad",
    terms: "Términos y Condiciones",
    noTrae: "No Trata de Personas",
    endorsedBy: "Avalados por",
    meansOfPayment: "Medios de Pago",
  },
  en: {
    contact: "CONTACT US",
    office: "Office: PP.JJ. Civil Construction L-3 Ruta Qapacñan, Cusco - PERU.",
    cellphone: "Mobile: +51 924377454, +51 977608581",
    email: "Email: qoriwayra.cuscotravel@gmail.com",
    privacyPolicy: "Privacy Policy",
    terms: "Terms & Conditions",
    noTrae: "No Human Trafficking",
    endorsedBy: "Endorsed by",
    meansOfPayment: "Means of Payment",
  },
};

// Texto de la política de privacidad en ambos idiomas
const privacyPolicyText = {
  es: `POLÍTICA DE PRIVACIDAD

QORI WAYRA TRAVEL protege tu información personal. Recopilamos datos como nombre, contacto y preferencias de viaje para procesar reservas y mejorar nuestros servicios. No compartimos tu información con terceros, salvo cuando sea necesario para tu viaje.

Nos reservamos el derecho de actualizar esta política.`,
  en: `PRIVACY POLICY

QORI WAYRA TRAVEL protects your personal information. We collect data such as name, contact details, and travel preferences to process reservations and improve our services. We do not share your information with third parties, except when necessary for your trip.

We reserve the right to update this policy.`,
};

interface FooterProps {
  locale: "es" | "en";
}

const Footer: FC<FooterProps> = ({ locale }) => {
  const t = texts[locale];
  const [showNoTraeModal, setShowNoTraeModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  // Manejo del modal para "No Trata de Personas"
  const handleNoTraeModalOpen = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShowNoTraeModal(true);
  };
  const handleNoTraeModalClose = () => {
    setShowNoTraeModal(false);
  };

  // Manejo del modal para "Políticas de Privacidad"
  const handlePrivacyModalOpen = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShowPrivacyModal(true);
  };
  const handlePrivacyModalClose = () => {
    setShowPrivacyModal(false);
  };

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          {/* Columna 1: Datos de contacto */}
          <div className={styles.contactColumn}>
            <h3 className={styles.header}>{t.contact}</h3>
            <p className={styles.text}>{t.office}</p>
            <p className={styles.text}>{t.cellphone}</p>
            <p className={styles.text}>{t.email}</p>
          </div>

          {/* Columna 2: Enlaces como botones (orden: Términos, Privacidad, No Trata) */}
          <div className={styles.linksColumn}>
            <Link
              href={`/${locale}/terminos-condiciones`}
              className={styles.linkButton}
              aria-label={t.terms}
            >
              {t.terms}
            </Link>
            <a
              href="#"
              className={styles.linkButton}
              aria-label={t.privacyPolicy}
              onClick={handlePrivacyModalOpen}
            >
              {t.privacyPolicy}
            </a>
            <a
              href="#"
              onClick={handleNoTraeModalOpen}
              className={styles.linkButton}
              aria-label={t.noTrae}
            >
              {t.noTrae}
            </a>
          </div>

          {/* Columna 3: Logos en dos grupos */}
          <div className={styles.logosColumn}>
            <div className={styles.logoGroup}>
              <h4 className={styles.groupTitle}>{t.endorsedBy}</h4>
              <div className={styles.logoItems}>
                <div className={styles.logoItem}>
                  <Image
                    src="/images/dircetur.png"
                    alt="Dircetur"
                    width={60}
                    height={60}
                    className={styles.roundImage}
                  />
                </div>
                <div className={styles.logoItem}>
                  <Image
                    src="/images/gercetur.png"
                    alt="Gercetur"
                    width={60}
                    height={60}
                    className={styles.roundImage}
                  />
                </div>
              </div>
            </div>

            <div className={styles.logoGroup}>
              <h4 className={styles.groupTitle}>{t.meansOfPayment}</h4>
              <div className={styles.logoItems}>
                <div className={styles.logoItem}>
                  <Image
                    src="/images/visa3.png"
                    alt="Visa"
                    width={60}
                    height={60}
                    className={styles.roundImage}
                  />
                </div>
                <div className={styles.logoItem}>
                  <Image
                    src="/images/masterCard.jpg"
                    alt="MasterCard"
                    width={60}
                    height={60}
                    className={styles.roundImage}
                  />
                </div>
                <div className={styles.logoItem}>
                  <Image
                    src="/images/yape.png"
                    alt="Yape"
                    width={60}
                    height={60}
                    className={styles.roundImage}
                  />
                </div>
                <div className={styles.logoItem}>
                  <Image
                    src="/images/plin.jpg"
                    alt="Plin"
                    width={60}
                    height={60}
                    className={styles.roundImage}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Derechos reservados */}
        <div className={styles.copy}>
          <p>© 2025 Qori Wayra. Todos los derechos reservados.</p>
        </div>
      </footer>

      {/* Modal para "No Trata de Personas" */}
      {showNoTraeModal && (
        <div className={styles.modalOverlay} onClick={handleNoTraeModalClose}>
          <div className={styles.modalContent}>
            <Image
              src="/images/esnna.jpg"
              alt="Imagen completa"
              layout="fill"
              objectFit="contain"
              className={styles.modalImage}
            />
            <button
              className={styles.modalClose}
              onClick={handleNoTraeModalClose}
              aria-label="Cerrar modal de No Trata de Personas"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {/* Modal para "Políticas de Privacidad" */}
      {showPrivacyModal && (
        <div className={styles.modalOverlay} onClick={handlePrivacyModalClose}>
          <div className={styles.modalContentText}>
            <button
              className={styles.modalClose}
              onClick={handlePrivacyModalClose}
              aria-label="Cerrar modal de Políticas de Privacidad"
            >
              &times;
            </button>
            <h2 className={styles.modalTitle}>
              {locale === "es" ? "POLÍTICA DE PRIVACIDAD" : "PRIVACY POLICY"}
            </h2>
            <p className={styles.modalText}>
              {locale === "es" ? privacyPolicyText.es : privacyPolicyText.en}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
