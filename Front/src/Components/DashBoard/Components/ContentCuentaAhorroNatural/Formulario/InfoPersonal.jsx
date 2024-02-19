import React from 'react'

export const InfoPersonal = ({regresar}) => {
  return (
    <>
      <div class="p-4  sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div class='pt-12+ flex justify-start items-center flex-col gap-10 bg-white' style={{ minHeight: '85vh' }}>
            <h1 class='w-3/4 p-0 text-black text-4xl flex items-center justify-center font-semibold text-center'>Información personal</h1>
            <div class="w-full  grid gap-5 mb-8 md:grid-cols-3 bg-slate-200 pl-24 py-8 mx-12 rounded shadow-xl">
              <div class="">
                <p>Nombre</p>
                <input type="text" class="rounded-md" />
              </div>
              <div>
                <p>Primer Apellido</p>
                <input type="text"class="rounded-md" />
              </div>
              <div>
                <p>Segundo Apellido</p>
                <input type="text"class="rounded-md" />
              </div>
              <div class="flex flex-col">
                <label htmlFor="opciones"class="rounded-md" className="mr-2">
                  Tipo de documento:
                </label>
                <select id="opciones" name="opciones"  class="rounded-md w-52 p-2">
                <option value="">Seleccionar</option>
                  <option value="CC">C.C.</option>
                  <option value="TI">T.I.</option>
                  <option value="RCivil">R. Civil</option>
                  <option value="CE">Cédula extranjería</option>
                  <option value="PP">Pasaporte</option>
                  <option value="CD">Carné diplomático</option>
                </select>
              </div>
              <div>
                <p>N° de documento</p>
                <input type="number" class="rounded-md" />
              </div>
              <div>
                <p>Ciudad de nacimiento</p>
                <input type="text"class="rounded-md" />
              </div>
              <div>
                <p>Lugar de expedición</p>
                <input type="text"class="rounded-md" />
              </div>
              <div>
                <p>Fecha de expedición</p>
                <input type="date" class="rounded-md w-52" />
              </div>
              <div>
                <p>Fecha de nacimiento</p>
                <input type="date"class="rounded-md w-52" />
              </div>
              <div class="flex flex-col">
                <label htmlFor="opciones" className="mr-2 ">
                  Genero:
                </label>
                <select  id="opciones" name="opciones" className="p-2 rounded w-52">
                <option value="">Seleccionar</option>
                  <option value="F">Femenino</option>
                  <option value="M">Masculino</option>
                </select>
              </div>
              <div class="flex flex-col">
                <label htmlFor="opciones" className="mr-2">
                  Estado Civil:
                </label>
                <select  id="opciones" name="opciones" className="p-2 rounded w-52">
                <option value="">Seleccionar</option>
                  <option value="Soltero">Soltero</option>
                  <option value="Casado">Casado</option>
                  <option value="UL">Unión libre</option>
                </select>
              </div>
              <div>
                <p>Nacionalidad</p>
                <input type="text" class="rounded-md"/>
              </div>
            </div>
            <button onClick={regresar}>regresar</button>
          </div>
        </div>
      </div>
    </>
  )
}
