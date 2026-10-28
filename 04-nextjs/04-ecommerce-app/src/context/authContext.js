"use client";

import axiosInstance from "@/lib/api";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const router = useRouter();

  const getCurrentUser = async () => {
    try {
      const { data } = await axiosInstance.get("/api/auth/user");
      console.log(data);
      setUser(data.user);
      router.push("/home");
    } catch (error) {
      setUser(null);
      console.log(error);
    }
  };

  const value = {
    user,
    setUser,
    getCurrentUser,
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
