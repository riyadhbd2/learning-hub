import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { auth, AuthContext } from "../contexts/UserContext";

const Login = () => {
  const { logIn } = useContext(AuthContext);

  const naviget = useNavigate();

  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const googleProvider = new GoogleAuthProvider();

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    logIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log("Success");
        // console.log(user);
        naviget(from, { replace:true });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        naviget(from, { replace:true });
        // naviget('/');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="container mx-auto flex justify-center mt-52 border border-blue-500 w-52">
      <form onSubmit={handleLogIn}>
        <h1 className="text-center text-orange-400 text-2xl">Login</h1>
        <div>
          <h1>Email:</h1>
          <input
            className="border border-green-500"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
        </div>
        <div>
          <h1>Password:</h1>
          <p></p>
          <input
            className="border border-green-500"
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />
        </div>
        <div>
          <p>
            <small>
              Didn't sign in yet?{" "}
              <NavLink className="text-red-500" to="/signup">
                Sign up
              </NavLink>
            </small>
          </p>
        </div>
        <div className="text-center pb-4 mt-2">
          <button
            className="text-white bg-blue-500 rounded-lg p-1 text-sm"
            type="submit"
          >
            Email
          </button>
        </div>
        <div className="border border-green-400 mb-3 p-1 font-sixe">
          <p className="flex justify-center text-sm">
            Use one of these options{" "}
          </p>
          <div className="flex justify-evenly mb-2 mt-2">
            <div className="flex items-center p-2">
              <button
                onClick={handleGoogleLogin}
                className="bg-yellow-500 text-white p-1 rounded-lg"
              >
                Google
              </button>
            </div>
            <div className="flex items-center p-2">
              <button className="bg-yellow-500 text-white p-1 rounded-lg">
                Github
              </button>
            </div>
          </div>
        </div>
      </form>
      <div></div>
    </div>
  );
};

export default Login;
