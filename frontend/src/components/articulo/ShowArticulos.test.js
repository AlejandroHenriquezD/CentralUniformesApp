import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import ShowArticulos from './ShowArticulos';
import { BrowserRouter } from 'react-router-dom';

test('table titles are correct', () => {
  render(<BrowserRouter><ShowArticulos /></BrowserRouter>);
  const linkElement = screen.getByText(/Nombre/i);
  const linkElement1 = screen.getByText(/Talla/i);
  const linkElement2 = screen.getByText(/Color/i);
  const linkElement3 = screen.getByText(/Stock/i);
  expect(linkElement).toBeInTheDocument();
  expect(linkElement1).toBeInTheDocument();
  expect(linkElement2).toBeInTheDocument();
  expect(linkElement3).toBeInTheDocument();
});


test('Logo must have src = "/logo_pequeño.png" and alt = "Logo"', () => {
  render(<BrowserRouter><ShowArticulos /></BrowserRouter>);
  const logo = screen.getByRole('img');
  expect(logo).toHaveAttribute('src', 'logo_pequeño.png');
  expect(logo).toHaveAttribute('alt', 'Logo');
}); 