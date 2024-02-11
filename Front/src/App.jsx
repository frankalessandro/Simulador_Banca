import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from "./Home/Home"
import { DashboardMenu } from "./Pages/DashboardMenu";
import { Login } from './Components/Login/Login';


export default function MyPage() {
   return (
      <div>
         <DashboardMenu/>
      </div>


   );
}