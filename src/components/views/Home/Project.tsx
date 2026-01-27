"use client";
import Image from "next/image";
import ProjectJson from "@/src/database/project.json";

const ProjectView = () => {
  return (
    <>
      <section id="project" className="py-20 dark:bg-gray-950 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full px-6">
              <h1 className="text-2xl text-center text-dark font-bold mb-16">
                Latest Projects
              </h1>
              <div className="block">
                {ProjectJson.map((item) => (
                  <div
                    className="border border-teal-600 dark:border-teal-700 shadow-xl rounded-xl p-6 mb-5 cursor-pointer group transition-all duration-500 hover:scale-105 lg:flex hover:bg-teal-700 lg:flex-wrap"
                    key={item.id}
                  >
                    <div className="relative mb-4 lg:w-3/12 lg:mb-0">
                      <Image
                        src={item.logo}
                        alt="PMS"
                        width={item.width}
                        height={100}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
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
                        {item.url ? (
                          <a
                            href={item.url}
                            target="_blank"
                            className="bg-teal-500 text-white px-10 py-2 text-center rounded-3xl text-base cursor-pointer lg:text-lg lg:py-4 lg:px-16 lg:font-bold"
                          >
                            Go to Website
                          </a>
                        ) : (
                          <button className="bg-teal-500 text-white px-10 py-2 text-center rounded-3xl text-base cursor-pointer lg:text-lg lg:py-4 lg:px-16 lg:font-bold">
                            Detail
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectView;
