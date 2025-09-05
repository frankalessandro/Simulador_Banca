import React from 'react'
import { useForm } from 'react-hook-form';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_BASE } from '../../../../config.js';
export const ModalCreacionU = ({ showModal, closeModal, onSuccess }) => {

    const { register, handleSubmit } = useForm();

   const AddUser = async (data) => {
    try {
        const response = await fetch(`${API_BASE}/AddUser`, {
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

        if (response.ok) {
            toast.success("Creación exitosa");
            if (onSuccess) onSuccess();
            setTimeout(() => {
                closeModal();
            }, 800);
        } else {
            console.error('Error al registrar usuario');
            toast.error("Error al registrar usuario");
            // Puedes agregar una notificación de error específica para problemas de red
            // toast.error("Error de red, por favor inténtalo de nuevo más tarde");
        }
    } catch (error) {
        console.error('Error en el servidor', error);
        // Agrega una notificación de error para problemas de red
        // toast.error("Error de red, por favor inténtalo de nuevo más tarde");
    }
};

    return (
        <>
            {showModal && (


                <div class=" overflow-y-auto fixed top-0 right-0 left-0 z-50 bg-slate-100/50 flex justify-center items-center w-full md:inset-0  h-[calc(100%)] max-h-full">
                    <div class="relative p-4 w-full max-w-md max-h-full ">
                        <div className='bg-white rounded-2xl shadow-xl ring-1 ring-gray-100'>

                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-lg font-semibold text-darkGreen">
                                    Crear nuevo usuario
                                </h3>
                                <button type="button" onClick={closeModal} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
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
                                            <input type="text" name="name" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green focus:border-green block w-full p-2.5" placeholder="Nombre" {...register("name", { required: true })} required />
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor='password' className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                                            <input type="text" name="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green focus:border-green block w-full p-2.5" placeholder="Contraseña" {...register("password", { required: true })} required />
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor='rol' className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rol</label>
                                            <select
                                                name="rol"
                                                id="rol"
                                                className="rounded-md w-full border bg-gray-50 border-gray-300 text-gray-900 text-sm p-2.5 focus:ring-green focus:border-green"
                                                {...register("rol", { required: true })}
                                            >
                                                <option value="" disabled>
                                                    Seleccionar
                                                </option>
                                                <option value="2">Asesor</option>
                                                <option value="3">Cajero</option>
                                            </select>

                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center p-6 space-x-3 rtl:space-x-reverse border-t border-gray-200 rounded-b">
                                    <button type="submit" className="w-full my-2 text-white bg-neutralGreen hover:bg-green focus:ring-4 focus:outline-none focus:ring-lightGreen/40 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Crear</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            )}

        </>
    )
}
