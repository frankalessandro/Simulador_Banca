import React, { useState } from 'react'
import { InfoPersonal } from './Formulario/InfoPersonal'
import { InfoContacto } from './Formulario/InfoContacto';
import { InfoTributaria } from './Formulario/InfoTributaria';
import { InfoEconomicaLaboral } from './Formulario/InfoEconomicaLaboral';
import { InfoFinanciera } from './Formulario/InfoFinanciera';
import { InfoOpeInternacional } from './Formulario/InfoOpeInternacional';
import ImagenPrueba from '../../../../assets/Img/UsoVario/InfoPersonal.svg'
import operacionesInternacionales from '../../../../assets/Img/UsoVario/Internet.svg'
import personalinfo from '../../../../assets/Img/UsoVario/MainInfo.svg'
import economicaLaboral from '../../../../assets/Img/UsoVario/Support.svg'
import tributaria from '../../../../assets/Img/UsoVario/SelectInfo.svg'
import detalleFinanciera from '../../../../assets/Img/UsoVario/Analytics.svg'

export const ContentCuentaAhorroNatural = ({ }) => {


  const [active, setactive] = useState("p-4 sm:ml-64  not-sr-only")

  const [contenidoSeleccionado1, setContenidoSeleccionado1] = useState('');
  // Función para manejar clics de botones
  const handleBotonClick = (contenido) => {
    setContenidoSeleccionado1(contenido)
  }
  console.log({ contenidoSeleccionado1 })

  const volver = () => {
    if (active === "p-4 sm:ml-64  not-sr-only") {
      setactive("p-4 sm:ml-64  sr-only");

    } else {
      setactive("p-4 sm:ml-64  not-sr-only")
      handleBotonClick('FormularioPersonaNatural')
    }
  }



  return (
    <>
      <div class={active}>
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div class='flex justify-center items-center flex-col gap-10' style={{ minHeight: '85vh' }}>
            <div class='w-3/4 text-black text-4xl flex items-center justify-center font-semibold text-center'>
              <p>Información de Cliente Persona Natural</p>
            </div>
            <div class='w-3/4'>
              <form>
                <div class="grid gap-8 mb-8 md:grid-cols-3">
                  <div onClick={() => handleBotonClick('InfoPersonal', volver())} class="cursor-pointer flex flex-col w-96 min-h-56 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img class="rounded-t-lg h-56" src={personalinfo} alt="" />
                    <div class="w-full ">
                      <button type="button" onClick={() => handleBotonClick('InfoPersonal', volver())} className=" w-full flex justify-center px-8 py-3.5 text-xl font-medium text-black bg-gray-200 hover:bg-lightGreen hover:text-black focus:ring-1 focus:outline-none focus:ring-green rounded-b-md text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-gray-800">
                        <span>Personal</span>
                      </button>
                    </div>
                  </div>
                  <div onClick={() => handleBotonClick('contacto', volver())} class="cursor-pointer flex flex-col w-96 min-h-56 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img class="rounded-t-lg h-56" src={ImagenPrueba} alt="" />
                    <div class="w-full ">
                      <button type="button" onClick={() => handleBotonClick('contacto', volver())} className=" w-full flex justify-center px-8 py-3.5 text-xl font-medium text-black bg-gray-200 hover:bg-lightGreen hover:text-black focus:ring-1 focus:outline-none focus:ring-green rounded-b-md text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-gray-800">
                        <span>Contacto</span>
                      </button>
                    </div>
                  </div>
                  <div onClick={() => handleBotonClick('economica', volver())} class="cursor-pointer flex flex-col w-96 min-h-56 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img class="rounded-t-lg h-56" src={economicaLaboral} alt="" />
                    <div class="w-full ">
                      <button type="button" onClick={() => handleBotonClick('economica', volver())} className=" w-full flex justify-center px-8 py-3.5 text-xl font-medium text-black bg-gray-200 hover:bg-lightGreen hover:text-black focus:ring-1 focus:outline-none focus:ring-green rounded-b-md text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-gray-800">
                        <span>Económica y Laboral</span>
                      </button>
                    </div>
                  </div>
                  <div onClick={() => handleBotonClick('financiera', volver())} class="cursor-pointer flex flex-col w-96 min-h-56 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img class="rounded-t-lg h-56" src={detalleFinanciera} alt="" />
                    <div class="w-full ">
                      <button type="button" onClick={() => handleBotonClick('financiera', volver())} className=" w-full flex justify-center px-8 py-3.5 text-xl font-medium text-black bg-gray-200 hover:bg-lightGreen hover:text-black focus:ring-1 focus:outline-none focus:ring-green rounded-b-md text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-gray-800">
                        <span>Detalle Información Financiera</span>
                      </button>
                    </div>
                  </div>
                  <div onClick={() => handleBotonClick('tributaria', volver())} class="cursor-pointer flex flex-col w-96 min-h-56 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img class="rounded-t-lg h-56" src={tributaria} alt="" />
                    <div class="w-full ">
                      <button type="button" onClick={() => handleBotonClick('tributaria', volver())} className=" w-full flex justify-center px-8 py-3.5 text-xl font-medium text-black bg-gray-200 hover:bg-lightGreen hover:text-black focus:ring-1 focus:outline-none focus:ring-green rounded-b-md text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-gray-800">
                        <span>Tributaria</span>
                      </button>
                    </div>
                  </div>
                  <div onClick={() => handleBotonClick('operaciones', volver())} class="cursor-pointer flex flex-col w-96 min-h-56 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img class="rounded-t-lg h-56" src={operacionesInternacionales} alt="" />
                    <div class="w-full ">
                      <button type="button" onClick={() => handleBotonClick('operaciones', volver())} className=" w-full flex justify-center px-8 py-3.5 text-xl font-medium text-black bg-gray-200 hover:bg-lightGreen hover:text-black focus:ring-1 focus:outline-none focus:ring-green rounded-b-md text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-gray-800">
                        <span>Operaciones Internacionales</span>
                      </button>
                    </div>
                  </div> 
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {contenidoSeleccionado1 === 'InfoPersonal' && <InfoPersonal regresar={volver} />}
      {contenidoSeleccionado1 === 'contacto' && <InfoContacto regresar={volver} />}
      {contenidoSeleccionado1 === 'tributaria' && <InfoTributaria regresar={volver} />}
      {contenidoSeleccionado1 === 'economica' && <InfoEconomicaLaboral regresar={volver} />}
      {contenidoSeleccionado1 === 'financiera' && <InfoFinanciera regresar={volver} />}
      {contenidoSeleccionado1 === 'operaciones' && <InfoOpeInternacional regresar={volver} />}
    </>
  )
}
