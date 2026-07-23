import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  CheckCircle2,
  Cloud,
  FileSearch,
  Handshake,
  Headphones,
  Network,
  Target,
  Workflow,
} from "lucide-react";
import Footer from "@/components/Footer";
import TechCarousel from "@/components/TechCarousel";
import { services } from "@/lib/services";

const iconMap = {
  "diagnostico-ti": FileSearch,
  automatizacion: Workflow,
  reportabilidad: BarChart3,
  integraciones: Network,
  "cloud-colaboracion": Cloud,
  "soporte-ti": Headphones,
};

const problems = [
  {
    situation: "Procesos manuales y duplicados",
    impact: "Pérdida de tiempo, errores y retrabajos.",
    response:
      "Estandarizamos el flujo de trabajo con criterios de buenas prácticas, responsables definidos y trazabilidad de punta a punta.",
  },
  {
    situation: "Datos dispersos y poco confiables",
    impact: "Decisiones tardías y reportes inconsistentes.",
    response:
      "Ordenamos fuentes, reglas de negocio e indicadores para construir información consistente y reportabilidad confiable.",
  },
  {
    situation: "Dependencia de personas clave",
    impact: "Riesgo operativo y cuellos de botella.",
    response:
      "Documentamos procedimientos, controles y criterios operativos para reducir dependencia informal y mejorar continuidad.",
  },
  {
    situation: "Soporte reactivo y sin registro",
    impact: "Incidentes recurrentes y usuarios insatisfechos.",
    response:
      "Organizamos la atención con registro, priorización, seguimiento y prácticas alineadas a gestión de servicios TI.",
  },
  {
    situation: "Sistemas aislados que no conversan",
    impact: "Información incompleta y tareas manuales.",
    response:
      "Definimos integraciones mantenibles, reglas de intercambio y validaciones para reducir errores entre plataformas.",
  },
];

const valueProps = [
  {
    title: "Soluciones aterrizadas al negocio",
    text: "Diseñamos soluciones prácticas, alineadas a la realidad operativa y a las prioridades de cada empresa.",
    icon: Briefcase,
  },
  {
    title: "Acompañamiento cercano y continuo",
    text: "Trabajamos por etapas, con seguimiento, ajustes y soporte para que la solución pueda sostenerse en el tiempo.",
    icon: Handshake,
  },
  {
    title: "Tecnología con foco en resultados",
    text: "Priorizamos mejoras que reduzcan trabajo manual, aumenten visibilidad y fortalezcan la gestión operativa.",
    icon: Target,
  },
];

