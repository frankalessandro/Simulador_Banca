import React, { useEffect, useState } from 'react'

export const AutorizacionCuentas = () => {
    const [datauser, setdatauser] = useState([]);

    useEffect(() => {
        const fecthData = async () => {
            try {
                const response = await fetch('http://localhost:3000/getcliente');
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

    return (
        <>
            <div class="p-4 sm:ml-64">
                <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                    <div class='flex justify-center items-center flex-col gap-32' style={{ minHeight: '85vh' }}>
                        <div class='w-3/4 text-black text-4xl flex items-center justify-center font-semibold text-center'>
                            <p>Autorización de Cuentas</p>
                        </div>
                        <div class="w-8/12 relative overflow-x-auto shadow-md sm:rounded-lg">
                            <table class="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
                                

                                <thead class="text-xs text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            Nombre de Cliente
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Producto bancario
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                             N° Cuenta
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
                                    {datauser?.map((data) => (
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={data.id_cliente}>
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {data.nombre}
                                            </th>
                                            <td class="px-6 py-4">
                                                {data.producto}
                                            </td>
                                            <td class="px-6 py-4">
                                                {data.n_cuenta}
                                            </td>
                                            <td class="px-6 py-4">
                                                {data.estadocliente}
                                            </td>
                                            <td class="px-6 py-4 flex gap-5 justify-center">
                                                <button href="#" class='hover:bg-gray-200 p-1 rounded-sm'>
                                                    <svg class="w-6 h-6 text-red-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 18 6m0 12L6 6" />
                                                    </svg>
                                                </button>
                                                <button href="#" class='hover:bg-gray-200 p-1 rounded-sm'>
                                                    <svg class="w-6 h-6 text-neutralGreen dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 12 4.7 4.5 9.3-9" />
                                                    </svg>
                                                </button>
                                            </td>
                                        </tr>


                                    )
                                    )}{console.log(datauser)}
                                </tbody>
                            </table>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}
