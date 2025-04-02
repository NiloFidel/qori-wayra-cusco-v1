"use client";

import React, { FC, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.css";

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
    formTitle: "Escríbenos",
    fullName: "Nombres Completos",
    nationality: "Nacionalidad",
    message: "Mensaje",
    submit: "Enviar Mensaje",
    successMessage: "Mensaje enviado con éxito!",
    errorMessage: "Error al enviar el mensaje. Intente nuevamente.",
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
    formTitle: "Write to Us",
    fullName: "Full Name",
    nationality: "Nationality",
    message: "Message",
    submit: "Send Message",
    successMessage: "Message sent successfully!",
    errorMessage: "Error sending message. Please try again.",
  },
};

const privacyPolicyText = {
  es: `POLÍTICA DE PRIVACIDAD...`, // Texto original
  en: `PRIVACY POLICY...`, // Texto original
};

interface FooterProps {
  locale: "es" | "en";
}

const Footer: FC<FooterProps> = ({ locale }) => {
  const t = texts[locale];
  const [showNoTraeModal, setShowNoTraeModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [formData, setFormData] = useState({
    full_name: "",
    nacionality: "",
    email: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  // Handlers para modales
  const openModal = (setter: React.Dispatch<React.SetStateAction<boolean>>) => (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();
    setter(true);
  };

  const closeModal = (setter: React.Dispatch<React.SetStateAction<boolean>>) => () =>
    setter(false);

  // Manejo del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("idle");

    try {
      const response = await fetch(
        "https://qxnpo6x273.execute-api.us-east-1.amazonaws.com/data",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ full_name: "", nacionality: "", email: "", message: "" });
        setTimeout(() => setSubmitStatus("idle"), 3000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.log(error)
      setSubmitStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          {/* Columna 1: Contacto y Avalados */}
          <div className={styles.contactColumn}>
            <h3 className={styles.header}>{t.contact}</h3>
            <p className={styles.text}>{t.office}</p>
            <p className={styles.text}>{t.cellphone}</p>
            <p className={styles.text}>{t.email}</p>

            <div className={styles.logoGroup}>
              <h4 className={styles.groupTitle}>{t.endorsedBy}</h4>
              <div className={styles.logoItems}>
                <Image
                  src="/images/dircetur.png"
                  alt="Dircetur"
                  width={80}
                  height={80}
                  className={styles.logoImage}
                />
                <Image
                  src="/images/gercetur.png"
                  alt="Gercetur"
                  width={80}
                  height={80}
                  className={styles.logoImage}
                />
              </div>
            </div>
          </div>

          {/* Columna 2: Enlaces y Medios de Pago */}
          <div className={styles.linksColumn}>
            <div className={styles.linksGroup}>
              <Link href={`/${locale}/terminos-condiciones`} className={styles.linkButton}>
                {t.terms}
              </Link>
              <a href="#" className={styles.linkButton} onClick={openModal(setShowPrivacyModal)}>
                {t.privacyPolicy}
              </a>
              <a href="#" className={styles.linkButton} onClick={openModal(setShowNoTraeModal)}>
                {t.noTrae}
              </a>
            </div>

            <div className={styles.logoGroup}>
              <h4 className={styles.groupTitle}>{t.meansOfPayment}</h4>
              <div className={styles.paymentLogos}>
                <Image
                  src="/images/visa3.png"
                  alt="Visa"
                  width={60}
                  height={40}
                  className={styles.paymentLogo}
                />
                <Image
                  src="/images/masterCard.jpg"
                  alt="MasterCard"
                  width={60}
                  height={40}
                  className={styles.paymentLogo}
                />
                <Image
                  src="/images/yape.png"
                  alt="Yape"
                  width={60}
                  height={40}
                  className={styles.paymentLogo}
                />
                <Image
                  src="/images/plin.jpg"
                  alt="Plin"
                  width={60}
                  height={40}
                  className={styles.paymentLogo}
                />
              </div>
            </div>
          </div>

          {/* Columna 3: Formulario */}
          <div className={styles.formColumn}>
            <h3 className={styles.formHeader}>{t.formTitle}</h3>
            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="full_name"
                  placeholder={t.fullName}
                  value={formData.full_name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="nacionality"
                  placeholder={t.nationality}
                  value={formData.nacionality}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <textarea
                  name="message"
                  placeholder={t.message}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                />
              </div>

              <button type="submit" className={styles.submitButton}>
                {t.submit}
              </button>

              {submitStatus === "success" && (
                <p className={styles.successMessage}>{t.successMessage}</p>
              )}
              {submitStatus === "error" && (
                <p className={styles.errorMessage}>{t.errorMessage}</p>
              )}
            </form>
          </div>
        </div>

        <div className={styles.copy}>
          <p>
            © 2025 Qori Wayra.{" "}
            {locale === "es" ? "Todos los derechos reservados." : "All rights reserved."}
          </p>
        </div>
      </footer>

      {/* Modales */}
      {showNoTraeModal && (
        <div className={styles.modalOverlay} onClick={closeModal(setShowNoTraeModal)}>
          <div className={styles.modalContent}>
            <Image
              src="/images/esnna.jpg"
              alt="No trata de personas"
              fill
              style={{ objectFit: "contain" }}
              className={styles.modalImage}
            />
            <button className={styles.modalClose} onClick={closeModal(setShowNoTraeModal)}>
              &times;
            </button>
          </div>
        </div>
      )}

      {showPrivacyModal && (
        <div className={styles.modalOverlay} onClick={closeModal(setShowPrivacyModal)}>
          <div className={styles.modalContentText}>
            <button className={styles.modalClose} onClick={closeModal(setShowPrivacyModal)}>
              &times;
            </button>
            <h2>{locale === "es" ? "POLÍTICA DE PRIVACIDAD" : "PRIVACY POLICY"}</h2>
            <pre className={styles.modalText}>
              {locale === "es" ? privacyPolicyText.es : privacyPolicyText.en}
            </pre>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
