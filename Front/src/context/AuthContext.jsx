import React, { createContext, useState, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isDirector, setIsDirector] = useState(false);

  useEffect(() => {
    const loggedIn = Cookies.get('isLoggedIn');
    if (loggedIn === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    const bankUser = Cookies.get('User');
    if (bankUser) {
      const userData = JSON.parse(bankUser);
      setUser(userData);
      setIsDirector(userData.rol === '1');
    }
  }, []);

  const login = (userData) => {
    Cookies.set('User', JSON.stringify(userData));
    setUser(userData);
    Cookies.set('isLoggedIn', 'true', { expires: 7 });
    setIsLoggedIn(true);
    setIsDirector(userData.rol === '1');
  };

  const logout = () => {
    console.log("se presiono  cerrar sesion")
    Cookies.remove('User');
    setUser(null);
    setIsDirector(false);
    Cookies.remove('isLoggedIn');
    setIsLoggedIn(false);
    // Utiliza Navigate para redirigir en lugar de window.location
    window.location = "/landing"
  };

  const setUserData = (userData) => {
    setUser(userData);
  };

  const setCookie = (name, value) => {
    Cookies.set(name, value);
  };

  const getCookie = (name) => {
    return Cookies.get(name);
  };

  const updateUserData = async (userData) => {
    try {
      const response = await fetch('http://localhost:3000/UpdateUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const updatedUserData = await response.json();
        setUserData(updatedUserData);
        Cookies.set('User', JSON.stringify(updatedUserData));

        return { success: true, message: 'Datos de usuario actualizados con éxito' };
      } else {
        const errorData = await response.json();
        return { success: false, message: errorData.message };
      }
    } catch (error) {
      console.error('Error al actualizar los datos del usuario:', error);
      return { success: false, message: 'Error en el servidor' };
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        login,
        logout,
        user,
        setUserData,
        setCookie,
        getCookie,
        isDirector,
        updateUserData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
