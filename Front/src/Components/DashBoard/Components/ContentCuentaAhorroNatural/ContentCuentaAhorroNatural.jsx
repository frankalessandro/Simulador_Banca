import React, {useState} from 'react'
import { InfoPersonal } from './Formulario/InfoPersonal'

export const ContentCuentaAhorroNatural = () => {
  
  const [contenidoSeleccionado, setContenidoSeleccionado] = useState();
    // Función para manejar clics de botones
    const handleBotonClick = (contenido) => {
        setContenidoSeleccionado(contenido);
    }

  return (
    <>
      <div class="p-4 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div class='flex justify-center items-center flex-col gap-32 bg-green-200' style={{ minHeight: '85vh' }}>
            <div class='w-3/4 text-black text-4xl flex items-center justify-center font-semibold text-center'>
              <p>Información de Cliente Persona Natural</p>
            </div>
            <div class='w-3/4 h-80'>

              <form>
                <div class="grid gap-8 mb-8 md:grid-cols-2">
                  <button type="button" onClick={() => handleBotonClick(1)} class="h-20 flex justify-center px-8 py-3.5 text-base font-medium text-white items-center bg-gray-500 hover:bg-gray-300 hover:text-black focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-gray-800">
                    Personal
                  </button>
                  <button type="button" class="h-20 flex justify-center px-8 py-3.5 text-base font-medium text-white items-center bg-gray-500 hover:bg-gray-300 hover:text-black focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-gray-800">
                    Financiera
                  </button>
                  <button type="button" class="h-20 flex justify-center px-8 py-3.5 text-base font-medium text-white items-center bg-gray-500 hover:bg-gray-300 hover:text-black focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-gray-800">
                    Financiera
                  </button>
                  <button type="button" class="h-20 flex justify-center px-8 py-3.5 text-base font-medium text-white items-center bg-gray-500 hover:bg-gray-300 hover:text-black focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-gray-800">
                    Financiera
                  </button>
                  <button type="button" class="h-20 flex justify-center px-8 py-3.5 text-base font-medium text-white items-center bg-gray-500 hover:bg-gray-300 hover:text-black focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-gray-800">
                    Financiera
                  </button>
                  <button type="button" class="h-20 flex justify-center px-8 py-3.5 text-base font-medium text-white items-center bg-gray-500 hover:bg-gray-300 hover:text-black focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-gray-800">
                    Financiera
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
       <div>
                {contenidoSeleccionado === 1 && <InfoPersonal />}
                {/* Renderiza otros contenidos según sea necesario */}
            </div>
    </>
  )
}
