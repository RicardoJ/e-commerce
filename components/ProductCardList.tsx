import { ProductCardListProps } from '@/types';
import ProductCard from './productCard';
import React from 'react';

const ProductCardList: React.FC<ProductCardListProps> = ({
  products,
  handleAddToCart,
}) => {
  const productCards = products.map((product) => (
    <ProductCard
      key={product.id}
      product={product}
      handleAddToCart={handleAddToCart}
    />
  ));

  return (
    <div
      className='grid grid-cols-[repeat(1,minmax(300px,1fr))]
       mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'
    >
      {productCards}
    </div>
  );
};

export default ProductCardList;
