import React, { useState } from 'react'
import Logo from '../../assets/Img/Logos/ClarBank LogoOnly.svg'
import { ContentCuentaAhorroJuridica } from './Components/ContentCuentaAhorroJuridica/ContentCuentaAhorroJuridica'
import { ContentCuentaAhorroNatural } from './Components/ContentCuentaAhorroNatural/ContentCuentaAhorroNatural'
import { PrincipalPage } from './Components/PrincipalPage'
import Namelogo from '../../assets/Img/Logos/ClarBank Name.svg'
import { No_Disponible } from './Components/NoDisponible'
import { AutorizacionCuentas } from './Components/Director/AutorizacionCuentas'
import { CrearUsuario } from './Components/Director/CrearUsuario'
import { useAuth } from '../../context/AuthContext'
import { Reportes } from './Components/Director/Reportes'
import { Sidebar } from 'flowbite-react';
import { Dropdown } from 'flowbite-react';
import { HiShoppingCart, HiOutlineViewList, HiUser, HiClipboard, HiUserCircle, HiUserGroup } from "react-icons/hi";
import { Historial } from './Components/Director/Historial'
import { HistorialD } from './Components/Director/HistorialD'
import { Movimientos } from './Components/Cajero/Movimientos'



export const DashboardComponent = () => {


    const [active, setactive] = useState("fixed top-0 left-0 z-40 w-64 shadow-lg h-screen pt-20 transition-transform -translate-x-full bg-green border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700")

    const Abrir = () => {
        if (active === "fixed top-0 left-0 z-40 w-64 shadow-lg h-screen pt-20 transition-transform -translate-x-full bg-green border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700") {
            setactive("fixed top-0 left-0 z-40 w-64 shadow-lg h-screen pt-20 transition-transform -translate-x-px bg-green border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700");

        } else {
            setactive("fixed top-0 left-0 z-40 w-64 shadow-lg h-screen pt-20 transition-transform -translate-x-full bg-green border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700")

        }
    }

    const { user, isLoggedIn, logout } = useAuth();

    console.log(user)

    const [contenidoSeleccionado, setContenidoSeleccionado] = useState('PrincipalPage');
    // Función para manejar clics de botones
    const handleBotonClick = (contenido) => {
        setContenidoSeleccionado(contenido);
    }
    console.log({ contenidoSeleccionado })
    const handlelogout = () => {
        logout()
    }

    return (
        <>
            {isLoggedIn &&(
                <>
                    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                        <div className="px-3 py-3 lg:px-5 lg:pl-3">
                            <div className="flex items-center justify-between">

                                <div className="flex items-center justify-start rtl:justify-end">
                                    <button onClick={Abrir} type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">

                                        <HiOutlineViewList className='h-8 w-5 flex items-center' />
                                        <span className="sr-only">Open sidebar</span>
                                    </button>
                                    <a href="#" className="flex ms-2 md:me-24">
                                        <img src={Logo} className="h-8 me-3" alt="ClarBankLogo" />
                                        <span className=""><img src={Namelogo} alt="" className='relative h-4  top-2 ' /></span>
                                    </a>
                                </div>

                                <div className="flex items-center">
                                    <div className="flex items-center ms-3">



                                        <Dropdown
                                            arrowIcon={false}
                                            inline
                                            label={
                                                <button className='flex flex-row items-center  text-sm bg-white rounded-full focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-600'> <p className=' flex items-center text-sm bg-white rounded-full focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-600 '>{user?.name_user} - {user?.rol == 2 && (<> Asesor </>)}{user?.rol == 1 && (<> Director </>)} </p><HiUserCircle color='gray' className='w-16 h-10 ' />  </button>
                                            }
                                        >
                                            <Dropdown.Header>
                                                <span className="block text-sm">{user?.name_user}</span>
                                                <span className="block truncate text-sm font-medium">{user?.name_user}@ClarBank.com</span>
                                            </Dropdown.Header>
                                            <Dropdown.Divider />
                                            <Dropdown.Item onClick={handlelogout}>Salir</Dropdown.Item>
                                        </Dropdown>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <Sidebar className={active} aria-label="Sidebar">
                        <div className="fixed left-0 top-1 py-10 h-full px-3 pb-4 w-full  overflow-y-auto bg-green dark:bg-gray-800  "  >
                            <Sidebar.ItemGroup className="space-y-2 font-medium ">




                                <li>
                                    <button href="#" onClick={() => handleBotonClick('PrincipalPage')} className="flex items-center p-2 text-white w-full rounded-lg hover:text-black hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        <svg className="w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                            <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                            <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                        </svg>
                                        <span className="ms-3">Inicio</span>
                                    </button>
                                </li>



                                {user?.rol == 2 && (<>


                                    <Sidebar.Collapse
                                        className="flex items-center w-full p-2 text-base text-white transition duration-75 rounded-lg group hover:bg-white hover:text-black dark:text-white dark:hover:bg-gray-700" label={<label className='flex  flex-row  relative right-4 items-center '> <HiShoppingCart color='white || black' className='flex relative right-1 items-center justify-center w-12' /> Apertura de cuentas </label>}   >

                                        <Sidebar.Collapse label={<label className='flex  flex-row  relative right-4 items-center'> <HiClipboard color='white || black' className='flex relative right-1 items-center justify-center w-12' /> Cuenta de Ahorro </label>} className="flex items-center w-full p-2 text-base text-white  transition duration-75 rounded-lg group hover:bg-gray-100  hover:text-black dark:text-white dark:hover:bg-gray-700" >
                                            <Sidebar.Item onClick={() => handleBotonClick('FormularioPersonaNatural')} class="flex items-center  relative left-4 w-full p-2 text-base text-white transition duration-75 rounded-lg group hover:text-black hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">{<p className='flex  flex-row  relative right-5 items-center'><HiUser color='white || black' className='flex relative right-1 items-center justify-center w-12' /> Persona Natural</p>}</Sidebar.Item>
                                            <Sidebar.Item onClick={() => handleBotonClick('FormularioPersonaJuridica')} class="flex items-center relative left-4  w-full p-2 text-base text-white transition duration-75 rounded-lg group  hover:bg-gray-100 hover:text-black dark:text-white dark:hover:bg-gray-700">{<p className='flex  flex-row  relative right-5 items-center'><HiUserGroup color='white || black' className='flex relative right-1 items-center justify-center w-12' /> Persona Juridica</p>}</Sidebar.Item>
                                        </Sidebar.Collapse>
                                    </Sidebar.Collapse>
                                    <Sidebar.Item onClick={() => handleBotonClick('FormularioPersonaNatural')} class=" flex items-center justify-start p-2 text-white w-full rounded-lg hover:text-black hover:bg-gray-100 dark:hover:bg-gray-700 group">{<p className='flex justify-start items-center relative right-5'><HiUser color='white || black' className='flex   items-center justify-start h-5 w-12' />Busqueda de Cuentas</p>}</Sidebar.Item>





                                    {/* <li>

                                        <button type="button" className="flex items-center w-full p-2 text-base text-white transition duration-75 rounded-lg group hover:bg-gray-100 hover:text-black dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                            <svg className="flex-shrink-0 w-5 h-5 text-white transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                                                <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                                            </svg>
                                            <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Apertura de Cuentas</span>
                                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                            </svg>
                                        </button>

                                        <ul id="dropdown-example" className="hidden py-2 space-y-2 pl-4">
                                            <li>
                                                <button type="button" className="flex items-center w-full p-2 text-base text-white transition duration-75 rounded-lg group hover:bg-gray-100 hover:text-black dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-cuentahorro" data-collapse-toggle="dropdown-cuentahorro">
                                                    <svg className="flex-shrink-0 w-6 h-6 text-white transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                        <path fillRule="evenodd" d="M12 14a3 3 0 0 1 3-3h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4a3 3 0 0 1-3-3Zm3-1a1 1 0 1 0 0 2h4v-2h-4Z" clipRule="evenodd" />
                                                        <path fillRule="evenodd" d="M12.3 3.3a1 1 0 0 1 1.4 0L16.4 6h-2.8l-1.3-1.3a1 1 0 0 1 0-1.4Zm.1 2.7L9.7 3.3a1 1 0 0 0-1.4 0L5.6 6h6.8ZM4.6 7A2 2 0 0 0 3 9v10c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2h-4a5 5 0 0 1 0-10h4a2 2 0 0 0-1.5-2h-13Z" clipRule="evenodd" />
                                                    </svg>

                                                    <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Cuenta de Ahorro</span>
                                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                                    </svg>
                                                </button>
                                                <ul id="dropdown-cuentahorro" className="hidden py-2 space-y-2 pl-6">
                                    <li>
                                        <button type="button" onClick={() => handleBotonClick('FormularioPersonaNatural')} class="flex items-center w-full p-2 text-base text-white transition duration-75 rounded-lg group hover:text-black hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                                            <svg className="w-6 h-6 text-white dark:text-white transition duration-75 group-hover:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                <path fillRule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clipRule="evenodd" />
                                            </svg>
                                            <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Persona Natural</span>
                                        </button>
                                    </li> 
                                                     <li>
                                                        <button type="button" onClick={() => handleBotonClick('FormularioPersonaJuridica')} class="flex items-center w-full p-2 text-base text-white transition duration-75 rounded-lg group  hover:bg-gray-100 hover:text-black dark:text-white dark:hover:bg-gray-700">
                                                            <svg className="w-6 h-6 text-white dark:text-white transition duration-75 group-hover:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                                <path fillRule="evenodd" d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4c0 1.1.9 2 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.8-3.1a5.5 5.5 0 0 0-2.8-6.3c.6-.4 1.3-.6 2-.6a3.5 3.5 0 0 1 .8 6.9Zm2.2 7.1h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1l-.5.8c1.9 1 3.1 3 3.1 5.2ZM4 7.5a3.5 3.5 0 0 1 5.5-2.9A5.5 5.5 0 0 0 6.7 11 3.5 3.5 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4c0 1.1.9 2 2 2h.5a6 6 0 0 1 3-5.2l-.4-.8Z" clipRule="evenodd" />
                                                            </svg>
                                                            <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Persona Juridica</span>
                                                        </button>
                                                    </li>
                                                </ul>
                                            </li>  */}

                                    {/* <li>
                                    <button type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-cuentacorriente" data-collapse-toggle="dropdown-cuentacorritente">
                                    <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8H5m12 0c.6 0 1 .4 1 1v2.6M17 8l-4-4M5 8a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h12c.6 0 1-.4 1-1v-2.6M5 8l4-4 4 4m6 4h-4a2 2 0 1 0 0 4h4c.6 0 1-.4 1-1v-2c0-.6-.4-1-1-1Z" />
                                    </svg>
                                    <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Cuenta Corriente</span>
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                    </button>
                                    <ul id="dropdown-cuentacorritente" className="hidden py-2 space-y-2">
                                    <li>
                                    <a href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Persona Natural</a>
                                    </li>
                                    <li>
                                    <a href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Persona Juridica</a>
                                    </li>
                                    </ul>
                                </li> */}
                                    {/* </ul>
                               
                                    </li> */}
                                    {/* <li>
                                <a href="#" onClick={() => handleBotonClick('NoDisponible')} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="w-6 h-6 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M4 5a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H4Zm0 6h16v6H4v-6Z" clipRule="evenodd" />
                                        <path fillRule="evenodd" d="M5 14c0-.6.4-1 1-1h2a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Zm5 0c0-.6.4-1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1Z" clipRule="evenodd" />
                                    </svg>
                                    <span className="flex-1 ms-3 whitespace-nowrap">Tarjetas de Crédito</span>
                                </a>
                            </li>
                            <li>
                                <button type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-credit" data-collapse-toggle="dropdown-credit">
                                    <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                        <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                                    </svg>
                                    <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Créditos</span>
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                </button>
                                <ul id="dropdown-credit" className="hidden py-2 space-y-2 pl-4">
                                    <li>
                                        <a href="#" onClick={() => handleBotonClick('NoDisponible')} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                            <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                                <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                                            </svg>
                                            <span className="flex-1 ms-3 whitespace-nowrap">Crédito Vehículo</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" onClick={() => handleBotonClick('NoDisponible')} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                            <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                                <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                                            </svg>
                                            <span className="flex-1 ms-3 whitespace-nowrap">Crédito Hogar</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" onClick={() => handleBotonClick('NoDisponible')} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="w-6 h-6 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M7 6c0-1.1.9-2 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-2v-4a3 3 0 0 0-3-3H7V6Z" clipRule="evenodd" />
                                        <path fillRule="evenodd" d="M2 11c0-1.1.9-2 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7Zm7.5 1a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" clipRule="evenodd" />
                                        <path d="M10.5 14.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
                                    </svg>
                                    <span className="flex-1 ms-3 whitespace-nowrap">Inversiones</span>
                                </a>
                            </li> */}
                                </>)}
                                {user?.rol == 1 && (
                                    <>
                                        <li>
                                            <a href="#" onClick={() => handleBotonClick('AutorizacionCuentas')} className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 group">
                                                <svg className="flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                                                    <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                                                    <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                                                </svg>
                                                <span className="flex-1 ms-3 whitespace-nowrap">Autorización de Cuentas</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" onClick={() => handleBotonClick('CrearUsuario')} className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 group">
                                                <svg className="w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                    <path fillRule="evenodd" d="M9 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H7Zm8-1c0-.6.4-1 1-1h1v-1a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 0 1-1-1Z" clipRule="evenodd" />
                                                </svg>
                                                <span className="flex-1 ms-3 whitespace-nowrap">Creación de Usuarios</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" onClick={() => handleBotonClick('Reportes')} className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 group">
                                                <svg className="w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                    <path fillRule="evenodd" d="M5.6 2c.4 0 .8 0 1.1.3L8 3.6l1.3-1.3a1 1 0 0 1 1.4 0L12 3.6l1.3-1.3a1 1 0 0 1 1.4 0L16 3.6l1.3-1.3A1 1 0 0 1 19 3v18a1 1 0 0 1-1.7.7L16 20.4l-1.3 1.3a1 1 0 0 1-1.4 0L12 20.4l-1.3 1.3a1 1 0 0 1-1.4 0L8 20.4l-1.3 1.3A1 1 0 0 1 5 21V3c0-.4.2-.8.6-1ZM9 7a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2H9Zm0 4a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Zm0 4a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Z" clipRule="evenodd" />
                                                </svg>

                                                <span className="flex-1 ms-3 whitespace-nowrap">Reportes Generales</span>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" onClick={() => handleBotonClick('Historial')} className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 group">
                                                <svg class="w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M9 7V2.2a2 2 0 0 0-.5.4l-4 3.9a2 2 0 0 0-.3.5H9Z" />
                                                    <path fill-rule="evenodd" d="M11 7V2h7a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Zm4.7 5.7a1 1 0 0 0-1.4-1.4L11 14.6l-1.3-1.3a1 1 0 0 0-1.4 1.4l2 2c.4.4 1 .4 1.4 0l4-4Z" clip-rule="evenodd" />
                                                </svg>

                                                <span className="flex-1 ms-3 whitespace-nowrap">Historial de Apertura </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" onClick={() => handleBotonClick('HistorialD')} className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 group">
                                                <svg class="w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                    <path fill-rule="evenodd" d="M9 2.2V7H4.2l.4-.5 3.9-4 .5-.3Zm2-.2v5a2 2 0 0 1-2 2H4v11c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-7Z" clip-rule="evenodd" />
                                                </svg>


                                                <span className="flex-1 ms-3 whitespace-nowrap">Historial de Denegados</span>
                                            </a>
                                        </li>
                                    </>
                                )
                                }
                                {user?.rol == 3 && (
                                    <>
                                        <li>
                                            <a href="#" onClick={() => handleBotonClick('Movimientos')} className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 group">
                                                <svg class="w-6 h-6 text-white dark:text-white group-hover:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                    <path fill-rule="evenodd" d="M7 6a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-2v-4a3 3 0 0 0-3-3H7V6Z" clip-rule="evenodd" />
                                                    <path fill-rule="evenodd" d="M2 11a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7Zm7.5 1a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" clip-rule="evenodd" />
                                                    <path d="M10.5 14.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
                                                </svg>
                                                <span className="flex-1 ms-3 whitespace-nowrap">Movimientos</span>
                                            </a>
                                        </li>

                                    </>
                                )
                                }
                            </Sidebar.ItemGroup>
                        </div>
                    </Sidebar>
                    <div>
                        {contenidoSeleccionado === 'FormularioPersonaNatural' && <ContentCuentaAhorroNatural />}
                        {contenidoSeleccionado === 'FormularioPersonaJuridica' && <ContentCuentaAhorroJuridica />}
                        {contenidoSeleccionado === 'PrincipalPage' && <PrincipalPage />}
                        {contenidoSeleccionado === 'NoDisponible' && <No_Disponible />}
                        {contenidoSeleccionado === 'AutorizacionCuentas' && <AutorizacionCuentas />}
                        {contenidoSeleccionado === 'CrearUsuario' && <CrearUsuario />}
                        {contenidoSeleccionado === 'Reportes' && <Reportes />}
                        {contenidoSeleccionado === 'Historial' && <Historial />}
                        {contenidoSeleccionado === 'HistorialD' && <HistorialD />}
                        {contenidoSeleccionado === 'Movimientos' && <Movimientos />}
                        {/* Renderiza otros contenidos según sea necesario */}
                    </div>
                </>
            )
            }
        </>
    )
}
