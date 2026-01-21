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
            className={`text-gray-950 hover:text-teal-500 font-semibold py-2 flex mx-6 ${
              section === item.toLowerCase() && "text-teal-500 font-bold"
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
