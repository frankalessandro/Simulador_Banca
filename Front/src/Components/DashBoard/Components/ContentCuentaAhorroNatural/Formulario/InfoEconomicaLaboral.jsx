import React from 'react'

export const InfoEconomicaLaboral = () => {
  return (
    <>
      <div class="p-4 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div class='pt-12 flex justify-start items-center flex-col gap-32 bg-green-200' style={{ minHeight: '85vh' }}>
            <h1 class='w-3/4 p-0 text-black text-4xl flex items-center justify-center font-semibold text-center'>Información personal</h1>
            <div class="grid gap-8 mb-8 md:grid-cols-3">
              <div >
                <p>Profesión</p>
                <input type="text" />
              </div>
              <div class="">
                <label htmlFor="opciones" className="mr-2">
                Ocupación/Oficio:
                </label>
                <select id="opciones" name="opciones" className="p-2 border rounded">
                  <option value="cc">Empleado</option>
                  <option value="ti">Pensionado</option>
                  <option value="cc">Ama de casa</option>
                  <option value="ti">Estudiante</option>
                  <option value="cc">Ganadero</option>
                  <option value="ti">Comerciante</option>
                  <option value="cc">Agricultor</option>
                  <option value="ti">Rentista de capital</option>
                  <option value="cc">Independiente</option>
                  <option value="ti">Desempleado sin ingresos</option>
                  <option value="cc">Desempleado con ingresos</option>
                  <option value="ti">Profesional independiente</option>
                  <option value="cc">Socio o Empleado-socio</option>
                </select>
              </div>
              <div>
                <p>Detalle de la actividad económica principal</p>
                <input type="text" />
              </div>
              <div>
                <p>Código CIIU</p>
                <input type="text" />
              </div>
              <div>
                <p>Nombre de la empresa</p>
                <input type="text" />
              </div>
              <div>
                <p>Dirección de la empresa o lugar donde desarrolla su actividad</p>
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
                <p>Ext</p>
                <input type="text" />
              </div>
              <div>
                <p>Celular</p>
                <input type="text" />
              </div>
              <div>
                <p>Correo electrónico labora</p>
                <input type="text" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
