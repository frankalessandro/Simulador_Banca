import React from 'react'

export const InfoOpeInternacional = () => {
  return (
    <>
      <div class="p-4 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div class='pt-12 flex justify-start items-center flex-col gap-32 bg-green-200' style={{ minHeight: '85vh' }}>
            <h1 class='w-3/4 p-0 text-black text-4xl flex items-center justify-center font-semibold text-center'>Información personal</h1>
            <div class="grid gap-8 mb-8 md:grid-cols-3">
              <div >
                <p>Nombre</p>
                <input type="text" />
              </div>
              <div>
                <p>Primer Apellido</p>
                <input type="text" />
              </div>
              <div>
                <p>Segundo Apellido</p>
                <input type="text" />
              </div>
              <div class="">
                <label htmlFor="opciones" className="mr-2">
                  Tipo de documento:
                </label>
                <select id="opciones" name="opciones" className="p-2 border rounded">
                  <option value="cc">CC</option>
                  <option value="ti">TI</option>
                </select>
              </div>
              <div>
                <p>N° de documento</p>
                <input type="text" />
              </div>
              <div>
                <p>Ciudad de nacimiento</p>
                <input type="text" />
              </div>
              <div>
                <p>Lugar de expedición</p>
                <input type="text" />
              </div>
              <div>
                <p>Fecha de expedición</p>
                <input type="date" />
              </div>
              <div>
                <p>Fecha de nacimiento</p>
                <input type="date" />
              </div>
              <div class="">
                <label htmlFor="opciones" className="mr-2">
                  Genero:
                </label>
                <select id="opciones" name="opciones" className="p-2 border rounded">
                  <option value="cc">F</option>
                  <option value="ti">M</option>
                </select>
              </div>
              <div class="">
                <label htmlFor="opciones" className="mr-2">
                  Estado Civil:
                </label>
                <select  id="opciones" name="opciones" className="p-2 border rounded">
                  <option value="cc">Soltero</option>
                  <option value="ti">Casado</option>
                  <option value="ti">Unión libre</option>
                </select>
              </div>
              <div>
                <p>Nacionalidad</p>
                <input type="text" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
