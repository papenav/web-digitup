"use client";

import { useRef, useState } from "react";
import {
  Search,
  Workflow,
  Code,
  Cloud,
  Wrench,
  BarChart3,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    id: "diagnostico",
    title: "Diagnóstico y Asesoría TI",
    short:
      "Evaluamos tu entorno tecnológico y detectamos oportunidades de mejora.",
    description:
      "Analizamos el estado actual de tu operación tecnológica, identificamos brechas, oportunidades de optimización y definimos una hoja de ruta alineada a los objetivos del negocio.",
    bullets: [
      "Evaluación de entorno tecnológico",
      "Detección de oportunidades de mejora",
      "Definición de estrategia TI",
      "Recomendaciones prácticas y priorizadas",
    ],
    icon: Search,
  },
  {
    id: "automatizacion",
    title: "Automatización de Procesos",
    short:
      "Reducimos tareas manuales e integramos flujos para mejorar eficiencia.",
    description:
      "Automatizamos tareas operativas y administrativas, conectamos herramientas y optimizamos flujos de trabajo para mejorar productividad, trazabilidad y control.",
    bullets: [
      "Automatización de tareas repetitivas",
      "Integración de sistemas y flujos",
      "Mejora de tiempos de respuesta",
      "Reducción de errores manuales",
    ],
    icon: Workflow,
  },
  {
    id: "desarrollo",
    title: "Desarrollo a Medida",
    short: "Creamos soluciones adaptadas a las necesidades de tu empresa.",
    description:
      "Diseñamos e implementamos soluciones tecnológicas a medida para resolver necesidades específicas, mejorar la operación y dar mayor visibilidad al negocio.",
    bullets: [
      "Plataformas internas",
      "Sistemas personalizados",
      "Escalabilidad según crecimiento",
      "Mayor control de procesos",
    ],
    icon: Code,
  },
  {
    id: "cloud",
    title: "Soluciones Cloud",
    short:
      "Implementamos herramientas en la nube para mejorar disponibilidad y acceso.",
    description:
      "Apoyamos la adopción de herramientas cloud para centralizar información, mejorar disponibilidad y facilitar operaciones más ágiles y seguras.",
    bullets: [
      "Migración y adopción cloud",
      "Disponibilidad de información",
      "Acceso remoto seguro",
      "Mejor continuidad operativa",
    ],
    icon: Cloud,
  },
  {
    id: "soporte",
    title: "Soporte y Administración TI",
    short: "Acompañamiento técnico continuo para tu operación tecnológica.",
    description:
      "Brindamos soporte continuo para empresas que necesitan estabilidad, rapidez de respuesta y acompañamiento experto, actuando como apoyo TI externo.",
    bullets: [
      "Resolución de incidencias",
      "Soporte remoto",
      "Administración de plataformas",
      "Monitoreo y mejora continua",
    ],
    icon: Wrench,
  },
  {
    id: "transformacion",
    title: "Transformación Digital",
    short:
      "Diseñamos soluciones para modernizar y fortalecer tu gestión empresarial.",
    description:
      "Levantamos procesos, detectamos oportunidades de digitalización e implementamos soluciones que modernizan la gestión y fortalecen la operación.",
    bullets: [
      "Levantamiento de procesos",
      "Diseño de soluciones digitales",
      "Modernización operativa",
      "Mayor eficiencia y visibilidad",
    ],
    icon: BarChart3,
  },
];

export default function InteractiveServices() {
  const [selectedService, setSelectedService] = useState(services[0]);
  const detailRef = useRef<HTMLDivElement | null>(null);

  function handleSelect(service: (typeof services)[number]) {
    setSelectedService(service);

    requestAnimationFrame(() => {
      detailRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }

  return (
    <section id="servicios" className="mt-16 sm:mt-20 scroll-mt-24 sm:scroll-mt-32">
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 px-2">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-gray-500 mb-3">
          Servicios principales
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Cómo puede ayudarte Digitup
        </h2>
        <p className="text-base sm:text-lg text-gray-600">
          Explora nuestros servicios y revisa el detalle de cada solución.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
        {services.map((service) => {
          const Icon = service.icon;
          const isActive = selectedService.id === service.id;

          return (
            <button
              key={service.id}
              type="button"
              onClick={() => handleSelect(service)}
              onMouseEnter={() => setSelectedService(service)}
              className={`p-6 sm:p-8 rounded-2xl text-center border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                isActive
                  ? "border-black bg-gray-100 shadow-xl -translate-y-1 scale-[1.02]"
                  : "border-gray-200 bg-white shadow-sm"
              }`}
            >
              <Icon
                className={`mb-4 mx-auto transition-all duration-300 ${
                  isActive ? "text-black scale-110" : "text-gray-700"
                }`}
                size={34}
              />

              <h3 className="font-bold text-base sm:text-lg mb-2">
                {service.title}
              </h3>

              <p className="text-sm sm:text-base text-gray-600">
                {service.short}
              </p>
            </button>
          );
        })}
      </div>

      <div
        ref={detailRef}
        className="mt-8 sm:mt-12 scroll-mt-24 sm:scroll-mt-28 rounded-3xl border bg-white p-6 sm:p-10 md:p-14 shadow-sm"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedService.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="max-w-3xl mb-8 sm:mb-10">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-gray-500 mb-3">
                Servicio destacado
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                {selectedService.title}
              </h2>

              <p className="text-base sm:text-lg text-gray-600 leading-7 sm:leading-8">
                {selectedService.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
              {selectedService.bullets.map((item) => (
                <div
                  key={item}
                  className="p-5 sm:p-6 border rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <p className="font-medium text-sm sm:text-base text-gray-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}