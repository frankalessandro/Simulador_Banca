import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from "./Home/Home"
import { DashboardMenu } from "./Pages/DashboardMenu";
import { LandingPage } from './Pages/LandingPage';
import Login from './Pages/Login';

export default function MyPage() {
   return (
      <div>
      
         <Router>
            <Routes>
               <Route path='/' element={<Home/>} />
               <Route path='/Login' element={<Login/>} />
               <Route path='/DashBoardMenu' element={<DashboardMenu/>} />
               <Route path='/Landing' element={<LandingPage/>} />
            </Routes>
         </Router>
     
      </div>


   );
}