import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ModalCreacionU } from './ModalCreacionU';


export const CrearUsuario = () => {
    
    
    const [datauser, setdatauser] = useState([]);
    const [forceUpdate, setForceUpdate] = useState(false);
   
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/user');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();

                setdatauser(data.result.rows);

            } catch (error) {
                console.error('Error al encontrar información');
            }
        };
        fetchData();
    }, [forceUpdate]); // Hacer que el efecto dependa de forceUpdate


    const [modalData, setModalData] = useState(null); // Para almacenar los datos del modal
    const [showModal, setShowModal] = useState(false);

    const openModal = (datauser) => {
        setModalData(datauser);
        setShowModal(true);
    };

    const closeModal = () => {
        setModalData(null); // Limpiar modalData
        setShowModal(false);
    };
    // Otros estados omitidos por brevedad...

    // Resto del código omitido por brevedad...

    // Función para eliminar usuario
    const eliminarUsuario = async (userId) => {


        console.log(userId)
        try {
            const response = await fetch(`http://localhost:3000/user/${userId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                
                toast.error("Usuario eliminado correctamente")
                setTimeout(() => {
                    // Actualiza localmente el estado del cliente según sea necesario
                    // Puedes utilizar la función setDatauser para actualizar el estado local
                    // Ejemplo: setDatauser(prevData => [...prevData, data.updatedClient]);
                    // alert('Autorización exitosa')
                    // Redirige a la página '/DashBoardMenu' después de procesar la respuesta
                    
                }, 1000);
                // Actualiza el estado local para forzar la re-renderización
                setForceUpdate((prev) => !prev);
                
            } else {
                console.error('Error al eliminar usuario');
                alert('Error al eliminar usuario');
            }
        } catch (error) {
            console.error('Error en el servidor', error);
        }
    };

    return (
        <>
            <div className="p-4 sm:ml-64">
                <div className="md:p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                    <div className='flex justify-center items-center flex-col gap-10' style={{ minHeight: '85vh' }}>
                        <div className='w-3/4 text-black text-4xl flex items-center justify-center font-semibold text-center'>
                            <p>Creacion de Usuarios</p>
                        </div>


                        <div className="w-11/12 md:w-8/12 relative overflow-x-auto overflow-y-auto  shadow-md sm:rounded-lg">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Nombre
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Rol
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Estado
                                        </th>
                                        <th scope="col" className="w-48 px-6 py-3">
                                            Acción
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-lightGreen border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a9 9 0 0 0 5-1.5 4 4 0 0 0-4-3.5h-2a4 4 0 0 0-4 3.5 9 9 0 0 0 5 1.5Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            </svg>
                                            <div className="ps-3">
                                                <div className="text-base font-semibold">Nombre Usuario</div>
                                                {/* <div className="font-normal text-gray-500">Correo Usuario</div> */}
                                            </div>
                                        </th>
                                        <td className="px-6 py-4">
                                            Roles
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center">
                                                <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Estado
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 flex gap-5 justify-center">
                                            <button type="button" onClick={openModal} className='hover:bg-gray-200 p-1 rounded-sm'>
                                                <svg className="w-6 h-6 text-black dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12h4m-2 2v-4M4 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1c0 .6-.4 1-1 1H5a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                </svg>
                                            </button>
                                            {/* <ModalEditUser isOpen={modalIsOpen} onClose={closeModal} /> */}
                                        </td>
                                    </tr>
                                    {datauser?.map((date) => (<>
                                        {date.rol != 1  && (
                                             <>
                                             {date.rol != 4 && (

                                                 <tr  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={date.id_usuario}>
                                                <>
                                                    <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a9 9 0 0 0 5-1.5 4 4 0 0 0-4-3.5h-2a4 4 0 0 0-4 3.5 9 9 0 0 0 5 1.5Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                        </svg>
                                                        <div className="ps-3">
                                                            <div className="text-base font-semibold">{date.name_user}</div>
                                                            {/* <div className="font-normal text-gray-500">abenitez@clarbank.com</div> */}
                                                        </div>
                                                    </th>
                                                    <td className="px-6 py-4">
<>
                                                    {date.rol == 2 && (<> Asesor </>)} {date.rol == 1 && (<> Director </>)} {date.rol == 3 && (<> Cajero </>)} 
</>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <div className="flex items-center">
                                                            <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Activo
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 flex gap-5 justify-center">
                                                        {/* <button href="#" onClick={() => abrirEdicion(date.id_usuario)} class='hover:bg-gray-200 p-1 rounded-sm'>
                                                            <svg className="w-6 h-6 cd f dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.3 4.8 2.9 2.9M7 7H4a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h11c.6 0 1-.4 1-1v-4.5m2.4-10a2 2 0 0 1 0 3l-6.8 6.8L8 14l.7-3.6 6.9-6.8a2 2 0 0 1 2.8 0Z" />
                                                            </svg>
                                                        </button> */}
                                                        <button href="#"  onClick={() => eliminarUsuario(date.id_usuario)} className='hover:bg-gray-200 p-1 rounded-sm'>
                                                            <svg className="w-6 h-6 text-red-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 18 6m0 12L6 6" />
                                                            </svg>
                                                        </button>
                                                    </td>
                                                </>
                                            </tr>
                                                        )}
                                        </>
                                        )}
                                    </>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <ModalCreacionU setShowModal={setShowModal} data={modalData} showModal={showModal} closeModal={closeModal} />
                        </div>
                        </div>
                        </div>
                        </>
    )
}