import Logo from '../assets/Img/Logos/ClarBank LogoOnly.svg'
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext.jsx';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_BASE } from '../config.js';

export default function Login() {
  const { setIsLoggedIn, login, setUserData } = useAuth();
  const { register, handleSubmit } = useForm();

  const inisesion = async (data) => {
    try {
      const response = await fetch(`${API_BASE}/Login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      if (response.status === 200) {
        toast.success('Inicio de sesión exitoso');
        setIsLoggedIn(true);
        login(responseData.user);
        setUserData(responseData.user);
        setTimeout(() => { window.location.href = '/DashboardMenu'; }, 1200);
      } else {
        toast.error(responseData.message || 'Credenciales inválidas');
      }
    } catch (error) {
      console.error('Error de login:', error);
      toast.error('No se pudo iniciar sesión');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-darkGreen to-neutralGreen flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl ring-1 ring-gray-100 p-8">
          <div className="flex flex-col items-center mb-6">
            <img src={Logo} alt="ClarBank" className="h-36" />
            <h1 className="text-xl font-semibold text-gray-900">Accede a tu cuenta</h1>
            <p className="text-sm text-gray-500">Tu banca moderna, simple y segura</p>
          </div>
          <form className="space-y-5" onSubmit={handleSubmit(inisesion)}>
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">Usuario</label>
              <input
                type="text"
                {...register('name', { required: true })}
                id="name"
                className="w-full rounded-lg border-gray-300 focus:ring-green focus:border-green text-gray-900"
                placeholder="Nombre de usuario"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">Contraseña</label>
              <input
                type="password"
                {...register('password', { required: true })}
                id="password"
                className="w-full rounded-lg border-gray-300 focus:ring-green focus:border-green text-gray-900"
                placeholder="••••••••"
                required
              />
            </div>
            <button type="submit" className="w-full mt-2 text-white bg-neutralGreen hover:bg-green focus:ring-4 focus:ring-lightGreen/40 font-medium rounded-lg text-sm px-5 py-3 transition">
              Iniciar sesión
            </button>
          </form>
        </div>
        <p className="text-center text-xs text-white/80 mt-6">Protegido por prácticas de seguridad de nivel bancario</p>
      </div>
    </div>
  );
}
