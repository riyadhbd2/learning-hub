
import {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const SignUp = () => {

   const {createUser, updateUserProfile} = useContext(AuthContext);

    const handleSignUp = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        console.log(name,email,password,confirm);

        createUser(email, password)
        .then(result=>{
            const user = result.user;
            handleUpdate(name); 
            console.log(user);
            form.reset();

        } )
        .catch(error =>{
            console.error(error);
        })

        const handleUpdate = (name) =>{
            const profile ={
                displayName: name
            }
            updateUserProfile(profile)
            .then(() =>{})
            .catch(error =>console.error(error))
        }


    }
    return (
      <div className="container mx-auto flex justify-center mt-52 border border-blue-500 w-52">
          <form onSubmit={handleSignUp}>
                <h1 className="text-center text-orange-400 text-2xl">Sign Up</h1>
                <div>
                    <h1>Name:</h1>
                    <input className="border border-green-500" type="text" name="name" id="name" placeholder="Name"/>
                </div>
                <div>
                    <h1>Email:</h1>
                    <input className="border border-green-500" type="email" name="email" id="email" placeholder="Email" />
                </div>
                <div>
                    <h1>Password: </h1>
                    <input className="border border-green-500"  type="password" name="password" id="password" placeholder="password" />
                </div>
                <div>
                    <h1>Confirm Password: </h1>
                    <input className="border border-green-500"  type="password" name="confirm" id="confirm" placeholder="password" />
                </div>
                <div>
                    <p><small>Already Signed In? <NavLink className="text-red-400" to="/login">Login</NavLink></small></p>
                </div>
                <div className="text-center pb-4 mt-2">
                    <button  className="text-white bg-orange-400 rounded-lg p-1 text-sm" type="submit">Sign Up</button>
                </div>
            </form>
      </div>
    );
};

export default SignUp;