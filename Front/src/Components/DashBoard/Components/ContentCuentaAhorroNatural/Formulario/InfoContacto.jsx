import React from 'react'

export const InfoContacto = ({regresar}) => {
  return (
    <>
       <div class="p-4 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div class='pt-12 flex justify-start items-center flex-col gap-10 bg-white' style={{ minHeight: '85vh' }}>
            <h1 class='w-3/4 p-0 text-black text-4xl flex items-center justify-center font-semibold text-center'>Información de contacto personal</h1>
            <div class="w-full grid gap-5 mb-8 md:grid-cols-3 bg-slate-200 px-24 py-8 mx-12 rounded shadow-xl">
              <div >
                <p>Dirección residencia</p>
                <input type="text" class="rounded-md" />
              </div>
              <div>
                <p>Bloque/Torre</p>
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
            <button onClick={regresar}>regresar</button>
          </div>
        </div>
      </div>
    </>
  )
}
