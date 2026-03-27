import {
  Search,
  Workflow,
  Code,
  Cloud,
  Wrench,
  RefreshCw,
  BarChart3,
} from "lucide-react";

export default function ServiciosPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-10 text-center">
        Servicios Digitup
      </h1>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="p-8 border rounded-2xl shadow-sm hover:shadow-lg transition">
          <Search className="mb-4 mx-auto text-black" size={40} />
          <h2 className="text-xl font-semibold mb-3">
            Diagnóstico y Asesoría TI
          </h2>
          <p className="text-gray-600">
            Evaluación del entorno tecnológico, identificación de oportunidades
            de mejora y definición de estrategias alineadas a los objetivos del negocio.
          </p>
        </div>

        <div className="p-8 border rounded-2xl shadow-sm hover:shadow-lg transition">
          <Workflow className="mb-4 mx-auto text-black" size={40} />
          <h2 className="text-xl font-semibold mb-3">
            Automatización de Procesos
          </h2>
          <p className="text-gray-600">
            Automatización de tareas operativas y administrativas, integración de sistemas y optimización de flujos de trabajo.
          </p>
        </div>

        <div className="p-8 border rounded-2xl shadow-sm hover:shadow-lg transition">
          <Code className="mb-4 mx-auto text-black" size={40} />
          <h2 className="text-xl font-semibold mb-3">
            Desarrollo de Soluciones a Medida
          </h2>
          <p className="text-gray-600">
            Diseño e implementación de plataformas y sistemas adaptados a las necesidades de cada empresa.
          </p>
        </div>

        <div className="p-8 border rounded-2xl shadow-sm hover:shadow-lg transition">
          <Cloud className="mb-4 mx-auto text-black" size={40} />
          <h2 className="text-xl font-semibold mb-3">
            Implementación de Soluciones Cloud
          </h2>
          <p className="text-gray-600">
            Adopción de herramientas en la nube, digitalización de procesos internos y mejora de la disponibilidad de la información.
          </p>
        </div>

        <div className="p-8 border rounded-2xl shadow-sm hover:shadow-lg transition">
          <Wrench className="mb-4 mx-auto text-black" size={40} />
          <h2 className="text-xl font-semibold mb-3">
            Soporte y Administración TI
          </h2>
          <p className="text-gray-600">
            Soporte técnico especializado, administración de sistemas y acompañamiento continuo.
          </p>
        </div>

        <div className="p-8 border rounded-2xl shadow-sm hover:shadow-lg transition">
          <RefreshCw className="mb-4 mx-auto text-black" size={40} />
          <h2 className="text-xl font-semibold mb-3">
            Transformación Digital
          </h2>
          <p className="text-gray-600">
            Levantamiento de procesos, diseño de soluciones digitales e implementación tecnológica para modernizar la gestión empresarial.
          </p>
        </div>

        <div className="p-8 border rounded-2xl shadow-sm hover:shadow-lg transition">
          <BarChart3 className="mb-4 mx-auto text-black" size={40} />
          <h2 className="text-xl font-semibold mb-3">
            Reportabilidad y Analítica
          </h2>
          <p className="text-gray-600">
            Diseño de dashboards, indicadores y reportes para mejorar visibilidad, control y toma de decisiones.
          </p>
        </div>
      </div>
    </main>
  );
}