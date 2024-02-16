import React from 'react'

export const InfoFinanciera = () => {
  return (
    <>
      <div class="p-4 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div class='pt-12 flex justify-start items-center flex-col gap-32 bg-green-200' style={{ minHeight: '85vh' }}>
            <h1 class='w-3/4 p-0 text-black text-4xl flex items-center justify-center font-semibold text-center'>Información personal</h1>
            <div class="grid gap-8 mb-8 md:grid-cols-3">
              <div >
                <p>Ingresos mensuales</p>
                <input type="text" />
              </div>
              <div>
                <p>Otros ingresos mensuales</p>
                <input type="text" />
              </div>
              <div>
                <p>Total activos</p>
                <input type="text" />
              </div>
              <div>
                <p>Total pasivos</p>
                <input type="text" />
              </div>
              <div>
                <p>Detalle otros ingresos mensuales</p>
                <input type="text" />
              </div>
              <div>
                <p>Total egresos mensuales</p>
                <input type="text" />
              </div>
              <div>
                <p>Ventas anuales</p>
                <input type="date" />
              </div>
              <div>
                <p>Fecha de cierre de ventas</p>
                <input type="date" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
