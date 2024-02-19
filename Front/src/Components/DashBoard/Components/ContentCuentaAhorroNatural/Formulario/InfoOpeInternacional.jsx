import React from 'react'

export const InfoOpeInternacional = ({regresar}) => {
  return (
    <>
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
            <button onClick={regresar}>regresar</button>
          </div>
        </div>
      </div>
    </>
  )
}
