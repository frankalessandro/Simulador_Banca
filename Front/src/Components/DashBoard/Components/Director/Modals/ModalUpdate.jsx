import React from 'react'
import { useForm } from 'react-hook-form';

export const ModalUpdate = ({InfoUser, ActivateModal,setActivateModal}) => {

const {register , handleSubmit} = useForm()
  
const desative = () => {
    setActivateModal(false)
}
    const UpdateUser = async (data) => {
        console.log("holaaaaaaaaaa")
        try {
            const response = await fetch(`http://localhost:3000/UpdateUser/${selectedUserId}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    name: data.name,
                    password: data.password,
                    rol: data.rol
                })
            });

            if (response.ok) {
                alert('Actualización de usuario exitosa');
                setForceUpdate((prev) => !prev); // Actualiza el estado local para forzar la re-renderización
                // ... (otras acciones después de la actualización)
            } else {
                console.error('Error al actualizar usuario');
                alert('Error al actualizar usuario');
            }
        } catch (error) {
            console.error('Error en el servidor', error);
        }
    };
  return (
    <div>
        
        {ActivateModal ? (
                        <div class="absolute overflow-y-auto overflow-x-hidden justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full " >
                            <h1></h1>
                            <div class="p-4 sm:ml-64">
                                <div class="p-4 border-dashed rounded-lg dark:border-gray-700 mt-14">
                                    <div className='bg-white rounded-lg shadow dark:bg-gray-700 '>

                                        <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                                Edit User
                                            </h3>
                                            <button type="button" onClick={desative} class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                                </svg>
                                                <span class="sr-only">Close modal</span>
                                            </button>
                                        </div>



                                        <form class="p-4 md:p-5" onSubmit={handleSubmit(UpdateUser)} >
                                            <div class="p-6 space-y-6">
                                                <div class="grid grid-cols-6 gap-6">
                                                    <div class="col-span-6 sm:col-span-3">
                                                        <label htmlFor='name' class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                                                        <input type="text" name="name1" {...register("name1", { required: true })} id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green focus:border-green block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green dark:focus:border-green" placeholder={InfoUser.name_user} {...register("name", { required: true })} required="" />
                                                    </div>
                                                    <div class="col-span-6 sm:col-span-3">
                                                        <label htmlFor='password' class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                                                        <input type="text" name="password1"  {...register("password", { required: true })} id="password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green focus:border-green block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green dark:focus:border-green" placeholder={InfoUser.password} {...register("password", { required: true })} required="" />
                                                    </div>
                                                    <div class="col-span-6 sm:col-span-3">
                                                        <label htmlFor='rol' class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rol</label>
                                                        <select
                                                            name="rol1"
                                                            id="rol"
                                                            class="rounded-md w-full border bg-gray-50 border-gray-300 text-gray-900 text-sm p-2.5 focus:ring-green focus:border-green dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green dark:focus:border-green"
                                                            {...register("rol1", { required: true })}
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
                                            <div class="flex items-center p-6 space-x-3 rtl:space-x-reverse border-t border-gray-200 rounded-b dark:border-gray-600">
                                                <button type="submmit" class="w-full my-4 text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Crear</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <h1></h1>
                    )}
    </div>
  )
}