function ServicesGrid() {
  return (
    <section id="soluciones" className="scroll-mt-24 bg-[#f4f8fb] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <div className="mx-auto mb-5 h-1 w-8 bg-[#4da3b3]" />
          <h2 className="text-3xl font-semibold text-[#123036] sm:text-4xl">
            Soluciones para ordenar tu operación
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Revisa cada enfoque en una página independiente, con alcance,
            resultados esperados y entregables concretos.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                <h3 className="mt-4 text-xl font-semibold text-[#123036]">
                  {service.title}
                </h3>
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
      </div>
    </section>
  );
}

function ProblemsTable() {
  return (
    <section id="problemas" className="scroll-mt-24 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="mb-5 h-1 w-8 bg-[#4da3b3]" />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2f7f91]">
              Fricciones operativas
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#123036] sm:text-4xl">
              Donde la operación pierde eficiencia
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-slate-600 lg:justify-self-end">
            Muchas mejoras no parten por cambiar herramientas, sino por
            identificar dónde se pierde tiempo, trazabilidad o continuidad en el
            trabajo diario.
          </p>
        </div>

        <div className="mt-10 grid gap-4">
          {problems.map((problem, index) => (
            <article
              key={problem.situation}
              className="group grid gap-5 rounded-lg border border-[#d7e2e8] bg-white p-5 transition hover:border-[#4da3b3] hover:shadow-[0_18px_45px_rgba(14,47,58,0.08)] md:grid-cols-[0.9fr_0.85fr_1.1fr] md:items-stretch md:p-0"
            >
              <div className="flex gap-4 md:border-r md:border-[#d7e2e8] md:p-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#eef6f8] text-sm font-semibold text-[#1f6f82]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                    Situación común
                  </p>
                  <h3 className="mt-2 text-base font-semibold leading-6 text-[#123036]">
                    {problem.situation}
                  </h3>
                </div>
              </div>

              <div className="md:border-r md:border-[#d7e2e8] md:p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Impacto
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {problem.impact}
                </p>
              </div>

              <div className="rounded-md bg-[#f8fbfc] p-4 md:m-3">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#2f7f91]">
                  Enfoque de trabajo
                </p>
                <p className="mt-2 text-sm font-medium leading-7 text-[#123036]">
                  {problem.response}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-lg border border-[#d7e2e8] bg-[#f4f8fb] px-5 py-4 text-center">
          <p className="text-sm leading-7 text-slate-600">
            El objetivo es transformar estas fricciones en procesos más claros,
            datos confiables y soluciones sostenibles para el equipo.
          </p>
        </div>
      </div>
    </section>
  );
}

function ValueAdded() {
  return (
    <section id="valor" className="scroll-mt-24 bg-[#f4f8fb] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2f7f91]">
            Valor agregado
          </p>
          <h2 className="text-3xl font-semibold text-[#123036]">
            Por qué trabajar con Digitup
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
            Más que implementar tecnología, buscamos construir soluciones
            útiles, sostenibles y alineadas a la realidad de cada operación.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {valueProps.map((item) => {
            const Icon = item.icon;

            return (
            <article
              key={item.title}
              className="rounded-lg border border-[#d7e2e8] bg-white p-8 text-center shadow-[0_18px_45px_rgba(14,47,58,0.05)] transition hover:-translate-y-0.5 hover:border-[#4da3b3]"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-md border border-[#d7e2e8] bg-[#f8fbfc] text-[#1f6f82]">
                <Icon size={30} strokeWidth={1.7} />
              </div>
              <h3 className="mx-auto mt-7 max-w-64 text-lg font-semibold leading-7 text-[#123036]">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                {item.text}
              </p>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="bg-white">
      <section className="bg-[#0e2f3a] text-white">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 sm:py-28 lg:py-32">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
              Soluciones TI para fortalecer la{" "}
              <span className="text-[#4da3b3]">gestión operativa</span> de tu
              empresa
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
              Diseñamos e implementamos soluciones TI para mejorar procesos,
              automatizar tareas críticas y entregar información confiable para
              la toma de decisiones.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contacto"
                className="hero-border-button inline-flex items-center justify-center rounded-md border border-transparent px-5 py-3 text-sm font-semibold text-white transition"
              >
                Hablemos de tu operación
              </Link>
              <Link
                href="/soluciones"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Ver soluciones
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="mx-auto mt-9 flex max-w-2xl flex-col items-center justify-center gap-3 text-sm text-white/70 sm:flex-row sm:gap-6">
              {[
                "Procesos claros",
                "Resultados medibles",
                "Soporte continuo",
              ].map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <CheckCircle2 className="text-[#4da3b3]" size={16} />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ServicesGrid />
      <ProblemsTable />
      <ValueAdded />

      <section id="tecnologias" className="scroll-mt-24 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2f7f91]">
            Herramientas y plataformas
          </p>
          <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-semibold text-[#123036] sm:text-4xl">
            Tecnologías con las que construimos soluciones reales
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
            Trabajamos con plataformas de automatización, datos, nube y
            desarrollo para implementar soluciones mantenibles y alineadas a
            cada operación.
          </p>

          <TechCarousel />
        </div>
      </section>

      <Footer />
    </main>
  );
}
