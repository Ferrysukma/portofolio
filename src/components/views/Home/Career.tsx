"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import YPTLogo from "@/public/assets/career/ypt.webp";
import PACLogo from "@/public/assets/career/pac.png";
import FreelanceLogo from "@/public/assets/career/freelance.png";
import Image from "next/image";

const careers = [
  {
    id: 1,
    title: "Front End Developer - PT Sarana Pactindo",
    logo: PACLogo,
    size: 180,
    link: "https://pactindo.com/",
    desc: "Experience the future with this cyberpunk-inspired design that glows on hover.",
  },
  {
    id: 2,
    title: "Full Stack Developer - Yayasan Pendidikan Telkom",
    logo: YPTLogo,
    size: 250,
    link: "https://www.ypt.id/",
    desc: "Experience the future with this cyberpunk-inspired design that glows on hover.",
  },
  {
    id: 3,
    title: "Full Stack Developer - Freelance",
    logo: FreelanceLogo,
    size: 100,
    desc: "Experience the future with this cyberpunk-inspired design that glows on hover.",
  },
];

const CareerView = () => {
  return (
    <section id="career" className="mt-20 bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full">
            <h1 className="text-2xl text-center text-dark font-bold mb-8">
              My Profesional Careers as Web Developer
            </h1>
            <Swiper
              // spaceBetween={30}
              // slidesPerView={1}
              rewind
              pagination
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Autoplay]}
              breakpoints={{
                768: {
                  slidesPerView: 1,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
            >
              {careers.map((item) => (
                <SwiperSlide className="p-4" key={item.id}>
                  <div className="relative w-full bg-white rounded-2xl overflow-hidden group transition-all duration-500 hover:scale-105">
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
                        <p className="text-gray-600 text-sm group-hover:text-white transition-colors lg:text-base">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerView;
