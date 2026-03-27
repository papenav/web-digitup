"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ServicesCarousel() {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        <SwiperSlide>
          <div className="bg-white border rounded-2xl p-10 text-center min-h-[220px] flex flex-col justify-center shadow-md hover:shadow-xl transition">
            <h3 className="font-bold text-xl mb-2">Diagnóstico y Asesoría TI</h3>
            <p className="text-gray-600">
              Evaluamos tu entorno tecnológico y detectamos oportunidades de mejora.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-white border rounded-2xl p-10 text-center min-h-[220px] flex flex-col justify-center shadow-md hover:shadow-xl transition">
            <h3 className="font-bold text-xl mb-2">Automatización de Procesos</h3>
            <p className="text-gray-600">
              Reducimos tareas manuales e integramos flujos para mejorar eficiencia.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-white border rounded-2xl p-10 text-center min-h-[220px] flex flex-col justify-center shadow-md hover:shadow-xl transition">
            <h3 className="font-bold text-xl mb-2">Transformación Digital</h3>
            <p className="text-gray-600">
              Diseñamos soluciones para modernizar y fortalecer tu gestión empresarial.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-white border rounded-2xl p-10 text-center min-h-[220px] flex flex-col justify-center shadow-md hover:shadow-xl transition">
            <h3 className="font-bold text-xl mb-2">Desarrollo a Medida</h3>
            <p className="text-gray-600">
              Creamos soluciones adaptadas a las necesidades de tu empresa.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-white border rounded-2xl p-10 text-center min-h-[220px] flex flex-col justify-center shadow-md hover:shadow-xl transition">
            <h3 className="font-bold text-xl mb-2">Soluciones Cloud</h3>
            <p className="text-gray-600">
              Implementamos herramientas en la nube para mejorar disponibilidad y acceso.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-white border rounded-2xl p-10 text-center min-h-[220px] flex flex-col justify-center shadow-md hover:shadow-xl transition">
            <h3 className="font-bold text-xl mb-2">Soporte TI</h3>
            <p className="text-gray-600">
              Acompañamiento técnico continuo para tu operación tecnológica.
            </p>
          </div>
      </SwiperSlide>
      </Swiper>
    </div>
  );
}