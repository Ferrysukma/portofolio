"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";
import { motion } from "motion/react";
import CarrerJson from "@/src/database/career.json";
const CareerView = () => {
  return (
    <section id="career" className="bg-gray-100 dark:bg-slate-950 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full">
            <h1 className="text-2xl text-center text-gray-950 dark:text-white font-bold mb-16">
              My Profesional Careers as Web Developer
            </h1>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              animate={{ rotate: 360 }}
            >
              <Swiper
                // spaceBetween={30}
                slidesPerView={1}
                grabCursor={true}
                effect={"coverflow"}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                centeredSlides={true}
                rewind
                pagination={{
                  type: "progressbar",
                }}
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay, EffectCoverflow]}
                breakpoints={{
                  768: {
                    slidesPerView: 1,
                    // spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 3,
                    // spaceBetween: 50,
                  },
                }}
              >
                {CarrerJson.map((item) => (
                  <SwiperSlide className="p-4 mt-6" key={item.id}>
                    <div className="relative w-full bg-white dark:bg-gray-900 rounded-2xl overflow-hidden group transition-all duration-500 hover:scale-105">
                      <div className="absolute inset-0 bg-linear-to-r from-teal-600 via-sky-600 to-lime-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>
                      <div className="relative z-10 h-full bg-transparent backdrop-blur-sm border border-teal-700 group-hover:border-purple-500/50 rounded-2xl p-6 flex flex-col justify-between transition-all duration-500">
                        <div>
                          <div className="flex justify-center">
                            <Image
                              src={item.logo}
                              alt={item.title}
                              height={item.size}
                              width={item.size}
                            />
                          </div>
                          <h3 className="text-xl font-bold text-teal-500 mb-2 group-hover:text-white transition-colors">
                            {item.title}
                          </h3>
                          {item.period && (
                            <h4 className="text-base text-slate-400 group-hover:text-white transition-colors">
                              {item.period}
                            </h4>
                          )}
                          <p className="mt-4 text-gray-600 text-justify text-sm dark:text-slate-300 group-hover:text-white transition-colors lg:text-base">
                            {item.desc}
                          </p>
                        </div>
                        {item.link && (
                          <a
                            href={item.link}
                            target="_blank"
                            className="text-center mt-4 px-4 py-2 cursor-pointer bg-linear-to-r from-teal-600 to-sky-600 text-white rounded-lg font-semibold hover:from-teal-700 hover:to-sky-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                          >
                            See Company
                          </a>
                        )}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerView;
