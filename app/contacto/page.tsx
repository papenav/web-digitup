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
    <main className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Contacto Digitup
      </h1>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4">
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          required
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="text"
          name="empresa"
          placeholder="Empresa"
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          required
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="text"
          name="telefono"
          placeholder="Teléfono / WhatsApp"
          className="w-full border p-3 rounded-lg"
        />

        <select
          name="servicio"
          required
          className="w-full border p-3 rounded-lg bg-white"
          defaultValue=""
        >
          <option value="" disabled>
            Selecciona un servicio
          </option>
          <option value="Diagnóstico y Asesoría TI">Diagnóstico y Asesoría TI</option>
          <option value="Automatización de Procesos">Automatización de Procesos</option>
          <option value="Desarrollo de Soluciones a Medida">
            Desarrollo de Soluciones a Medida
          </option>
          <option value="Implementación de Soluciones Cloud">
            Implementación de Soluciones Cloud
          </option>
          <option value="Soporte y Administración TI">
            Soporte y Administración TI
          </option>
          <option value="Transformación Digital">Transformación Digital</option>
        </select>

        <textarea
          name="mensaje"
          placeholder="Cuéntanos qué necesitas"
          required
          className="w-full border p-3 rounded-lg h-32"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white py-3 rounded-lg"
        >
          {loading ? "Enviando..." : "Enviar solicitud"}
        </button>

        {success && (
          <p className="text-green-600 text-center font-medium">
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