import React from 'react';
import { render, screen } from '@testing-library/react';
import { MainContainer } from '../src/Components/LandingPage/Main Container/MainContainer';

describe('MainContainer component', () => {
  it('muestra el título y las tarjetas de productos', () => {
    render(<MainContainer />);

    // Título principal
    expect(screen.getByText('Nuestros productos')).toBeInTheDocument();

    // Tarjetas
    expect(screen.getByText('Cuentas Nómina')).toBeInTheDocument();
    expect(screen.getByText('Cuentas de Ahorros')).toBeInTheDocument();
    expect(screen.getByText('Créditos')).toBeInTheDocument();
  });
});

