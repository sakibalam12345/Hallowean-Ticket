import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/Firebase.config";


export const Authcontext = createContext(null);
const auth = getAuth(app);

const Authprovider = ({children}) => {

    const [user,setuser] = useState(null);
    const [loading,setloading] = useState(true)
    console.log(user)

    const createuser = (email,password)=>{
        setloading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const login = (email,password) =>{
        setloading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logout = ()=>{
        setloading(true)
        return signOut(auth)
    }
   useEffect(()=>{
  const unsubscribe =  onAuthStateChanged(auth, currentuser =>{
    console.log('on chane', currentuser)
        setuser(currentuser);
        setloading(false)
    });
    return ()=>{
        unsubscribe();
    }

  },[])


    const authinfo= {user,createuser,login,logout,loading}
    return (
        <Authcontext.Provider value={authinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;