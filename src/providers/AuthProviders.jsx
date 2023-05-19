import { createContext } from "react"
const AuthProviders = ({children}) => {
    const AuthContext = createContext()

    const authInfo = {

    }
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProviders