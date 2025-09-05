import React, { useEffect, useState } from 'react'
// Removed unused toast imports
import { API_BASE } from '../../../../config.js';

export const Historial = () => {
    const [datauser, setdatauser] = useState([]);



    useEffect(() => {
        const fecthData = async () => {
            try {
                const response = await fetch(`${API_BASE}/getclienteA`);
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


 
  
   

    const [fechaInicio, setFechaInicio] = useState('');
    const [fechaFin, setFechaFin] = useState('');
   

   
  

    const handleFechaInicioChange = (event) => {
        const inputDate = event.target.value;
        if (inputDate) {
            const [year, month, day] = inputDate.split('-');
            const fechaSeleccionada = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
            setFechaInicio(fechaSeleccionada);
            
        } else {
            setFechaInicio('');
        }
    };

    const handleFechaFinChange = (event) => {
        const inputDate = event.target.value;
        if (inputDate) {
            const [year, month, day] = inputDate.split('-');
            const fechaSeleccionada = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
            setFechaFin(fechaSeleccionada);
        } else {
            setFechaFin('');
        }
    };
    
    const dataFiltrados = datauser.filter((data) => {
        const fechaData = new Date(data.fecha).getTime();
        const fechaInicioTime = fechaInicio ? new Date(fechaInicio).getTime() : 0;
        const fechaFinTime = fechaFin ? new Date(fechaFin).getTime() : Number.MAX_SAFE_INTEGER;
        
        const fechaMatch = fechaData >= fechaInicioTime && fechaData <= fechaFinTime;
        return  fechaMatch;
    });



    console.log(dataFiltrados)

    function mostrarFechaEnFormato(fecha) {
        // Crear un objeto Date con la fecha recibida
        const fechaObjeto = new Date(fecha);
      
        // Extraer el año, mes y día de la fecha
        const year = fechaObjeto.getFullYear();
        const month = fechaObjeto.getMonth() + 1; // Los meses van de 0 a 11, por lo que sumamos 1
        const day = fechaObjeto.getDate();
      
        // Formatear el mes y el día como cadenas de dos dígitos
        const monthString = month < 10 ? '0' + month : month.toString();
        const dayString = day < 10 ? '0' + day : day.toString();
      
        // Construir la cadena de fecha en el formato deseado: "yyyy-mm-dd"
        const fechaFormateada = `${dayString}-${monthString}-${year}`;
      
        return fechaFormateada;
      }
      
      // Ejemplo de uso
      const fechaOriginal = "2024-03-14T05:00:00.000Z";
      const fechaFormateada = mostrarFechaEnFormato(fechaOriginal);
     
      
     
    







    return (

        <div className="p-6 sm:ml-64">
            <div className="mt-16 max-w-6xl mx-auto">
                <div className='bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 p-6'>





                        <div className='mb-6 text-center'>
                            <h2 className='text-2xl font-semibold text-darkGreen'>Historial de apertura</h2>
                            <p className='text-sm text-gray-500'>Filtra por rango de fechas para revisar aperturas</p>
                        </div>
                        <div className='flex flex-row justify-center gap-4 items-center mb-6'>
                            <input type="date" className='rounded-lg border-gray-300 focus:ring-green focus:border-green w-52' defaultValue={fechaInicio} onChange={handleFechaInicioChange} />
                            <input type="date" className='rounded-lg border-gray-300 focus:ring-green focus:border-green w-52' defaultValue={fechaFin} onChange={handleFechaFinChange} />
                        </div>
                        <div className="relative overflow-x-auto rounded-xl ring-1 ring-gray-100">
                            <table className="w-full text-sm text-center text-gray-700">


                                <thead className="text-xs uppercase bg-gray-50 text-gray-600">
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
                                <tbody className="divide-y divide-gray-100">
                                    {dataFiltrados?.map((data) => (


                                        <tr className="bg-white hover:bg-gray-50" key={data.id_cliente}>
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {data.ip_documento}
                                            </th>
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {data.nombre}
                                            </th>
                                            <td className="px-6 py-4">
                                                { mostrarFechaEnFormato(data.fecha)}
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
                                    )}
                                </tbody>
                            </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
