import React, { useEffect, useState } from 'react'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ModalAutorizaciones } from '../ModalAutorizaciones';
import { API_BASE } from '../../../../config.js';

export const AutorizacionCuentas = () => {




    const [datauser, setdatauser] = useState([]);

    useEffect(() => {
        const fecthData = async () => {
            try {
                const response = await fetch(`${API_BASE}/getclienteP`);
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                const data = await response.json();
                setdatauser(data.result.rows)
                console.log(data.result.rows[0])

            } catch (error) {
                console.error('error al encontrar informacion')
            }
        };
        fecthData(); 
    }, []);

    const estado = datauser.map(user => user.estadocliente == 'Pendiente')

 
    
 


    const autorizar = (id) => {
        console.log(id);
        try {
            // Realiza una solicitud al servidor para cambiar el estado del cliente con el ID proporcionado
            fetch(`${API_BASE}/Estado/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nuevoEstado: 'Autorizado',
                })
            })

                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log(data.message);
                    toast.success("Autorizado")
                    setTimeout(() => {
                        // Actualiza localmente el estado del cliente según sea necesario
                        // Puedes utilizar la función setDatauser para actualizar el estado local
                        // Ejemplo: setDatauser(prevData => [...prevData, data.updatedClient]);
                        // alert('Autorización exitosa')
                        // Redirige a la página '/DashBoardMenu' después de procesar la respuesta
                        window.location = "/DashBoardMenu";
                    }, 1500); // 2000 milisegundos = 2 segundos

                })
                .catch(error => {
                    console.error('Error al cambiar el estado del cliente:', error);
                });

        } catch (error) {
            console.error('Error general:', error);
        }
    };


    
    const [modalData, setModalData] = useState(null); // Para almacenar los datos del modal
    const [showModal, setShowModal] = useState(false);

    const denegar = (id) => {
        
        try {
            // Realiza una solicitud al servidor para cambiar el estado del cliente con el ID proporcionado
            fetch(`${API_BASE}/Estado/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nuevoEstado: 'Denegado',
                })
            })

                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log(data.message);
                    toast.error("denegado")
                    setTimeout(() => {
                        // Actualiza localmente el estado del cliente según sea necesario
                        // Puedes utilizar la función setDatauser para actualizar el estado local
                        // Ejemplo: setDatauser(prevData => [...prevData, data.updatedClient]);
                        // alert('Autorización exitosa')
                        // Redirige a la página '/DashBoardMenu' después de procesar la respuesta
                        window.location = "/DashBoardMenu";
                    }, 1500); // 2000 milisegundos = 2 segundos

                })
                .catch(error => {
                    console.error('Error al cambiar el estado del cliente:', error);
                });

        } catch (error) {
            console.error('Error general:', error);
        }} 

    const openModal = (datauser) => {
        setModalData(datauser);
        setShowModal(true);
    };

    const closeModal = () => {
        setModalData(null); // Limpiar modalData
        setShowModal(false);
    };

    return (
        <>
            <div className="p-6 sm:ml-64">
                <div className="mt-16 max-w-6xl mx-auto">
                    <div className='bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 p-6'>
                        <div className='mb-6 text-center'>
                            <h2 className='text-2xl font-semibold text-darkGreen'>Autorización de cuentas</h2>
                            <p className='text-sm text-gray-500'>Revisa, autoriza o deniega aperturas pendientes</p>
                        </div>
                        <div className="relative overflow-x-auto rounded-xl ring-1 ring-gray-100">
                            <table className="w-full text-sm text-center text-gray-700">


                                <thead className="text-xs uppercase bg-gray-50 text-gray-600">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Nombre de Cliente
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Producto bancario
                                        </th>

                                        <th scope="col" className="px-6 py-3">
                                            N° Cuenta
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Estado

                                        </th>
                                        <th scope="col" className="w-48 px-6 py-3">
                                            Acción
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">

                                    {datauser?.map((data) => (


                                        <tr className="bg-white hover:bg-gray-50" key={data.id_cliente}>

                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {data.nombre}
                                            </th>

                                            <td className="px-6 py-4">
                                                {data.producto}
                                            </td>
                                            <td className="px-6 py-4">
                                                {data.n_cuenta}
                                            </td>
                                            <td className="px-6 py-4">
                                                {data.estadocliente}

                                            </td>
                                            <td class="px-6 py-4 flex gap-3 justify-center">
                                                
                                                <button onClick={()=> openModal(data)} className='inline-flex items-center justify-center rounded-md ring-1 ring-red-200 text-red-600 hover:bg-red-50 p-2'>
                                                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 18 6m0 12L6 6" />
                                                    </svg>
                                                </button>

                                                <button onClick={() => autorizar(data.id_cliente)} className='inline-flex items-center justify-center rounded-md ring-1 ring-green/30 text-neutralGreen hover:bg-lightGreen/30 p-2'>
                                                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 12 4.7 4.5 9.3-9" />
                                                    </svg>
                                                </button>

                                            </td>
                                        </tr>



                                    )
                                    )}
                                </tbody>
                            </table>
                        </div>
                        <ModalAutorizaciones data={modalData} closeModal={closeModal} showModal={showModal} />
                    </div>
                </div>
            </div>
        </>
    )
}
