import React, { createContext, useState, useEffect } from "react";
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
  const tokenStorage = new TokenStorage();

  useEffect(() => {
    async function loadStorageData() {
      const storageToken = await tokenStorage.getToken();
      if (!storageToken) {
        return;
      }
      const storageUser = await tokenStorage.getUser();
      setUser(storageUser);
    }

    loadStorageData();
  }, []);

  const signIn = async (
    email: string,
    password: string,
    userType: "teacher" | "student" | "adm"
  ) => {
    const res = await UserService.login(email, password, userType);

    const userData = {
      name: res.user.first + " " + res.user.last,
      email: res.user.email,
    };
    if (res.token) {
      await tokenStorage.saveToken(res.token);
      await tokenStorage.saveUser(userData);

      setUser(userData);
    } else {
      console.log("token not saved");
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
