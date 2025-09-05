import React, { useEffect, useState } from 'react';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ModalCreacionU } from './ModalCreacionU';
import { ModalEdicionU } from './ModalEdicionU';
import { API_BASE } from '../../../../config.js';

export const CrearUsuario = () => {
    const [datauser, setdatauser] = useState([]);
    const [forceUpdate, setForceUpdate] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [editData, setEditData] = useState(null);
    const [showEdit, setShowEdit] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${API_BASE}/user`);
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
    }, [forceUpdate]);

    const abrirCrear = () => setShowModal(true);

    const openModal = () => abrirCrear();
    const openEdit = (userRow) => { setEditData(userRow); setShowEdit(true); };

    const eliminarUsuario = async (userId) => {
        console.log(userId)
        try {
            const response = await fetch(`${API_BASE}/user/${userId}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                toast.error("Usuario eliminado correctamente")
                setTimeout(() => {
                    setForceUpdate((prev) => !prev);
                }, 1000);
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
            <div className="p-6 sm:ml-64">
                <div className="mt-16 max-w-6xl mx-auto">
                    <div className='bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 p-6'>
                        <div className='mb-6 text-center'>
                            <h2 className='text-2xl font-semibold text-darkGreen'>Creación de usuarios</h2>
                            <p className='text-sm text-gray-500'>Gestiona perfiles y estados del equipo</p>
                        </div>
                        <div className='mb-4 flex justify-end'>
                            <button onClick={abrirCrear} className='inline-flex items-center gap-2 rounded-lg bg-neutralGreen hover:bg-green text-white px-4 py-2 text-sm focus:ring-4 focus:ring-lightGreen/40'>
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                                Nuevo usuario
                            </button>
                        </div>
                        <div className="w-full relative overflow-x-auto rounded-xl ring-1 ring-gray-100">
                            <table className="w-full text-sm text-left text-gray-700">
                                <thead className="text-xs uppercase bg-gray-50 text-gray-600 text-center">
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
                                <tbody className="divide-y divide-gray-100">
                                    {datauser?.map((date) => (
                                        <>
                                            {date.rol !== 1 && date.rol !== 4 && (
                                                <tr className="bg-white hover:bg-gray-50" key={date.id_usuario}>
                                                    <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a9 9 0 0 0 5-1.5 4 4 0 0 0-4-3.5h-2a4 4 0 0 0-4 3.5 9 9 0 0 0 5 1.5Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                        </svg>
                                                        <div className="ps-3">
                                                            <div className="text-base font-semibold">{date.name_user}</div>
                                                        </div>
                                                    </th>
                                                    <td className="px-6 py-4">
                                                        {date.rol === 2 && <>Asesor</>}
                                                        {date.rol === 1 && <>Director</>}
                                                        {date.rol === 3 && <>Cajero</>}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <div className="flex items-center">
                                                            <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Activo
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 flex gap-3 justify-center">
                                                        <button type="button" onClick={() => openEdit(date)} className='inline-flex items-center justify-center rounded-md ring-1 ring-green/30 text-neutralGreen hover:bg-lightGreen/30 p-2'>
                                                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 3h5v5M9 15l12-12M19 13v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6" />
                                                            </svg>
                                                        </button>
                                                        <button href="#" onClick={() => eliminarUsuario(date.id_usuario)} className='inline-flex items-center justify-center rounded-md ring-1 ring-red-200 text-red-600 hover:bg-red-50 p-2'>
                                                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 18 6m0 12L6 6" />
                                                            </svg>
                                                        </button>
                                                    </td>
                                                </tr>
                                            )}
                                        </>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <ModalCreacionU showModal={showModal} closeModal={() => setShowModal(false)} onSuccess={() => setForceUpdate((p)=>!p)} />
                        <ModalEdicionU userData={editData} showModal={showEdit} closeModal={() => setShowEdit(false)} onSuccess={() => setForceUpdate((p)=>!p)} />
                    </div>
                </div>
            </div>
        </>
    );
};
