import React, { createContext } from "react";
import axios from "axios";

const AuthContextProvider = createContext();

const AuthContext = ({ children }) => {
  const values = {
    axios,
  };
  return (
    <AuthContextProvider.Provider value={values}>
      {children}
    </AuthContextProvider.Provider>
  );
};

export default AuthContext;
