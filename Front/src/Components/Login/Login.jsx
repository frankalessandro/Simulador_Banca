import React from 'react'
import Logo from '../../assets/Img/Logos/ClarBank Logo.svg'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (

    <div  className="absolute inset-0 bg-green-100 " >
    <div className=' absolute inset-0 flex items-center md:justify-center max-sm:justify-center max-[900px]:justify-center lg:justify-evenly'>
        <div className="lg:not-sr-only max-[900px]:sr-only md:sr-only max-sm:sr-only ">
            <img src={Logo} alt="" className="object-cover" />
        </div>

<div className="w-full max-w-sm  p-4  bg-white border border-gray-200 rounded-lg shadow sm:p-8 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <form className="space-y-6" action="#">
        <img  src={Logo}  className="flex justify-center h-64 w-96 lg:sr-only md:not-sr-only "/>
        <div>
            <label htmlFor="Text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
            <input type="Text" name="Names" id="Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green focus:border-green block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-green dark:text-white" placeholder="Your Name" required />
        </div>
        <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green focus:border-green block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
        </div>
        <div className="flex items-start">
            <div className="flex items-start">
                <div className="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" className="w-4 h-4  border border-gray-300 rounded bg-gray-100 focus:ring-3 focus:ring-green dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-green dark:ring-offset-gray-600 dark:focus:ring-offset-gray" required />
                </div>
                <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
            </div>
            <a href="#" className="ms-auto text-sm text-green-700 hover:underline dark:text-green-500">Lost Password?</a>
        </div>
        <Link to="/DashBoardMenu">
        <button type="sumit" className="w-full text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Login to your account</button>
        </Link>
      
    </form>
</div>

    </div>
    </div>
  )
}
