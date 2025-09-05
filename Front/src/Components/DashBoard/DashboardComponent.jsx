import React, { useState, useEffect, useMemo, useCallback } from 'react'
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
import { HiShoppingCart, HiOutlineViewList, HiUser, HiClipboard, HiUserCircle } from "react-icons/hi";
import { Historial } from './Components/Director/Historial'
import { HistorialD } from './Components/Director/HistorialD'
import { BusquedaC } from './Components/BusquedaC'
// Removed unused client visuals from previous version
import { Movimientos } from './Components/Cajero/Movimientos'
import { API_BASE } from '../../config.js';

export const DashboardComponent = () => {
    // Sidebar state (open/closed)
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = useCallback(() => setSidebarOpen((s) => !s), []);
    const sidebarClass = useMemo(() => (
        sidebarOpen
            ? "fixed top-0 left-0 z-40 w-64 shadow-lg h-screen pt-20 transition-transform -translate-x-px bg-green border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
            : "fixed top-0 left-0 z-40 w-64 shadow-lg h-screen pt-20 transition-transform -translate-x-full bg-green border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
    ), [sidebarOpen]);

    const { user, isLoggedIn, logout } = useAuth();

    const [contenidoSeleccionado, setContenidoSeleccionado] = useState('PrincipalPage');
    // Función para manejar clics de botones
    const handleBotonClick = (contenido) => setContenidoSeleccionado(contenido);
    const handlelogout = () => {
        logout()
    }

    const [userName, setUserName] = useState(null);
    const [userData, setUserData] = useState(null); // Variable de estado para almacenar el nombre de usuario
    // Utils
    const roleName = useMemo(() => {
        if (!user?.rol) return '';
        return user.rol === 1 ? 'Director' : user.rol === 2 ? 'Asesor' : user.rol === 3 ? 'Cajero' : user.rol === 4 ? 'Cliente' : '';
    }, [user?.rol]);
    // currency format handled inline where needed

    // Efecto para guardar el nombre de usuario cuando el componente se monta
    useEffect(() => {
        // Verificar si el usuario está autenticado y obtener su nombre de usuario si es así
        if (isLoggedIn && user?.name_user) {
            setUserName(user.name_user);
        }
    }, [isLoggedIn, user]);

    useEffect(() => {
        const fetchClientData = async () => {
            if (!userName || user?.rol !== 4) return;
            try {
                const response = await fetch(`${API_BASE}/getcliente/${userName}`);
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                setUserData(data);
            } catch (error) {
                // Silenciar en UI y evitar logs innecesarios
            }
        };
        fetchClientData();
    }, [userName, user?.rol]);



    return (

        <>


            {isLoggedIn && user.rol !== 4 && (
                <>
                    <nav className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur border-b border-gray-100">
                        <div className="px-3 py-3 lg:px-5 lg:pl-3">
                            <div className="flex items-center justify-between">

                                <div className="flex items-center justify-start rtl:justify-end">
                                    <button onClick={toggleSidebar} type="button" className="inline-flex items-center p-2 text-sm text-gray-600 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">

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
                                                <button className='inline-flex items-center gap-2 text-sm bg-white rounded-full px-3 py-1.5 shadow ring-1 ring-gray-200'>
                                                    <span className='text-gray-700'>{user?.name_user} - {roleName}</span>
                                                    <HiUserCircle color='gray' className='w-6 h-6 ' />
                                                </button>
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
                    <Sidebar className={sidebarClass} aria-label="Sidebar">
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
                                            {/* <Sidebar.Item onClick={() => handleBotonClick('FormularioPersonaJuridica')} class="flex items-center relative left-4  w-full p-2 text-base text-white transition duration-75 rounded-lg group  hover:bg-gray-100 hover:text-black dark:text-white dark:hover:bg-gray-700">{<p className='flex  flex-row  relative right-5 items-center'><HiUserGroup color='white || black' className='flex relative right-1 items-center justify-center w-12' /> Persona Juridica</p>}</Sidebar.Item> */}
                                        </Sidebar.Collapse>
                                    </Sidebar.Collapse>
                                    <Sidebar.Item onClick={() => handleBotonClick('Busqueda')} class=" flex items-center justify-start p-2 text-white w-full rounded-lg hover:text-black hover:bg-gray-100 dark:hover:bg-gray-700 group">{<p className='flex justify-start items-center relative right-5'><HiUser color='white || black' className='flex   items-center justify-start h-5 w-12' />Busqueda de Cuentas</p>}</Sidebar.Item>

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
                        {contenidoSeleccionado === 'Busqueda' && <BusquedaC />}
                        {contenidoSeleccionado === 'Movimientos' && <Movimientos />}
                        {/* Renderiza otros contenidos según sea necesario */}
                    </div>
                </>
            )

            }
            {isLoggedIn && user.rol === 4 && userData && (
                <>
                    <section className='min-h-screen w-full bg-lightGray flex items-center justify-center px-6'>
                        <div className='max-w-4xl w-full grid gap-6'>
                            <div className='bg-gradient-to-br from-darkGreen to-neutralGreen text-white rounded-2xl p-6 shadow-xl'>
                                <div className='flex items-start justify-between'>
                                    <div>
                                        <div className='text-sm text-white/80'>Bienvenido</div>
                                        <div className='text-xl font-semibold'>{userData.ip_primernombre} {userData.ip_primerapellido}</div>
                                    </div>
                                    <img src={Logo} className='h-10 opacity-90' alt='ClarBank' />
                                </div>
                                <div className='mt-6 grid sm:grid-cols-3 gap-4'>
                                    <div className='sm:col-span-2'>
                                        <div className='text-white/80 text-sm'>Saldo disponible</div>
                                        <div className='text-3xl sm:text-4xl font-semibold'>{'$'}{Number(userData.saldo || 0).toLocaleString()}</div>
                                    </div>
                                    <div className='bg-white/10 backdrop-blur rounded-xl p-4 ring-1 ring-white/20'>
                                        <div className='text-xs text-white/80'>Producto</div>
                                        <div className='text-sm font-medium'>{userData.nombre_producto}</div>
                                        <div className='mt-2 text-xs text-white/80'>N° de cuenta</div>
                                        <div className='text-sm font-medium'>{String(userData.n_cuenta || '').replace(/.(?=.{4})/g, '•')}</div>
                                    </div>
                                </div>
                            </div>

                            <div className='bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 p-6'>
                                <div className='flex items-center justify-between mb-4'>
                                    <h2 className='text-lg font-semibold text-gray-900'>Actividad reciente</h2>
                                    <span className='text-xs text-gray-500'>Demo</span>
                                </div>
                                <div className='text-sm text-gray-600'>No hay movimientos disponibles en este módulo de simulación.</div>
                            </div>

                            <div className='flex items-center justify-end'>
                                <Dropdown
                                    arrowIcon={false}
                                    inline
                                    label={
                                        <button className='inline-flex items-center gap-2 text-sm bg-white rounded-full px-3 py-1.5 shadow ring-1 ring-gray-200'>
                                            <span className='text-gray-700'>{user?.name_user}</span>
                                            <HiUserCircle color='gray' className='w-6 h-6' />
                                        </button>
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
                    </section>
                </>
            )}


        </>
    )
}
