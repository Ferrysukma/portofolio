"use client";
import Image from "next/image";
import SkillsJson from "@/src/database/skills.json";

const SkillsView = () => {
  return (
    <section
      id="skills"
      className="relative py-20 bg-gray-100 dark:bg-slate-950"
    >
      <div className="absolute opacity-30 ml-7 rotate-12 top-1/2 -translate-y-1/2 lg:left-1/2 lg:-translate-x-1/2">
        <h1 className="text-4xl font-bold text-gray-400 dark:text-white lg:text-7xl">
          MY SKILLS & TOOLS
        </h1>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full">
            <h1 className="text-2xl text-center text-dark font-bold mb-16">
              Tools & Skills
            </h1>

            <div className="flex items-center w-full overflow-hidden">
              <div className="pl-[100%] flex items-center list-skills-left">
                {SkillsJson[0].map((item: any, i: number) => (
                  <div
                    className="min-w-58 h-20 mr-3 border border-slate-300 dark:border-teal-700 shadow rounded-lg p-2 flex items-center bg-white dark:bg-transparent"
                    key={i}
                  >
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
                ))}
              </div>
            </div>
            <div className="flex items-center w-full overflow-hidden mt-12">
              <div className="pl-[100%] flex items-center list-skills-right">
                {SkillsJson[1].map((item: any, i: number) => (
                  <div
                    className="min-w-58 h-20 mr-3 border border-slate-300 dark:border-teal-700 shadow rounded-lg p-2 flex items-center bg-white dark:bg-transparent"
                    key={i}
                  >
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
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsView;
