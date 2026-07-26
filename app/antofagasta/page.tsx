import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios TI en Antofagasta para Empresas | Digitup",
  description:
    "Digitup entrega servicios TI en Antofagasta para empresas que necesitan automatizar procesos, ordenar información, integrar sistemas y fortalecer su operación tecnológica.",
  alternates: {
    canonical: "https://digitup.cl/antofagasta",
  },
  openGraph: {
    title: "Servicios TI en Antofagasta para Empresas | Digitup",
    description:
      "Automatización de procesos, reportabilidad, integraciones, cloud y soporte tecnológico para empresas en Antofagasta.",
    url: "https://digitup.cl/antofagasta",
    images: [
      {
        url: "https://digitup.cl/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Digitup - Servicios TI para empresas en Antofagasta",
      },
    ],
  },
};

export default function AntofagastaPage() {
  return (
    <main className="bg-white">
      <section className="bg-[#0e2f3a] text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4da3b3]">
            Servicios TI en Antofagasta
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl">
            Soluciones TI para empresas que necesitan ordenar y automatizar su
            operación
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-white/78 sm:text-lg">
            En Digitup ayudamos a empresas de Antofagasta y Chile a mejorar
            procesos, reducir trabajo manual, consolidar información y sostener
            su operación tecnológica con soluciones claras y mantenibles.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2f7f91]">
            Qué hacemos
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[#123036]">
            Servicios TI orientados a gestión operativa
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            Trabajamos con empresas que necesitan ordenar procesos internos,
            automatizar tareas repetitivas, mejorar reportes, conectar sistemas
            y contar con soporte TI estructurado.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            "Automatización de procesos",
            "Reportabilidad y BI",
            "Integraciones de sistemas",
            "Cloud y colaboración",
            "Soporte TI",
            "Desarrollo a medida",
          ].map((item) => (
            <div
              key={item}
              className="rounded-lg border border-[#d7e2e8] bg-[#f8fbfc] p-5 text-sm font-semibold text-[#123036]"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f4f8fb] py-14">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 sm:px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2f7f91]">
              Próximo paso
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-[#123036]">
              Revisemos qué solución TI necesita tu operación.
            </h2>
          </div>

          <a
            href="/contacto"
            className="inline-flex items-center justify-center rounded-md bg-[#0e2f3a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#123f4c]"
          >
            Hablemos
          </a>
        </div>
      </section>
    </main>
  );
}
