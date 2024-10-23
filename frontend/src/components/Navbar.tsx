import { NavInnerLinkType, NavLinkType } from "../../types.ts";
import NavLinks from "./NavLinks.tsx";

const navAccessControlLinks: NavInnerLinkType[] = [
  { item: "Configuration", active: false },
  { item: "ANPR Settings", active: true },
  { item: "Gates and Actuators", active: false },
  { item: "Identifiers", active: false },
  { item: "Reservations", active: false },
  { item: "Alerts", active: false },
  { item: "ANPR Events", active: false },
];

const navLinks: NavLinkType[] = [
  {
    item: "Access Control",
    icon: "/src/assets/svgs/shield.svg",
    innerLinks: navAccessControlLinks,
    active: true,
  },
  {
    item: "Global Configurations",
    icon: "/src/assets/svgs/globalConfiguration.svg",
    innerLinks: null,
    active: false,
  },
  {
    item: "Settings",
    icon: "/src/assets/svgs/settings.svg",
    innerLinks: null,
    active: false,
  },
];

const Navbar = () => {
  return (
    <aside className="shadow-md hidden overflow-y-auto bg-white md:block flex-shrink-0 md:w-1/4 lg:w-1/5 xl:w-1/6">
      <div className="py-4 text-gray-500 flex flex-col h-full">
        <h1 className="ml-6 text-lg font-bold text-gray-800">
          <img
            className="w-1/2"
            src="src/assets/images/parkzeus-logo.png"
            alt="Parkzeus"
          />
        </h1>
        <div className="flex-1 justify-between flex flex-col">
          <ul className="mt-6">
            {navLinks.map((navLink) => (
              <NavLinks navItem={navLink} key={navLink.item} />
            ))}

            {/* <li className="relative px-6 py-3">
              <span className="absolute inset-y-0 left-0 w-1 rounded-br-lg bg-secondary-punchPink"></span>
              <span className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 cursor-pointer">
                <img
                  src="/src/assets/svgs/shield.svg"
                  className="w-[1em] h-[1em]"
                  alt="Access Control"
                />
                <span className="inline-flex items-center">
                  <span className="ml-4">Access Control</span>
                </span>
              </span>
              <ul className="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50 ">
                {navAccessControlLinks.map((navLink) => (
                  <li className="px-2 py-1 transition-colors duration-150 hover:text-gray-800 cursor-pointer">
                    <span
                      className={`w-full ${navLink.active && "text-gray-800"}`}
                    >
                      {navLink.item}
                    </span>
                  </li>
                ))}
              </ul>
            </li>
            <li className="relative px-6 py-3">
              <span className="absolute inset-y-0 left-0 w-1 rounded-tr-lg rounded-br-lg"></span>
              <span className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800">
                <img
                  src="/src/assets/svgs/globalConfiguration.svg"
                  className="w-[1em] h-[1em]"
                  alt="Configuration"
                />
                <span className="inline-flex items-center ml-4">
                  Global Configurations
                </span>
              </span>
            </li>
            <li className="relative px-6 py-3">
              <span className="absolute inset-y-0 left-0 w-1 rounded-tr-lg rounded-br-lg"></span>
              <span className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800">
                <img
                  src="/src/assets/svgs/globalConfiguration.svg"
                  className="w-[1em] h-[1em]"
                  alt="Configuration"
                />
                <span className="inline-flex items-center ml-4">
                  Global Configurations
                </span>
              </span>
            </li> */}
          </ul>
          <div></div>
        </div>
      </div>
    </aside>
  );
};

export default Navbar;
