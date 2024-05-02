import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify-center bg-blue-500 text-white h-14 items-center ">
      <div></div>

      <div className="flex gap-4">
        <NavLink
          className={({ isActive }) => {
            return isActive ? "text-yellow-500" : "text-white";
          }}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? "text-yellow-500" : "text-white";
          }}
          to="/courses"
        >
          Courses
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? "text-yellow-500" : "text-white";
          }}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? "text-yellow-500" : "text-white";
          }}
          to="/login"
        >
          Login
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? "text-yellow-500" : "text-white";
          }}
          to="/signup"
        >
          SignUp
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
