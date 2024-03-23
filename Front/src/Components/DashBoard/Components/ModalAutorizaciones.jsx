import React from 'react'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ModalAutorizaciones = ({ data, showModal, closeModal }) => {

    const denegar = (id) => {
        console.log(id)
        try {
            // Realiza una solicitud al servidor para cambiar el estado del cliente con el ID proporcionado
            fetch(`http://localhost:3000/Estado/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nuevoEstado: 'Denegado',
                }),
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log(data.message);
                    toast.error("Denegado")
                    setTimeout(() => {
                        // Actualiza localmente el estado del cliente según sea necesario
                        // Puedes utilizar la función setDatauser para actualizar el estado local
                        // Ejemplo: setDatauser(prevData => [...prevData, data.updatedClient]);
                        // alert('Autorización exitosa')
                        // Redirige a la página '/DashBoardMenu' después de procesar la respuesta
                        window.location = "/DashBoardMenu";
                    }, 1500);

                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log(data.message);
                    // Actualiza localmente el estado del cliente según sea necesario
                    // Puedes utilizar la función setDatauser para actualizar el estado local
                    // Ejemplo: setDatauser(prevData => [...prevData, data.updatedClient]);

                    // Redirige a la página '/DashBoardMenu' después de procesar la respuesta
                    window.location = "/DashBoardMenu";
                })
                .catch(error => {
                    console.error('Error al cambiar el estado del cliente:', error);
                });
        } catch (error) {
            console.error('Error general:', error);
        }
    };
    return (
        <>
            {showModal && (

                <>




                    <div class=" overflow-y-auto fixed top-0 right-0 left-0 z-50 bg-slate-100/50 flex justify-center items-center w-full md:inset-0  h-[calc(100%)] max-h-full">
                        <div class="relative p-4 w-full max-w-md max-h-full ">

                            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">

                                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                        ¿por que denegas la cuenta?
                                    </h3>
                                    <button type="button" onClick={closeModal} class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                        </svg>
                                        <span class="sr-only">Close modal</span>
                                    </button>
                                </div>

                                <form class="p-4 md:p-5">
                                    <div class="grid gap-4 mb-4 grid-cols-2">
                                        <div class="col-span-2">
                                            <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Descripcion</label>
                                            <textarea id="description" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-green focus:border-green dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green dark:focus:border-green" placeholder="Write product description here"></textarea>
                                        </div>
                                    </div>
                                    <button type="submit" onClick={() => denegar(data.id_cliente)} class="text-white inline-flex items-center bg-green hover:bg-neutralGreen focus:ring-4 focus:outline-none focus:ring-green-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green dark:hover:bg-green dark:focus:ring-green">
                                        <svg class="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                                        Add new product
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                </>
            )}
        </>
    )
}
