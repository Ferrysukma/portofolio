"use client";
import { useEffect, useState } from "react";
import Navmenu from "../ui/Navmenu";
import ThemeToggle from "@/src/providers/theme/ThemeToggle";

const listmenu = ["Home", "Career", "Project", "Skills", "Contact"];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [section, setSection] = useState("home");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      listmenu.map((item) => {
        const element = document.getElementById(item.toLowerCase());
        if (window.scrollY >= (element?.offsetTop || 0)) {
          setSection(item.toLowerCase());
        }
      });
    });
  }, []);

  return (
    <header className="bg-white dark:bg-gray-900 w-full z-10 flex items-center sticky top-0 left-0 py-3 lg:py-2 shadow-[0_0px_3px_rgba(0,0,0,0.3)]">
      <div className="container mx-auto">
        <div className="flex justify-between items-center relative">
          <div className="px-3">
            <a
              href="#"
              className="text-teal-500 text-2xl font-bold lg:text-3xl"
            >
              Portofolio
            </a>
          </div>
          <div className="flex items-center px-4">
            <ThemeToggle />
            <button
              id="hamburger"
              type="button"
              className="block right-4 lg:hidden"
              onClick={() => setOpen(!open)}
            >
              <span
                className={`bg-gray-950 dark:bg-white h-0.5 w-7.5 block mb-1.5 transition duration-300 ease-in-out ${open && "rotate-45 origin-top-left"}`}
              ></span>
              <span
                className={`bg-gray-950 dark:bg-white h-0.5 w-7.5 block mb-1.5 transition duration-300 ease-in-out ${open && "scale-0"}`}
              ></span>
              <span
                className={`bg-gray-950 dark:bg-white h-0.5 w-7.5 block transition duration-300 ease-in-out ${open && "-rotate-45  origin-bottom-left"}`}
              ></span>
            </button>

            <nav
              id="nav-menu"
              className={`${open ? "block" : "hidden"} absolute shadow-lg rounded-lg bg-white dark:bg-gray-900 max-w-60 w-full right-3 top-full py-4 lg:block lg:max-w-full lg:static lg:shadow-none lg:rounded-none`}
            >
              <Navmenu menu={listmenu} section={section} />
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
