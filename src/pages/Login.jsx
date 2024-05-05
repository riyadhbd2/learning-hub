
import { NavLink } from 'react-router-dom';

const Login = () => {
    return (
        <div className="container mx-auto flex justify-center mt-52 border border-blue-500 w-52">

            <form>
                <h1 className="text-center text-orange-400 text-2xl">Login</h1>
                <div>
                    <h1>Email:</h1>
                    <input className="border border-green-500" type="email" name="email" id="email" placeholder="Email" />
                </div>
                <div>
                    <h1>PAssword:</h1>
                    <p>

                    </p>
                    <input className="border border-green-500" type="password" name="password" id="password" placeholder="password"/>
                </div>
                <div>
                    <p><small>Didn't sign in yet? <NavLink className="text-red-500" to="/signup">Sign up</NavLink></small></p>
                </div>
                <div className="text-center pb-4 mt-2">
                    <button className="text-white bg-orange-400 rounded-lg p-1 text-sm" type="submit">Sign In</button>
                </div>
            </form>
            
        </div>
    );
};

export default Login;