import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import SearchBar from '@/components/SearchBar';
import SortDropdown from '@/components/SortDropdown';
import Cart from '@/components/Cart';
import ProductCardList from '@/components/ProductCardList';
import { getProducts } from '@/api/products';
import { Product, ProductState } from '@/types';
import {
  fetchProductsFailure,
  fetchProductsRequest,
  fetchProductsSuccess,
} from '@/store/productSlice';
import usePagination from '@/hooks/usePagination';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';

const PRODUCT_PER_PAGE = 10;

const ProductListingPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortType, setSortType] = useState('price');
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(
    (state: ProductState) => state.product
  );

  const { currentPage, goToPrevPage, goToNextPage, getPaginationSlice } =
    usePagination(1, PRODUCT_PER_PAGE);

  useEffect(() => {
    dispatch(fetchProductsRequest());

    getProducts()
      .then((data) => {
        dispatch(fetchProductsSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchProductsFailure(error.message));
      });
  }, [dispatch]);

  const handleAddToCart = (product: Product) => {
    setCartItems([...cartItems, product]);
  };

  const handleRemoveFromCart = (product: Product) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== product.id);
    setCartItems(updatedCartItems);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortType === 'price') {
      return a.price - b.price;
    } else if (sortType === 'rating') {
      return b.rating.rate - a.rating.rate;
    }
    return 0;
  });

  const currentProducts = getPaginationSlice(sortedProducts);

  const totalPages = Math.ceil(sortedProducts.length / PRODUCT_PER_PAGE);

  return (
    <div>
      <div className='flex gap-2 items-center'>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <SortDropdown sortType={sortType} setSortType={setSortType} />
      </div>

      {loading ? (
        <div className='flex w-full justify-center items-center h-screen'>
          <p>Loading...</p>
        </div>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div>
          <ProductCardList
            products={currentProducts}
            handleAddToCart={handleAddToCart}
          />
          <div className='flex justify-between mt-4'>
            <button
              className='px-4 py-2 bg-blue-500 text-white rounded'
              onClick={goToPrevPage}
              disabled={currentPage === 1}
            >
              <MdArrowBack />
            </button>
            <button
              className='px-4 py-2 bg-blue-500 text-white rounded'
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
            >
              <MdArrowForward />
            </button>
          </div>
        </div>
      )}
      <Cart cartItems={cartItems} handleRemoveFromCart={handleRemoveFromCart} />
    </div>
  );
};

export default ProductListingPage;
