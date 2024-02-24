import React from 'react'

export const Formulario = ({ contenidoSeleccionado1, regresar, handleBotonClick }) => {



  return (
    <>
      <form action="" >
        {contenidoSeleccionado1 === 'InfoPersonal' && (
          <div class="p-4 sm:ml-64">
            <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
              <div class='flex gap-5 items-center justify-center flex-col bg-white' style={{ minHeight: '85vh' }}>
                <h1 class='w-2/4 text-black text-4xl flex items-center justify-center font-semibold text-center p-2 border-b-2 border-lightGreen'>Información personal</h1>
                <div class="w-11/12  flex justify-center items-center bg-gray-100 rounded shadow-md" style={{ minHeight: '55vh' }}>
                  <div class="grid justify-center gap-5 p-5 lg:grid-cols-3">
                    <div>
                      <p>Nombre Completo:</p>
                      <input type="text" class="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>Primer Apellido</p>
                      <input type="text" class="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>Segundo Apellido</p>
                      <input type="text" class="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div class="flex flex-col">
                      <label htmlFor="opciones" class="rounded-md border-gray-300 focus:ring-green focus:border-green" className="mr-2">
                        Tipo de documento:
                      </label>
                      <select id="opciones" name="opciones" class="rounded-md border-gray-300 focus:ring-green focus:border-green w-52 p-2">
                        <option value="">Seleccionar</option>
                        <option value="CC">C.C.</option>
                        <option value="TI">T.I.</option>
                        <option value="RCivil">R. Civil</option>
                        <option value="CE">Cédula extranjería</option>
                        <option value="PP">Pasaporte</option>
                        <option value="CD">Carné diplomático</option>
                      </select>
                    </div>
                    <div>
                      <p>N° de documento</p>
                      <input type="number" class="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>Ciudad de nacimiento</p>
                      <input type="text" class="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>Lugar de expedición</p>
                      <input type="text" class="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>Fecha de expedición</p>
                      <input type="date" class="rounded-md border-gray-300 focus:ring-green focus:border-green w-52" />
                    </div>
                    <div>
                      <p>Fecha de nacimiento</p>
                      <input type="date" class="rounded-md border-gray-300 focus:ring-green focus:border-green w-52" />
                    </div>
                    <div class="flex flex-col">
                      <label htmlFor="opciones" className="mr-2">
                        Genero:
                      </label>
                      <select id="opciones" name="opciones" className="p-2 rounded border-gray-300 focus:ring-green focus:border-green w-52">
                        <option value="">Seleccionar</option>
                        <option value="F">Femenino</option>
                        <option value="M">Masculino</option>
                      </select>
                    </div>
                    <div class="flex flex-col">
                      <label htmlFor="opciones" className="mr-2">
                        Estado Civil:
                      </label>
                      <select id="opciones" name="opciones" className="p-2 rounded border-gray-300 focus:ring-green focus:border-green w-52">
                        <option value="">Seleccionar</option>
                        <option value="Soltero">Soltero</option>
                        <option value="Casado">Casado</option>
                        <option value="UL">Unión libre</option>
                      </select>
                    </div>
                    <div>
                      <p>Nacionalidad</p>
                      <input type="text" class="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                  </div>
                </div>
                <div class="grid gap-5 lg:grid-cols-2 p-8">
                  <a onClick={regresar} class="flex items-center justify-center px-4 h-10 text-base font-medium text-black bg-gray-200 border-gray-300 rounded-lg hover:bg-lightGreen shadow-md hover:text-black">
                    Menú Formulario
                  </a>
                  <a onClick={() => handleBotonClick('contacto')} class="flex items-center justify-center px-4 h-10 text-base font-medium text-black bg-gray-200 border-gray-300 rounded-lg hover:bg-lightGreen shadow-md hover:text-black">
                    Siguiente
                    <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
        {contenidoSeleccionado1 === 'contacto' && (
          <div class="p-4 sm:ml-64">
            <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
              <div class='flex gap-5 items-center justify-center flex-col bg-white' style={{ minHeight: '85vh' }}>
                <h1 class='w-2/4 text-black text-4xl flex items-center justify-center font-semibold text-center p-2 border-b-2 border-lightGreen'>Información de contacto personal</h1>
                <div class="w-11/12  flex justify-center items-center bg-gray-100 rounded shadow-md" style={{ minHeight: '55vh' }}>
                  <div class="grid justify-center gap-5 p-5 lg:grid-cols-3">
                    <div >
                      <p>Dirección residencia</p>
                      <input type="text" class="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div class='flex flex-col w-52 '>
                      <label>Bloque/Torre</label>
                      <input type="text" class="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>Apto/Casa</p>
                      <input type="text" class="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>Barrio</p>
                      <input type="text" class="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>Ciudad/Municipio</p>
                      <input type="text" class="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>Departamento</p>
                      <input type="text" class="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>País</p>
                      <input type="text" class="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>Teléfono</p>
                      <input type="number" class="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>Celular</p>
                      <input type="number" class="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>Correo electrónico</p>
                      <input type="email" class="rounded-md border-gray-300 focus:ring-green focus:border-green w-auto lg:w-72" />
                    </div>
                  </div>
                </div>
                <div class="grid gap-5 lg:grid-cols-3 p-8">
                  <a onClick={regresar} class="flex items-center justify-center px-4 h-10 text-base font-medium text-black bg-gray-200 border-gray-300 rounded-lg hover:bg-lightGreen shadow-md hover:text-black">
                    Menú Formulario
                  </a>
                  <a onClick={() => handleBotonClick('InfoPersonal')} class="flex items-center justify-center px-4 h-10 text-base font-medium text-black bg-gray-200 border-gray-300 rounded-lg hover:bg-lightGreen shadow-md hover:text-black">
                    <svg class="w-3.5 h-3.5 me-2 rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                    Anterior
                  </a>
                  <a onClick={() => handleBotonClick('economica')} class="flex items-center justify-center px-4 h-10 text-base font-medium text-black bg-gray-200 border-gray-300 rounded-lg hover:bg-lightGreen shadow-md hover:text-black">
                    Siguiente
                    <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </a>
                </div>

              </div>
            </div>
          </div>
        )}
        {contenidoSeleccionado1 === 'economica' && (

          <div class="p-4 sm:ml-64">
            <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
              <div class='flex gap-5 items-center justify-center flex-col bg-white' style={{ minHeight: '85vh' }}>
                <h1 class='w-2/4 text-black text-4xl flex items-center justify-center font-semibold text-center p-2 border-b-2 border-lightGreen'>Información económica y laboral</h1>
                <div class="w-11/12  flex justify-center items-center bg-gray-100 rounded shadow-md" style={{ minHeight: '55vh' }}>
                  <div class="grid justify-center gap-5 p-5 lg:grid-cols-3">
                    <div class="flex flex-col w-52 justify-end">
                      <p>Profesión</p>
                      <input type="text" class="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div class="flex flex-col w-52 justify-end">
                      <label htmlFor="opciones">
                        Ocupación/Oficio:
                      </label>
                      <select id="opciones" name="opciones" class="rounded-md border-gray-300 focus:ring-green focus:border-green">
                        <option value="">Seleccionar</option>
                        <option value="Empleado">Empleado</option>
                        <option value="Pensionado">Pensionado</option>
                        <option value="Ama de casa">Ama de casa</option>
                        <option value="Estudiante">Estudiante</option>
                        <option value="Ganadero">Ganadero</option>
                        <option value="Comerciante">Comerciante</option>
                        <option value="Agricultor">Agricultor</option>
                        <option value="RC">Rentista de capital</option>
                        <option value="Independiente">Independiente</option>
                        <option value="DSI">Desempleado sin ingresos</option>
                        <option value="DCI">Desempleado con ingresos</option>
                        <option value="PI">Profesional independiente</option>
                        <option value="SOE">Socio o Empleado-socio</option>
                      </select>
                    </div>
                    <div class="flex flex-col justify-end">
                      <p>Actividad económica principal</p>
                      <input type="text" class="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div class="flex flex-col w-52 justify-end">
                      <p>Código CIIU</p>
                      <input type="text" class="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div class="flex flex-col w-52 justify-end">
                      <p>Nombre de la empresa</p>
                      <input type="text" class="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div class="flex flex-col w-52 justify-end">
                      <p>Dirección de empresa o lugar donde desarrolla su actividad</p>
                      <input type="text" class="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>Barrio</p>
                      <input type="text" class="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>Ciudad/Municipio</p>
                      <input type="text" class="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>Departamento</p>
                      <input type="text" class="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>País</p>
                      <input type="text" class="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>Teléfono</p>
                      <input type="number" class="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>Ext</p>
                      <input type="number" class="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>Celular</p>
                      <input type="number" class="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>Correo electrónico laboral</p>
                      <input type="email" class="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                  </div>
                </div>
                <div class="grid gap-5 lg:grid-cols-3 p-8">
                  <a onClick={regresar} class="flex items-center justify-center px-4 h-10 text-base font-medium text-black bg-gray-200 border-gray-300 rounded-lg hover:bg-lightGreen shadow-md hover:text-black">
                    Menú Formulario
                  </a>
                  <a onClick={() => handleBotonClick('contacto')} class="flex items-center justify-center px-4 h-10 text-base font-medium text-black bg-gray-200 border-gray-300 rounded-lg hover:bg-lightGreen shadow-md hover:text-black">
                    <svg class="w-3.5 h-3.5 me-2 rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                    Anterior
                  </a>
                  <a onClick={() => handleBotonClick('financiera')} class="flex items-center justify-center px-4 h-10 text-base font-medium text-black bg-gray-200 border-gray-300 rounded-lg hover:bg-lightGreen shadow-md hover:text-black">
                    Siguiente
                    <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
        {contenidoSeleccionado1 === 'financiera' && (
          <div class="p-4 sm:ml-64">
            <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
              <div class='flex gap-5 items-center justify-center flex-col bg-white' style={{ minHeight: '85vh' }}>
                <h1 class='w-2/4 text-black text-4xl flex items-center justify-center font-semibold text-center p-2 border-b-2 border-lightGreen'>Detalle información financiera</h1>
                <div class="w-11/12  flex justify-center items-center bg-gray-100 rounded shadow-md" style={{ minHeight: '55vh' }}>
                  <div class="grid justify-center gap-5 p-5 lg:grid-cols-3">
                    <div >
                      <p>Ingresos mensuales</p>
                      <input type="number" class="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>Otros ingresos mensuales</p>
                      <input type="number" class="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>Total activos</p>
                      <input type="number" class="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>Total pasivos</p>
                      <input type="number" class="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>Detalle otros ingresos mensuales</p>
                      <input type="text" class="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>Total egresos mensuales</p>
                      <input type="number" class="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>Ventas anuales</p>
                      <input type="number" class="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>Fecha de cierre de ventas</p>
                      <input type="date" class="rounded-md border-gray-300 focus:ring-green focus:border-green w-52" />
                    </div>
                  </div>
                </div>
                <div class="grid gap-5 lg:grid-cols-3 p-8">
                  <a onClick={regresar} class="flex items-center justify-center px-4 h-10 text-base font-medium text-black bg-gray-200 border-gray-300 rounded-lg hover:bg-lightGreen shadow-md hover:text-black">
                    Menú Formulario
                  </a>
                  <a onClick={() => handleBotonClick('economica')} class="flex items-center justify-center px-4 h-10 text-base font-medium text-black bg-gray-200 border-gray-300 rounded-lg hover:bg-lightGreen shadow-md hover:text-black">
                    <svg class="w-3.5 h-3.5 me-2 rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                    Anterior
                  </a>
                  <a onClick={() => handleBotonClick('tributaria')} class="flex items-center justify-center px-4 h-10 text-base font-medium text-black bg-gray-200 border-gray-300 rounded-lg hover:bg-lightGreen shadow-md hover:text-black">
                    Siguiente
                    <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

        )}
        {contenidoSeleccionado1 === 'tributaria' && (
          <div class="p-4 sm:ml-64">
            <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
              <div class='flex gap-5 items-center justify-center flex-col bg-white' style={{ minHeight: '85vh' }}>
                <h1 class='w-2/4 text-black text-4xl flex items-center justify-center font-semibold text-center p-2 border-b-2 border-lightGreen'>Información Tributaria</h1>
                <div class="w-11/12  flex justify-center items-center bg-gray-100 rounded shadow-md" style={{ minHeight: '55vh' }}>
                  <div class="grid justify-center gap-5 p-5 lg:grid-cols-3">
                    <div class="flex flex-col">
                      <label htmlFor="opciones" className="mr-2">
                        ¿Es declarante de renta?:
                      </label>
                      <select id="opciones" name="opciones" class="rounded-md border-gray-300 focus:ring-green focus:border-green w-52 p-2">
                        <option value="">Seleccionar</option>
                        <option value="Si">Si</option>
                        <option value="No">No</option>
                      </select>
                    </div>
                    <div class="flex flex-col">
                      <label htmlFor="opciones" className="mr-2">
                        Agente retenedor:
                      </label>
                      <select id="opciones" name="opciones" class="rounded-md border-gray-300 focus:ring-green focus:border-green w-52 p-2">
                        <option value="">Seleccionar</option>
                        <option value="Si">Si</option>
                        <option value="No">No</option>
                      </select>
                    </div>
                    <div class="flex flex-col">
                      <label htmlFor="opciones" className="mr-2">
                        Régimen de IVA:
                      </label>
                      <select id="opciones" name="opciones" class="rounded-md border-gray-300 focus:ring-green focus:border-green w-52 p-2">
                        <option value="">Seleccionar</option>
                        <option value="Comun">Común</option>
                        <option value="Simplificado">Simplificado</option>
                        <option value="Ninguno">Ninguno</option>
                      </select>
                    </div>
                    <div class="flex flex-col w-52 justify-end">
                      <label htmlFor="opciones" className="mr-2">
                        Obligado a tributar en Estados Unidos:
                      </label>
                      <select id="opciones" name="opciones" class="rounded-md border-gray-300 focus:ring-green focus:border-green w-52 p-2">
                        <option value="">Seleccionar</option>
                        <option value="Si">Si</option>
                        <option value="No">No</option>
                      </select>
                    </div>
                    <div class="flex flex-col w-52 justify-end" >
                      <p>*Si su respuesta es afirmativa indique el número de ID tributario (TIN)</p>
                      <input type="text" class="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div class="flex flex-col w-52 justify-end">
                      <p>Si está obligado a tributar en otro país diferente a Colombia, indique cuál (es):</p>
                      <input type="text" class="rounded-md border-gray-300 focus:ring-green focus:border-green " />
                    </div>
                    <div class="flex flex-col w-52 justify-end">
                      <p>Declaro que: El origen de mis bienes y/o fondos provienen de:</p>
                      <input type="text" class="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div class="flex flex-col w-52 justify-end">
                      <p>El país origen de bienes y/o fondos</p>
                      <input type="text" placeholder='' class="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div class="flex flex-col w-52 justify-end">
                      <p>La ciudad origen de bienes y/o fondos</p>
                      <input type="text" class="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                  </div>
                </div>
                <div class="grid gap-5 lg:grid-cols-3 p-8">
                  <a onClick={regresar} class="flex items-center justify-center px-4 h-10 text-base font-medium text-black bg-gray-200 border-gray-300 rounded-lg hover:bg-lightGreen shadow-md hover:text-black">
                    Menú Formulario
                  </a>
                  <a onClick={() => handleBotonClick('financiera')} class="flex items-center justify-center px-4 h-10 text-base font-medium text-black bg-gray-200 border-gray-300 rounded-lg hover:bg-lightGreen shadow-md hover:text-black">
                    <svg class="w-3.5 h-3.5 me-2 rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                    Anterior
                  </a>
                  <a onClick={() => handleBotonClick('operaciones')} class="flex items-center justify-center px-4 h-10 text-base font-medium text-black bg-gray-200 border-gray-300 rounded-lg hover:bg-lightGreen shadow-md hover:text-black">
                    Siguiente
                    <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
        {contenidoSeleccionado1 === 'operaciones' && (
          <div class="p-4 sm:ml-64">
            <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
              <div class='flex gap-5 items-center justify-center flex-col bg-white' style={{ minHeight: '85vh' }}>
                <h1 class='w-2/4 text-black text-4xl flex items-center justify-center font-semibold text-center p-2 border-b-2 border-lightGreen'>Información de operaciones internacionales</h1>
                <div class="w-11/12  flex justify-center items-center bg-gray-100 rounded shadow-md" style={{ minHeight: '55vh' }}>
                  <div class="grid justify-center gap-5 p-5 lg:grid-cols-3">
                    <div class="flex flex-col w-52 justify-end">
                      <label htmlFor="opciones">
                        ¿Realiza operaciones en moneda extranjera?:
                      </label>
                      <select id="opciones" name="opciones" class="rounded-md border-gray-300 focus:ring-green focus:border-green w-52 p-2">
                        <option value="">Seleccionar</option>
                        <option value="Si">Si</option>
                        <option value="No">No</option>
                      </select>
                    </div>
                    <div class="flex flex-col w-52 justify-end">
                      <label htmlFor="opciones" className="mr-2 ">
                        ¿Cuál(es) de las siguientes operaciones realiza en moneda extranjera?:
                      </label>
                      <select id="opciones" name="opciones" class="rounded-md border-gray-300 focus:ring-green focus:border-green w-52 p-2">
                        <option value="">Seleccionar</option>
                        <option value="EI">Exportador e importador</option>
                        <option value="Exportador">Exportador</option>
                        <option value="Importador">Importador</option>
                        <option value="EGR">Envío/Recepción de giros y remesas</option>
                        <option value="PS">Pago de servicios</option>
                        <option value="Prestamos">Préstamos</option>
                        <option value="Inversiones">Inversiones</option>
                        <option value="otra">otra: </option>
                      </select>
                      {/* <input type="text" placeholder='Otra, ¿Cual?' /> */}
                    </div>
                    <div class="flex flex-col w-52 justify-end">
                      <p>Nombre de la entidad</p>
                      <input type="text" class="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div class="flex flex-col w-52 justify-end">
                      <label htmlFor="opciones" className="mr-2">
                        ¿Realiza operaciones en moneda extranjera?:
                      </label>
                      <select id="opciones" name="opciones" class="rounded-md border-gray-300 focus:ring-green focus:border-green w-52 p-2">
                        <option value="">Seleccionar</option>
                        <option value="prestamos">Préstamos</option>
                        <option value="Inversiones">Inversiones</option>
                        <option value="Otra">otra</option>
                      </select>
                      {/* <input type="text" placeholder='Otra, ¿Cual?' /> */}
                    </div>

                    <div class="flex flex-col w-52 justify-end">
                      <p>N° de producto</p>
                      <input type="number" class="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div class="flex flex-col w-52 justify-end">
                      <p>Monto mensual promedio</p>
                      <input type="number" class="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>Moneda</p>
                      <input type="text" class="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>Ciudad</p>
                      <input type="text" class="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>País</p>
                      <input type="text" class="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                  </div>
                </div>
                <div class="grid gap-5 lg:grid-cols-3 p-8">
                  <a onClick={regresar} class="flex items-center justify-center px-4 h-10 text-base font-medium text-black bg-gray-200 border-gray-300 rounded-lg hover:bg-lightGreen shadow-md hover:text-black">
                    Menú Formulario
                  </a>
                  <a onClick={() => handleBotonClick('tributaria')} class="flex items-center justify-center px-4 h-10 text-base font-medium text-black bg-gray-200 border-gray-300 rounded-lg hover:bg-lightGreen shadow-md hover:text-black">
                    <svg class="w-3.5 h-3.5 me-2 rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                    Anterior
                  </a>
                  <button class="flex items-center justify-center px-4 h-10 text-base font-medium text-black bg-gray-200 border-gray-300 rounded-lg hover:bg-lightGreen shadow-md hover:text-black">
                    Finalizar Formulario
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}



      </form>


    </>
  )
}
