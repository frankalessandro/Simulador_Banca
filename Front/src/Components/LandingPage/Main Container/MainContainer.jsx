import React from 'react'
import FrontImage from '../../../assets/Img/Main_Image.svg'
export const MainContainer = () => {
  return (
    <>
    <div className='w-full h-128 bg-red-600 flex'>
        <div>Bienvenidos a <span>ClarBank</span> guardar tu dinero es facil y rapido.</div>
        
    </div>
    <img className='w-106' src={FrontImage} alt="" />
    </>
  )
}
