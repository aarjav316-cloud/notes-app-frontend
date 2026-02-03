import { createContext, useEffect, useState } from "react";
import { loginUser, registerUser } from "../api/auth.api";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authLoading, setAuthLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    const savedUser = localStorage.getItem("user");

    if (savedToken && savedUser) {
      setUser(JSON.parse(savedUser));
    }

    setLoading(false);
  }, []);


  const login = async (formData) => {
    try {
      setAuthLoading(true);
      setError(null);

      const data = await loginUser(formData);

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      setUser(data.user);
    } catch (error) {
      setError(error.response?.data?.message || "login failed");
    } finally {
      setAuthLoading(false);
    }
  };

  const register = async (formData) => {
    try {
      setAuthLoading(true);
      setError(null);

      const data = await registerUser(formData);

      return data;
    } catch (error) {
      setError(error.response?.data?.message || "registration failed");
    } finally {
      setAuthLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: !!user,
        login,
        logout,
        authLoading,
        error,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};
