import React, { useEffect, useState } from 'react'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Historial = () => {
    const [datauser, setdatauser] = useState([]);



    useEffect(() => {
        const fecthData = async () => {
            try {
                const response = await fetch('http://localhost:3000/getclienteA');
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

  
    const [fechaFiltro, setFechaFiltro] = useState(null);

    const handleFechaChange2 = (event) => {
        const fechaSeleccionada = new Date(event.target.value).toISOString().slice(0, 10);
        setFechaFiltro(fechaSeleccionada);
    };
  
    const dataFiltrados = fechaFiltro
  ? datauser.filter((data) => {
      // Suponiendo que tienes una propiedad 'fecha' en tus objetos datauser
      // Formatea la fecha del objeto data para que coincida con la fecha del filtro
      const fechaData = new Date(data.fecha).toISOString().slice(0, 10);
      // Compara las fechas formateadas
      return fechaData === fechaFiltro;
    })
  : datauser;
 

      console.log(dataFiltrados)

     


    

   
  return (

    <div>

<div className="p-4 sm:ml-64">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                    <div className=' flex justify-center items-center flex-col gap-10' style={{ minHeight: '85vh' }}>





                    <div className='w-3/4 text-black text-4xl flex items-center justify-center font-semibold text-center'>
                            <p>Historial de Apertura</p>
                        </div>
                        <div className="w-8/12 relative overflow-x-auto shadow-md sm:rounded-lg">
                        <input type="date" onChange={handleFechaChange2} />

                            <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">


                                <thead className="text-xs text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    {dataFiltrados?.map((data) => (


                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={data.id_cliente}>

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
                                           
                                        </tr>



                                    )
                                    )}
                                </tbody>
                            </table>
                        </div>
                       

                    </div>
                </div>
            </div>
    </div>
  )
}
