import InteractiveServices from "@/components/InteractiveServices";
import { Briefcase, Handshake, Target } from "lucide-react";
import TechCarousel from "@/components/TechCarousel";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      {/* HERO */}
      <section className="text-center py-14 sm:py-20 lg:py-24">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-gray-500 mb-4">
          Digitup
        </p>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Consultoría TI y Automatización de Procesos
        </h1>

        <p className="text-lg sm:text-xl mb-4 max-w-3xl mx-auto text-gray-600">
          Tecnología que impulsa tu negocio
        </p>

        <p className="text-base sm:text-lg mb-10 max-w-3xl mx-auto text-gray-600">
          Ayudamos a empresas y emprendedores a optimizar, automatizar y
          transformar digitalmente sus procesos con soluciones tecnológicas a
          medida.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#servicios"
            className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg hover:scale-105 transition-all duration-200"
          >
            Ver servicios
          </a>
          <a
            href="/contacto"
            className="border border-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg hover:scale-105 transition-all duration-200"
          >
            Contacto
          </a>
        </div>
      </section>

      {/* SERVICIOS INTERACTIVOS */}
      <InteractiveServices />

      {/* POR QUÉ TRABAJAR CON DIGITUP */}
      <section className="mt-20 sm:mt-24 bg-gray-50 py-12 sm:py-16 rounded-3xl">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 px-4">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-gray-500 mb-3">
            Valor agregado
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Por qué trabajar con Digitup
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Más que implementar tecnología, buscamos entregar soluciones útiles,
            sostenibles y alineadas a la realidad de cada negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          <div className="p-6 sm:p-8 bg-white border rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center">
            <Briefcase className="mb-4 mx-auto text-black" size={36} />
            <h3 className="font-bold text-lg mb-2">
              Soluciones aterrizadas al negocio
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Diseñamos propuestas prácticas, enfocadas en necesidades reales y
              resultados concretos.
            </p>
          </div>

          <div className="p-6 sm:p-8 bg-white border rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center">
            <Handshake className="mb-4 mx-auto text-black" size={36} />
            <h3 className="font-bold text-lg mb-2">
              Acompañamiento cercano y continuo
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Nos involucramos en cada etapa, entregando apoyo técnico y
              seguimiento constante.
            </p>
          </div>

          <div className="p-6 sm:p-8 bg-white border rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center">
            <Target className="mb-4 mx-auto text-black" size={36} />
            <h3 className="font-bold text-lg mb-2">
              Tecnología con foco en resultados
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Implementamos soluciones que mejoran eficiencia, visibilidad y
              control operacional.
            </p>
          </div>
        </div>
      </section>

      {/* QUÉ ES DIGITUP */}
      <section className="mt-16 sm:mt-20 max-w-4xl mx-auto text-center px-2">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">¿Qué es Digitup?</h2>
        <p className="text-base sm:text-lg leading-7 sm:leading-8 text-gray-700">
          Digitup es una consultora TI orientada a ayudar a empresas y
          emprendedores a optimizar, automatizar y transformar digitalmente sus
          procesos. A través de soluciones tecnológicas diseñadas a medida,
          apoyamos la mejora de la eficiencia operativa, la reducción de errores
          y el fortalecimiento de la gestión empresarial.
        </p>
      </section>

      {/* TECNOLOGÍAS */}
      <section className="mt-16 sm:mt-20">
        <div className="text-center max-w-3xl mx-auto px-2">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-gray-500 mb-3">
            Herramientas y plataformas
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Tecnologías con las que trabajamos
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Utilizamos herramientas modernas para automatización, gestión,
            analítica y despliegue de soluciones tecnológicas.
          </p>
        </div>

        <TechCarousel />
      </section>

      {/* CTA FINAL */}
      <section className="mt-16 sm:mt-20 text-center bg-black text-white py-12 sm:py-16 px-4 rounded-2xl sm:rounded-3xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          ¿Necesitas una solución tecnológica a medida?
        </h2>
        <p className="mb-6 max-w-2xl mx-auto text-sm sm:text-base">
          Contáctanos para evaluar tu caso y proponerte una solución alineada a
          tus objetivos de negocio.
        </p>

        <a
          href="/contacto"
          className="inline-block bg-white text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-200"
        >
          Contactar ahora
        </a>
      </section>
    </main>
  );
}