import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import SortDropdown from '@/components/SortDropdown';

describe('SortDropdown component', () => {
  it('should update the sort type when dropdown value changes', () => {
    const setSortType = jest.fn();
    render(<SortDropdown sortType='price' setSortType={setSortType} />);

    const selectElement = screen.getByRole('combobox');

    fireEvent.change(selectElement, { target: { value: 'rating' } });

    expect(setSortType).toHaveBeenCalledWith('rating');
  });

  it('should display the correct sort type in the dropdown', () => {
    const sortType = 'rating';
    render(<SortDropdown sortType={sortType} setSortType={() => {}} />);

    const selectElement = screen.getByRole('combobox');

    expect(selectElement).toHaveValue(sortType);
  });
});
