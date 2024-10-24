import { NavLinkType } from "../../types";

type NavLinksPropsType = {
  navItem: NavLinkType;
};

const NavLinks = ({ navItem }: NavLinksPropsType) => {
  return (
    <li className="relative px-6 py-3">
      <span
        className={`absolute inset-y-0 left-0 w-1 rounded-br-lg ${
          navItem.active && "bg-secondary-punchPink"
        }`}
      ></span>

      <span className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 cursor-pointer">
        <img
          src={navItem.icon}
          className="w-[1em] h-[1em]"
          alt="Access Control"
        />
        <span className="inline-flex items-center">
          <span className="ml-4">{navItem.item}</span>
        </span>
      </span>
      {navItem.innerLinks && (
        <ul className="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50 ">
          {navItem.innerLinks.map((navLink) => (
            <li
              key={navLink.item}
              className="px-2 py-1 transition-colors duration-150 hover:text-gray-800 cursor-pointer"
            >
              <span className={`w-full ${navLink.active && "text-gray-800"}`}>
                {navLink.item}
              </span>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavLinks;
