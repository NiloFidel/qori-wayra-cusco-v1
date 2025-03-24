import { useState, useEffect, useRef } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import { translations } from "../../../lib/i18n";
import LanguageSwitcher from "@/app/components/base/switcher/switch";
import Image from "next/image";

export default function Navbar({ locale }: { locale: string }) {
  const t = translations[locale as keyof typeof translations] || translations.es;
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Listener para cerrar el dropdown al hacer clic fuera del navbar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className={styles.navbar} ref={navRef}>
      <div className={styles.navContent}>
        {/* Selector de idioma en extremo izquierdo */}
        <div className={styles.leftContent}>
          <LanguageSwitcher locale={locale} />
        </div>

        {/* Logo en el centro */}
        <div className={styles.centerContent}>
          <Link
            href={`/${locale}/landing`}
            onClick={() => {
              closeDropdown();
              setMobileMenuOpen(false);
            }}
          >
            <Image
              src="https://guru-almacen.s3.us-east-1.amazonaws.com/quechua/logo-qori-wayra.png"
              alt="Logo Qori Wayra"
              width={1000}
              height={1000}
              quality={100}
              className={styles.logo}
            />
          </Link>
        </div>

        {/* Menú en extremo derecho */}
        <div className={styles.rightContent}>
          <button className={styles.hamburger} onClick={toggleMobileMenu}>
            ☰
          </button>
          <div className={`${styles.menu} ${mobileMenuOpen ? styles.active : ""}`}>
            <ul className={styles.navList}>
              {/* Camino Inca */}
              <li className={styles.navItem}>
                <button onClick={() => toggleDropdown("inca")}>
                  {t.incaTrail}
                </button>
                {openDropdown === "inca" && (
                  <ul className={styles.dropdown}>
                    <li>
                      <Link
                        href={`/${locale}/camino-inca/camino-inca-2d`}
                        onClick={() => {
                          closeDropdown();
                          setMobileMenuOpen(false);
                        }}
                      >
                        {t.incaTrail2d}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`/${locale}/camino-inca/camino-inca-4d`}
                        onClick={() => {
                          closeDropdown();
                          setMobileMenuOpen(false);
                        }}
                      >
                        {t.incaTrail4d}
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              {/* Tour a Machupicchu */}
              <li className={styles.navItem}>
                <button onClick={() => toggleDropdown("machupicchu")}>
                  {t.machuPicchuTour}
                </button>
                {openDropdown === "machupicchu" && (
                  <ul className={styles.dropdown}>
                    <li>
                      <Link
                        href={`/${locale}/tour-a-machupicchu/mapi-full-day`}
                        onClick={() => {
                          closeDropdown();
                          setMobileMenuOpen(false);
                        }}
                      >
                        {t.machupicchuFullDay}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`/${locale}/tour-a-machupicchu/mapi-by-car`}
                        onClick={() => {
                          closeDropdown();
                          setMobileMenuOpen(false);
                        }}
                      >
                        {t.machupicchuByCar}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`/${locale}/tour-a-machupicchu/mapi-by-salkantay`}
                        onClick={() => {
                          closeDropdown();
                          setMobileMenuOpen(false);
                        }}
                      >
                        {t.machupicchuBySalkantay}
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              {/* Valle Sagrado */}
              <li className={styles.navItem}>
                <button onClick={() => toggleDropdown("valle")}>
                  {t.sacredValley}
                </button>
                {openDropdown === "valle" && (
                  <ul className={styles.dropdown}>
                    <li>
                      <Link
                        href={`/${locale}/valle-sagrado/valle-sagrado-lite`}
                        onClick={() => {
                          closeDropdown();
                          setMobileMenuOpen(false);
                        }}
                      >
                        {t.sacredValleyLite}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`/${locale}/valle-sagrado/valle-sagrado-vip`}
                        onClick={() => {
                          closeDropdown();
                          setMobileMenuOpen(false);
                        }}
                      >
                        {t.sacredValleyVip}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`/${locale}/valle-sagrado/maras-moray`}
                        onClick={() => {
                          closeDropdown();
                          setMobileMenuOpen(false);
                        }}
                      >
                        {t.marasMoray}
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              {/* Tour de un día */}
              <li className={styles.navItem}>
                <button onClick={() => toggleDropdown("oneday")}>
                  {t.oneDayTour}
                </button>
                {openDropdown === "oneday" && (
                  <ul className={styles.dropdown}>
                    <li>
                      <Link
                        href={`/${locale}/one-day/city-tour-cusco`}
                        onClick={() => {
                          closeDropdown();
                          setMobileMenuOpen(false);
                        }}
                      >
                        {t.cityTourCusco}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`/${locale}/one-day/siete-lagunas`}
                        onClick={() => {
                          closeDropdown();
                          setMobileMenuOpen(false);
                        }}
                      >
                        {t.sieteLagunas}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`/${locale}/one-day/tour-mistico`}
                        onClick={() => {
                          closeDropdown();
                          setMobileMenuOpen(false);
                        }}
                      >
                        {t.tourMistico}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`/${locale}/one-day/waqrapukara`}
                        onClick={() => {
                          closeDropdown();
                          setMobileMenuOpen(false);
                        }}
                      >
                        {t.waqraPucara}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`/${locale}/one-day/tour-palccoyo`}
                        onClick={() => {
                          closeDropdown();
                          setMobileMenuOpen(false);
                        }}
                      >
                        {t.tourPallcoyo}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`/${locale}/one-day/laguna-humantay`}
                        onClick={() => {
                          closeDropdown();
                          setMobileMenuOpen(false);
                        }}
                      >
                        {t.lagunaHumantay}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`/${locale}/one-day/siete-colores`}
                        onClick={() => {
                          closeDropdown();
                          setMobileMenuOpen(false);
                        }}
                      >
                        {t.montana7Colores}
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              {/* Best Packages */}
              <li className={styles.navItem}>
                <button onClick={() => toggleDropdown("bestPackages")}>
                  Best Packages
                </button>
                {openDropdown === "bestPackages" && (
                  <ul className={styles.dropdown}>
                    <li>
                      <Link
                        href={`/${locale}/paquete-cusco`}
                        onClick={() => {
                          closeDropdown();
                          setMobileMenuOpen(false);
                        }}
                      >
                        Paquete Cusco
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`/${locale}/paquete-valle`}
                        onClick={() => {
                          closeDropdown();
                          setMobileMenuOpen(false);
                        }}
                      >
                        Paquete Valle
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`/${locale}/paquete-machupicchu`}
                        onClick={() => {
                          closeDropdown();
                          setMobileMenuOpen(false);
                        }}
                      >
                        Paquete Machu Picchu
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`/${locale}/paquete-lima`}
                        onClick={() => {
                          closeDropdown();
                          setMobileMenuOpen(false);
                        }}
                      >
                        Paquete Lima
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
