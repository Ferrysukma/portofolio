type Propstypes = {
  menu: string[];
  section: string;
};

const Navmenu = (props: Propstypes) => {
  const { menu, section } = props;

  return (
    <ul className="block lg:flex">
      {menu.map((item) => (
        <li className="group" key={item}>
          <a
            href={`#${item.toLowerCase()}`}
            className={`hover:text-teal-500 py-2 flex mx-6 ${
              section === item.toLowerCase()
                ? "text-teal-500 dark:text-teal-500 font-bold"
                : "text-gray-950 dark:text-white font-semibold"
            }`}
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Navmenu;
