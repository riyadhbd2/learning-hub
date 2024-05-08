import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { auth, AuthContext } from "../contexts/UserContext";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  // LogOut function
  const handleLogOut = () => {
    logOut(auth)
      .then(() => {
        console.log("log out successfull");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div className="flex justify-center bg-blue-500 text-white h-14 items-center ">
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
            to="/faq"
          >
            FAQ
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "text-yellow-500" : "text-white";
            }}
            to="/blog"
          >
            Blog
          </NavLink>

          {user?.uid ? (
            <>
              <NavLink
                className={({ isActive }) => {
                  return isActive ? "text-yellow-500" : "text-white";
                }}
                to="/userprofile"
              >
                {user.email}
              </NavLink>
              <button onClick={handleLogOut}>LogOut</button>
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
