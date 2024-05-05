import { createContext, useState } from 'react';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'; 
import app from '../firebase/firebase.config';

export const AuthContext = createContext();

export const auth = getAuth(app);

const UserContext = ({children}) => {

    const [user, setuser] = useState(null);

    // create user
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {user, createUser}

    return (
        <div>
            <AuthContext.Provider value = {authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;