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
          </ul>
          <div className="px-6 font-semibold">v 4.19.0</div>
        </div>
      </div>
    </aside>
  );
};

export default Navbar;
