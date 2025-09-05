import React from 'react';
import nomina from '../../../assets/Img/Carousel/nomina.png';
import ahorro from '../../../assets/Img/Carousel/cuenta-ahorros.png';
import credito from '../../../assets/Img/Carousel/credito.png';

export const MainContainer = () => {
  return (
    <section id="productos" className="py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-darkGreen">Nuestros productos</h2>
          <p className="text-gray-600 mt-2">Soluciones claras para tus metas financieras</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-100 hover:shadow-md transition">
            <div className="flex items-center gap-4 mb-4">
              <img src={nomina} alt="Cuentas Nómina" className="w-12 h-12" />
              <h3 className="text-lg font-medium text-gray-900">Cuentas Nómina</h3>
            </div>
            <p className="text-sm text-gray-600">Recibe tu salario y realiza pagos con cero complicaciones, soporte 24/7 y alertas en tiempo real.</p>
            <div className="mt-4 text-sm text-neutralGreen font-medium">Solicitar información →</div>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-100 hover:shadow-md transition">
            <div className="flex items-center gap-4 mb-4">
              <img src={ahorro} alt="Cuentas de Ahorros" className="w-12 h-12" />
              <h3 className="text-lg font-medium text-gray-900">Cuentas de Ahorros</h3>
            </div>
            <p className="text-sm text-gray-600">Haz crecer tu dinero con intereses competitivos, sin costos ocultos y con retiros flexibles.</p>
            <div className="mt-4 text-sm text-neutralGreen font-medium">Comparar opciones →</div>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-100 hover:shadow-md transition">
            <div className="flex items-center gap-4 mb-4">
              <img src={credito} alt="Créditos" className="w-12 h-12" />
              <h3 className="text-lg font-medium text-gray-900">Créditos</h3>
            </div>
            <p className="text-sm text-gray-600">Financiación responsable para tus proyectos: tasas claras, aprobación ágil y acompañamiento personalizado.</p>
            <div className="mt-4 text-sm text-neutralGreen font-medium">Simular crédito →</div>
          </div>
        </div>
      </div>
    </section>
  );
};
