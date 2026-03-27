"use client";

import { useState } from "react";

export default function ContactoPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

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

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });

    setLoading(false);

    if (res.ok) {
      setSuccess(true);
      form.reset();
    }
  }

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <section className="text-center mb-8 sm:mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500 mb-3">
          Contacto
        </p>

        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          Contacto Digitup
        </h1>

        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Cuéntanos qué necesitas y te contactaremos con una propuesta alineada
          a tu requerimiento.
        </p>
      </section>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto space-y-4 sm:space-y-5"
      >
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          required
          className="w-full border border-gray-300 p-3 sm:p-4 rounded-xl bg-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black transition"
        />

        <input
          type="text"
          name="empresa"
          placeholder="Empresa"
          className="w-full border border-gray-300 p-3 sm:p-4 rounded-xl bg-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black transition"
        />

        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          required
          className="w-full border border-gray-300 p-3 sm:p-4 rounded-xl bg-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black transition"
        />

        <input
          type="text"
          name="telefono"
          placeholder="Teléfono / WhatsApp"
          className="w-full border border-gray-300 p-3 sm:p-4 rounded-xl bg-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black transition"
        />

        <select
          name="servicio"
          required
          className="w-full border border-gray-300 p-3 sm:p-4 rounded-xl bg-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black transition"
          defaultValue=""
        >
          <option value="" disabled>
            Selecciona un servicio
          </option>
          <option value="Diagnóstico y Asesoría TI">
            Diagnóstico y Asesoría TI
          </option>
          <option value="Automatización de Procesos">
            Automatización de Procesos
          </option>
          <option value="Desarrollo de Soluciones a Medida">
            Desarrollo de Soluciones a Medida
          </option>
          <option value="Implementación de Soluciones Cloud">
            Implementación de Soluciones Cloud
          </option>
          <option value="Soporte y Administración TI">
            Soporte y Administración TI
          </option>
          <option value="Transformación Digital">
            Transformación Digital
          </option>
        </select>

        <textarea
          name="mensaje"
          placeholder="Cuéntanos qué necesitas"
          required
          className="w-full border border-gray-300 p-3 sm:p-4 rounded-xl bg-white text-sm sm:text-base h-32 sm:h-36 resize-none focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black transition"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white py-3 sm:py-4 rounded-xl font-medium hover:scale-[1.01] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? "Enviando..." : "Enviar solicitud"}
        </button>

        {success && (
          <p className="text-green-600 text-center font-medium text-sm sm:text-base">
            Solicitud enviada correctamente ✔
            <span className="block text-sm mt-1 text-gray-600">
              Te contactaremos pronto
            </span>
          </p>
        )}
      </form>
    </main>
  );
}