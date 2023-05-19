import { createContext } from "react";
import app from "../firebase/firebase.config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
export const AuthContext = createContext();
const AuthProviders = ({ children }) => {
  const auth = getAuth(app);

  const signUpWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {
    signUpWithEmail,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
