import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from "./Home/Home"
import { DashboardMenu } from "./Pages/DashboardMenu";
import { Login } from './Components/Login/Login';


export default function MyPage() {
   return (
      <div>
      
         <Router>
            <Routes>
               <Route path='/' element={<Home/>} />
               <Route path='/Login' element={<Login/>} />
               <Route path='/DashBoardMenu' element={<DashboardMenu/>} />
               <Route path='/' element={<Home/>} />
            </Routes>
         </Router>
     
      </div>


   );
}