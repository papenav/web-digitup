import ServicesCarousel from "@/components/ServicesCarousel";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <section className="text-center py-16">
        <h1 className="text-5xl font-bold mb-6">
          Soluciones TI para empresas y emprendedores
        </h1>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Te ayudo con consultoría TI, DevOps, automatización, soporte técnico y
          mejora de procesos tecnológicos.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="/servicios"
            className="bg-black text-white px-6 py-3 rounded-lg"
          >
            Ver servicios
          </a>
          <a
            href="/contacto"
            className="border border-black px-6 py-3 rounded-lg"
          >
            Contacto
          </a>
        </div>
      </section>

      <ServicesCarousel />
      <section className="mt-20 grid md:grid-cols-3 gap-6 text-center">
      <div className="p-6 border rounded-xl">
        <h3 className="font-bold text-lg mb-2">Reduce errores</h3>
        <p>Automatizo procesos para evitar fallas en producción.</p>
      </div>

      <div className="p-6 border rounded-xl">
        <h3 className="font-bold text-lg mb-2">Acelera tus despliegues</h3>
        <p>Implemento CI/CD para liberar cambios más rápido.</p>
      </div>

      <div className="p-6 border rounded-xl">
        <h3 className="font-bold text-lg mb-2">Ordena tu infraestructura</h3>
        <p>Te ayudo a estructurar y escalar tu plataforma TI.</p>
      </div>
    </section>
    <section className="mt-20 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Sobre mí</h2>
      <p className="text-lg leading-8">
        Soy ingeniero informático con experiencia en servicios TI, automatización,
        DevOps y soporte tecnológico. Ayudo a empresas y emprendedores a mejorar
        sus procesos, ordenar su infraestructura y avanzar con soluciones prácticas.
      </p>
    </section>
    <section className="mt-20 text-center bg-black text-white py-16 rounded-xl">
      <h2 className="text-3xl font-bold mb-4">
        ¿Necesitas mejorar tu área TI?
      </h2>
      <p className="mb-6">
        Escríbeme y evaluamos cómo ayudarte a optimizar tus procesos y sistemas.
      </p>

      <a
        href="/contacto"
        className="bg-white text-black px-6 py-3 rounded-lg font-semibold"
      >
        Contactar ahora
      </a>
    </section>
    </main>
  );
}