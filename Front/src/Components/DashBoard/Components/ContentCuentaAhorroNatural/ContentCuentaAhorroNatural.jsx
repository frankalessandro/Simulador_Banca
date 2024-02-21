import React, { useState } from 'react'
import { InfoPersonal } from './Formulario/InfoPersonal'
import { InfoContacto } from './Formulario/InfoContacto';
import { InfoTributaria } from './Formulario/InfoTributaria';
import { InfoEconomicaLaboral } from './Formulario/InfoEconomicaLaboral';
import { InfoFinanciera } from './Formulario/InfoFinanciera';
import { InfoOpeInternacional } from './Formulario/InfoOpeInternacional';



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
          <div class='flex justify-center items-center flex-col gap-32' style={{ minHeight: '85vh' }}>
            <div class='w-3/4 text-black text-4xl flex items-center justify-center font-semibold text-center'>
              <p>Información de Cliente Persona Natural</p>
            </div>
            <div class='w-3/4 h-80'>

              <form>
                <div class="grid gap-8 mb-8 md:grid-cols-2">
                  <button type="button" onClick={() => handleBotonClick('InfoPersonal', volver())} class="h-20 flex justify-center px-8 py-3.5 text-base font-medium text-white items-center bg-gray-500 hover:bg-gray-300 hover:text-black focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-gray-800">
                    Personal
                  </button>
                  <button type="button" onClick={() => handleBotonClick('contacto', volver())} class="h-20 flex justify-center px-8 py-3.5 text-base font-medium text-white items-center bg-gray-500 hover:bg-gray-300 hover:text-black focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-gray-800">
                    Contacto
                  </button>
                  <button type="button" onClick={() => handleBotonClick('economica', volver())} class="h-20 flex justify-center px-8 py-3.5 text-base font-medium text-white items-center bg-gray-500 hover:bg-gray-300 hover:text-black focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-gray-800">
                    Económica y Laboral
                  </button>
                  <button type="button" onClick={() => handleBotonClick('financiera', volver())} class="h-20 flex justify-center px-8 py-3.5 text-base font-medium text-white items-center bg-gray-500 hover:bg-gray-300 hover:text-black focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-gray-800">
                    Detalle Información Financiera
                  </button>
                  <button type="button" onClick={() => handleBotonClick('tributaria', volver())} class="h-20 flex justify-center px-8 py-3.5 text-base font-medium text-white items-center bg-gray-500 hover:bg-gray-300 hover:text-black focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-gray-800">
                    Tributaria
                  </button>
                  <button type="button" onClick={() => handleBotonClick('operaciones', volver())} class="h-20 flex justify-center px-8 py-3.5 text-base font-medium text-white items-center bg-gray-500 hover:bg-gray-300 hover:text-black focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-gray-800">
                    Operaciones Internacionales
                  </button>
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
      {/* Renderiza otros contenidos según sea necesario */}
    </>
  )
}
