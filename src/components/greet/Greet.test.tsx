import { render, screen } from '@testing-library/react';
import Greet from './Greet';

test('Greet renders correctly', () => {
  render(<Greet />)
  const textElement = screen.getByText(/hello/i)
  expect(textElement).toBeInTheDocument()
});

test('Greet renders with name', () => {
  render(<Greet name='Etele' />)
  const textElement = screen.getByText('Hello Etele')
  expect(textElement).toBeInTheDocument()
})