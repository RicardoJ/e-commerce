import { ProductCardImageProps } from '@/types';
import Image from 'next/image';
import React from 'react';

const ProductCardImage: React.FC<ProductCardImageProps> = ({ src, alt }) => (
  <Image
    src={src}
    alt={alt}
    className='w-full h-48 object-contain'
    width={300}
    height={200}
  />
);

export default ProductCardImage;
