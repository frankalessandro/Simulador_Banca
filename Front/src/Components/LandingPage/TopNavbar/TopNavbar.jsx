import React from 'react';
import { Link } from 'react-router-dom';
import TopLogo from '../../../assets/Img/Logos/ClarBank LogoOnly.svg';
import nameLogo from '../../../assets/Img/Logos/ClarBank Name.svg';

export const TopNavbar = () => {
    return (
        <>
            <nav className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-3 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-3">
                        <img src={TopLogo} className="h-8" alt="ClarBank" />
                        <img src={nameLogo} alt="ClarBank" className="h-4" />
                    </Link>
                    <div className="hidden md:flex items-center gap-8 text-sm text-gray-700">
                        <a href="#productos" className="hover:text-neutralGreen">Productos</a>
                        <a href="#seguridad" className="hover:text-neutralGreen">Seguridad</a>
                        <a href="#nosotros" className="hover:text-neutralGreen">Nosotros</a>
                    </div>
                    <div className="flex items-center gap-3">
                        <Link to="/Login">
                            <button type="button" className="px-4 py-2 rounded-lg bg-neutralGreen text-white hover:bg-green focus:ring-4 focus:ring-lightGreen/40 transition">Iniciar sesión</button>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
};
