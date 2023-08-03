import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductCardList from '@/components/ProductCardList';

const mockProducts = [
  {
    id: 1,
    title: 'Product 1',
    description: 'This is product 1',
    price: 10,
    category: 'stock',
    rating: { rate: 4.5, count: 6 },
    image: '/test-image.jpg',
  },
  {
    id: 2,
    title: 'Product 2',
    description: 'This is product 2',
    price: 20,
    category: 'stock 2',
    rating: { rate: 3.8, count: 9 },
    image: '/test-image.jpg',
  },
];

describe('ProductCardList component', () => {
  it('should display correct number of product cards', () => {
    const handleAddToCart = jest.fn();
    render(
      <ProductCardList
        products={mockProducts}
        handleAddToCart={handleAddToCart}
      />
    );

    const productCards = screen.getAllByTestId('product-card');
    expect(productCards.length).toBe(mockProducts.length);
  });

  it('should call handleAddToCart with the correct product when "Add to Cart" button is clicked', () => {
    const handleAddToCart = jest.fn();
    render(
      <ProductCardList
        products={mockProducts}
        handleAddToCart={handleAddToCart}
      />
    );

    const addToCartButton = screen.getAllByText('Add to Cart')[0];
    expect(addToCartButton).toBeInTheDocument();
    addToCartButton.click();

    expect(handleAddToCart).toHaveBeenCalledWith(mockProducts[0]);
  });
});
