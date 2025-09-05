import { useState } from 'react';
export const InfoTabs = () => {
  // Orden acordado con navbar: Seguridad, Nosotros
  const [active, setActive] = useState('seguridad');

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Anclas para navegación desde navbar */}
        <span id="seguridad" />
        <span id="nosotros" />
        <div className="flex items-center gap-2 mb-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-darkGreen">Información</h2>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600">Seguridad y nosotros</span>
        </div>

        <div className="inline-flex rounded-lg ring-1 ring-gray-200 bg-white overflow-hidden">
          <button onClick={() => setActive('seguridad')} className={`px-5 py-2 text-sm font-medium ${active==='seguridad' ? 'bg-lightGreen/30 text-darkGreen' : 'text-gray-600 hover:bg-gray-50'}`}>Seguridad</button>
          <button onClick={() => setActive('nosotros')} className={`px-5 py-2 text-sm font-medium ${active==='nosotros' ? 'bg-lightGreen/30 text-darkGreen' : 'text-gray-600 hover:bg-gray-50'}`}>Nosotros</button>
        </div>

        <div className="mt-8 rounded-2xl bg-white p-8 ring-1 ring-gray-100">
          {active === 'seguridad' && (
            <div className="grid gap-8 lg:grid-cols-3 items-start">
              <div className="lg:col-span-2">
                <h3 className="text-xl font-semibold text-gray-900">Buenas prácticas de seguridad</h3>
                <p className="mt-3 text-sm text-gray-700">Aplicamos principios de seguridad por defecto y por diseño. Aunque es un entorno de simulación, tratamos los datos con criterios de confidencialidad e integridad.</p>
                <ul className="mt-4 list-disc list-inside text-sm text-gray-700 space-y-1">
                  <li>Variables de entorno para secretos y conexiones</li>
                  <li>Control de roles (director, asesor, cajero, cliente)</li>
                  <li>Validación de entradas y sanitización de datos</li>
                  <li>Políticas CORS configurables por ambiente</li>
                </ul>
              </div>
              <div className="rounded-xl p-6 bg-gradient-to-br from-lightGreen to-green/80 text-darkGreen">
                <div className="text-3xl font-semibold">Recomendado</div>
                <ul className="mt-3 text-sm">
                  <li>- Usar HTTPS en despliegues</li>
                  <li>- Rotar credenciales periódicamente</li>
                  <li>- Revisiones de código y auditorías</li>
                </ul>
              </div>
            </div>
          )}

          {active === 'nosotros' && (
            <div className="grid gap-8 lg:grid-cols-2 items-start">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">ClarBank en pocas palabras</h3>
                <p className="mt-3 text-sm text-gray-700">Somos un simulador bancario con enfoque en claridad y experiencia. Buscamos una operación confiable con una interfaz moderna y consistente.</p>
                <ul className="mt-4 list-disc list-inside text-sm text-gray-700 space-y-1">
                  <li>Equipo multidisciplinario y ágil</li>
                  <li>Diseño centrado en el usuario</li>
                  <li>Iteraciones rápidas y entregables claros</li>
                </ul>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-xl p-4 bg-lightGreen/20">
                  <div className="text-2xl font-semibold text-darkGreen">+10</div>
                  <div className="text-sm text-gray-700">Módulos funcionales</div>
                </div>
                <div className="rounded-xl p-4 bg-lightGreen/20">
                  <div className="text-2xl font-semibold text-darkGreen">100%</div>
                  <div className="text-sm text-gray-700">UI consistente</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
