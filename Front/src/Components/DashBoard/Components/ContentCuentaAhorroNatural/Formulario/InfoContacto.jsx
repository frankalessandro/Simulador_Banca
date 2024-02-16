import React from 'react'

export const InfoContacto = () => {
  return (
    <>
      <div class="p-4 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div class='pt-12 flex justify-start items-center flex-col gap-32 bg-green-200' style={{ minHeight: '85vh' }}>
            <h1 class='w-3/4 p-0 text-black text-4xl flex items-center justify-center font-semibold text-center'>Información personal</h1>
            <div class="grid gap-8 mb-8 md:grid-cols-3">
              <div >
                <p>Dirección residencia</p>
                <input type="text" />
              </div>
              <div>
                <p>Bloque/Torre</p>
                <input type="text" />
              </div>
              <div>
                <p>Apto/Casa</p>
                <input type="text" />
              </div>
              <div>
                <p>Barrio</p>
                <input type="text" />
              </div>
              <div>
                <p>Ciudad/Municipio</p>
                <input type="text" />
              </div>
              <div>
                <p>Departamento</p>
                <input type="text" />
              </div>
              <div>
                <p>País</p>
                <input type="text" />
              </div>
              <div>
                <p>Teléfono</p>
                <input type="text" />
              </div>
              <div>
                <p>Celular</p>
                <input type="text" />
              </div>
              <div>
                <p>Correo electrónico</p>
                <input type="text" />
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
