import React from 'react'
import TopLogo from '../../../assets/Img/Logos/ClarBank LogoOnly.svg'
export const TopNavbar = () => {
    return (
        <>
            <nav class="bg-white border-gray-200 dark:bg-gray-900 shadow-xl- ">
                <div class="max-w-screen-x flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={TopLogo} class="h-12" alt="ClarBank" />
                    </a>
                    <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button type="button" class="text-Black bg-green-600 hover:bg-green focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Login</button>

                    </div>
                    
                </div>
            </nav>
        </>
    )
}
