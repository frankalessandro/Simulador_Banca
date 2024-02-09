import React from 'react'
import { TopNavbar } from '../Components/LandingPage/TopNavbar/TopNavbar'
import { Carousel } from '../Components/LandingPage/Carousel/Carousel'
import { MainContainer } from '../Components/LandingPage/Main Container/MainContainer'
import { Footer } from '../Components/LandingPage/Footer/Footer'


export const LandingPage = () => {
  return (
    <>
    <TopNavbar/>
    <div class="bg-gray-200">
    <Carousel/>
    <MainContainer/>
    <Footer/>
    </div>
    
  
    </>
  )
}
