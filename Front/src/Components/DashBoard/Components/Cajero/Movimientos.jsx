import React, { useEffect, useState } from 'react'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Movimientos = () => {

    return (
        <>
            <div className="p-4 sm:ml-64">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                    <div className='flex justify-center items-center flex-col gap-10' style={{ minHeight: '85vh' }}>
                        <h1>Aqui se consigna y se retira</h1>
                    </div>
                </div>
            </div>
        </>
    )
}
