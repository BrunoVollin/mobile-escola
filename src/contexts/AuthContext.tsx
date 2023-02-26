import React, { createContext, useState } from "react";
import UserService from "./../services/user";

type User = {
  name: string;
  email: string;
};

type AuthContextData = {
  user: User | null;
  signIn: (email: string, password: string) => void;
  signOut: () => void;
};

export const AuthContext = createContext({} as AuthContextData);

type AuthContextProviderProps = {
  children: React.ReactNode;
};

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  const signIn = async (email: string, password: string) => {
    const { first, last } = await UserService.login(email, password);
    setUser({
      name: first + " " + last,
      email,
    });
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
