import ProductCardImage from '@/components/productCard/ProductCardImage';
import { render, screen } from '@testing-library/react';

it('renders product image correctly', () => {
  const src = '/test-image.jpg';
  const alt = 'Test Product';
  render(<ProductCardImage src={src} alt={alt} />);
  const imageElement = screen.getByAltText(alt);
  expect(imageElement).toBeInTheDocument();
});
