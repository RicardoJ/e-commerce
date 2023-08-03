import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductCardRating from '@/components/productCard/ProductCardRating';

describe('ProductCardRating', () => {
  it('renders correct number of stars based on rate', () => {
    const rate = 4.5;
    const { getAllByTestId, getByText } = render(
      <ProductCardRating rate={rate} />
    );

    const fullStars = getAllByTestId('full-star');
    expect(fullStars).toHaveLength(4);

    const halfStar = getByText('4.5');
    expect(halfStar).toBeInTheDocument();
  });
});
