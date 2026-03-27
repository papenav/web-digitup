"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleGoTop() {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full text-white transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-md border-b border-white/10 shadow-lg"
          : "bg-black"
      }`}
    >
      <nav className="w-full max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* LOGO */}
        <Link
          href="/"
          onClick={handleGoTop}
          className="flex items-center shrink-0"
          aria-label="Ir al inicio"
        >
          <Image
            src="/images/logo-digitup.png"
            alt="Digitup"
            width={160}
            height={44}
            priority
            className="w-auto h-8 sm:h-9"
          />
        </Link>

        {/* MENU DESKTOP */}
        <ul className="hidden md:flex items-center gap-6">
          <li>
            <Link
              href="/"
              className="hover:text-gray-300 transition"
              onClick={handleGoTop}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              href="/#servicios"
              className="hover:text-gray-300 transition"
            >
              Servicios
            </Link>
          </li>
          <li>
            <Link
              href="/contacto"
              className="hover:text-gray-300 transition"
            >
              Contacto
            </Link>
          </li>
        </ul>

        {/* BOTÓN MOBILE */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md hover:bg-white/5 transition shrink-0"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* MENU MOBILE */}
      {open && (
        <div className="md:hidden w-full bg-black border-t border-white/10">
          <div className="px-4 py-4 space-y-1">
            <Link
              href="/"
              onClick={handleGoTop}
              className="block rounded-lg px-2 py-3 hover:bg-white/5 transition"
            >
              Inicio
            </Link>

            <Link
              href="/#servicios"
              onClick={() => setOpen(false)}
              className="block rounded-lg px-2 py-3 hover:bg-white/5 transition"
            >
              Servicios
            </Link>

            <Link
              href="/contacto"
              onClick={() => setOpen(false)}
              className="block rounded-lg px-2 py-3 hover:bg-white/5 transition"
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}