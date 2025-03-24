"use client";

import React from "react";
import { FaWhatsapp, FaFacebook, FaTiktok } from "react-icons/fa";
import styles from "./social.module.css";

export default function SocialButtons() {
  return (
    <div className={styles.socialContainer}>
      <a
        href="https://wa.me/51932568914"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialButton}
        aria-label="Contact via WhatsApp"
      >
        <FaWhatsapp />
      </a>
      <a
        href="https://www.facebook.com/YourPage"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialButton}
        aria-label="Visit our Facebook"
      >
        <FaFacebook />
      </a>
      <a
        href="https://www.tiktok.com/@YourProfile"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialButton}
        aria-label="Visit our TikTok"
      >
        <FaTiktok />
      </a>
    </div>
  );
}
