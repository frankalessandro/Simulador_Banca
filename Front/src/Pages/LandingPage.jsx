import React from 'react'
import { TopNavbar } from '../Components/LandingPage/TopNavbar/TopNavbar'
import { Carousel } from '../Components/LandingPage/Carousel/Carousel'
import { MainContainer } from '../Components/LandingPage/Main Container/MainContainer'
import { Footer } from '../Components/LandingPage/Footer/Footer'
import { Banner } from '../Components/LandingPage/Banner/Banner'


export const LandingPage = () => {
  return (
    <>
    <TopNavbar/>
    <div class="bg-slate-100 ">
      <div class="py-5">
    <Banner/>
    </div>
    <Carousel/>
    <MainContainer/>
    <Footer/>
    </div>
    
  
    </>
  )
}
