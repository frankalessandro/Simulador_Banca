import TopLogo from '../../../assets/Img/Logos/ClarBank Name.svg';
import heroImg from '../../../assets/Img/Main_Image.svg';

export const Banner = () => {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-darkGreen to-neutralGreen text-white">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,white,transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <div className="p-4 w-full h-full flex justify-center items-center">
            <img src={TopLogo} alt="ClarBank" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
            Banca moderna, simple y segura
          </h1>
          <p className="text-white/90 max-w-xl">
            Gestiona tus finanzas con una plataforma confiable: cuentas, pagos y reportes con experiencia de nivel bancario.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a href="#productos" className="px-5 py-3 rounded-lg bg-white text-darkGreen font-medium hover:bg-lightGreen/90 transition">Ver productos</a>
            <a href="/Login" className="px-5 py-3 rounded-lg ring-1 ring-white/60 hover:bg-white/10 transition">Iniciar sesión</a>
          </div>
          <div className="flex gap-8 pt-6 text-white/80 text-sm">
            <div>
              <div className="text-2xl font-semibold text-white">24/7</div>
              <div>Soporte y disponibilidad</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-white">+99.9%</div>
              <div>Tiempo de actividad</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-white">PCI</div>
              <div>Buenas prácticas de seguridad</div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="bg-white/10 backdrop-blur rounded-2xl p-6 shadow-2xl ring-1 ring-white/20">
            <img src={heroImg} alt="Banca moderna" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </header>
  );
};
