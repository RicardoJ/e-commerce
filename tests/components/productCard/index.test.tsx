import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductCard from '@/components/productCard';

it('renders ProductCard correctly', () => {
  const product = {
    id: 1,
    title: 'Test Product',
    description: 'This is a test product',
    price: 9.99,
    category: 'stock',
    rating: { rate: 4.5, count: 6 },
    image: '/test-image.jpg',
  };

  render(<ProductCard product={product} handleAddToCart={() => {}} />);

  expect(screen.getByText('Test Product')).toBeInTheDocument();
  expect(screen.getByText(/This is a test product/i)).toBeInTheDocument();
  expect(screen.getByText('$9.99')).toBeInTheDocument();
  expect(screen.getByText('4.5')).toBeInTheDocument();
});
