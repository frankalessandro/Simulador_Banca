import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ModalUpdate } from './Modals/ModalUpdate';


export const CrearUsuario = () => {
    const { register, handleSubmit, setValue } = useForm();
    
    const [datauser, setdatauser] = useState([]);
    const [forceUpdate, setForceUpdate] = useState(false);
    const [activeModal, setactiveModal] = useState("absolute overflow-y-auto overflow-x-hidden justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full sr-only")
    const [activeModal1, setactiveModal1] = useState("absolute overflow-y-auto overflow-x-hidden justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full sr-only")
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [InfoUser, setInfoUser] = useState(null);
    const [ActivateModal, setActivateModal] = useState(false);
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

    const abrir = () => {
        setactiveModal((prev) =>
            prev === "absolute overflow-y-auto overflow-x-hidden justify-center items-center w-full md:inset-0 h-[calc(100%)] max-h-full sr-only"
                ? "absolute flex items-center overflow-y-auto overflow-x-hidden bg-gray-400 bg-opacity-60 justify-center items-center w- md:inset-0 h-[calc(100%)] max-h-full not-sr-only"
                : "absolute overflow-y-auto overflow-x-hidden justify-center items-center w-full md:inset-0 h-[calc(100%)] max-h-full sr-only"
        );
    };

    const abrir1 = (userId) => {
        setSelectedUserId(userId); // Almacena el userId seleccionado al abrir el modal de edición
        setactiveModal1((prev) =>
            prev === "absolute overflow-y-auto overflow-x-hidden justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full sr-only"
                ? "absolute flex items-center overflow-y-auto overflow-x-hidden bg-gray-400 bg-opacity-60 justify-center items-center w- md:inset-0 h-[calc(100%)] max-h-full not-sr-only"
                : "absolute overflow-y-auto overflow-x-hidden justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full sr-only"
        );
    };


    const AddUser = async (data) => {
        try {
            const response = await fetch('http://localhost:3000/AddUser', {
                method: 'POST',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    name: data.name,
                    password: data.password,
                    rol: data.rol
                })
            });

            console.log(data);

            if (response.ok) {
                alert('Registro de usuario exitoso');
                // Actualiza el estado local para forzar la re-renderización
                setForceUpdate((prev) => !prev);
                abrir();
            } else {
                console.error('Error al registrar usuario');
                alert('Error al registrar usuarios');
            }
        } catch (error) {
            console.error('Error en el servidor', error);
        }
    };

    const handlePrueba = (date) => {
        setActivateModal(true)
        setInfoUser(date)
        setSelectedUserId(date.id_usuario)
        console.log(date)
    }

    const abrirEdicion = (userId) => {
        setSelectedUserId(userId);
        abrir1();
    };

    return (
        <>
            <div className="p-4 sm:ml-64">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                    <div className='flex justify-center items-center flex-col gap-32' style={{ minHeight: '85vh' }}>
                        <div className='w-3/4 text-black text-4xl flex items-center justify-center font-semibold text-center'>
                            <p>Creacion de Usuarios</p>
                        </div>


                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
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
                                            <button type="button" onClick={abrir} className='hover:bg-gray-200 p-1 rounded-sm'>
                                                <svg className="w-6 h-6 text-black dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12h4m-2 2v-4M4 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1c0 .6-.4 1-1 1H5a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                </svg>
                                            </button>
                                            {/* <ModalEditUser isOpen={modalIsOpen} onClose={closeModal} /> */}
                                        </td>
                                    </tr>
                                    {datauser?.map((date) => (<>
                                        {date.rol == 2 && (
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
                                                        Asesor
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
                                                        <button href="#" className='hover:bg-gray-200 p-1 rounded-sm'>
                                                            <svg className="w-6 h-6 text-red-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 18 6m0 12L6 6" />
                                                            </svg>
                                                        </button>
                                                    </td>
                                                </>
                                            </tr>
                                        )}
                                    </>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        {/* {datauser.map((info) => ActivateModal(info))} */}
                    </div>

                    
                    {/* Editar Usuarios */}

                   <ModalUpdate  ActivateModal={ActivateModal} InfoUser={InfoUser} setActivateModal={setActivateModal} />

                    {/* crear usuarios */}
                    <div className={activeModal} >
                        <div className="p-4 sm:ml-64">
                            <div className="p-4 border-dashed rounded-lg dark:border-gray-700 mt-14">
                                <div className='bg-white rounded-lg shadow dark:bg-gray-700 '>

                                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                            Create New User
                                        </h3>
                                        <button type="button" onClick={abrir} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                            </svg>
                                            <span className="sr-only">Close modal</span>
                                        </button>
                                    </div>

                                    <form className="p-4 md:p-5" onSubmit={handleSubmit(AddUser)}>
                                        <div className="p-6 space-y-6">
                                            <div className="grid grid-cols-6 gap-6">
                                                <div className="col-span-6 sm:col-span-3">
                                                    <label htmlFor='name' className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                                                    <input type="text" name="name" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green focus:border-green block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green dark:focus:border-green" placeholder="Nombre" {...register("name", { required: true })} required="" />
                                                </div>
                                                <div className="col-span-6 sm:col-span-3">
                                                    <label htmlFor='password' className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                                                    <input type="text" name="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green focus:border-green block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green dark:focus:border-green" placeholder="Contraseña" {...register("password", { required: true })} required="" />
                                                </div>
                                                <div className="col-span-6 sm:col-span-3">
                                                    <label htmlFor='rol' className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rol</label>
                                                    <select
                                                        name="rol"
                                                        id="rol"
                                                        className="rounded-md w-full border bg-gray-50 border-gray-300 text-gray-900 text-sm p-2.5 focus:ring-green focus:border-green dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green dark:focus:border-green"
                                                        {...register("rol", { required: true })}
                                                    >
                                                        <option value="" disabled>
                                                            Seleccionar
                                                        </option>
                                                        <option value="2">Asesor</option>
                                                    </select>

                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- Modal footer --> */}
                                        <div className="flex items-center p-6 space-x-3 rtl:space-x-reverse border-t border-gray-200 rounded-b dark:border-gray-600">
                                            <button type="submmit" className="w-full my-4 text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Crear</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}