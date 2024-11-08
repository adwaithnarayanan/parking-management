import { NavLink } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-full flex-col">
      <h1 className="text-3xl font-bold ">404 Page not found</h1>
      <div className="flex gap-6 my-3 text-blue-600 underline">
        {" "}
        <NavLink to="/ANPRsettings">ANPR Settings</NavLink>
        <NavLink to="/identifiers">Identifiers</NavLink>
      </div>{" "}
    </div>
  );
};

export default PageNotFound;
