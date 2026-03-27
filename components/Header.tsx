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

  return (
    <header
      className={`sticky top-0 z-50 w-full text-white transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-md border-b border-white/10 shadow-lg"
          : "bg-black"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex justify-between items-center h-16">
        {/* LOGO */}
        <Link href="/" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo-digitup.png"
            alt="Digitup"
            width={180}
            height={50}
            priority
            style={{ height: 36, width: "auto" }}
          />
        </Link>

        {/* MENU DESKTOP */}
        <ul className="hidden md:flex gap-6">
          <li>
            <Link
              href="/"
              className="hover:text-gray-300 transition"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/#servicios" className="hover:text-gray-300 transition">
              Servicios
            </Link>
          </li>
          <li>
            <Link href="/contacto" className="hover:text-gray-300 transition">
              Contacto
            </Link>
          </li>
        </ul>

        {/* BOTÓN MOBILE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* MENU MOBILE */}
      {open && (
        <div className="md:hidden bg-black border-t border-white/10 px-6 py-4 space-y-4">
          <Link
            href="/"
            onClick={() => {
              setOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="block hover:text-gray-300"
          >
            Inicio
          </Link>

          <Link
            href="/#servicios"
            onClick={() => setOpen(false)}
            className="block hover:text-gray-300"
          >
            Servicios
          </Link>

          <Link
            href="/contacto"
            onClick={() => setOpen(false)}
            className="block hover:text-gray-300"
          >
            Contacto
          </Link>
        </div>
      )}
    </header>
  );
}