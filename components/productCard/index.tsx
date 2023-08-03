import { ProductCardProps } from '@/types';
import ProductCardImage from './ProductCardImage';
import ProductCardDetails from './ProductCardDetails';
import ProductCardButton from './ProductCardButton';

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  handleAddToCart,
}) => {
  return (
    <div
      data-testid='product-card'
      className='bg-white rounded-lg shadow-md overflow-hidden '
    >
      {product.image && (
        <ProductCardImage src={product.image} alt={product.title} />
      )}
      <div className='p-4'>
        <ProductCardDetails
          title={product.title}
          description={product.description}
          price={product.price}
          rating={product.rating}
        />
        <ProductCardButton onClick={() => handleAddToCart(product)} />
      </div>
    </div>
  );
};

export default ProductCard;
