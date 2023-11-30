import React from 'react'
import { TopNavbar } from '../Components/LandingPage/TopNavbar/TopNavbar'
import { Carousel } from 'flowbite-react'
import { MainContainer } from '../Components/LandingPage/Main Container/MainContainer'

export const LandingPage = () => {
  return (
    <>
    <TopNavbar/>
    <MainContainer/>
    <Carousel/>
    </>
  )
}
