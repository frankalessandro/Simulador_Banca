import React, { createContext, useState, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [Asesor, setAsesor] = useState(null);
  const [isDirector, setIsDirector] = useState(false);

  useEffect(() => {
    const loggedIn = Cookies.get('isLoggedIn');
    if (loggedIn === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    const storedUser = Cookies.get('User');
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setUser(userData);
      setIsAdmin(userData.rol === 'Director');
    }
  }, []);

  const login = (userData) => {
    Cookies.set('User', JSON.stringify(userData));
    setUser(userData);
    Cookies.set('isLoggedIn', 'true', { expires: 7 });
    setIsLoggedIn(true);
    setIsAdmin(userData.rol === 'Director');
  };

  const logout = () => {
    Cookies.remove('User');
    setUser(null);
    setIsAdmin(false);
    Cookies.remove('isLoggedIn');
    setIsLoggedIn(false);
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
//   const updateUserData = async (userData) => {

//     try {
//       // Realiza la solicitud al servidor para actualizar los datos del usuario
//       const response = await fetch('http://localhost:3000/updateUser', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(userData),q
//       });

  
//       if (response.ok) {
//         // Los datos del usuario se actualizaron correctamente en el servidor
//         const updatedUserData = await response.json();
//         setUserData(updatedUserData); // Actualiza los datos del usuario en el contexto

//         // Guarda los datos actualizados en una cookie
//         Cookies.set('User', JSON.stringify(updatedUserData));

//         return { success: true, message: 'Datos de usuario actualizados con éxito' };
//       } else {
//         // Hubo un error al actualizar los datos del usuario en el servidor
//         const errorData = await response.json();
//         return { success: false, message: errorData.message };
//       }
//     } catch (error) {
//       console.error('Error al actualizar los datos del usuario:', error);
//       return { success: false, message: 'Error en el servidor' };
//     }
//   };
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
        isAdmin,
        updateUserData
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};