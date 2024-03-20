import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from "./Home/Home"
import { DashboardMenu } from "./Pages/DashboardMenu";
import { LandingPage } from './Pages/LandingPage';
import Login from './Pages/Login';
import { CrearUsuario } from './Components/DashBoard/Components/Director/CrearUsuario';
import { AutorizacionCuentas } from './Components/DashBoard/Components/Director/AutorizacionCuentas';

const URL = import.meta.env.VITE_BACKEND_URL || 'https://simulador-banca.onrender.com/';

export default function MyPage() {

   return (
      <Router>
         <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/Login' element={<Login />} />
            
            <Route path='/DashBoardMenu' element={<DashboardMenu />} />
            <Route path='/Landing' element={<LandingPage />} />
            <Route path='/CrearUsuario' element={<CrearUsuario/>} />
            <Route path='/AutorizacionCuentas' element={<AutorizacionCuentas/>} />
         </Routes>
      </Router>
   );
}