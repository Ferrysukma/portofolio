import Chat from "@/public/assets/about/chat.png";
import Deal from "@/public/assets/about/deal.png";
import Star from "@/public/assets/about/star.png";
import Work from "@/public/assets/about/work.png";
import Image from "next/image";

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
    <section id="contact" className="mt-15 py-10 relative">
      <div className="absolute -z-10 opacity-30 rotate-12 top-1/2 -translate-y-1/2 lg:left-1/2 lg:-translate-x-1/2">
        <h1 className="text-6xl font-bold text-gray-400 lg:text-9xl">
          WHY HIRE ME
        </h1>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full">
            <h1 className="text-2xl text-center text-dark font-bold mb-8">
              Why Hire Me
            </h1>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {abouts.map((item) => (
                <div className="block p-6" key={item.id}>
                  <div className="flex justify-center border border-teal-500 rounded-full w-31 h-31 mx-auto relative bg-gray-100">
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
                    <p className="text-sm text-gray-600 text-justif lg:text-base">
                      {item.desc}
                    </p>
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

export default AboutView;
