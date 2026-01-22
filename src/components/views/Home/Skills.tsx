"use client";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import BootstrapLogo from "@/public/assets/skills/bootstrap.svg";
import CssLogo from "@/public/assets/skills/css.svg";
import FirebaseLogo from "@/public/assets/skills/firebase.svg";
import JavascriptLogo from "@/public/assets/skills/javascript.svg";
import JqueryLogo from "@/public/assets/skills/jquery.svg";
import LaravelLogo from "@/public/assets/skills/laravel.svg";
import MysqlLogo from "@/public/assets/skills/mysql.svg";
import NextjsLogo from "@/public/assets/skills/nextjs.svg";
import PhpLogo from "@/public/assets/skills/php.svg";
import PostgresqlLogo from "@/public/assets/skills/postgresql.svg";
import ReactLogo from "@/public/assets/skills/react.svg";
import SocketLogo from "@/public/assets/skills/socketio.svg";
import TailwindLogo from "@/public/assets/skills/tailwind.svg";
import TypescriptLogo from "@/public/assets/skills/typescript.svg";
import Image from "next/image";

const skills = [
  {
    id: 1,
    title: "Next JS",
    type: "Front End Developer",
    url: "https://nextjs.org/",
    logo: NextjsLogo,
  },
  {
    id: 2,
    title: "Laravel",
    type: "Back End Developer",
    url: "https://laravel.com/",
    logo: LaravelLogo,
  },
  {
    id: 3,
    title: "React JS",
    type: "Front End Developer",
    url: "https://react.dev/",
    logo: ReactLogo,
  },
  {
    id: 4,
    title: "Tailwind",
    type: "Front End Developer",
    url: "https://tailwindcss.com/",
    logo: TailwindLogo,
  },
  {
    id: 5,
    title: "CSS",
    type: "Front End Developer",
    url: "https://tailwindcss.com/",
    logo: CssLogo,
  },
  {
    id: 6,
    title: "JQuery",
    type: "Front End Developer",
    url: "https://jquery.com/",
    logo: JqueryLogo,
  },
  {
    id: 7,
    title: "Javascript",
    type: "Front & Back End",
    url: "https://www.javascript.com/",
    logo: JavascriptLogo,
  },
  {
    id: 8,
    title: "Bootstrap",
    type: "Front End Developer",
    url: "https://getbootstrap.com/",
    logo: BootstrapLogo,
  },
  {
    id: 9,
    title: "PHP",
    type: "Back End Developer",
    url: "https://php.net/",
    logo: PhpLogo,
  },
  {
    id: 10,
    title: "MySql",
    type: "Database",
    url: "https://mysql.com/",
    logo: MysqlLogo,
  },
  {
    id: 11,
    title: "PostgreSQL",
    type: "Database",
    url: "https://www.postgresql.org/",
    logo: PostgresqlLogo,
  },
  {
    id: 12,
    title: "Firebase",
    type: "Database",
    url: "http://firebase.google.com/",
    logo: FirebaseLogo,
  },
  {
    id: 13,
    title: "Socket.io",
    type: "Realtime Library",
    url: "https://socket.io/",
    logo: SocketLogo,
  },
  {
    id: 14,
    title: "Type Script",
    type: "Programming Language",
    url: "https://www.typescriptlang.org/",
    logo: TypescriptLogo,
  },
];

const SkillsView = () => {
  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full">
            <h1 className="text-2xl text-center text-dark font-bold mb-8 lg:mb-16">
              Tools & Skills
            </h1>

            <div className="flex items-center">
              <Swiper
                slidesPerView={2}
                centeredSlides={true}
                spaceBetween={110}
                speed={3000}
                loop={true}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 110,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 70,
                  },
                  1024: {
                    slidesPerView: 6,
                    spaceBetween: 50,
                  },
                }}
                modules={[Autoplay]}
              >
                {skills.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="w-58 h-20 border border-slate-300 dark:border-teal-700 shadow rounded-lg p-2 flex items-center bg-white dark:bg-transparent">
                      <a
                        href={item.url}
                        target="_blank"
                        className="flex items-center"
                      >
                        <div className="w-10 h-10">
                          <Image
                            src={item.logo}
                            alt={item.title}
                            width={40}
                            height={40}
                          />
                        </div>
                        <div className="block ml-4">
                          <h4 className="font-semibold text-lg dark:text-white">
                            {item.title}
                          </h4>
                          <p className="text-gray-500 text-sm dark:text-slate-300">
                            {item.type}
                          </p>
                        </div>
                      </a>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsView;
