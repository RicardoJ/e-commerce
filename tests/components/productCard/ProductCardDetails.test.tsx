import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductCardDetails from '@/components/productCard/ProductCardDetails';

it('renders product details correctly', () => {
  const title = 'Test Product';
  const description = 'This is a test product';
  const price = 9.99;
  const rating = { rate: 4.5 };

  render(
    <ProductCardDetails
      title={title}
      description={description}
      price={price}
      rating={rating}
    />
  );

  expect(screen.getByText(title)).toBeInTheDocument();
  expect(screen.getByText(/This is a test product/i)).toBeInTheDocument();
  expect(screen.getByText(`$${price.toFixed(2)}`)).toBeInTheDocument();
  expect(screen.getByText('4.5')).toBeInTheDocument();
});
