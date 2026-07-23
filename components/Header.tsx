"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Soluciones", href: "/soluciones", section: "soluciones" },
  { label: "Problemas", href: "/problemas", section: "problemas" },
  { label: "Valor agregado", href: "/valor-agregado", section: "valor" },
  { label: "Tecnologías", href: "/tecnologias", section: "tecnologias" },
];

const sectionByPath: Record<string, string> = {
  "/soluciones": "soluciones",
  "/problemas": "problemas",
  "/valor-agregado": "valor",
  "/tecnologias": "tecnologias",
};

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 16);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const target = sectionByPath[pathname ?? ""];

    if (!target) {
      return;
    }

    window.setTimeout(() => {
      document.getElementById(target)?.scrollIntoView({ behavior: "auto" });
    }, 80);
  }, [pathname]);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full border-b bg-white/95 text-[#123036] backdrop-blur-md transition ${
        scrolled
          ? "border-slate-200 shadow-[0_10px_30px_rgba(14,47,58,0.08)]"
          : "border-slate-100"
      }`}
    >
      <nav className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center"
          aria-label="Ir al inicio"
        >
          <span className="text-[34px] font-semibold leading-none tracking-tight text-[#123036]">
            digit<span className="text-[#4da3b3]">up</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={closeMenu}
                className="group relative rounded-md px-2 py-2 text-sm font-medium text-[#123036]/80 transition hover:bg-[#eef7f9] hover:text-[#1f6f82]"
              >
                {item.label}
                <span className="absolute inset-x-2 -bottom-0.5 h-px origin-left scale-x-0 bg-[#4da3b3] transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contacto"
              className="rounded-md border border-[#4da3b3] px-4 py-2.5 text-sm font-semibold text-[#123036] transition hover:bg-[#eef7f9]"
            >
              Hablemos
            </Link>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-[#123036] transition hover:bg-[#eef7f9] md:hidden"
          aria-label={open ? "Cerrar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X size={25} /> : <Menu size={25} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="space-y-1 px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="block rounded-md px-2 py-3 text-sm font-medium text-[#123036] transition hover:bg-slate-50"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              onClick={closeMenu}
              className="mt-3 block rounded-md border border-[#4da3b3] px-3 py-3 text-center text-sm font-semibold text-[#123036]"
            >
              Hablemos
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
