import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { DashboardMenu } from "./Pages/DashboardMenu";
import Login from './Components/Login/Login';
import { Home } from './Home/Home';
Home

export default function MyPage() {
   return (
      <div>
      
         <Router>
            <Routes>
               <Route path='/' element={<Home/>} />
               <Route path='/Login' element={<Login/>} />
               <Route path='/DashBoardMenu' element={<DashboardMenu/>} />
               
            </Routes>
         </Router>
     
      </div>


   );
}