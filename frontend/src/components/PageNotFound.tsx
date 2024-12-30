import { NavLink } from "react-router-dom";

const redirectLinks = [
  { link: "/ANPRsettings", text: "ANPR Settings" },
  { link: "/identifiers", text: "Identifiers" },
  { link: "/ANPRevents", text: "ANPR Events" },
];

const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-full flex-col">
      <h1 className="text-3xl font-bold ">404 Page not found</h1>
      <div className="flex gap-6 my-3 text-blue-600 underline">
        {redirectLinks.map((link) => (
          <NavLink key={link.text} to={link.link}>
            {link.text}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default PageNotFound;
