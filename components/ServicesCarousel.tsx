"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ServicesCarousel() {
  return (
    <div className="mt-10">
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
          <div className="border p-6 rounded-xl text-center min-h-[180px] flex flex-col justify-center">
            <h3 className="font-bold text-xl mb-2">Consultoría TI</h3>
            <p>Optimización de procesos y tecnología.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="border p-6 rounded-xl text-center min-h-[180px] flex flex-col justify-center">
            <h3 className="font-bold text-xl mb-2">DevOps y CI/CD</h3>
            <p>Automatización de despliegues e integración continua.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="border p-6 rounded-xl text-center min-h-[180px] flex flex-col justify-center">
            <h3 className="font-bold text-xl mb-2">Docker y Kubernetes</h3>
            <p>Contenedores, orquestación y escalabilidad.</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}