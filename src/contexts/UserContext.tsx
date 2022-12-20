import React, { createContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { useEffect } from "react";

export const UserContext = createContext<iAuthProviderFunctions>(
  {} as iAuthProviderFunctions
);

interface iAuthProviderFunctions {
  authenticated: boolean;
  user: null | iLogin;
  token: string | unknown
  register_user: (data: iRegisterUser) => number | unknown;
  login: (data: iLogin) => number | unknown;
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
  const [token, setToken] = useState<string | unknown>(null);

  useEffect(()=>{
    const loggedInUser = localStorage.getItem("@KenzieBurger")

  
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser))
      const saved_token = localStorage.getItem("KenzieBurgerToken")  

      if (saved_token) {
        setToken(JSON.parse(saved_token))
      }

      navigate("/homepage")
    }
  },[navigate])

  const register_user = async (data: iRegisterUser):Promise<number | unknown> => {
    try {
      const response = await api.post("users", data);
      return response.status
    } catch (error) {
      return error;
    }/**/
  };

  const login = async (data: iLogin):Promise<number | unknown> => {
    try {
      const response = await api.post("login", data);
      setUser(response.data.user)
      localStorage.setItem("@KenzieBurger", JSON.stringify(response.data.user))
      localStorage.setItem("@KenzieBurgerToken", JSON.stringify(response.data.accessToken))
      return response.status
    } catch (error) {
      return error;
    }

  };

  const logout = () => {
    setUser(null);
    setToken(null)
    localStorage.removeItem("@KenzieBurger")
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{ authenticated: !!user, user, token, register_user, login, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};
