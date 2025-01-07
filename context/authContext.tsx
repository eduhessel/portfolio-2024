"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// Defina os tipos para o contexto
interface AuthContextType {
  authenticated: boolean;
  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>; // Adicionando setAuthenticated
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provedor de autenticação
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authenticated, setAuthenticated] = useState(false);

  const login = () => setAuthenticated(true); // Logando o usuário
  const logout = () => setAuthenticated(false); // Deslogando o usuário

  return (
    <AuthContext.Provider
      value={{ authenticated, setAuthenticated, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Hook para acessar o contexto de autenticação
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
