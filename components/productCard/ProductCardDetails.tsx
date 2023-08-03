import { ProductCardDetailsProps } from '@/types';
import ProductCardRating from './ProductCardRating';

const ProductCardDetails: React.FC<ProductCardDetailsProps> = ({
  title,
  description,
  price,
  rating,
}) => (
  <div>
    <h2 className='text-lg font-medium text-gray-800'>{title}</h2>
    <p className='text-gray-600'>{description.slice(0, 100)}...</p>
    <div className='flex items-center mt-2'>
      <span className='text-gray-800 font-bold'>${price.toFixed(2)}</span>
      <ProductCardRating rate={rating.rate} />
    </div>
  </div>
);

export default ProductCardDetails;
