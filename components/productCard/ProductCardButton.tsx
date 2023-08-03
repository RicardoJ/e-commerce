import { ProductCardButtonProps } from '@/types';

const ProductCardButton: React.FC<ProductCardButtonProps> = ({ onClick }) => (
  <button
    className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
    onClick={onClick}
  >
    Add to Cart
  </button>
);

export default ProductCardButton;
