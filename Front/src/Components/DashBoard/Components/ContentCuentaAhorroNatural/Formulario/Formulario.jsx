import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useAuth } from '../../../../../context/AuthContext';


export const Formulario = ({ contenidoSeleccionado1, regresar, handleBotonClick }) => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const { user } = useAuth();
  console.log(user?.id_usuario)
  let id = user?.id_usuario;


  const [getform, setgetfrom] = useState({
    Nombre: '',
    Apellido1: '',
    Apellido2: '',
    opciones1: '',
    NDocumento: '',
    CiudadN: '',
    LugarE: '',
    FechaE: '',
    FechaN: '',
    opciones2: '',
    opciones3: '',
    Nacionalidad: '',
    // ---------contacto--------
    DireccionR: '',
    BloqueTorre: '',
    AptoCasa: '',
    Barrio: '',
    Municipio: '',
    Departamento: '',
    Pais: '',
    Telefono: '',
    Celular: '',
    CorreoE: '',
    // ------economica --------------
    Profesion: '',
    opciones4: '',
    ActiEcoP: '',
    CodigoCIIU: '',
    NumeroEm: '',
    NombreEm: '',
    DireccionEm: '',
    BarrioEm: '',
    MunicipioEm: '',
    DepartamentoEm: '',
    PaisEm: '',
    TelefonoEm: '',
    Ext: '',
    CelularEm: '',
    CorreoEm: '',
    // ----- financiera -------
    IngresosM: '',
    OIngresosM: '',
    TotalAc: '',
    Totalpa: '',
    DetalleOIM: '',
    TotalIn: '',
    VentasA: '',
    FechaCV: '',
    // ------- Tributaria---------
    opciones5: '',
    opciones6: '',
    opciones7: '',
    opciones8: '',
    NumeroT: '',
    PaisT: '',
    Idtributario: '',
    FondosP: '',
    PaisFondos: '',
    CiudadFondos: '',
    // ----operaciones--------
    opciones9: '',
    opciones10: '',
    NombreEn: '',
    opciones11: '',
    NProducto: '',
    MontoMP: '',
    Moneda: '',
    CiudadOp: '',
    PaisOp: ''

  })

  const valorInput = (event) => {

    const { name, defaultValue, id } = event.target;
    setgetfrom({ ...getform, [name]: defaultValue });
    console.log(id);
  }

  const [datainfo, setdatainfo] = useState()
  const OnsumitInfo = async (data) => {
    setdatainfo(data)
    console.log(datainfo);
    handleBotonClick('contacto')

  }
  const OnsumitInfo2 = async (data) => {
    setdatainfo(data)
    console.log(data);
    handleBotonClick('economica')

  }
  const OnsumitInfo3 = async (data) => {
    setdatainfo(data)
    console.log(data);
    handleBotonClick('financiera')

  }
  const OnsumitInfo4 = async (data) => {
    setdatainfo(data)
    console.log(data);
    handleBotonClick('tributaria')

  }
  const OnsumitInfo5 = async (data) => {

    setdatainfo(data); // Agregar el id_usuario al objeto datainfo
    console.log('datainfo:', datainfo);
    console.log('user?.id_usuario:', user?.id_usuario);
    CrearCliente(data );
    alert('Registro de cliente exitoso');
  }

  const CrearCliente = async () => {
    console.log('id:', id);
    console.log('datainfo:', datainfo);
    try {
      const response = await fetch(`http://localhost:3000/AddFormData/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datainfo,
          id
          ),
      });
      const responseData = await response.json();
      console.log(responseData);
      if (response.status === 200) {
        window.location = "/DashBoardMenu";

        alert('Registro de cliente exitoso');
        // Aquí asignamos los datos del usuario al contexto de autenticación
        setUserData(responseData.user);
      }

    } catch (error) {
      return res.status(400).json({ message: 'No se encontró información del usuario' });
    }
  };

  return (
    <>

      {contenidoSeleccionado1 === 'InfoPersonal' && (
        <form action="" onSubmit={handleSubmit(OnsumitInfo)}>
          <div className="p-4 sm:ml-64">
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
              <div className='flex gap-5 items-center justify-center flex-col bg-white' style={{ minHeight: '85vh' }}>
                <h1 className='w-2/4 text-black text-4xl flex items-center justify-center font-semibold text-center p-2 border-b-2 border-lightGreen'>Información personal</h1>
                <div className="w-11/12  flex justify-center items-center bg-gray-100 rounded shadow-md" style={{ minHeight: '55vh' }}>
                  <div className="grid justify-center gap-5 p-5 lg:grid-cols-3">
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


                      )} name="Nombre" defaultValue={getform.Nombre} onChange={valorInput} class="rounded-md border-gray-300 focus:ring-green focus:border-green"  />
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
                      })} name="Apellido1" defaultValue={getform.Apellido1} onChange={valorInput} id={getform.Apellido1} class="rounded-md border-gray-300 focus:ring-green focus:border-green"  />
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
                      })} name="Apellido2" defaultValue={getform.Apellido2} onChange={valorInput} className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    {errors.Apellido2 &&  <span className='text-red-600 flex items-end'>{errors.Apellido2.message}</span> }
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="opciones" className="rounded-md border-gray-300 focus:ring-green focus:border-green">
                        Tipo de documento:
                      </label>
                      <select id="opciones" {...register("opciones1", {
                        required: {
                          value: true,
                          message:'Campo requerido'
                        }
                      })} name="opciones1" defaultValue={getform.opciones1} onChange={valorInput} className="rounded-md border-gray-300 focus:ring-green focus:border-green w-52 p-2">
                        <option Value="">Seleccionar</option>
                        <option Value="CC">C.C.</option>
                        <option Value="TI">T.I.</option>
                        <option Value="RCivil">R. Civil</option>
                        <option Value="CE">Cédula extranjería</option>
                        <option Value="PP">Pasaporte</option>
                        <option Value="CD">Carné diplomático</option>
                      </select>
                    {errors.opciones1 &&  <span className='text-red-600 flex items-end'>{errors.opciones1.message}</span> }

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
                      })} name="NDocumento" defaultValue={getform.NDocumento} onChange={valorInput} className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
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
                      })} name="CiudadN" defaultValue={getform.CiudadN} onChange={valorInput} className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    {errors.CiudadN &&  <span className='text-red-600 flex items-end'>{errors.CiudadN.message}</span> }
                      
                    </div>
                    <div>
                      <p>Lugar de expedición</p>
                      <input type="text" {...register("LugarE", {
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
                      })} name="LugarE" defaultValue={getform.LugarE} onChange={valorInput} className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    {errors.LugarE &&  <span className='text-red-600 flex items-end'>{errors.LugarE.message}</span> }
                        
                    </div>
                    <div>
                      <p>Fecha de expedición</p>
                      <input type="date" {...register("FechaE", {
                        required: {
                          value: true,
                          message:'Campo requerido'
                        }
                      })} name="FechaE" defaultValue={getform.FechaE} onChange={valorInput} className="rounded-md border-gray-300 focus:ring-green focus:border-green w-52" />
                    {errors.FechaE &&  <span className='text-red-600 flex items-end'>{errors.FechaE.message}</span> }
                       
                    </div>
                    <div>
                      <p>Fecha de nacimiento</p>
                      <input type="date" {...register("FechaN" , {
                        required: {
                          value: true,
                          message:'Campo requerido'
                        }
                      })} name="FechaN" defaultValue={getform.FechaN} onChange={valorInput} className="rounded-md border-gray-300 focus:ring-green focus:border-green w-52" />
                    {errors.FechaN &&  <span className='text-red-600 flex items-end'>{errors.FechaN.message}</span> }
                      
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="opciones" className="mr-2">
                        Genero:
                      </label>
                      <select id="opciones" {...register("opciones2", {
                        required: {
                          value: true,
                          message:'Campo requerido'
                        }
                      })} name="opciones2" defaultValue={getform.opciones2} onChange={valorInput} className="p-2 rounded border-gray-300 focus:ring-green focus:border-green w-52">
                        <option Value="">Seleccionar</option>
                        <option Value="F">Femenino</option>
                        <option Value="M">Masculino</option>
                      </select>
                    {errors.opciones2 &&  <span className='text-red-600 flex items-end'>{errors.opciones2.message}</span> }
                      
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
                      })} name="opciones3" defaultValue={getform.opciones3} onChange={valorInput} className="p-2 rounded border-gray-300 focus:ring-green focus:border-green w-52">
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
                      })} name="Nacionalidad" defaultValue={getform.Nacionalidad} onChange={valorInput} className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    {errors.Nacionalidad &&  <span className='text-red-600 flex items-end'>{errors.Nacionalidad.message}</span> }
                   
                    </div>
                  </div>
                </div>
                <div className="grid gap-5 lg:grid-cols-2 p-8">
                  <a onClick={regresar} className="flex items-center justify-center px-4 h-10 text-base font-medium text-black bg-gray-200 border-gray-300 rounded-lg hover:bg-lightGreen shadow-md hover:text-black">
                    Menú Formulario
                  </a>
                  <button type="submit" className="flex items-center justify-center px-4 h-10 text-base font-medium text-black bg-gray-200 border-gray-300 rounded-lg hover:bg-lightGreen shadow-md hover:text-black">
                    Siguiente
                    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
      {contenidoSeleccionado1 === 'contacto' && (
        <form action="" onSubmit={handleSubmit(OnsumitInfo2)}>
          <div className="p-4 sm:ml-64">
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
              <div className='flex gap-5 items-center justify-center flex-col bg-white' style={{ minHeight: '85vh' }}>
                <h1 className='w-2/4 text-black text-4xl flex items-center justify-center font-semibold text-center p-2 border-b-2 border-lightGreen'>Información de contacto personal</h1>
                <div className="w-11/12  flex justify-center items-center bg-gray-100 rounded shadow-md" style={{ minHeight: '55vh' }}>
                  <div className="grid justify-center gap-5 p-5 lg:grid-cols-3">
                    <div>
                      <p>Dirección residencia</p>
                      <input type="text"  {...register("DireccionR", {
                        required: {
                          value: true,
                          message:'Campo requerido'
                        }, minLength: {
                          value: 3,
                          message:'Minimo 3 digitos'
                        },
                        maxLength: {
                          value: 15,
                          message:'Maximo 15 digitos'
                        }
                      })} name="DireccionR" defaultValue={getform.DireccionR} onChange={valorInput} className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    {errors.DireccionR &&  <span className='text-red-600 flex items-end'>{errors.DireccionR.message}</span> }
                    
                    </div>
                    <div className='flex flex-col w-52 '>
                      <label>Bloque/Torre</label>
                      <input type="text"  {...register("BloqueTorre", {
                         pattern: {
                          value:/^[A-Za-z/]+$/i,
                          message:'Digita solo letras'
                         },
                        minLength: {
                          value: 3,
                          message:'Minimo 3 letras'
                        },
                        maxLength: {
                          value: 15,
                          message:'Maximo 15 letras'
                        }
                      })} name="BloqueTorre" defaultValue={getform.BloqueTorre} onChange={valorInput} className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    {errors.BloqueTorre &&  <span className='text-red-600 flex items-end'>{errors.BloqueTorre.message}</span> }
                    </div>
                    <div>
                      <p>Apto/Casa</p>
                      <input type="text"  {...register("AptoCasa", {
                         pattern: {
                          value:/^[A-Za-z/]+$/i,
                          message:'Digita solo letras'
                         },
                         minLength: {
                          value: 3,
                          message:'Minimo 3 letras'
                        },
                        maxLength: {
                          value: 15,
                          message:'Maximo 15 letras'
                        }
                      })} name="AptoCasa" defaultValue={getform.AptoCasa} onChange={valorInput} className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    {errors.AptoCasa &&  <span className='text-red-600 flex items-end'>{errors.AptoCasa.message}</span> }
                   
                    </div>
                    <div>
                      <p>Barrio</p>
                      <input type="text"  {...register("Barrio", {
                         pattern: {
                          value:/^[A-Za-z ]+$/i,
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
                      })} name="Barrio" defaultValue={getform.Barrio} onChange={valorInput} className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    {errors.Barrio &&  <span className='text-red-600 flex items-end'>{errors.Barrio.message}</span> }
                    
                    </div>
                    <div>
                      <p>Ciudad/Municipio</p>
                      <input type="text"  {...register("Municipio", {
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
                      })} name="Municipio" defaultValue={getform.Municipio} onChange={valorInput} className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    {errors.Municipio &&  <span className='text-red-600 flex items-end'>{errors.Municipio.message}</span> }
                   
                    </div>
                    <div>
                      <p>Departamento</p>
                      <input type="text"  {...register("Departamento", {
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
                      })} name="Departamento" defaultValue={getform.Departamento} onChange={valorInput} className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    {errors.Departamento &&  <span className='text-red-600 flex items-end'>{errors.Departamento.message}</span> }
                   
                    </div>
                    <div>
                      <p>País</p>
                      <input type="text"  {...register("Pais", {
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
                      })} name="Pais" defaultValue={getform.Pais} onChange={valorInput} className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    {errors.Pais &&  <span className='text-red-600 flex items-end'>{errors.Pais.message}</span> }
                    
                    </div>
                    <div>
                      <p>Teléfono</p>
                      <input type="number"  {...register("Telefono", {
                        minLength: {
                          value: 10,
                          message:'Minimo 10 Numeros'
                        },
                        maxLength: {
                          value: 13,
                          message:'Maximo 13 letras'
                        }
                      })} name="Telefono" defaultValue={getform.Telefono} onChange={valorInput} className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    {errors.Telefono &&  <span className='text-red-600 flex items-end'>{errors.Telefono.message}</span> }
                   
                    </div>
                    <div>
                      <p>Celular</p>
                      <input type="number"  {...register("Celular", {
                        required: {
                          value: true,
                        },minLength: {
                          value: 10,
                          message:'Minimo 10 Numeros'
                        },
                        maxLength: {
                          value: 13,
                          message:'Maximo 13 letras'
                        }
                      })} name="Celular" defaultValue={getform.Celular} onChange={valorInput} className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    {errors.Celular &&  <span className='text-red-600 flex items-end'>{errors.Celular.message}</span> }
                    
                    </div>
                    <div>
                      <p>Correo electrónico</p>
                      <input type="email" required {...register("CorreoE", {
                        
                        required: {
                          value: true,
                        }, minLength: {
                          value: 3,
                        },
                        maxLength: {
                          value: 30
                        }
                      })} name="CorreoE" defaultValue={getform.CorreoE} onChange={valorInput} className="rounded-md border-gray-300 focus:ring-green focus:border-green w-auto lg:w-72" />
                    {errors.CorreoE &&  <span className='text-red-600 flex items-end'>{errors.CorreoE.message}</span> }
                    
                    </div>
                  </div>
                </div>
                <div className="grid gap-5 lg:grid-cols-3 p-8">
                  <a onClick={regresar} className="flex items-center justify-center px-4 h-10 text-base font-medium text-black bg-gray-200 border-gray-300 rounded-lg hover:bg-lightGreen shadow-md hover:text-black">
                    Menú Formulario
                  </a>
                  <a onClick={() => handleBotonClick('InfoPersonal')} className="flex items-center justify-center px-4 h-10 text-base font-medium text-black bg-gray-200 border-gray-300 rounded-lg hover:bg-lightGreen shadow-md hover:text-black">
                    <svg className="w-3.5 h-3.5 me-2 rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                    Anterior
                  </a>
                  <button type='submit' className="flex items-center justify-center px-4 h-10 text-base font-medium text-black bg-gray-200 border-gray-300 rounded-lg hover:bg-lightGreen shadow-md hover:text-black">
                    Siguiente
                    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </button>
                </div>

              </div>
            </div>
          </div>
        </form>
      )}
      {contenidoSeleccionado1 === 'economica' && (

        <form action="" onSubmit={handleSubmit(OnsumitInfo3)}>
          <div className="p-4 sm:ml-64">
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
              <div className='flex gap-5 items-center justify-center flex-col bg-white' style={{ minHeight: '85vh' }}>
                <h1 className='w-2/4 text-black text-4xl flex items-center justify-center font-semibold text-center p-2 border-b-2 border-lightGreen'>Información económica y laboral</h1>
                <div className="w-11/12  flex justify-center items-center bg-gray-100 rounded shadow-md" style={{ minHeight: '55vh' }}>
                  <div className="grid justify-center gap-5 p-5 lg:grid-cols-3">
                    <div className="flex flex-col w-52 justify-end">
                      <p>Profesión</p>
                      <input type="text" {...register("Profesion")} name="Profesion" defaultValue={getform.Profesion} onChange={valorInput} className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div className="flex flex-col w-52 justify-end">
                      <label htmlFor="opciones">
                        Ocupación/Oficio:
                      </label>
                      <select id="opciones" {...register("opciones4")} defaultValue={getform.opciones4} onChange={valorInput} name="opciones4" className="rounded-md border-gray-300 focus:ring-green focus:border-green">
                        <option defaultValue="">Seleccionar</option>
                        <option defaultValue="Empleado">Empleado</option>
                        <option defaultValue="Pensionado">Pensionado</option>
                        <option defaultValue="Ama de casa">Ama de casa</option>
                        <option defaultValue="Estudiante">Estudiante</option>
                        <option defaultValue="Ganadero">Ganadero</option>
                        <option defaultValue="Comerciante">Comerciante</option>
                        <option defaultValue="Agricultor">Agricultor</option>
                        <option defaultValue="RC">Rentista de capital</option>
                        <option defaultValue="Independiente">Independiente</option>
                        <option defaultValue="DSI">Desempleado sin ingresos</option>
                        <option defaultValue="DCI">Desempleado con ingresos</option>
                        <option defaultValue="PI">Profesional independiente</option>
                        <option defaultValue="SOE">Socio o Empleado-socio</option>
                      </select>
                    </div>
                    <div className="flex flex-col justify-end">
                      <p>Actividad económica principal</p>
                      <input type="text"  {...register("ActiEcoP")} name="ActiEcoP" defaultValue={getform.ActiEcoP} onChange={valorInput} className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div className="flex flex-col w-52 justify-end">
                      <p>Código CIIU</p>
                      <input type="text"  {...register("CodigoCIIU")} name="CodigoCIIU" defaultValue={getform.CodigoCIIU} onChange={valorInput} className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div className="flex flex-col w-52 justify-end">
                      <p>N° Empleados</p>
                      <input type="number"  {...register("NumeroEm")} name="NumeroEm" defaultValue={getform.NumeroEm} onChange={valorInput} className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div className="flex flex-col w-52 justify-end">
                      <p>Nombre de la empresa</p>
                      <input type="text"  {...register("NombreEm")} name="NombreEm" defaultValue={getform.NombreEm} onChange={valorInput} className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div className="flex flex-col w-52 justify-end">
                      <p>Dirección de empresa o lugar donde desarrolla su actividad</p>
                      <input type="text"  {...register("DireccionEm")} name="DireccionEm" defaultValue={getform.DireccionEm} onChange={valorInput} className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>Barrio</p>
                      <input type="text"  {...register("BarrioEm")} name="BarrioEm" defaultValue={getform.BarrioEm} onChange={valorInput} className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>Ciudad/Municipio</p>
                      <input type="text" {...register("MunicipioEm")} name="MunicipioEm" defaultValue={getform.MunicipioEm} onChange={valorInput} className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>Departamento</p>
                      <input type="text" {...register("DepartamentoEm")} name="DepartamentoEm" defaultValue={getform.DepartamentoEm} onChange={valorInput} className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>País</p>
                      <input type="text"  {...register("PaisEm")} name="PaisEm" defaultValue={getform.PaisEm} onChange={valorInput} className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>Teléfono</p>
                      <input type="number"  {...register("TelefonoEm")} name="TelefonoEm" defaultValue={getform.TelefonoEm} onChange={valorInput} className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>Ext</p>
                      <input type="number"  {...register("Ext")} name="Ext" defaultValue={getform.Ext} onChange={valorInput} className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>Celular</p>
                      <input type="number" {...register("CelularEm")} name="CelularEm" defaultValue={getform.CelularEm} onChange={valorInput} className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>Correo electrónico laboral</p>
                      <input type="email"  {...register("CorreoEm")} name="CorreoEm" defaultValue={getform.CorreoEm} onChange={valorInput} className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                  </div>
                </div>
                <div className="grid gap-5 lg:grid-cols-3 p-8">
                  <a onClick={regresar} className="flex items-center justify-center px-4 h-10 text-base font-medium text-black bg-gray-200 border-gray-300 rounded-lg hover:bg-lightGreen shadow-md hover:text-black">
                    Menú Formulario
                  </a>
                  <a onClick={() => handleBotonClick('contacto')} className="flex items-center justify-center px-4 h-10 text-base font-medium text-black bg-gray-200 border-gray-300 rounded-lg hover:bg-lightGreen shadow-md hover:text-black">
                    <svg className="w-3.5 h-3.5 me-2 rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                    Anterior
                  </a>
                  <button className="flex items-center justify-center px-4 h-10 text-base font-medium text-black bg-gray-200 border-gray-300 rounded-lg hover:bg-lightGreen shadow-md hover:text-black">
                    Siguiente
                    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
      {contenidoSeleccionado1 === 'financiera' && (
        <form action="" onSubmit={handleSubmit(OnsumitInfo4)}>
          <div className="p-4 sm:ml-64">
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
              <div className='flex gap-5 items-center justify-center flex-col bg-white' style={{ minHeight: '85vh' }}>
                <h1 className='w-2/4 text-black text-4xl flex items-center justify-center font-semibold text-center p-2 border-b-2 border-lightGreen'>Detalle información financiera</h1>
                <div className="w-11/12  flex justify-center items-center bg-gray-100 rounded shadow-md" style={{ minHeight: '55vh' }}>
                  <div className="grid justify-center gap-5 p-5 lg:grid-cols-3">
                    <div >
                      <p>Ingresos mensuales</p>
                      <input type="number"  {...register("IngresosM")} name="IngresosM" defaultValue={getform.IngresosM} onChange={valorInput} className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>Otros ingresos mensuales</p>
                      <input type="number"  {...register("OIngresosM")} name="OIngresosM" defaultValue={getform.OIngresosM} onChange={valorInput} className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>Total activos</p>
                      <input type="number"  {...register("TotalAc")} name="TotalAc" defaultValue={getform.TotalAc} onChange={valorInput} className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>Total pasivos</p>
                      <input type="number"  {...register("Totalpa")} name="Totalpa" defaultValue={getform.Totalpa} onChange={valorInput} className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>Detalle otros ingresos mensuales</p>
                      <input type="text"  {...register("DetalleOIM")} name="DetalleOIM" defaultValue={getform.DetalleOIM} onChange={valorInput} className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>Total egresos mensuales</p>
                      <input type="number"  {...register("TotalIn")} name="TotalIn" defaultValue={getform.TotalIn} onChange={valorInput} className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>Ventas anuales</p>
                      <input type="number"  {...register("VentasA")} name="VentasA" defaultValue={getform.VentasA} onChange={valorInput} className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>Fecha de cierre de ventas</p>
                      <input type="date" {...register("FechaCV")} name="FechaCV" defaultValue={getform.FechaCV} onChange={valorInput} className="rounded-md border-gray-300 focus:ring-green focus:border-green w-52" />
                    </div>
                  </div>
                </div>
                <div className="grid gap-5 lg:grid-cols-3 p-8">
                  <a onClick={regresar} className="flex items-center justify-center px-4 h-10 text-base font-medium text-black bg-gray-200 border-gray-300 rounded-lg hover:bg-lightGreen shadow-md hover:text-black">
                    Menú Formulario
                  </a>
                  <a onClick={() => handleBotonClick('economica')} className="flex items-center justify-center px-4 h-10 text-base font-medium text-black bg-gray-200 border-gray-300 rounded-lg hover:bg-lightGreen shadow-md hover:text-black">
                    <svg className="w-3.5 h-3.5 me-2 rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                    Anterior
                  </a>
                  <button className="flex items-center justify-center px-4 h-10 text-base font-medium text-black bg-gray-200 border-gray-300 rounded-lg hover:bg-lightGreen shadow-md hover:text-black">
                    Siguiente
                    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
      {contenidoSeleccionado1 === 'tributaria' && (
        <div className="p-4 sm:ml-64">
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
            <div className='flex gap-5 items-center justify-center flex-col bg-white' style={{ minHeight: '85vh' }}>
              <h1 className='w-2/4 text-black text-4xl flex items-center justify-center font-semibold text-center p-2 border-b-2 border-lightGreen'>Información Tributaria</h1>
              <div className="w-11/12  flex justify-center items-center bg-gray-100 rounded shadow-md" style={{ minHeight: '55vh' }}>
                <div className="grid justify-center gap-5 p-5 lg:grid-cols-3">
                  <div className="flex flex-col">
                    <label htmlFor="opciones" className="mr-2">
                      ¿Es declarante de renta?:
                    </label>
                    <select id="opciones" {...register("opciones5")} defaultValue={getform.opciones5} onChange={valorInput} name="opciones5" className="rounded-md border-gray-300 focus:ring-green focus:border-green w-52 p-2">
                      <option defaultValue="">Seleccionar</option>
                      <option defaultValue="Si">Si</option>
                      <option defaultValue="No">No</option>
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="opciones" className="mr-2">
                      Agente retenedor:
                    </label>
                    <select id="opciones" {...register("opciones6")} defaultValue={getform.opciones6} onChange={valorInput} name="opciones6" className="rounded-md border-gray-300 focus:ring-green focus:border-green w-52 p-2">
                      <option defaultValue="">Seleccionar</option>
                      <option defaultValue="Si">Si</option>
                      <option defaultValue="No">No</option>
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="opciones" className="mr-2">
                      Régimen de IVA:
                    </label>
                    <select id="opciones" {...register("opciones7")} defaultValue={getform.opciones7} onChange={valorInput} name="opciones7" className="rounded-md border-gray-300 focus:ring-green focus:border-green w-52 p-2">
                      <option defaultValue="">Seleccionar</option>
                      <option defaultValue="Comun">Común</option>
                      <option defaultValue="Simplificado">Simplificado</option>
                      <option defaultValue="Ninguno">Ninguno</option>
                    </select>
                  </div>
                  <div className="flex flex-col w-52 justify-end">
                    <label htmlFor="opciones" className="mr-2">
                      Obligado a tributar en Estados Unidos:
                    </label>
                    <select id="opciones" {...register("opciones8")} defaultValue={getform.opciones8} onChange={valorInput} name="opciones8" className="rounded-md border-gray-300 focus:ring-green focus:border-green w-52 p-2">
                      <option defaultValue="">Seleccionar</option>
                      <option defaultValue="Si">Si</option>
                      <option defaultValue="No">No</option>
                    </select>
                  </div>
                  <div className="flex flex-col w-52 justify-end" >
                    <p>*Si su respuesta es afirmativa indique el número de ID tributario (TIN)</p>
                    <input type="text"  {...register("NumeroT")} name="NumeroT" defaultValue={getform.NumeroT} onChange={valorInput} className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                  </div>
                  <div className="flex flex-col w-52 justify-end">
                    <p>Si está obligado a tributar en otro país diferente a Colombia, indique cuál (es):</p>
                    <input type="text"  {...register("PaisT")} name="PaisT" defaultValue={getform.PaisT} onChange={valorInput} className="rounded-md border-gray-300 focus:ring-green focus:border-green " />
                  </div>
                  <div className="flex flex-col w-52 justify-end">
                    <p>ID Tributario</p>
                    <input type="text"  {...register("Idtributario")} name="Idtributario" defaultValue={getform.Idtributario} onChange={valorInput} className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                  </div>
                  <div className="flex flex-col w-52 justify-end">
                    <p>Declaro que: El origen de mis bienes y/o fondos provienen de:</p>
                    <input type="text"  {...register("FondosP")} name="FondosP" defaultValue={getform.FondosP} onChange={valorInput} className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                  </div>
                  <div className="flex flex-col w-52 justify-end">
                    <p>El país origen de bienes y/o fondos</p>
                    <input type="text"  {...register("PaisFondos")} name="PaisFondos" defaultValue={getform.PaisFondos} onChange={valorInput} placeholder='' className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                  </div>
                  <div className="flex flex-col w-52 justify-end">
                    <p>La ciudad origen de bienes y/o fondos</p>
                    <input type="text"  {...register("CiudadFondos")} name="CiudadFondos" defaultValue={getform.CiudadFondos} onChange={valorInput} className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                  </div>
                </div>
              </div>
              <div className="grid gap-5 lg:grid-cols-3 p-8">
                <a onClick={regresar} className="flex items-center justify-center px-4 h-10 text-base font-medium text-black bg-gray-200 border-gray-300 rounded-lg hover:bg-lightGreen shadow-md hover:text-black">
                  Menú Formulario
                </a>
                <a onClick={() => handleBotonClick('financiera')} className="flex items-center justify-center px-4 h-10 text-base font-medium text-black bg-gray-200 border-gray-300 rounded-lg hover:bg-lightGreen shadow-md hover:text-black">
                  <svg className="w-3.5 h-3.5 me-2 rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                  Anterior
                </a>
                <a onClick={() => handleBotonClick('operaciones')} className="flex items-center justify-center px-4 h-10 text-base font-medium text-black bg-gray-200 border-gray-300 rounded-lg hover:bg-lightGreen shadow-md hover:text-black">
                  Siguiente
                  <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      {contenidoSeleccionado1 === 'operaciones' && (
        <form action="" onSubmit={handleSubmit(OnsumitInfo5)}>
          <div className="p-4 sm:ml-64">
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
              <div className='flex gap-5 items-center justify-center flex-col bg-white' style={{ minHeight: '85vh' }}>
                <h1 className='w-2/4 text-black text-4xl flex items-center justify-center font-semibold text-center p-2 border-b-2 border-lightGreen'>Información de operaciones internacionales</h1>
                <div className="w-11/12  flex justify-center items-center bg-gray-100 rounded shadow-md" style={{ minHeight: '55vh' }}>
                  <div className="grid justify-center gap-5 p-5 lg:grid-cols-3">
                    <div className="flex flex-col w-52 justify-end">
                      <label htmlFor="opciones">
                        ¿Realiza operaciones en moneda extranjera?:
                      </label>
                      <select id="opciones" {...register("opciones9")} defaultValue={getform.opciones9} name="opciones9" className="rounded-md border-gray-300 focus:ring-green focus:border-green w-52 p-2">
                        <option defaultValue="">Seleccionar</option>
                        <option defaultValue="Si">Si</option>
                        <option defaultValue="No">No</option>
                      </select>
                    </div>
                    <div className="flex flex-col w-52 justify-end">
                      <label htmlFor="opciones" className="mr-2 ">
                        ¿Cuál(es) de las siguientes operaciones realiza en moneda extranjera?:
                      </label>
                      <select id="opciones" {...register("opciones10")} defaultValue={getform.opciones10} name="opciones10" className="rounded-md border-gray-300 focus:ring-green focus:border-green w-52 p-2">
                        <option Value="">Seleccionar</option>
                        <option Value="EI">Exportador e importador</option>
                        <option Value="Exportador">Exportador</option>
                        <option Value="Importador">Importador</option>
                        <option Value="EGR">Envío/Recepción de giros y remesas</option>
                        <option Value="PS">Pago de servicios</option>
                        <option Value="Prestamos">Préstamos</option>
                        <option Value="Inversiones">Inversiones</option>
                        <option Value="otra">otra: </option>
                      </select>
                      {/* <input type="text" placeholder='Otra, ¿Cual?' /> */}
                    </div>
                    <div className="flex flex-col w-52 justify-end">
                      <p>Nombre de la entidad</p>
                      <input type="text" {...register("NombreEn")} name="NombreEn" defaultValue={getform.NombreEn} className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div className="flex flex-col w-52 justify-end">
                      <label htmlFor="opciones" className="mr-2">
                        ¿Realiza operaciones en moneda extranjera?:
                      </label>
                      <select id="opciones"{...register("opciones11")} defaultValue={getform.opciones11} name="opciones11" className="rounded-md border-gray-300 focus:ring-green focus:border-green w-52 p-2">
                        <option defaultValue="">Seleccionar</option>
                        <option defaultValue="prestamos">Préstamos</option>
                        <option defaultValue="Inversiones">Inversiones</option>
                        <option defaultValue="Otra">otra</option>
                      </select>
                      {/* <input type="text" placeholder='Otra, ¿Cual?' /> */}
                    </div>

                    <div className="flex flex-col w-52 justify-end">
                      <p>N° de producto</p>
                      <input type="number"  {...register("NProducto")} name="NProducto" defaultValue={getform.NProducto} className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div className="flex flex-col w-52 justify-end">
                      <p>Monto mensual promedio</p>
                      <input type="number" {...register("MontoMP")} name="MontoMP" defaultValue={getform.MontoMP} className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>Moneda</p>
                      <input type="text" {...register("Moneda")} name="Moneda" defaultValue={getform.Moneda} className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>Ciudad</p>
                      <input type="text" {...register("CiudadOp")} name="CiudadOp" defaultValue={getform.CiudadOp} className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>País</p>
                      <input type="text" {...register("PaisOp")} name="PaisOp" defaultValue={getform.PaisOp} className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                  </div>
                </div>
                <div className="grid gap-5 lg:grid-cols-3 p-8">
                  <a onClick={regresar} className="flex items-center justify-center px-4 h-10 text-base font-medium text-black bg-gray-200 border-gray-300 rounded-lg hover:bg-lightGreen shadow-md hover:text-black">
                    Menú Formulario
                  </a>
                  <a onClick={() => handleBotonClick('tributaria')} className="flex items-center justify-center px-4 h-10 text-base font-medium text-black bg-gray-200 border-gray-300 rounded-lg hover:bg-lightGreen shadow-md hover:text-black">
                    <svg className="w-3.5 h-3.5 me-2 rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                    Anterior
                  </a>
                  <button type='submit' className="flex items-center justify-center px-4 h-10 text-base font-medium text-black bg-gray-200 border-gray-300 rounded-lg hover:bg-lightGreen shadow-md hover:text-black">
                    Finalizar Formulario
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      )}






    </>
  )
}
