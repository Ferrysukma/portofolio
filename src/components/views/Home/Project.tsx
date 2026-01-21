import PMSLogo from "@/public/assets/pms/logo.png";
import MediahubLogo from "@/public/assets/mediahub/logo.png";
import NazarLogo from "@/public/assets/nazar/logo.png";
import ImmerseedLogo from "@/public/assets/immerseed/logo.png";
import TuharLogo from "@/public/assets/tuhar/logo.png";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "DIP | Digital Property",
    logo: PMSLogo,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sunt excepturi fugit nam incidunt animi neque? Unde voluptate ut voluptatibus!",
    url: "#",
    width: 200,
  },
  {
    id: 2,
    title: "MediaHub POLRI",
    logo: MediahubLogo,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sunt excepturi fugit nam incidunt animi neque? Unde voluptate ut voluptatibus!",
    url: "#",
    width: 300,
  },
  {
    id: 3,
    title: "Nazar | E-commerse",
    logo: NazarLogo,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sunt excepturi fugit nam incidunt animi neque? Unde voluptate ut voluptatibus!",
    url: "#",
    width: 300,
  },
  {
    id: 4,
    title: "Immerseed",
    logo: ImmerseedLogo,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sunt excepturi fugit nam incidunt animi neque? Unde voluptate ut voluptatibus!",
    url: "#",
    width: 300,
  },
  {
    id: 5,
    title: "Tuhar",
    logo: TuharLogo,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sunt excepturi fugit nam incidunt animi neque? Unde voluptate ut voluptatibus!",
    url: "#",
    width: 300,
  },
];

const ProjectView = () => {
  return (
    <section id="project" className="mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full px-6">
            <h1 className="text-2xl text-center text-dark font-bold mb-8">
              Latest Projects
            </h1>
            <div className="block">
              {projects.map((item) => (
                <div
                  className="border border-teal-600 shadow-xl rounded-xl p-6 mb-5 cursor-pointer group transition-all duration-500 hover:scale-105 lg:flex hover:bg-teal-700 lg:flex-wrap"
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
                    <p className="text-sm text-gray-600 text-justify lg:text-base group-hover:text-white">
                      {item.desc}
                    </p>
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
