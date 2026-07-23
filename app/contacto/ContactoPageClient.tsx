"use client";

import { useState } from "react";
import { services } from "@/lib/services";

const serviceOptions = [
  ...services.map((service) => ({
    value: service.title,
    label: service.title,
    slug: service.slug,
  })),
  {
    value: "No estoy seguro",
    label: "No estoy seguro, necesito orientación",
    slug: "orientacion",
  },
];

type ContactoPageClientProps = {
  initialService?: string;
};

export default function ContactoPageClient({
  initialService,
}: ContactoPageClientProps) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const selectedService =
    serviceOptions.find((option) => option.slug === initialService)?.value ?? "";

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      nombre: formData.get("nombre"),
      empresa: formData.get("empresa"),
      email: formData.get("email"),
      telefono: formData.get("telefono"),
      servicio: formData.get("servicio"),
      mensaje: formData.get("mensaje"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSuccess(true);
        form.reset();
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-[calc(100vh-5rem)] items-center bg-[#f4f8fb]">
      <section className="mx-auto grid w-full max-w-6xl items-center gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-xl bg-[#0e2f3a] p-7 text-white sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4da3b3]">
            Contacto Digitup
          </p>

          <h1 className="mt-4 text-3xl font-semibold leading-tight sm:text-[34px]">
            Conversemos sobre tu operación y el próximo paso tecnológico
          </h1>

          <p className="mt-5 leading-7 text-slate-300">
            Cuéntanos qué necesitas ordenar, automatizar o medir. Revisaremos el
            contexto y te contactaremos para orientar el mejor camino de trabajo.
          </p>

          <div className="mt-7 border-t border-white/10 pt-5">
            <p className="text-sm font-semibold text-white">Foco de trabajo</p>
            <div className="mt-4 flex flex-wrap gap-2 text-sm text-slate-200">
              {[
                "Automatización",
                "Reportabilidad",
                "Integraciones",
                "Cloud",
                "Soporte TI",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-white/10 bg-white/5 px-3 py-2"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-xl border border-[#d7e2e8] bg-white p-5 shadow-[0_18px_45px_rgba(14,47,58,0.06)] sm:p-6"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              required
              className="w-full rounded-md border border-[#d7e2e8] bg-white p-3 text-sm transition focus:border-[#4da3b3] focus:outline-none focus:ring-2 focus:ring-[#d8eef2]"
            />

            <input
              type="text"
              name="empresa"
              placeholder="Empresa"
              className="w-full rounded-md border border-[#d7e2e8] bg-white p-3 text-sm transition focus:border-[#4da3b3] focus:outline-none focus:ring-2 focus:ring-[#d8eef2]"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              required
              className="w-full rounded-md border border-[#d7e2e8] bg-white p-3 text-sm transition focus:border-[#4da3b3] focus:outline-none focus:ring-2 focus:ring-[#d8eef2]"
            />

            <input
              type="text"
              name="telefono"
              placeholder="Teléfono / WhatsApp"
              className="w-full rounded-md border border-[#d7e2e8] bg-white p-3 text-sm transition focus:border-[#4da3b3] focus:outline-none focus:ring-2 focus:ring-[#d8eef2]"
            />
          </div>

          <select
            name="servicio"
            required
            className="w-full rounded-md border border-[#d7e2e8] bg-white p-3 text-sm transition focus:border-[#4da3b3] focus:outline-none focus:ring-2 focus:ring-[#d8eef2]"
            defaultValue={selectedService}
          >
            <option value="" disabled>
              Selecciona una solución
            </option>
            {serviceOptions.map((option) => (
              <option key={option.slug} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <textarea
            name="mensaje"
            placeholder="Cuéntanos qué necesitas"
            required
            className="h-32 w-full resize-none rounded-md border border-[#d7e2e8] bg-white p-3 text-sm transition focus:border-[#4da3b3] focus:outline-none focus:ring-2 focus:ring-[#d8eef2]"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-md bg-[#0e2f3a] py-3 text-sm font-semibold text-white transition hover:bg-[#123f4c] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Enviando..." : "Enviar solicitud"}
          </button>

          {success && (
            <p className="rounded-md border border-emerald-200 bg-emerald-50 p-3 text-center text-sm font-medium text-emerald-700">
              Solicitud enviada correctamente. Te contactaremos pronto.
            </p>
          )}

          {error && (
            <p className="rounded-md border border-red-200 bg-red-50 p-3 text-center text-sm font-medium text-red-700">
              No pudimos enviar la solicitud. Intenta nuevamente o contáctanos
              por WhatsApp.
            </p>
          )}
        </form>
      </section>
    </main>
  );
}
