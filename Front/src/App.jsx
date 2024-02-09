import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from "./Home/Home"
import { DashboardMenu } from "./Pages/DashboardMenu";


export default function MyPage() {
   return (
      <div>
         <Home />
      </div>


   );
}