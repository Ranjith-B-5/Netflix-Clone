import React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import auth from '../Firebase'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth'
 
const AuthContext = createContext()

const AuthContextProvider = ({children}) =>
{
    const[user, setUser] = useState({})

    function signUp(email, password)
    {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function logOut()
    {
        return signOut(auth)
    }

    function logIn(email, password)
    {
        return signInWithEmailAndPassword(auth, email, passsword);
    }

    useEffect(()=>
    {
        const unsubscribe = onAuthStateChanged(auth, (currentuser)=>
        {
            setUser(currentuser)
        });
        return () =>
        {
            unsubscribe();
        }
    })

    return(
        <AuthContext.Provider value={{signUp, logIn, logOut, user}}>
            {children}
        </AuthContext.Provider>
    )
}

const UserAuth = () =>
{
    return useContext(AuthContext)
}

 export {AuthContextProvider, UserAuth};
