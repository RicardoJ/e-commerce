import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Cart from '@/components/Cart';

const mockCartItems = [
  {
    id: 1,
    title: 'Product 1',
    description: 'This is a test product',
    price: 10,
    category: 'stock',
    rating: { rate: 4.5, count: 6 },
    image: '/test-image.jpg',
  },
  {
    id: 1,
    title: 'Product 2',
    description: 'This is a test product',
    price: 20,
    category: 'stock',
    rating: { rate: 4.5, count: 6 },
    image: '/test-image.jpg',
  },
];

describe('Cart component', () => {
  it('should display correct total items and total price', () => {
    const handleRemoveFromCart = jest.fn();
    render(
      <Cart
        cartItems={mockCartItems}
        handleRemoveFromCart={handleRemoveFromCart}
      />
    );

    const totalItemsElement = screen.getByText(
      `Cart Items: ${mockCartItems.length}`
    );
    expect(totalItemsElement).toBeInTheDocument();

    const totalPriceElement = screen.getByText(`Total Price: $30.00`);
    expect(totalPriceElement).toBeInTheDocument();
  });

  it('should call handleRemoveFromCart when delete button is clicked', () => {
    const handleRemoveFromCart = jest.fn();
    render(
      <Cart
        cartItems={mockCartItems}
        handleRemoveFromCart={handleRemoveFromCart}
      />
    );

    const deleteButtons = screen.getAllByTestId('delete-button');
    expect(deleteButtons.length).toBe(mockCartItems.length);

    fireEvent.click(deleteButtons[0]);

    expect(handleRemoveFromCart).toHaveBeenCalledWith(mockCartItems[0]);
  });
});
