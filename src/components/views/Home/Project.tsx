import PMSLogo from "@/public/assets/pms/logo.png";
import MediahubLogo from "@/public/assets/mediahub/logo.png";
import NazarLogo from "@/public/assets/nazar/logo.png";
import ImmerseedLogo from "@/public/assets/immerseed/logo.png";
import TuharLogo from "@/public/assets/tuhar/logo.png";
import Image from "next/image";
import BootstrapLogo from "@/public/assets/skills/bootstrap.svg";
import CssLogo from "@/public/assets/skills/css.svg";
import FirebaseLogo from "@/public/assets/skills/firebase.svg";
import JavascriptLogo from "@/public/assets/skills/javascript.svg";
import JqueryLogo from "@/public/assets/skills/jquery.svg";
import LaravelLogo from "@/public/assets/skills/laravel.svg";
import MysqlLogo from "@/public/assets/skills/mysql.svg";
import NextjsLogo from "@/public/assets/skills/nextjs.svg";
import PhpLogo from "@/public/assets/skills/php.svg";
import ReactLogo from "@/public/assets/skills/react.svg";
import SocketLogo from "@/public/assets/skills/socketio.svg";
import TailwindLogo from "@/public/assets/skills/tailwind.svg";
import TypescriptLogo from "@/public/assets/skills/typescript.svg";

const projects = [
  {
    id: 1,
    title: "DIP | Digital Property",
    logo: PMSLogo,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sunt excepturi fugit nam incidunt animi neque? Unde voluptate ut voluptatibus!",
    url: "#",
    width: 200,
    tools: [
      PhpLogo,
      LaravelLogo,
      JavascriptLogo,
      JqueryLogo,
      SocketLogo,
      CssLogo,
      BootstrapLogo,
    ],
  },
  {
    id: 2,
    title: "MediaHub POLRI",
    logo: MediahubLogo,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sunt excepturi fugit nam incidunt animi neque? Unde voluptate ut voluptatibus!",
    url: "#",
    width: 300,
    tools: [
      NextjsLogo,
      ReactLogo,
      JavascriptLogo,
      TypescriptLogo,
      CssLogo,
      TailwindLogo,
    ],
  },
  {
    id: 3,
    title: "Nazar | E-commerse",
    logo: NazarLogo,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sunt excepturi fugit nam incidunt animi neque? Unde voluptate ut voluptatibus!",
    url: "#",
    width: 300,
    tools: [
      PhpLogo,
      LaravelLogo,
      JavascriptLogo,
      CssLogo,
      BootstrapLogo,
      FirebaseLogo,
      JqueryLogo,
    ],
  },
  {
    id: 4,
    title: "Immerseed",
    logo: ImmerseedLogo,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sunt excepturi fugit nam incidunt animi neque? Unde voluptate ut voluptatibus!",
    url: "#",
    width: 300,
    tools: [
      PhpLogo,
      LaravelLogo,
      JavascriptLogo,
      CssLogo,
      BootstrapLogo,
      JqueryLogo,
      MysqlLogo,
    ],
  },
  {
    id: 5,
    title: "Tuhar",
    logo: TuharLogo,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sunt excepturi fugit nam incidunt animi neque? Unde voluptate ut voluptatibus!",
    url: "#",
    width: 300,
    tools: [
      PhpLogo,
      LaravelLogo,
      JavascriptLogo,
      CssLogo,
      BootstrapLogo,
      JqueryLogo,
    ],
  },
];

const ProjectView = () => {
  return (
    <section id="project" className="py-20 dark:bg-gray-950 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full px-6">
            <h1 className="text-2xl text-center text-dark font-bold mb-16">
              Latest Projects
            </h1>
            <div className="block">
              {projects.map((item) => (
                <div
                  className="border border-teal-600 dark:border-teal-700 shadow-xl rounded-xl p-6 mb-5 cursor-pointer group transition-all duration-500 hover:scale-105 lg:flex hover:bg-teal-700 lg:flex-wrap"
                  key={item.id}
                >
                  <div className="w-full flex justify-center mb-4 lg:w-3/12 lg:mb-0">
                    <Image
                      src={item.logo}
                      alt="PMS"
                      width={item.width}
                      height={200}
                    />
                  </div>
                  <div className="w-full mb-5 lg:w-6/12 lg:self-center">
                    <h2 className="text-teal-500 font-semibold text-xl mb-2 lg:text-2xl">
                      {item.title}
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-slate-300 text-justify lg:text-base group-hover:text-white">
                      {item.desc}
                    </p>
                    <div className="flex items-center mt-4">
                      {item.tools?.map((tool, i) => (
                        <div className="w-6 h-6 mr-3" key={i}>
                          <Image
                            src={tool}
                            alt={`Logo ${i + 1}`}
                            height={24}
                            width={24}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="w-full flex justify-center lg:w-3/12">
                    <div className="lg:self-center">
                      <a
                        href={item.url}
                        className="bg-teal-500 text-white px-10 py-2 text-center rounded-3xl text-base lg:text-lg lg:py-4 lg:px-16 lg:font-bold"
                      >
                        Detail
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectView;
