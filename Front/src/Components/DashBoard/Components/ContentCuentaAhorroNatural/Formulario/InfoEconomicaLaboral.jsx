import React from 'react'

export const InfoEconomicaLaboral = ({regresar}) => {
  return (
    <>
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
            <button onClick={regresar}>regresar</button>
          </div>
        </div>
      </div>
    </>
  )
}
