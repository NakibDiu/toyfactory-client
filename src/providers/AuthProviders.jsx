import { createContext } from "react";
import app from "../firebase/firebase.config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
export const AuthContext = createContext();
const AuthProviders = ({ children }) => {
  const auth = getAuth(app);

  // create a new user
  const signUpWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // update user name after sign up
  const updateUser = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };
  // signin with email and password
  const loginWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {
    signUpWithEmail,
    updateUser,
    loginWithEmail
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
