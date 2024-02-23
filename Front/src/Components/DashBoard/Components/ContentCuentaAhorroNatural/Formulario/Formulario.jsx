import React from 'react'

export const Formulario = ({contenidoSeleccionado1 , regresar , handleBotonClick }) => {



  return (
    <>
<form action="" >
{contenidoSeleccionado1 === 'contacto' &&  (
    <div class="p-4 sm:ml-64">
    <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
      <div class='pt-12 flex justify-start items-center flex-col gap-10 bg-white' style={{ minHeight: '85vh' }}>
        <h1 class='w-3/4 p-0 text-black text-4xl flex items-center justify-center font-semibold text-center'>Información de contacto personal</h1>
        <div class="w-full grid gap-5 mb-8 md:grid-cols-3 bg-slate-200 px-24 py-8 mx-12 rounded shadow-xl">
          <div >
            <p>Dirección residencia</p>
            <input type="text" class="rounded-md"  />
          </div>
          <div class='flex flex-col w-52 '>
            <label>Bloque/Torre</label>
            <input type="text" class="rounded-md" />
          </div>
          <div>
            <p>Apto/Casa</p>
            <input type="text" class="rounded-md" />
          </div>
          <div>
            <p>Barrio</p>
            <input type="text" class="rounded-md" />
          </div>
          <div>
            <p>Ciudad/Municipio</p>
            <input type="text" class="rounded-md" />
          </div>
          <div>
            <p>Departamento</p>
            <input type="text" class="rounded-md" />
          </div>
          <div>
            <p>País</p>
            <input type="text" class="rounded-md" />
          </div>
          <div>
            <p>Teléfono</p>
            <input type="number" class="rounded-md" />
          </div>
          <div>
            <p>Celular</p>
            <input type="number" class="rounded-md" />
          </div>
          <div>
            <p>Correo electrónico</p>
            <input type="email" class="rounded-md w-64" />
          </div>
         
        </div>
        <div class="flex justify-center gap-20 w-full">
        <a onClick={() => handleBotonClick('InfoPersonal')} class="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
               <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-360" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
               </svg>
               anterior
             </a>
             <a onClick={regresar} class="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
               Menú Formulario
               <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
               </svg>
             </a>
             <a onClick={() => handleBotonClick('economica')} class="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
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



{contenidoSeleccionado1 === 'InfoPersonal' && (
     <div class="p-4 sm:ml-64">
     <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
       <div class='pt-12+ flex justify-start items-center flex-col gap-10 bg-white' style={{ minHeight: '85vh' }}>
         <h1 class='w-3/4 p-0 text-black text-4xl flex items-center justify-center font-semibold text-center'>Información personal</h1>
         <div class="w-full h-3/6 grid gap-5 mb-8 md:grid-cols-3 bg-slate-200 pl-24 py-8 mx-12 rounded shadow-lg">
           <div class="">
             <p>Nombre</p>
             <input type="text" class="rounded-md" />
           </div>
           <div>
             <p>Primer Apellido</p>
             <input type="text" class="rounded-md" />
           </div>
           <div>
             <p>Segundo Apellido</p>
             <input type="text" class="rounded-md" />
           </div>
           <div class="flex flex-col">
             <label htmlFor="opciones" class="rounded-md" className="mr-2">
               Tipo de documento:
             </label>
             <select id="opciones" name="opciones" class="rounded-md w-52 p-2">
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
             <input type="number" class="rounded-md" />
           </div>
           <div>
             <p>Ciudad de nacimiento</p>
             <input type="text" class="rounded-md" />
           </div>
           <div>
             <p>Lugar de expedición</p>
             <input type="text" class="rounded-md" />
           </div>
           <div>
             <p>Fecha de expedición</p>
             <input type="date" class="rounded-md w-52" />
           </div>
           <div>
             <p>Fecha de nacimiento</p>
             <input type="date" class="rounded-md w-52" />
           </div>
           <div class="flex flex-col">
             <label htmlFor="opciones" className="mr-2 ">
               Genero:
             </label>
             <select id="opciones" name="opciones" className="p-2 rounded w-52">
               <option value="">Seleccionar</option>
               <option value="F">Femenino</option>
               <option value="M">Masculino</option>
             </select>
           </div>
           <div class="flex flex-col">
             <label htmlFor="opciones" className="mr-2">
               Estado Civil:
             </label>
             <select id="opciones" name="opciones" className="p-2 rounded w-52">
               <option value="">Seleccionar</option>
               <option value="Soltero">Soltero</option>
               <option value="Casado">Casado</option>
               <option value="UL">Unión libre</option>
             </select>
           </div>
           <div>
             <p>Nacionalidad</p>
             <input type="text" class="rounded-md" />
           </div>

           
         </div>
         <div class="flex justify-center gap-20 w-full">
        
             <a onClick={regresar} class="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
               Menú Formulario
               <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
               </svg>
             </a>
             <a onClick={() => handleBotonClick('contacto')} class="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
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
  <div class='pt-12 flex justify-start items-center flex-col gap-10 bg-white' style={{ minHeight: '85vh' }}>
    <h1 class='w-3/4 p-0 text-black text-4xl flex items-center justify-center font-semibold text-center'>Actividad económica e Información laboral</h1>
    <div class="w-full grid gap-5 mb-8 md:grid-cols-3 bg-slate-200 px-24 py-8 mx-12 rounded shadow-xl">
      <div class="flex flex-col gap-7 w-52">
        <p>Profesión</p>
        <input type="text" class="rounded-md" />
      </div>
      <div class="flex flex-col gap-7">
        <label htmlFor="opciones"  className="mr-2">
        Ocupación/Oficio:
        </label>
        <select id="opciones" name="opciones" class="rounded-md w-52  border">
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
      <div >
        <p>Detalle de la actividad económica principal</p>
        <input type="text" class="rounded-md" />
      </div>
      <div class="flex flex-col gap-7 w-52">
        <p>Código CIIU</p>
        <input type="text" class="rounded-md" />
      </div>
      <div class="flex flex-col gap-7 w-52">
        <p>Nombre de la empresa</p>
        <input type="text" class="rounded-md" />
      </div>
      <div>
        <p>Dirección de la empresa o lugar donde desarrolla su actividad</p>
        <input type="text" class="rounded-md" />
      </div>
      <div>
        <p>Barrio</p>
        <input type="text" class="rounded-md" />
      </div>
      <div>
        <p>Ciudad/Municipio</p>
        <input type="text" class="rounded-md" />
      </div>
      <div>
        <p>Departamento</p>
        <input type="text" class="rounded-md" />
      </div>
      <div>
        <p>País</p>
        <input type="text" class="rounded-md" />
      </div>
      <div>
        <p>Teléfono</p>
        <input type="number" class="rounded-md" />
      </div>
      <div>
        <p>Ext</p>
        <input type="number" class="rounded-md" />
      </div>
      <div>
        <p>Celular</p>
        <input type="number" class="rounded-md" />
      </div>
      <div>
        <p>Correo electrónico labora</p>
        <input type="email" class="rounded-md" />
      </div>
    </div>
    <div class="flex justify-center gap-20 w-full">
    <a onClick={() => handleBotonClick('contacto')} class="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
               <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-360" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
               </svg>
               anterior
             </a>
             <a onClick={regresar} class="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
               Menú Formulario
               <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
               </svg>
             </a>
             <a onClick={() => handleBotonClick('financiera')} class="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
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
   <div class='pt-12 flex justify-start items-center flex-col gap-10 bg-white' style={{ minHeight: '85vh' }}>
     <h1 class='w-3/4 p-0 text-black text-4xl flex items-center justify-center font-semibold text-center'>Detalle información financiera</h1>
     <div class=" w-full grid gap-5 mb-8 md:grid-cols-3 bg-slate-200 px-24 py-8 mx-12 rounded shadow-xl">
       <div >
         <p>Ingresos mensuales</p>
         <input type="number" class="rounded-md" />
       </div>
       <div>
         <p>Otros ingresos mensuales</p>
         <input type="number" class="rounded-md" />
       </div>
       <div>
         <p>Total activos</p>
         <input type="number" class="rounded-md" />
       </div>
       <div>
         <p>Total pasivos</p>
         <input type="number" class="rounded-md" />
       </div>
       <div>
         <p>Detalle otros ingresos mensuales</p>
         <input type="text"class="rounded-md" />
       </div>
       <div>
         <p>Total egresos mensuales</p>
         <input type="number" class="rounded-md" />
       </div>
       <div>
         <p>Ventas anuales</p>
         <input type="number" class="rounded-md" />
       </div>
       <div>
         <p>Fecha de cierre de ventas</p>
         <input type="date" class="rounded-md w-52" />
       </div>
     </div>
     <div class="flex justify-center gap-20 w-full">
     <a onClick={() => handleBotonClick('economica')} class="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
               <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-360" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
               </svg>
               anterior
             </a>
             <a onClick={regresar} class="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
               Menú Formulario
               <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
               </svg>
             </a>
             <a onClick={() => handleBotonClick('tributaria')} class="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
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
     <div class='pt-12 flex justify-start items-center flex-col gap-10 bg-white' style={{ minHeight: '85vh' }}>
       <h1 class='w-3/4 p-0 text-black text-4xl flex items-center justify-center font-semibold text-center'>Información tributaria</h1>
       <div class="w-full  grid gap-5 mb-8 md:grid-cols-3 bg-slate-200 px-24 py-8 mx-12 rounded shadow-xl">
         <div class="flex flex-col">
           <label htmlFor="opciones" className="mr-2">
             ¿Es declarante de renta?:
           </label>
           <select id="opciones" name="opciones" class="rounded-md w-52 p-2">
           <option value="">Seleccionar</option>
             <option value="Si">Si</option>
             <option value="No">No</option>
           </select>
         </div>
         <div class="flex flex-col">
           <label htmlFor="opciones" className="mr-2">
             Agente retenedor:
           </label>
           <select id="opciones" name="opciones" class="rounded-md w-52 p-2">
           <option value="">Seleccionar</option>
             <option value="Si">Si</option>
             <option value="No">No</option>
           </select>
         </div>
         <div class="flex flex-col">
           <label htmlFor="opciones" className="mr-2">
             Régimen de IVA:
           </label>
           <select id="opciones" name="opciones" class="rounded-md w-52 p-2">
           <option value="">Seleccionar</option>
             <option value="Comun">Común</option>
             <option value="Simplificado">Simplificado</option>
             <option value="Ninguno">Ninguno</option>
           </select>
         </div>
         <div class="flex flex-col gap-6">
           <label htmlFor="opciones" className="mr-2">
             Obligado a tributar en Estados Unidos:
           </label>
           <select id="opciones" name="opciones" class="rounded-md w-52 p-2">
           <option value="">Seleccionar</option>
             <option value="Si">Si</option>
             <option value="No">No</option>
           </select>
         </div>
         <div >
           <p>*Si su respuesta es afirmativa indique el número de ID tributario (TIN)</p>
           <input type="text" class="rounded-md" />
         </div>
         <div class="">
           <p class="">Si está obligado a tributar en otro país diferente a Colombia, indique cuál (es):</p>
           <input type="text" class="rounded-md " />
         </div>
         <div>
           <p>Declaro que: El origen de mis bienes y/o fondos provienen de:</p>
           <input type="text" class="rounded-md" />
         </div>
         <div>
           <p>El país origen de bienes y/o fondos</p>
           <input type="text" placeholder='' class="rounded-md" />
         </div>
         <div>
           <p>La ciudad origen de bienes y/o fondos</p>
           <input type="text" class="rounded-md" />
         </div>
       </div>
       <div class="flex justify-center gap-20 w-full">

       <a onClick={() => handleBotonClick('financiera')} class="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
               <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-360" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
               </svg>
               anterior
             </a>
             <a onClick={regresar} class="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
               Menú Formulario
               <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
               </svg>
             </a>
             <a onClick={() => handleBotonClick('operaciones')} class="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
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
   <div class='pt-12 flex justify-start items-center flex-col gap-10 bg-white' style={{ minHeight: '85vh' }}>
     <h1 class='w-3/4 p-0 text-black text-4xl flex items-center justify-center font-semibold text-center'>Información de operaciones internacionales</h1>
     <div class="w-full grid  gap-5 mb-8 md:grid-cols-3 bg-slate-200 px-24 py-8 mx-12 rounded shadow-xl">
     <div class="flex flex-col ">
         <label htmlFor="opciones" className="mr-2">
         ¿Realiza operaciones en moneda extranjera?:
         </label>
         <select id="opciones" name="opciones" class="rounded-md w-52 p-2">
         <option value="">Seleccionar</option>
           <option value="Si">Si</option>
           <option value="No">No</option>
         </select>
       </div>
       <div class="flex flex-col ">
         <label htmlFor="opciones" className="mr-2 ">
         ¿Cuál(es) de las siguientes operaciones realiza en moneda extranjera?:
         </label>
         <select id="opciones" name="opciones" class="rounded-md w-52 p-2">
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
       <div class="flex flex-col gap-6 w-52">
         <p>Nombre de la entidad</p>
         <input type="text" class="rounded-md" />
       </div>
       <div class="flex flex-col">
         <label htmlFor="opciones" className="mr-2">
         ¿Realiza operaciones en moneda extranjera?:
         </label>
         <select id="opciones" name="opciones" class="rounded-md w-52 p-2">
         <option value="">Seleccionar</option>
         <option value="prestamos">Préstamos</option>
           <option value="Inversiones">Inversiones</option>
           <option value="Otra">otra</option>
         </select>
         {/* <input type="text" placeholder='Otra, ¿Cual?' /> */}
       </div>

       <div class="flex flex-col gap-6 w-52">
         <p>N° de producto</p>
         <input type="number" class="rounded-md" />
       </div>
       <div class="flex flex-col gap-6 w-52">
         <p>Monto mensual promedio</p>
         <input type="number" class="rounded-md" />
       </div>
       <div>
         <p>Moneda</p>
         <input type="text" class="rounded-md" />
       </div>
       <div>
         <p>Ciudad</p>
         <input type="text" class="rounded-md" />
       </div>
       <div>
         <p>País</p>
         <input type="text" class="rounded-md" />
       </div>
     </div>
     <div class="flex justify-center gap-20 w-full">
     <a onClick={() => handleBotonClick('tributaria')} class="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
               <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-360" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
               </svg>
               anterior
             </a>
             <a onClick={regresar} class="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
               Menú Formulario
               <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
               </svg>
             </a>
             <button  class="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
               Finalizar
               
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
