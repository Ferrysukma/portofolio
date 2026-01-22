"use client";
import Chat from "@/public/assets/about/chat.png";
import Deal from "@/public/assets/about/deal.png";
import Star from "@/public/assets/about/star.png";
import Work from "@/public/assets/about/work.png";
import Image from "next/image";
import { motion } from "motion/react";

const abouts = [
  {
    id: 1,
    title: "Cooperative",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sunt excepturi fugit nam incidunt animi neque? Unde voluptate ut voluptatibus!",
    logo: Deal,
  },
  {
    id: 2,
    title: "Communicative",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sunt excepturi fugit nam incidunt animi neque? Unde voluptate ut voluptatibus!",
    logo: Chat,
  },
  {
    id: 3,
    title: "Workaholic",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sunt excepturi fugit nam incidunt animi neque? Unde voluptate ut voluptatibus!",
    logo: Work,
  },
  {
    id: 4,
    title: "Experienced",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sunt excepturi fugit nam incidunt animi neque? Unde voluptate ut voluptatibus!",
    logo: Star,
  },
];

const AboutView = () => {
  return (
    <section id="contact" className="pb-40 pt-45 relative dark:bg-gray-950">
      <div className="absolute opacity-30 rotate-12 top-1/2 -translate-y-1/2 lg:left-1/2 lg:-translate-x-1/2">
        <h1 className="text-6xl font-bold text-gray-400 dark:text-white lg:text-9xl">
          WHY HIRE ME
        </h1>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full">
            <h1 className="text-2xl text-center  font-bold mb-8">
              Why Hire Me
            </h1>
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              {abouts.map((item) => (
                <div className="block group p -6" key={item.id}>
                  <motion.ul
                    animate={{ rotate: 360 }}
                    whileHover={{ rotate: 12, animationDuration: 3000 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 1 }}
                    whileInView={{ rotate: 360 }}
                  >
                    <div className="flex justify-center border border-teal-500 rounded-full w-31 h-31 mx-auto relative bg-gray-100 dark:bg-transparent">
                      <Image
                        src={item.logo}
                        alt="Cooperative"
                        height={70}
                        width={70}
                        className="absolute top-1/2 -translate-y-1/2"
                      />
                    </div>
                    <div className="w-full mt-6">
                      <h2 className="text-center text-xl font-semibold text-teal-500 mb-2">
                        {item.title}
                      </h2>
                      <p className="text-sm text-gray-600 dark:text-slate-300 text-justif lg:text-base dark:group-hover:text-white">
                        {item.desc}
                      </p>
                    </div>
                  </motion.ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutView;
