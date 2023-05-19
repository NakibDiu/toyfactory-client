import { createContext } from "react";
import app from "../firebase/firebase.config";
const AuthProviders = ({ children }) => {
  const AuthContext = createContext();

  const signUpWithEmail = (email, password) => {};

  const authInfo = {};
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
