import React from 'react'
import PrincipalImage from '../../../assets/Img/UsoVario/Analytics.svg'
import { useAuth } from '../../../context/AuthContext'
useAuth
export const PrincipalPage = () => {
  const {user} = useAuth();
  return (
    <div class="p-4 sm:ml-64">
      <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
        <div class='flex justify-center items-center flex-col gap-24' style={{ minHeight: '85vh' }}>
          <p class='font-bold text-5xl'>Bienvenido, {user?.name_user}</p>
          <img class='w-1/3' src={PrincipalImage} alt="" />
        </div>
      </div>
    </div>
  )
}
