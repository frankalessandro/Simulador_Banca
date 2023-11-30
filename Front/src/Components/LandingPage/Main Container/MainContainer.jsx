import React from 'react'
import FrontImage from '../../../assets/Img/Main_Image.svg'
export const MainContainer = () => {
  return (
    <>
    <div className='w-full h-128 bg-blue-600 flex'>
        <div>Bienvenidos a <span>ClarBank</span> guardar tu dinero es facil y rapido.</div>
        <img className='w-96' src={FrontImage} alt="" />
    </div>
    
    </>
  )
}
