import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { getService, services } from "@/lib/services";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return {};
  }

  return {
    title: `${service.title} | Digitup`,
    description: service.short,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="bg-[#f4f8fb]">
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="rounded-xl border border-[#d7e2e8] bg-white p-6 shadow-[0_18px_45px_rgba(14,47,58,0.06)] sm:p-8 lg:p-10">
          <Link
            href="/soluciones"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#1f6f82]"
          >
            <ArrowLeft size={16} />
            Volver a soluciones
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2f7f91]">
                {service.eyebrow}
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight text-[#123036] sm:text-5xl">
                {service.title}
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
                {service.description}
              </p>

              <Link
                href={`/contacto?servicio=${service.slug}`}
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-[#0e2f3a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#123f4c]"
              >
                Hablemos de esta solución
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid gap-6">
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2f7f91]">
                  Resultado esperado
                </h2>
                <div className="mt-4 rounded-lg border border-[#d7e2e8]">
                  {service.outcomes.map((item) => (
                    <div
                      key={item}
                      className="flex gap-3 border-b border-slate-200 px-5 py-4 last:border-b-0"
                    >
                      <CheckCircle2
                        className="mt-0.5 shrink-0 text-[#2f7f91]"
                        size={19}
                      />
                      <p className="text-sm leading-7 text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2f7f91]">
                    Qué incluye
                  </h2>
                  <div className="mt-4 space-y-3">
                    {service.includes.map((item) => (
                      <p
                        key={item}
                        className="flex min-h-20 items-center rounded-md border border-[#d7e2e8] bg-[#f8fbfc] px-4 py-3 text-sm leading-6 text-slate-700 [text-wrap:balance]"
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2f7f91]">
                    Entregables
                  </h2>
                  <div className="mt-4 space-y-3">
                    {service.deliverables.map((item) => (
                      <p
                        key={item}
                        className="flex min-h-20 items-center rounded-md border border-[#d7e2e8] bg-[#f8fbfc] px-4 py-3 text-sm font-semibold leading-6 text-[#123036] [text-wrap:balance]"
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
