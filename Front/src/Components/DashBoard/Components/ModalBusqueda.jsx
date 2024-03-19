import React, { useState , useEffect } from 'react'
import { useForm } from 'react-hook-form';


export const ModalBusqueda = ({showModal,closeModal, data}) => {
    const { register, handleSubmit, setValue ,formState: { errors } } = useForm();
    const [formData, setFormData] = useState(null);

    useEffect(() => {
        // Actualizar el estado local cuando cambia la propiedad data
        setFormData(data);
    }, [data]);

    const onSubmit = (formData) => {
        console.log(formData);
        // Lógica para enviar el formulario
    };

    // Función para manejar cambios en los datos del formulario
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    useEffect(() => {
        // Actualizar los valores de los campos del formulario cuando cambia formData
        if (formData) {
            Object.entries(formData).forEach(([key, value]) => {
                setValue(key, value);
            });
        }
    }, [formData, setValue]);
    
 console.log(data);
    return (
        <>
   
{showModal  && (

<div   class=" bg-slate-200/50 fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%)] max-h-full"  key={data.id_cliente}>
    <div class=" relative  p-4 w-auto h-auto">
        
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
           
            <div class="flex items-center justify-between p-2 md:p-3 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                    {data.n_cuenta}
                </h3> 
                <p className='flex justify-center'>estado de la Cuenta : {data.estadocliente}</p>
                <button type="button" onClick={closeModal} class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-4 h-4 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
          
            <form action="" onSubmit={handleSubmit(onSubmit)}>
         
              <div className='flex gap-3 items-center justify-center flex-col bg-white' >
                <h1 className='w-2/4 text-black text-2xl flex items-center justify-center font-semibold text-center p-2 border-b-2 border-lightGreen'>Información personal</h1>
                <div className="w-12/12  flex justify-center items-center " style={{ minHeight: '55vh' }}>
                  <div className="grid justify-center gap-6 p-5 lg:grid-cols-3">
                    <div>
                      <p>Nombre Completo:</p>
                      <input type="text"  {...register("Nombre", {
                       
                       pattern: {
                        value: /^[A-Za-z ]+$/i,
                        message: 'Digita solo letras'
                       },
                       required: {
                          value: true,
                          message: 'Campo requerido'
                        }, minLength: {
                          value: 3,
                          message: 'Minimo 3 letras'
                        },
                        maxLength: {
                          value: 20,
                          message:'Maximo 20 letras'
                        },
                      },


                      )} name="Nombre"   defaultValue={data.nombre} // Utiliza defaultValue para el valor inicial
                      value={formData?.nombre} // Utiliza value para el valor actual del campo controlado
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}  class="rounded-md border-gray-300 focus:ring-green focus:border-green"  />
                      {errors.Nombre &&  <span className='text-red-600 flex items-end'>{errors.Nombre.message}</span> }
                    </div>
                    <div>
                      <p>Primer Apellido</p>
                      <input type="text" {...register("Apellido1", {
                        pattern: {
                          value:/^[A-Za-z]+$/i,
                          message: 'Digita solo letras'
                         },
                        required: {
                          value: true,
                          message:'Campo requerido'
                        }, minLength: {
                          value: 3,
                          message:'Minimo 3 letras'
                        },
                        maxLength: {
                          value: 15,
                          message:'Maximo 15 letras'
                        }
                      })} name="Apellido1"  defaultValue={data.primerapellido} // Utiliza defaultValue para el valor inicial
                      value={formData?.primerapellido} // Utiliza value para el valor actual del campo controlado
                      onChange={(e) => setFormData({ ...formData, primerapellido: e.target.value })}  id={data.nombre} class="rounded-md border-gray-300 focus:ring-green focus:border-green"  />
                      {errors.Apellido1 &&  <span className='text-red-600 flex items-end'>{errors.Apellido1.message}</span> }
                    </div>

                    <div>
                      <p>Segundo Apellido</p>
                      <input type="text" {...register("Apellido2", {
                        pattern: {
                          value:/^[A-Za-z]+$/i,
                          message:'Digita solo letras'
                         },
                        required: {
                          value: true,
                          message:'Campo requerido'
                        }, minLength: {
                          value: 3,
                          message:'Minimo 3 letras'
                        },
                        maxLength: {
                          value: 15,
                          message:'Maximo 15 letras'
                        }
                      })} name="Apellido2"  defaultValue={data.segundoapellido} // Utiliza defaultValue para el valor inicial
                      value={formData?.segundoapellido} // Utiliza value para el valor actual del campo controlado
                      onChange={(e) => setFormData({ ...formData, segundoapellido: e.target.value })}  className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    {errors.Apellido2 &&  <span className='text-red-600 flex items-end'>{errors.Apellido2.message}</span> }
                    </div>
                   
                    <div>
                      <p>N° de documento</p>
                      <input type="number" {...register("NDocumento" , {
                        required: {
                          value: true,
                          message:'Campo requerido'
                        }, minLength: {
                          value: 6,
                          message:'Minimo 6 numeros'
                        },
                        maxLength: {
                          value: 10,
                          message:'Maximo 10 numeros'
                          
                        }
                      })} name="NDocumento"  defaultValue={data.ip_documento} // Utiliza defaultValue para el valor inicial
                      value={formData?.ip_documento} // Utiliza value para el valor actual del campo controlado
                      onChange={(e) => setFormData({ ...formData, ip_documento: e.target.value })}  className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    {errors.NDocumento &&  <span className='text-red-600 flex items-end'>{errors.NDocumento.message}</span> }
                    
                    </div>
                    <div>
                      <p>Ciudad de nacimiento</p>
                      <input type="text" {...register("CiudadN", {
                         pattern: {
                          value:/^[A-Za-z]+$/i,
                          message:'Digita solo letras'
                         },
                        required: {
                          value: true,
                          message:'Campo requerido'
                        }, minLength: {
                          value: 3,
                          message:'Minimo 3 letras'
                        },
                        maxLength: {
                          value: 15,
                          message:'Maximo 15 letras'
                        }
                      })} name="CiudadN"  defaultValue={data.ciudadnacimiento} // Utiliza defaultValue para el valor inicial
                      value={formData?.ciudadnacimiento} // Utiliza value para el valor actual del campo controlado
                      onChange={(e) => setFormData({ ...formData, ciudadnacimiento: e.target.value })}   className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    {errors.CiudadN &&  <span className='text-red-600 flex items-end'>{errors.CiudadN.message}</span> }
                      
                    </div>      
                    <div>
                      <p>Fecha de nacimiento</p>
                      <input type="date" {...register("FechaN" , {
                        required: {
                          value: true,
                          message:'Campo requerido'
                        }
                      })} name="FechaN"   className="rounded-md border-gray-300 focus:ring-green focus:border-green w-52" />
                    {errors.FechaN &&  <span className='text-red-600 flex items-end'>{errors.FechaN.message}</span> }
                      
                    </div>
                   
                    <div className="flex flex-col">
                      <label htmlFor="opciones" className="mr-2">
                        Estado Civil:
                      </label>
                      <select id="opciones" {...register("opciones3", {
                        required: {
                          value: true,
                          message:'Campo requerido'
                        }
                      })} name="opciones3" defaultValue={data.estadocivil} // Utiliza defaultValue para el valor inicial
                      value={formData?.estadocivil} // Utiliza value para el valor actual del campo controlado
                      onChange={(e) => setFormData({ ...formData, estadocivil: e.target.value })}   className="p-2 rounded border-gray-300 focus:ring-green focus:border-green w-52">
                        <option Value="">Seleccionar</option>
                        <option Value="Soltero">Soltero</option>
                        <option Value="Casado">Casado</option>
                        <option Value="UL">Unión libre</option>
                      </select>
                    {errors.opciones3 &&  <span className='text-red-600 flex items-end'>{errors.opciones3.message}</span> }

                    </div>
                    <div>
                      <p>Nacionalidad</p>
                      <input type="text" {...register("Nacionalidad", {
                        pattern: {
                          value:/^[A-Za-z]+$/i,
                          message:'Digita solo letras'
                         },
                        required: {
                          value: true,
                          message:'Campo requerido'
                        }, minLength: {
                          value: 3,
                          message:'Minimo 3 letras'
                        },
                        maxLength: {
                          value: 15,
                          message:'Maximo 15 letras'
                        }
                      })} name="Nacionalidad"  defaultValue={data.nacionalidad} // Utiliza defaultValue para el valor inicial
                      value={formData?.nacionalidad} // Utiliza value para el valor actual del campo controlado
                      onChange={(e) => setFormData({ ...formData, nacionalidad: e.target.value })}  className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    {errors.Nacionalidad &&  <span className='text-red-600 flex items-end'>{errors.Nacionalidad.message}</span> }
                   
                    </div>
                  </div>
                </div>
               
              </div>
            
        </form>
           
            <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button data-modal-hide="default-modal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                <button data-modal-hide="default-modal" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Decline</button>
            </div>
        </div>
    </div>
</div>

)}
</>
  )
}
