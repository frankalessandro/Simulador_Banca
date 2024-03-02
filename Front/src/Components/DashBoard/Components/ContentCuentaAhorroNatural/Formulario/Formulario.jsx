import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

export const Formulario = ({ contenidoSeleccionado1, regresar, handleBotonClick }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [getform , setgetfrom] = useState({
Nombre: '',
Apellido1: '',
Apellido2: '',
opciones1:'',
NDocumento: '',
CiudadN:'',
LugarE:'',
FechaE:'',
FechaN:'',
opciones2:'',
opciones3:'',
Nacionalidad:'',
// ---------contacto--------
DireccionR:'',
BloqueTorre:'',
AptoCasa:'',
Barrio:'',
Municipio:'',
Departamento:'',
Pais:'',
Telefono:'',
Celular:'',
CorreoE:'',
// ------economica --------------
Profesion:'',
opciones4:'',
ActiEcoP:'',
CodigoCIIU:'',
NumeroEm:'',
NombreEm:'',
DireccionEm:'',
BarrioEm:'',
MunicipioEm:'',
DepartamentoEm:'',
PaisEm:'',
TelefonoEm:'',
Ext:'',
CelularEm:'',
CorreoEm:'',
// ----- financiera -------
IngresosM:'',
OIngresosM:'',
TotalAc:'',
Totalpa:'',
DetalleOIM:'',
TotalIn:'',
VentasA:'',
FechaCV:'',
// ------- Tributaria---------
opciones5:'',
opciones6:'',
opciones7:'',
opciones8:'',
NumeroT:'',
PaisT:'',
Idtributario:'',
FondosP:'',
PaisFondos:'',
CiudadFondos:'',
// ----operaciones--------
opciones9:'',
opciones10:'',
NombreEn:'',
opciones11:'',
NProducto:'',
MontoMP:'',
Moneda:'',
CiudadOp:'',
PaisOp:''

  }) 

const valorInput = (event) =>{

const {name , defaultValue} = event.target;
setgetfrom({...getform , [name]: defaultValue }) ;

console.log(getform)

} 
const CrearCliente = async (data) => {
  console.log(data);
  try {
    const response = await fetch('http://localhost:3000/AddFormData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const responseData = await response.json();
    console.log(responseData);
    if (response.status === 200) {
      alert('Inicio de sesión exitoso');
      window.location = "/DashBoardMenu";
      setIsLoggedIn(true);
      login(responseData.user);

      // Aquí asignamos los datos del usuario al contexto de autenticación
      setUserData(responseData.user);
    }
  } catch (error) {
      return res.status(400).json({ message: 'No se encontró información del usuario' });
  }
};

  return (
    <>
      <form action="" onSubmit={handleSubmit(CrearCliente)} >
        {contenidoSeleccionado1 === 'InfoPersonal' && (
          <div className="p-4 sm:ml-64">
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
              <div className='flex gap-5 items-center justify-center flex-col bg-white' style={{ minHeight: '85vh' }}>
                <h1 className='w-2/4 text-black text-4xl flex items-center justify-center font-semibold text-center p-2 border-b-2 border-lightGreen'>Información personal</h1>
                <div className="w-11/12  flex justify-center items-center bg-gray-100 rounded shadow-md" style={{ minHeight: '55vh' }}>
                  <div className="grid justify-center gap-5 p-5 lg:grid-cols-3">
                    <div>
                      <p>Nombre Completo:</p>
                      <input type="text" {...register("Nombre")} name="Nombre" defaultValue={getform.Nombre} onChange={valorInput} className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div> 
                    <div>
                      <p>Primer Apellido</p>
                      <input type="text" {...register("Apellido1")} name="Apellido1" defaultValue={getform.Apellido1} onChange={valorInput} className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>Segundo Apellido</p>
                      <input type="text" {...register("Apellido2")} name="Apellido2" defaultValue={getform.Apellido2} onChange={valorInput} className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="opciones" className="rounded-md border-gray-300 focus:ring-green focus:border-green" classNameName="mr-2">
                        Tipo de documento:
                      </label>
                      <select id="opciones" {...register("opciones1")}  name="opciones1" defaultValue={getform.opciones1} onChange={valorInput} className="rounded-md border-gray-300 focus:ring-green focus:border-green w-52 p-2">
                        <option Value="">Seleccionar</option>
                        <option Value="CC">C.C.</option>
                        <option Value="TI">T.I.</option>
                        <option Value="RCivil">R. Civil</option>
                        <option Value="CE">Cédula extranjería</option>
                        <option Value="PP">Pasaporte</option>
                        <option Value="CD">Carné diplomático</option>
                      </select>
                    </div>
                    <div>
                      <p>N° de documento</p>
                      <input type="number" {...register("NDocumento")} name="NDocumento" defaultValue={getform.NDocumento} onChange={valorInput} className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>Ciudad de nacimiento</p>
                      <input type="text" {...register("CiudadN")} name="CiudadN" defaultValue={getform.CiudadN} onChange={valorInput} className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>Lugar de expedición</p>
                      <input type="text" {...register("LugarE")} name="LugarE" defaultValue={getform.LugarE} onChange={valorInput} className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>Fecha de expedición</p>
                      <input type="date" {...register("FechaE")} name="FechaE" defaultValue={getform.FechaE} onChange={valorInput} className="rounded-md border-gray-300 focus:ring-green focus:border-green w-52" />
                    </div>
                    <div>
                      <p>Fecha de nacimiento</p>
                      <input type="date" {...register("FechaN")} name="FechaN" defaultValue={getform.FechaN} onChange={valorInput} className="rounded-md border-gray-300 focus:ring-green focus:border-green w-52" />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="opciones" classNameName="mr-2">
                        Genero:
                      </label>
                      <select id="opciones" {...register("opciones2")} name="opciones2" defaultValue={getform.opciones2} onChange={valorInput} classNameName="p-2 rounded border-gray-300 focus:ring-green focus:border-green w-52">
                        <option defaultValue="">Seleccionar</option>
                        <option defaultValue="F">Femenino</option>
                        <option defaultValue="M">Masculino</option>
                      </select>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="opciones" classNameName="mr-2">
                        Estado Civil:
                      </label>
                      <select id="opciones" {...register("opciones3")}  name="opciones3" defaultValue={getform.opciones3} onChange={valorInput} classNameName="p-2 rounded border-gray-300 focus:ring-green focus:border-green w-52">
                        <option defaultValue="">Seleccionar</option>
                        <option defaultValue="Soltero">Soltero</option>
                        <option defaultValue="Casado">Casado</option>
                        <option defaultValue="UL">Unión libre</option>
                      </select>
                    </div>
                    <div>
                      <p>Nacionalidad</p>
                      <input type="text" {...register("Nacionalidad")} name="Nacionalidad" defaultValue={getform.Nacionalidad} onChange={valorInput} className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                  </div>
                </div>
                <div className="grid gap-5 lg:grid-cols-2 p-8">
                  <a onClick={regresar} className="flex items-center justify-center px-4 h-10 text-base font-medium text-black bg-gray-200 border-gray-300 rounded-lg hover:bg-lightGreen shadow-md hover:text-black">
                    Menú Formulario
                  </a>
                  <a onClick={() => handleBotonClick('contacto')} className="flex items-center justify-center px-4 h-10 text-base font-medium text-black bg-gray-200 border-gray-300 rounded-lg hover:bg-lightGreen shadow-md hover:text-black">
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
        {contenidoSeleccionado1 === 'contacto' && (
          <div className="p-4 sm:ml-64">
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
              <div className='flex gap-5 items-center justify-center flex-col bg-white' style={{ minHeight: '85vh' }}>
                <h1 className='w-2/4 text-black text-4xl flex items-center justify-center font-semibold text-center p-2 border-b-2 border-lightGreen'>Información de contacto personal</h1>
                <div className="w-11/12  flex justify-center items-center bg-gray-100 rounded shadow-md" style={{ minHeight: '55vh' }}>
                  <div className="grid justify-center gap-5 p-5 lg:grid-cols-3">
                    <div >
                      <p>Dirección residencia</p>
                      <input type="text"  {...register("DireccionR")} name="DireccionR" defaultValue={getform.DireccionR} onChange={valorInput}className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div className='flex flex-col w-52 '>
                      <label>Bloque/Torre</label>
                      <input type="text"  {...register("BloqueTorre")} name="BloqueTorre" defaultValue={getform.BloqueTorre} onChange={valorInput}className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>Apto/Casa</p>
                      <input type="text"  {...register("AptoCasa")} name="AptoCasa" defaultValue={getform.AptoCasa} onChange={valorInput}className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>Barrio</p>
                      <input type="text"  {...register("Barrio")} name="Barrio" defaultValue={getform.Barrio} onChange={valorInput}className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>Ciudad/Municipio</p>
                      <input type="text"  {...register("Municipio")} name="Municipio" defaultValue={getform.Municipio} onChange={valorInput}className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>Departamento</p>
                      <input type="text"  {...register("Departamento")} name="Departamento" defaultValue={getform.Departamento} onChange={valorInput}className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>País</p>
                      <input type="text"  {...register("Pais")} name="Pais" defaultValue={getform.Pais} onChange={valorInput}className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>Teléfono</p>
                      <input type="number"  {...register("Telefono")} name="Telefono" defaultValue={getform.Telefono} onChange={valorInput}className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>Celular</p>
                      <input type="number"  {...register("Celular")} name="Celular" defaultValue={getform.Celular} onChange={valorInput}className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>Correo electrónico</p>
                      <input type="email"  {...register("CorreoE")} name="CorreoE" defaultValue={getform.CorreoE} onChange={valorInput}className="rounded-md border-gray-300 focus:ring-green focus:border-green w-auto lg:w-72" />
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
                  <a onClick={() => handleBotonClick('economica')} className="flex items-center justify-center px-4 h-10 text-base font-medium text-black bg-gray-200 border-gray-300 rounded-lg hover:bg-lightGreen shadow-md hover:text-black">
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
        {contenidoSeleccionado1 === 'economica' && (

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
                      <select id="opciones" {...register("opciones4")}  defaultValue={getform.opciones4} onChange={valorInput} name="opciones4" className="rounded-md border-gray-300 focus:ring-green focus:border-green">
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
                      <input type="text"  {...register("ActiEcoP")} name="ActiEcoP" defaultValue={getform.ActiEcoP} onChange={valorInput}className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div className="flex flex-col w-52 justify-end">
                      <p>Código CIIU</p>
                      <input type="text"  {...register("CodigoCIIU")} name="CodigoCIIU" defaultValue={getform.CodigoCIIU} onChange={valorInput}className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div className="flex flex-col w-52 justify-end">
                      <p>N° Empleados</p>
                      <input type="number"  {...register("NumeroE")} name="NumeroE" defaultValue={getform.NumeroE} onChange={valorInput}className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div className="flex flex-col w-52 justify-end">
                      <p>Nombre de la empresa</p>
                      <input type="text"  {...register("NombreE")} name="NombreE" defaultValue={getform.NombreE} onChange={valorInput}className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div className="flex flex-col w-52 justify-end">
                      <p>Dirección de empresa o lugar donde desarrolla su actividad</p>
                      <input type="text"  {...register("DireccionEm")} name="DireccionEm" defaultValue={getform.DireccionEm} onChange={valorInput}className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>Barrio</p>
                      <input type="text"  {...register("BarrioEm")} name="BarrioEm" defaultValue={getform.BarrioEm} onChange={valorInput}className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
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
                      <input type="text"  {...register("PaisEm")} name="PaisEm" defaultValue={getform.PaisEm} onChange={valorInput}className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>Teléfono</p>
                      <input type="number"  {...register("TelefonoEm")} name="TelefonoEm" defaultValue={getform.TelefonoEm} onChange={valorInput}className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>Ext</p>
                      <input type="number"  {...register("Ext")} name="Ext" defaultValue={getform.Ext} onChange={valorInput}className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>Celular</p>
                      <input type="number" {...register("CelularEm")} name="CelularEm" defaultValue={getform.CelularEm} onChange={valorInput} className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>Correo electrónico laboral</p>
                      <input type="email"  {...register("CorreoEm")} name="CorreoEm" defaultValue={getform.CorreoEm} onChange={valorInput}className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
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
                  <a onClick={() => handleBotonClick('financiera')} className="flex items-center justify-center px-4 h-10 text-base font-medium text-black bg-gray-200 border-gray-300 rounded-lg hover:bg-lightGreen shadow-md hover:text-black">
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
        {contenidoSeleccionado1 === 'financiera' && (
          <div className="p-4 sm:ml-64">
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
              <div className='flex gap-5 items-center justify-center flex-col bg-white' style={{ minHeight: '85vh' }}>
                <h1 className='w-2/4 text-black text-4xl flex items-center justify-center font-semibold text-center p-2 border-b-2 border-lightGreen'>Detalle información financiera</h1>
                <div className="w-11/12  flex justify-center items-center bg-gray-100 rounded shadow-md" style={{ minHeight: '55vh' }}>
                  <div className="grid justify-center gap-5 p-5 lg:grid-cols-3">
                    <div >
                      <p>Ingresos mensuales</p>
                      <input type="number"  {...register("IngresosM")} name="IngresosM" defaultValue={getform.IngresosM} onChange={valorInput}className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>Otros ingresos mensuales</p>
                      <input type="number"  {...register("OIngresosM")} name="OIngresosM" defaultValue={getform.OIngresosM} onChange={valorInput}className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>Total activos</p>
                      <input type="number"  {...register("TotalAc")} name="TotalAc" defaultValue={getform.TotalAc} onChange={valorInput}className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>Total pasivos</p>
                      <input type="number"  {...register("Totalpa")} name="Totalpa" defaultValue={getform.Totalpa} onChange={valorInput}className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>Detalle otros ingresos mensuales</p>
                      <input type="text"  {...register("DetalleOIM")} name="DetalleOIM" defaultValue={getform.DetalleOIM} onChange={valorInput}className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>Total egresos mensuales</p>
                      <input type="number"  {...register("TotalIn")} name="TotalIn" defaultValue={getform.TotalIn} onChange={valorInput}className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div>
                      <p>Ventas anuales</p>
                      <input type="number"  {...register("VentasA")} name="VentasA" defaultValue={getform.VentasA} onChange={valorInput}className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
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
                  <a onClick={() => handleBotonClick('tributaria')} className="flex items-center justify-center px-4 h-10 text-base font-medium text-black bg-gray-200 border-gray-300 rounded-lg hover:bg-lightGreen shadow-md hover:text-black">
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
        {contenidoSeleccionado1 === 'tributaria' && (
          <div className="p-4 sm:ml-64">
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
              <div className='flex gap-5 items-center justify-center flex-col bg-white' style={{ minHeight: '85vh' }}>
                <h1 className='w-2/4 text-black text-4xl flex items-center justify-center font-semibold text-center p-2 border-b-2 border-lightGreen'>Información Tributaria</h1>
                <div className="w-11/12  flex justify-center items-center bg-gray-100 rounded shadow-md" style={{ minHeight: '55vh' }}>
                  <div className="grid justify-center gap-5 p-5 lg:grid-cols-3">
                    <div className="flex flex-col">
                      <label htmlFor="opciones" classNameName="mr-2">
                        ¿Es declarante de renta?:
                      </label>
                      <select id="opciones" {...register("opciones5")}  defaultValue={getform.opciones5} onChange={valorInput} name="opciones5" className="rounded-md border-gray-300 focus:ring-green focus:border-green w-52 p-2">
                        <option defaultValue="">Seleccionar</option>
                        <option defaultValue="Si">Si</option>
                        <option defaultValue="No">No</option>
                      </select>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="opciones" classNameName="mr-2">
                        Agente retenedor:
                      </label>
                      <select id="opciones" {...register("opciones6")}  defaultValue={getform.opciones6} onChange={valorInput} name="opciones6" className="rounded-md border-gray-300 focus:ring-green focus:border-green w-52 p-2">
                        <option defaultValue="">Seleccionar</option>
                        <option defaultValue="Si">Si</option>
                        <option defaultValue="No">No</option>
                      </select>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="opciones" classNameName="mr-2">
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
                      <label htmlFor="opciones" classNameName="mr-2">
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
                      <input type="text"  {...register("NumeroT")} name="NumeroT" defaultValue={getform.NumeroT} onChange={valorInput}className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div className="flex flex-col w-52 justify-end">
                      <p>Si está obligado a tributar en otro país diferente a Colombia, indique cuál (es):</p>
                      <input type="text"  {...register("PaisT")} name="PaisT" defaultValue={getform.PaisT} onChange={valorInput}className="rounded-md border-gray-300 focus:ring-green focus:border-green " />
                    </div>
                    <div className="flex flex-col w-52 justify-end">
                      <p>ID Tributario</p>
                      <input type="text"  {...register("Idtributario")} name="Idtributario" defaultValue={getform.Idtributario} onChange={valorInput}className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div className="flex flex-col w-52 justify-end">
                      <p>Declaro que: El origen de mis bienes y/o fondos provienen de:</p>
                      <input type="text"  {...register("FondosP")} name="FondosP" defaultValue={getform.FondosP} onChange={valorInput}className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div className="flex flex-col w-52 justify-end">
                      <p>El país origen de bienes y/o fondos</p>
                      <input type="text"  {...register("PaisFondos")} name="PaisFondos" defaultValue={getform.PaisFondos} onChange={valorInput}placeholder='' className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div className="flex flex-col w-52 justify-end">
                      <p>La ciudad origen de bienes y/o fondos</p>
                      <input type="text"  {...register("CiudadFondos")} name="CiudadFondos" defaultValue={getform.CiudadFondos} onChange={valorInput}className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
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
                      <select id="opciones" {...register("opciones9")}  defaultValue={getform.opciones9} name="opciones9" className="rounded-md border-gray-300 focus:ring-green focus:border-green w-52 p-2">
                        <option defaultValue="">Seleccionar</option>
                        <option defaultValue="Si">Si</option>
                        <option defaultValue="No">No</option>
                      </select>
                    </div>
                    <div className="flex flex-col w-52 justify-end">
                      <label htmlFor="opciones" classNameName="mr-2 ">
                        ¿Cuál(es) de las siguientes operaciones realiza en moneda extranjera?:
                      </label>
                      <select id="opciones" {...register("opciones10")} defaultValue={getform.opciones10} name="opciones10" className="rounded-md border-gray-300 focus:ring-green focus:border-green w-52 p-2">
                        <option defaultValue="">Seleccionar</option>
                        <option defaultValue="EI">Exportador e importador</option>
                        <option defaultValue="Exportador">Exportador</option>
                        <option defaultValue="Importador">Importador</option>
                        <option defaultValue="EGR">Envío/Recepción de giros y remesas</option>
                        <option defaultValue="PS">Pago de servicios</option>
                        <option defaultValue="Prestamos">Préstamos</option>
                        <option defaultValue="Inversiones">Inversiones</option>
                        <option defaultValue="otra">otra: </option>
                      </select>
                      {/* <input type="text" placeholder='Otra, ¿Cual?' /> */}
                    </div>
                    <div className="flex flex-col w-52 justify-end">
                      <p>Nombre de la entidad</p>
                      <input type="text" {...register("NombreEn")} name="NombreEn" defaultValue={getform.NombreEn} className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
                    </div>
                    <div className="flex flex-col w-52 justify-end">
                      <label htmlFor="opciones" classNameName="mr-2">
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
                      <input type="number" {...register("MontoMP")} name="MontoMP" defaultValue={getform.MontoMP}  className="rounded-md border-gray-300 focus:ring-green focus:border-green" />
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
                  <button  type='submit' className="flex items-center justify-center px-4 h-10 text-base font-medium text-black bg-gray-200 border-gray-300 rounded-lg hover:bg-lightGreen shadow-md hover:text-black">
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
