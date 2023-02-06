import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import CreateArticulo from './CreateArticiulo';
import { BrowserRouter } from 'react-router-dom';

test('form is correctly formed', () => {
    render(<BrowserRouter><CreateArticulo /></BrowserRouter>);

    const nameLabel = screen.getByText(/Nombre/i)
    const tallaLabel = screen.getByText(/Talla/i)
    const colorLabel = screen.getByText(/Color/i)
    const precioLabel = screen.getByText(/Precio/i)
    const stockLabel = screen.getByText(/Stock/i)
    const descripcionLabel = screen.getByText(/Descripcion/i)
    expect(nameLabel).toBeInTheDocument();
    expect(tallaLabel).toBeInTheDocument();
    expect(colorLabel).toBeInTheDocument();
    expect(precioLabel).toBeInTheDocument();
    expect(stockLabel).toBeInTheDocument();
    expect(descripcionLabel).toBeInTheDocument();


});