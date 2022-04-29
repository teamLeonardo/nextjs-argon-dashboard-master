import { createContext, useContext } from "react"

const AuthContext = createContext({})


export const AuthStore = ({ children }) => {
    return <AuthContext.Provider value={{}}>
        {children}
    </AuthContext.Provider>
}
export function useAuth() {
    return useContext(AuthContext);
}