import type { Metadata } from "next";
import ContactoPageClient from "./ContactoPageClient";

export const metadata: Metadata = {
  title: "Contacto | Digitup",
  description:
    "Contáctate con Digitup para servicios TI, automatización de procesos, soporte TI, reportabilidad y soluciones tecnológicas en Antofagasta y todo Chile.",
};

type ContactoPageProps = {
  searchParams: Promise<{ servicio?: string }>;
};

export default async function ContactoPage({ searchParams }: ContactoPageProps) {
  const { servicio } = await searchParams;

  return <ContactoPageClient initialService={servicio} />;
}
