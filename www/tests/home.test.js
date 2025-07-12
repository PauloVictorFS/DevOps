// Em /www/tests/Home.test.js

import { render, screen } from '@testing-library/react';
import Home from '../pages/index'; // Importa sua página principal
import '@testing-library/jest-dom';

describe('Home Page', () => {
  it('deve renderizar o cabeçalho principal', () => {
    render(<Home />);

    // Procura por um elemento de cabeçalho (h1, h2, etc.) que contenha o texto 'Tailwind'
    // Isso deve corresponder ao "Tailwind CSS" na barra de navegação.
    const heading = screen.getByRole('heading', {
      name: /Tailwind/i,
    });

    expect(heading).toBeInTheDocument();
  });
});