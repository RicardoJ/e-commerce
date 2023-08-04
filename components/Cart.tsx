import { CartProps } from '@/types';
import { MdOutlineDeleteForever, MdShoppingCart } from 'react-icons/md';
import React from 'react';

const Cart: React.FC<CartProps> = ({ cartItems, handleRemoveFromCart }) => {
  const totalItems = cartItems.length;
  const totalPrice = cartItems.reduce(
    (total, product) => total + product.price,
    0
  );

  return (
    <div className='fixed top-0 right-0 bg-white shadow-md p-4'>
      <MdShoppingCart size={24} color='blue' />

      <p className='text-gray-800'>Cart Items: {totalItems}</p>
      <p className='text-gray-800'>Total Price: ${totalPrice.toFixed(2)}</p>
      <ul className='mt-2'>
        {cartItems.map((product) => (
          <li key={product.id} className='flex items-center justify-between'>
            <span>{product.title}</span>
            <button
              className='ml-2 text-red-500'
              onClick={() => handleRemoveFromCart(product)}
              data-testid='delete-button'
            >
              <MdOutlineDeleteForever size={24} color='red' />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
