import React from 'react'
import NoDisponible from '../../../assets/Img/no service.svg'
export const No_Disponible = () => {
    return (
        <>
            <div class="p-4 sm:ml-64">
                <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                    <div class='bg-gray-200 flex justify-center items-center flex-col gap-10' style={{ minHeight: '85vh' }}>
                        <p class='font-bold text-3xl'>Estamos trabajando para mejorar tu experiencia...</p>
                        <img class='w-1/3' src={NoDisponible} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
