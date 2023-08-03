import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import SearchBar from '@/components/SearchBar';

describe('SearchBar component', () => {
  it('should update the search term when input value changes', () => {
    const setSearchTerm = jest.fn();
    render(<SearchBar searchTerm='' setSearchTerm={setSearchTerm} />);

    const inputElement = screen.getByPlaceholderText('Search products...');

    const searchTerm = 'test search';
    fireEvent.change(inputElement, { target: { value: searchTerm } });

    expect(setSearchTerm).toHaveBeenCalledWith(searchTerm);
  });

  it('should display the correct search term in the input', () => {
    const searchTerm = 'test search';
    render(<SearchBar searchTerm={searchTerm} setSearchTerm={() => {}} />);

    const inputElement = screen.getByPlaceholderText('Search products...');

    expect(inputElement).toHaveValue(searchTerm);
  });
});
