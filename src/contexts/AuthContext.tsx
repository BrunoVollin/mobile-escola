import React, { createContext, useState } from "react";
import UserService from "./../services/user";
import TokenStorage from "../services/storage/TokenStorage";

type User = {
  name: string;
  email: string;
};

type AuthContextData = {
  user: User | null;
  signIn: (
    email: string,
    password: string,
    userType: "teacher" | "student" | "adm"
  ) => void;
  signOut: () => void;
};

export const AuthContext = createContext({} as AuthContextData);

type AuthContextProviderProps = {
  children: React.ReactNode;
};

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  const signIn = async (
    email: string,
    password: string,
    userType: "teacher" | "student" | "adm"
  ) => {
    const { user, token } = await UserService.login(
      email,
      password,
      userType
    );

    const { first, last } = user;

    if (token) {
      console.log("token: " + token);
      const tokenStorage = new TokenStorage();
      await tokenStorage.saveToken(token);
      setUser({
        name: first + " " + last,
        email,
      });
    }
  };

  const signOut = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
