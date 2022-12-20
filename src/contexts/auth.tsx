import React, { createContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { useEffect } from "react";

export const AuthContext = createContext<iAuthProviderFunctions>(
  {} as iAuthProviderFunctions
);

interface iAuthProviderFunctions {
  authenticated: boolean;
  user: null | iLogin;
  register_user: (data: iRegisterUser) => void;
  login: (data: iLogin) => void;
  logout: () => void;
}

interface iAuthProviderProps {
  children: React.ReactNode;
}

interface iLogin {
  email: string;
  password: string;
}

interface iRegisterUser {
  email: string;
  password: string;
  name: string;
}

export const AuthProvider = ({ children }: iAuthProviderProps) => {
  const navigate = useNavigate();

  const [user, setUser] = useState<iLogin | null>(null);

  useEffect(()=>{
    const loggedInUser = localStorage.getItem("@KenzieBurger")  
  
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser))
      navigate("/homepage")
    }
  },[navigate])

  const register_user = async (data: iRegisterUser) => {
    try {
      const response = await api.post("users", data);
      return response;
    } catch (error) {
      return error;
    }/**/
  };

  const login = async (data: iLogin) => {
    console.log(data)
    try {
      const response = await api.post("login", data);
      console.log(response)
      setUser(response.data.user)
      localStorage.setItem("@KenzieBurger", JSON.stringify(response.data.user))
      localStorage.setItem("@KenzieBurgerToken", JSON.stringify(response.data.accessToken))
      return response;
    } catch (error) {
      return error;
    }
    /*setUser({
      name: "string",
      password: "string",
    });
    return data;*/
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("@KenzieBurger")
    navigate("/");
  };
  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, register_user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
