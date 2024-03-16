import React, { useEffect, useState } from 'react'

export const BusquedaC = () => {
    const [datauser, setdatauser] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')


    useEffect(() => {
        const fecthData = async () => {
            try {
                const response = await fetch('http://localhost:3000/getclienteA');
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



    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredData = datauser.filter((data) =>
    data.ip_documento && data.ip_documento.includes(searchTerm)
);


  return (
    <div className="p-4 sm:ml-64">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                    <div className=' flex justify-start items-center flex-col gap-10' style={{ minHeight: '85vh' }}>
                    <div className='w-3/4 text-black text-4xl flex items-center justify-center font-semibold text-center'>
                            <p>busqueda de cuentas</p>
                        </div>
                           <div className='w-8/12 flex justify-start flex-col  max-[500px]:justifu-center  max-[500px]:w-full '>
                           <label htmlFor="">Busca tu Numero de documento </label>
                            <input type="text" defaultValue={searchTerm}
                            onChange={handleSearch} className=' rounded-md border-gray-300 focus:ring-green focus:border-green' />
                           </div>
                        <div className="w-8/12 relative overflow-x-auto shadow-md sm:rounded-lg">

                            <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">


                                <thead className="text-xs text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                    <th scope="col" className="px-6 py-3">
                                           Nº Documento
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Nombre de Cliente
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Fecha 
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

                                    </tr>
                                </thead>
                                <tbody>
                                {searchTerm !== '' && (
                                    filteredData?.map((data) => (


                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={data.id_cliente}>
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {data.ip_documento}
                                            </th>
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {data.nombre}
                                            </th>
                                            <td className="px-6 py-4">
                                                {data.fecha}
                                            </td>
                                            <td className="px-6 py-4">
                                                {data.producto}
                                            </td>
                                            <td className="px-6 py-4">
                                                {data.n_cuenta}
                                            </td>
                                            <td className="px-6 py-4">
                                                {data.estadocliente}

                                            </td>

                                        </tr>



                                    )
                                    ))}
                                </tbody>
                            </table>
                        </div>
                   
                    </div>
                </div>
            </div>
  )
}
