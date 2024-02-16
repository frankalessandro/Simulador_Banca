import React from 'react'

export const InfoOpeInternacional = () => {
  return (
    <>
      <div class="p-4 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div class='pt-12 flex justify-start items-center flex-col gap-32 bg-green-200' style={{ minHeight: '85vh' }}>
            <h1 class='w-3/4 p-0 text-black text-4xl flex items-center justify-center font-semibold text-center'>Información personal</h1>
            <div class="grid gap-8 mb-8 md:grid-cols-3">
            <div class="">
                <label htmlFor="opciones" className="mr-2">
                ¿Realiza operaciones en moneda extranjera?:
                </label>
                <select id="opciones" name="opciones" className="p-2 border rounded">
                  <option value="cc">Si</option>
                  <option value="ti">No</option>
                </select>
              </div>
              <div class="">
                <label htmlFor="opciones" className="mr-2">
                ¿Cuál(es) de las siguientes operaciones realiza en moneda extranjera?:
                </label>
                <select id="opciones" name="opciones" className="p-2 border rounded">
                  <option value="cc">Exportador e importador</option>
                  <option value="ti">Exportador</option>
                  <option value="cc">Importador</option>
                  <option value="ti">Envío/Recepción de giros y remesas</option>
                  <option value="cc">Pago de servicios</option>
                  <option value="ti">Préstamos</option>
                  <option value="ti">Inversiones</option>
                  <option value="ti">otra: </option>
                </select>
                <input type="text" placeholder='Otra, ¿Cual?' />
              </div>
              <div>
                <p>Nombre de la entidad</p>
                <input type="text" />
              </div>
              <div class="">
                <label htmlFor="opciones" className="mr-2">
                ¿Realiza operaciones en moneda extranjera?:
                </label>
                <select id="opciones" name="opciones" className="p-2 border rounded">
                <option value="ti">Préstamos</option>
                  <option value="ti">Inversiones</option>
                  <option value="ti">otra</option>
                </select>
                <input type="text" placeholder='Otra, ¿Cual?' />
              </div>
      
              <div>
                <p>N° de producto</p>
                <input type="text" />
              </div>
              <div>
                <p>Monto mensual promedio</p>
                <input type="text" />
              </div>
              <div>
                <p>Moneda</p>
                <input type="text" />
              </div>
              <div>
                <p>Ciudad</p>
                <input type="date" />
              </div>
              <div>
                <p>País</p>
                <input type="date" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
