import React from 'react'

export const InfoTributaria = ({regresar}) => {
  return (
    <>
      <div class="p-4 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div class='pt-12 flex justify-start items-center flex-col gap-10 bg-white' style={{ minHeight: '85vh' }}>
            <h1 class='w-3/4 p-0 text-black text-4xl flex items-center justify-center font-semibold text-center'>Información tributaria</h1>
            <div class="w-full  grid gap-5 mb-8 md:grid-cols-3 bg-slate-200 px-24 py-8 mx-12 rounded shadow-xl">
              <div class="flex flex-col">
                <label htmlFor="opciones" className="mr-2">
                  ¿Es declarante de renta?:
                </label>
                <select id="opciones" name="opciones" class="rounded-md w-52 p-2">
                <option value="">Seleccionar</option>
                  <option value="Si">Si</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div class="flex flex-col">
                <label htmlFor="opciones" className="mr-2">
                  Agente retenedor:
                </label>
                <select id="opciones" name="opciones" class="rounded-md w-52 p-2">
                <option value="">Seleccionar</option>
                  <option value="Si">Si</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div class="flex flex-col">
                <label htmlFor="opciones" className="mr-2">
                  Régimen de IVA:
                </label>
                <select id="opciones" name="opciones" class="rounded-md w-52 p-2">
                <option value="">Seleccionar</option>
                  <option value="Comun">Común</option>
                  <option value="Simplificado">Simplificado</option>
                  <option value="Ninguno">Ninguno</option>
                </select>
              </div>
              <div class="flex flex-col gap-6">
                <label htmlFor="opciones" className="mr-2">
                  Obligado a tributar en Estados Unidos:
                </label>
                <select id="opciones" name="opciones" class="rounded-md w-52 p-2">
                <option value="">Seleccionar</option>
                  <option value="Si">Si</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div >
                <p>*Si su respuesta es afirmativa indique el número de ID tributario (TIN)</p>
                <input type="text" class="rounded-md" />
              </div>
              <div class="">
                <p class="">Si está obligado a tributar en otro país diferente a Colombia, indique cuál (es):</p>
                <input type="text" class="rounded-md " />
              </div>
              <div>
                <p>Declaro que: El origen de mis bienes y/o fondos provienen de:</p>
                <input type="text" class="rounded-md" />
              </div>
              <div>
                <p>El país origen de bienes y/o fondos</p>
                <input type="text" placeholder='' class="rounded-md" />
              </div>
              <div>
                <p>La ciudad origen de bienes y/o fondos</p>
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
