export type Service = {
  slug: string;
  eyebrow: string;
  title: string;
  short: string;
  description: string;
  outcomes: string[];
  includes: string[];
  deliverables: string[];
};

export const services: Service[] = [
  {
    slug: "diagnostico-ti",
    eyebrow: "Base operativa",
    title: "Diagnóstico TI",
    short:
      "Evaluamos tu operación actual para identificar brechas, riesgos y oportunidades de mejora con foco en resultados.",
    description:
      "Un diagnóstico TI permite ordenar el punto de partida antes de invertir tiempo o presupuesto en una solución. Revisamos procesos, herramientas, datos, responsables y riesgos para proponer una hoja de ruta clara y priorizada.",
    outcomes: [
      "Claridad sobre brechas operativas y tecnológicas.",
      "Priorización de iniciativas según impacto y esfuerzo.",
      "Base documentada para decidir próximos pasos.",
    ],
    includes: [
      "Levantamiento de procesos y herramientas actuales.",
      "Revisión de fuentes de información, accesos y responsabilidades.",
      "Identificación de riesgos, reprocesos y dependencias informales.",
      "Recomendaciones priorizadas para avanzar por etapas.",
    ],
    deliverables: [
      "Mapa de situación actual.",
      "Matriz de brechas y oportunidades.",
      "Plan de acción priorizado.",
      "Resumen ejecutivo para toma de decisiones.",
    ],
  },
  {
    slug: "automatizacion",
    eyebrow: "Automatización",
    title: "Automatización",
    short:
      "Automatizamos tareas repetitivas y flujos de trabajo para reducir errores, tiempos muertos y dependencia manual.",
    description:
      "Digitalizamos solicitudes, aprobaciones, alertas y controles internos cuando el proceso ya tiene suficiente claridad para automatizarse. El objetivo es reducir reproceso y dejar trazabilidad visible para el equipo.",
    outcomes: [
      "Menos tareas manuales y duplicadas.",
      "Estados, responsables y aprobaciones trazables.",
      "Alertas y registros para seguimiento operativo.",
    ],
    includes: [
      "Diseño del flujo objetivo con responsables y estados.",
      "Construcción de formularios, reglas y notificaciones.",
      "Pruebas con usuarios y ajustes de operación.",
      "Documentación para administración y soporte posterior.",
    ],
    deliverables: [
      "Flujo automatizado.",
      "Formulario o canal de ingreso.",
      "Registro de estados y aprobaciones.",
      "Manual operativo del proceso.",
    ],
  },
  {
    slug: "reportabilidad",
    eyebrow: "Reportes y control",
    title: "Reportabilidad",
    short:
      "Consolidamos datos y construimos tableros e informes para que la operación decida con información confiable.",
    description:
      "Trabajamos sobre datos dispersos, planillas, reportes manuales o fuentes que no conversan bien entre sí. Definimos indicadores, criterios de cálculo y vistas de gestión útiles para seguimiento operativo.",
    outcomes: [
      "Indicadores consistentes y entendibles.",
      "Menos tiempo preparando reportes manuales.",
      "Mejor visibilidad para decisiones recurrentes.",
    ],
    includes: [
      "Revisión de fuentes y calidad de datos.",
      "Definición de indicadores clave y criterios de medición.",
      "Modelado de información y vistas ejecutivas u operativas.",
      "Automatización de actualizaciones cuando sea viable.",
    ],
    deliverables: [
      "Modelo de datos documentado.",
      "Dashboard o informe operativo.",
      "Diccionario de indicadores.",
      "Rutina de actualización y control.",
    ],
  },
  {
    slug: "integraciones",
    eyebrow: "Conexión de sistemas",
    title: "Integraciones",
    short:
      "Conectamos sistemas, formularios y fuentes para eliminar traspasos manuales y mejorar consistencia de datos.",
    description:
      "Cuando la información se mueve manualmente entre sistemas, aparecen errores, retrasos y poca trazabilidad. Las integraciones permiten conectar fuentes, reglas y destinos de forma mantenible.",
    outcomes: [
      "Menos digitación y traspaso manual.",
      "Información más consistente entre plataformas.",
      "Reglas de intercambio documentadas y mantenibles.",
    ],
    includes: [
      "Levantamiento de origen, destino y reglas de negocio.",
      "Diseño del flujo de integración y manejo de errores.",
      "Construcción, pruebas y validación de datos.",
      "Documentación técnica y operativa.",
    ],
    deliverables: [
      "Mapa de integración.",
      "Flujo de datos documentado.",
      "Validaciones y manejo de excepciones.",
      "Guía de soporte y mantención.",
    ],
  },
  {
    slug: "cloud-colaboracion",
    eyebrow: "Plataformas",
    title: "Cloud y colaboración",
    short:
      "Implementamos soluciones en la nube y herramientas colaborativas para trabajar de forma segura y eficiente.",
    description:
      "Ordenamos espacios de trabajo, permisos, documentos y prácticas colaborativas para que la información sea accesible, segura y fácil de administrar.",
    outcomes: [
      "Mejor estructura de documentos y permisos.",
      "Colaboración más ordenada entre equipos.",
      "Menos dependencia de archivos locales o canales informales.",
    ],
    includes: [
      "Revisión de estructura actual de archivos y accesos.",
      "Definición de espacios, roles y permisos.",
      "Configuración de herramientas colaborativas.",
      "Buenas prácticas de seguridad y uso.",
    ],
    deliverables: [
      "Estructura de colaboración definida.",
      "Matriz de permisos.",
      "Guía de uso para usuarios.",
      "Recomendaciones de continuidad.",
    ],
  },
  {
    slug: "soporte-ti",
    eyebrow: "Servicios gestionados",
    title: "Soporte TI",
    short:
      "Operamos y damos soporte a tu entorno TI con registro, acuerdos claros y seguimiento continuo.",
    description:
      "El soporte TI no debería depender de conversaciones sueltas o conocimiento informal. Estructuramos la atención, registramos casos y acompañamos la continuidad operativa.",
    outcomes: [
      "Incidencias registradas y priorizadas.",
      "Mayor continuidad para usuarios y plataformas.",
      "Recomendaciones periódicas para mejorar la operación.",
    ],
    includes: [
      "Canal de atención y seguimiento de solicitudes.",
      "Administración de usuarios, accesos y herramientas.",
      "Registro de casos, acuerdos y acciones realizadas.",
      "Reporte periódico de actividad y mejoras sugeridas.",
    ],
    deliverables: [
      "Base de conocimiento inicial.",
      "Registro de soporte.",
      "Acuerdos de atención.",
      "Reporte de actividad y recomendaciones.",
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
