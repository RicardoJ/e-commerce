interface Rating {
  rate: number;
  count: number;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: Rating;
}

export interface ProductState {
  product: {
    products: Product[];
    loading: boolean;
    error: string | null;
  };
}

export interface ProductCardProps {
  product: Product;
  handleAddToCart: (product: Product) => void;
}

export interface ProductCardButtonProps {
  onClick: () => void;
}

export interface ProductCardDetailsProps {
  title: string;
  description: string;
  price: number;
  rating: { rate: number };
}

export interface ProductCardImageProps {
  src: string;
  alt: string;
}

export interface ProductCardRatingProps {
  rate: number;
}

export interface CartProps {
  cartItems: Product[];
  handleRemoveFromCart: (product: Product) => void;
}

export interface ProductCardListProps {
  products: Product[];
  handleAddToCart: (product: Product) => void;
}

export interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
}

export interface SortDropdownProps {
  sortType: string;
  setSortType: (sortType: string) => void;
}

export interface ProductStateSliceProps {
  products: Product[];
  loading: boolean;
  error: string | null;
}
