import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ProductCardButton from '@/components/productCard/ProductCardButton';

it('calls onClick handler when button is clicked', () => {
  const handleAddToCart = jest.fn();
  render(<ProductCardButton onClick={handleAddToCart} />);
  const buttonElement = screen.getByText('Add to Cart');
  fireEvent.click(buttonElement);
  expect(handleAddToCart).toHaveBeenCalledTimes(1);
});
