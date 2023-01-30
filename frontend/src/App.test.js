import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';

test('table titles are correct', () => {
  render(<App />);
  const linkElement = screen.getByText(/Usuario/i);
  const linkElement1 = screen.getByText(/Teléfono/i);
  const linkElement2 = screen.getByText(/Email/i);
  const linkElement3 = screen.getByText(/Dirección/i);
  expect(linkElement).toBeInTheDocument();
  expect(linkElement1).toBeInTheDocument();
  expect(linkElement2).toBeInTheDocument();
  expect(linkElement3).toBeInTheDocument();
});
