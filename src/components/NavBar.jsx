import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { auth, AuthContext } from "../contexts/UserContext";
import logo from "../assets/logo.png";

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
      <div className="bg-blue-500 flex justify-between h-12">
        <div className="ml-10 flex items-center text-white">
          <img className="w-8" src={logo} alt="" />
          <NavLink className="ml-1" to="/">Learning Hub</NavLink>
        </div>
        <div className="flex justify-center items-center mr-10">
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
      </div>
    </>
  );
};

export default NavBar;
