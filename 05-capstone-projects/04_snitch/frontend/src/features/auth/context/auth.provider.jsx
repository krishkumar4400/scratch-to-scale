import { useState } from "react";
import { register } from "../services/auth.api.js";
import { AuthContext } from "./auth.context.js";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const handleRegister = async ({
    fullName,
    email,
    password,
    contactNumber,
  }) => {
    try {
      const data = await register({ fullName, email, password, contactNumber });
      if (data.success) {
        setUser(data.user);
        return {
          message: "You have been registered successfully",
          success: true,
          user: data.user,
        };
      }
      return {
        success: false,
        message: "data.message",
      };
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        handleRegister,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
