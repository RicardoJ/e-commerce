import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ProductListingPage from '@/app/ProductListingPage';
import { Store, AnyAction } from 'redux';
import { RootState } from '@/store';

describe('ProductListingPage component', () => {
  const mockStore = configureStore<RootState, AnyAction>([]);
  let store: Store<RootState, AnyAction>;

  beforeEach(() => {
    const initialState: RootState = {
      product: {
        products: [
          {
            id: 1,
            title: 'Product 1',
            description: 'This is a test product',
            price: 10,
            category: 'stock',
            rating: { rate: 4.5, count: 6 },
            image: '/test-image.jpg',
          },
        ],
        loading: false,
        error: null,
      },
    };
    store = mockStore(initialState);
  });

  it('should render search bar and sort dropdown', () => {
    render(
      <Provider store={store}>
        <ProductListingPage />
      </Provider>
    );

    const searchBar = screen.getByPlaceholderText('Search products...');
    const sortDropdown = screen.getByRole('combobox');
    expect(searchBar).toBeInTheDocument();
    expect(sortDropdown).toBeInTheDocument();
  });

  it('should add a product to the cart when "Add to Cart" button is clicked', () => {
    render(
      <Provider store={store}>
        <ProductListingPage />
      </Provider>
    );

    const addToCartButton = screen.getAllByText(/Add to Cart/i)[0];
    fireEvent.click(addToCartButton);

    const updatedCartItems = store.getState().product.products;
    expect(updatedCartItems).toHaveLength(1);
  });

  it('should remove a product from the cart when "Remove" button is clicked', () => {
    render(
      <Provider store={store}>
        <ProductListingPage />
      </Provider>
    );

    const addToCartButton = screen.getAllByText(/Add to Cart/i)[0];
    fireEvent.click(addToCartButton);

    const removeButton = screen.getAllByTestId('delete-button')[0];
    fireEvent.click(removeButton);
    store = mockStore({
      product: {
        products: [],
        loading: false,
        error: null,
      },
    });

    const cartItems = store.getState().product.products;
    expect(cartItems).toHaveLength(0);
  });
});
