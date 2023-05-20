import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
export const AuthContext = createContext();
const AuthProviders = ({ children }) => {

  const auth = getAuth(app);
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // create a new user
  const signUpWithEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // update user name after sign up
  const updateUser = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };
  // signin with email and password
  const loginWithEmail = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
// sign out 
  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }


  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, loggedUser => {
        console.log('logged in user inside auth state observer', loggedUser)
        setUser(loggedUser);
        setLoading(false);
    })

    return () => {
        unsubscribe();
    }
}, [])

  const authInfo = {
    signUpWithEmail,
    updateUser,
    loginWithEmail,
    user,
    loading,
    logOut
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
