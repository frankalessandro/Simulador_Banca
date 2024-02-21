import React, { useEffect, useState } from 'react'

export const CrearUsuario = () => {

    const [datauser, setdatauser] = useState([]);

    const [activeModal, setactiveModal] = useState("absolute overflow-y-auto overflow-x-hidden justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full sr-only")

    useEffect(() => {
        const fecthData = async () => {
            try {
                const response = await fetch('http://localhost:3000/user');
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                const data = await response.json();
                setdatauser(data.result.rows)


            } catch (error) {
                console.error('error al encontrar informacion')
            }
        };
        fecthData();
    }, []);

    const abrir = () => {
        if (activeModal === "absolute overflow-y-auto overflow-x-hidden justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full sr-only") {
            setactiveModal("absolute flex items-center overflow-y-auto overflow-x-hidden bg-gray-100 bg-opacity-60 justify-center items-center w- md:inset-0 h-[calc(100%)] max-h-full not-sr-only");

        } else {
            setactiveModal("absolute overflow-y-auto overflow-x-hidden justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full sr-only")

        }
    }




    return (
        <>
            <div class="p-4 sm:ml-64">
                <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                    <div class='flex justify-center items-center flex-col gap-32' style={{ minHeight: '85vh' }}>
                        <div class='w-3/4 text-black text-4xl flex items-center justify-center font-semibold text-center'>
                            <p>Creacion de Usuarios</p>
                        </div>


                        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            Nombre
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Rol
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Estado
                                        </th>
                                        <th scope="col" class="w-48 px-6 py-3">
                                            Acción
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-lightGreen border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a9 9 0 0 0 5-1.5 4 4 0 0 0-4-3.5h-2a4 4 0 0 0-4 3.5 9 9 0 0 0 5 1.5Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            </svg>
                                            <div class="ps-3">
                                                <div class="text-base font-semibold">Nombre Usuario</div>
                                                <div class="font-normal text-gray-500">Correo Usuario</div>
                                            </div>
                                        </th>
                                        <td class="px-6 py-4">
                                            Roles
                                        </td>
                                        <td class="px-6 py-4">
                                            <div class="flex items-center">
                                                <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Estado
                                            </div>
                                        </td>
                                        <td class="px-6 py-4 flex gap-5 justify-center">
                                            <button type="button" onClick={abrir} class='hover:bg-gray-200 p-1 rounded-sm'>
                                                <svg class="w-6 h-6 text-black dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12h4m-2 2v-4M4 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1c0 .6-.4 1-1 1H5a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                </svg>
                                            </button>
                                            {/* <ModalEditUser isOpen={modalIsOpen} onClose={closeModal} /> */}
                                        </td>
                                    </tr>
                                    {datauser?.map((date) => (
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={date.id_usuario}>
                                            {date.rol == 2 && (
                                                <>
                                                    <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a9 9 0 0 0 5-1.5 4 4 0 0 0-4-3.5h-2a4 4 0 0 0-4 3.5 9 9 0 0 0 5 1.5Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                        </svg>
                                                        <div class="ps-3">
                                                            <div class="text-base font-semibold">{date.name_user}</div>
                                                            <div class="font-normal text-gray-500">abenitez@clarbank.com</div>
                                                        </div>
                                                    </th>
                                                    <td class="px-6 py-4">
                                                        Asesor
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        <div class="flex items-center">
                                                            <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Activo
                                                        </div>
                                                    </td>
                                                    <td class="px-6 py-4 flex gap-5 justify-center">
                                                        <button href="#" class='hover:bg-gray-200 p-1 rounded-sm'>
                                                            <svg class="w-6 h-6 text-neutralGreen dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.3 4.8 2.9 2.9M7 7H4a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h11c.6 0 1-.4 1-1v-4.5m2.4-10a2 2 0 0 1 0 3l-6.8 6.8L8 14l.7-3.6 6.9-6.8a2 2 0 0 1 2.8 0Z" />
                                                            </svg>
                                                        </button>
                                                        <button href="#" class='hover:bg-gray-200 p-1 rounded-sm'>
                                                            <svg class="w-6 h-6 text-red-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 18 6m0 12L6 6" />
                                                            </svg>
                                                        </button>
                                                    </td>
                                                </>
                                            )}
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </div>
                        {/* {datauser.map((info) => nose(info))} */}
                    </div>
                    <div class={activeModal} >
                        <div class="p-4 sm:ml-64">
                            <div class="p-4  border-dashed rounded-lg dark:border-gray-700 mt-14">
                                <div className='bg-white rounded-lg shadow dark:bg-gray-700 '>

                                    <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                            Create New User
                                        </h3>
                                        <button type="button" onClick={abrir} class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                            </svg>
                                            <span class="sr-only">Close modal</span>
                                        </button>
                                    </div>

                                    <form class="p-4 md:p-5">
                                        <div class="p-6 space-y-6">
                                            <div class="grid grid-cols-6 gap-6">
                                                <div class="col-span-6 sm:col-span-3">
                                                    <label for="first-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                                                    <input type="text" name="first-name" id="first-name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green focus:border-green block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green dark:focus:border-green" placeholder="Nombre Asesor" required="" />
                                                </div>
                                                <div class="col-span-6 sm:col-span-3">
                                                    <label for="last-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apellido</label>
                                                    <input type="text" name="last-name" id="last-name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green focus:border-green block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green dark:focus:border-green" placeholder="Apellido Asesor" required="" />
                                                </div>
                                                <div class="col-span-6 sm:col-span-3">
                                                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo</label>
                                                    <input type="email" name="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green focus:border-green block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green dark:focus:border-green" placeholder="Correo Asesor" required="" />
                                                </div>


                                                <div class="col-span-6 sm:col-span-3">
                                                    <label for="current-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                                                    <input type="password" name="current-password" id="current-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green focus:border-green block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green dark:focus:border-green" placeholder="••••••••" required="" />
                                                </div>

                                            </div>
                                        </div>
                                        {/* <!-- Modal footer --> */}
                                        <div class="flex items-center p-6 space-x-3 rtl:space-x-reverse border-t border-gray-200 rounded-b dark:border-gray-600">
                                            <button type="submmit" class="w-full my-4 text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Crear</button>
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
