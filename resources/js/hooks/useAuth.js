import { createContext, useContext } from "react";

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthAdminContext = createContext();
export const useAuthAdmin = () => useContext(AuthAdminContext);
