import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Cloud,
  FileSearch,
  Headphones,
  Network,
  Workflow,
} from "lucide-react";
import { services } from "@/lib/services";

const iconMap = {
  "diagnostico-ti": FileSearch,
  automatizacion: Workflow,
  reportabilidad: BarChart3,
  integraciones: Network,
  "cloud-colaboracion": Cloud,
  "soporte-ti": Headphones,
};

export default function ServiciosPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-slate-200 bg-[#f2f7f8]">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2f7f91]">
            Servicios Digitup
          </p>
          <div className="mt-4 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <h1 className="text-4xl font-semibold leading-tight text-[#123036] sm:text-5xl">
              Soluciones para ordenar procesos, datos y continuidad operacional
            </h1>
            <p className="text-base leading-8 text-slate-600">
              Cada servicio puede trabajarse de manera independiente o como
              parte de una hoja de ruta gradual. Lo importante es avanzar con
              alcance claro, entregables concretos y soporte posterior.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.slug as keyof typeof iconMap];

            return (
              <Link
                key={service.slug}
                href={`/soluciones/${service.slug}`}
                className="group flex min-h-72 flex-col rounded-lg border border-[#d7e2e8] bg-white p-8 transition hover:-translate-y-0.5 hover:border-[#4da3b3] hover:shadow-[0_18px_45px_rgba(14,47,58,0.08)]"
              >
                <Icon className="text-[#2f7f91]" size={34} strokeWidth={1.7} />
                <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-[#2f7f91]">
                  {service.eyebrow}
                </p>
                <h2 className="mt-4 text-xl font-semibold text-[#123036]">
                  {service.title}
                </h2>
                <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                  {service.short}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#1f6f82]">
                  Ver detalle de solución
                  <ArrowRight
                    className="transition group-hover:translate-x-1"
                    size={15}
                  />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="bg-[#0e2f3a] py-12 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 sm:px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4da3b3]">
              Próximo paso
            </p>
            <h2 className="mt-2 text-2xl font-semibold">
              Revisemos qué servicio calza mejor con tu operación
            </h2>
          </div>
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-[#123036] transition hover:bg-slate-100"
          >
            Solicitar diagnóstico
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
