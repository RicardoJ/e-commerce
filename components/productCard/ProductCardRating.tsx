import { ProductCardRatingProps } from '@/types';
import { MdStar, MdStarHalf } from 'react-icons/md';

const ProductCardRating: React.FC<ProductCardRatingProps> = ({ rate }) => (
  <div className='flex ml-2 items-center gap-1'>
    {Array.from({ length: Math.floor(rate) }).map((_, i) => (
      <MdStar
        key={i}
        className='w-5 h-5 fill-current text-yellow-500'
        data-testid='full-star'
      />
    ))}
    {rate % 1 !== 0 && (
      <MdStarHalf className='w-5 h-5 fill-current text-yellow-500' />
    )}
    {rate}
  </div>
);

export default ProductCardRating;
