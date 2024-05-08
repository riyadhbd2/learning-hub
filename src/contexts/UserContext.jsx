import { createContext, useEffect, useState } from 'react';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from 'firebase/auth';

import app from '../firebase/firebase.config';

export const AuthContext = createContext();

export const auth = getAuth(app);


const UserContext = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create user
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // login with email and password
    const logIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logOut
    const logOut = (auth) =>{
        return signOut(auth);
    }



    // user detecttion
    useEffect(()=>{
        const unSubscriber = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);

        });
        return unSubscriber;
    },[])
    const authInfo = {user, createUser, logIn, logOut, loading}

    return (
        <div>
            <AuthContext.Provider value = {authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;