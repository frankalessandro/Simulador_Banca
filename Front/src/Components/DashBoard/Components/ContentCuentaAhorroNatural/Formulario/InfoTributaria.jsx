import React from 'react'

export const InfoTributaria = () => {
  return (
    <>
      <div class="p-4 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div class='pt-12 flex justify-start items-center flex-col gap-32 bg-green-200' style={{ minHeight: '85vh' }}>
            <h1 class='w-3/4 p-0 text-black text-4xl flex items-center justify-center font-semibold text-center'>Información personal</h1>
            <div class="grid gap-8 mb-8 md:grid-cols-3">
            
              <div class="">
                <label htmlFor="opciones" className="mr-2">
                ¿Es declarante de renta?:
                </label>
                <select id="opciones" name="opciones" className="p-2 border rounded">
                  <option value="cc">Si</option>
                  <option value="ti">No</option>
                </select>
              </div>
              <div class="">
                <label htmlFor="opciones" className="mr-2">
                Agente retenedor:
                </label>
                <select id="opciones" name="opciones" className="p-2 border rounded">
                  <option value="cc">Si</option>
                  <option value="ti">No</option>
                </select>
              </div>
              <div class="">
                <label htmlFor="opciones" className="mr-2">
                Régimen de IVA:
                </label>
                <select id="opciones" name="opciones" className="p-2 border rounded">
                  <option value="cc">Común</option>
                  <option value="ti">Simplificado</option>
                  <option value="ti">Ninguno</option>
                </select>
              </div>
              <div class="">
                <label htmlFor="opciones" className="mr-2">
                Obligado a tributar en Estados Unidos:
                </label>
                <select id="opciones" name="opciones" className="p-2 border rounded">
                  <option value="cc">Si</option>
                  <option value="ti">No</option>
                </select>
              </div>
              <div>
                <p>*Si su respuesta es afirmativa indique el número de ID tributario (TIN)</p>
                <input type="text" />
              </div>
              <div>
                <p>Si está obligado a tributar en otro país diferente a Colombia, indique cuál (es):</p>
                <input type="text" />
              </div>
              <div>
                <p>Declaro que: El origen de mis bienes y/o fondos provienen de:</p>
                <input type="text" />
              </div>
              <div>
                <p>El país origen de bienes y/o fondos</p>
                <input type="text" />
              </div>
              <div>
                <p>La ciudad origen de bienes y/o fondos</p>
                <input type="text" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
