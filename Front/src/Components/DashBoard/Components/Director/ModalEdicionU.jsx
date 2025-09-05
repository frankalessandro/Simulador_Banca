import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_BASE } from '../../../../config.js';

export const ModalEdicionU = ({ userData, showModal, closeModal, onSuccess }) => {
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (userData) {
      reset({ name: userData.name_user, password: userData.password, rol: userData.rol });
    }
  }, [userData, reset]);

  const updateUser = async (form) => {
    try {
      const response = await fetch(`${API_BASE}/UpdateUser/${userData.id_usuario}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name1: form.name,
          password1: form.password,
          rol1: form.rol,
        }),
      });
      if (response.ok) {
        toast.success('Usuario actualizado');
        if (onSuccess) onSuccess();
        setTimeout(() => closeModal(), 800);
      } else {
        toast.error('No se pudo actualizar');
      }
    } catch (e) {
      console.error(e);
      toast.error('Error en el servidor');
    }
  };

  if (!showModal) return null;

  return (
    <div className="overflow-y-auto fixed top-0 right-0 left-0 z-50 bg-slate-100/50 flex justify-center items-center w-full md:inset-0 h-[calc(100%)] max-h-full">
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className='bg-white rounded-2xl shadow-xl ring-1 ring-gray-100'>
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
            <h3 className="text-lg font-semibold text-darkGreen">Editar usuario</h3>
            <button type="button" onClick={closeModal} className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center">
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span className="sr-only">Cerrar</span>
            </button>
          </div>
          <form className="p-4 md:p-5" onSubmit={handleSubmit(updateUser)}>
            <div className="space-y-4">
              <div>
                <label htmlFor='name' className="block mb-2 text-sm font-medium text-gray-900">Nombre</label>
                <input type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green focus:border-green block w-full p-2.5" placeholder="Nombre" {...register("name", { required: true })} />
              </div>
              <div>
                <label htmlFor='password' className="block mb-2 text-sm font-medium text-gray-900">Contraseña</label>
                <input type="text" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green focus:border-green block w-full p-2.5" placeholder="Contraseña" {...register("password", { required: true })} />
              </div>
              <div>
                <label htmlFor='rol' className="block mb-2 text-sm font-medium text-gray-900">Rol</label>
                <select id="rol" className="rounded-md w-full border bg-gray-50 border-gray-300 text-gray-900 text-sm p-2.5 focus:ring-green focus:border-green" {...register("rol", { required: true })}>
                  <option value="2">Asesor</option>
                  <option value="3">Cajero</option>
                </select>
              </div>
            </div>
            <div className="flex items-center p-6 border-t border-gray-200 rounded-b">
              <button type="submit" className="w-full text-white bg-neutralGreen hover:bg-green focus:ring-4 focus:outline-none focus:ring-lightGreen/40 font-medium rounded-lg text-sm px-5 py-2.5">Guardar cambios</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

