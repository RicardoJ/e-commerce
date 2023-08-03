import { useState } from 'react';

const usePagination = (initialPage: number, itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const getPaginationSlice = <T,>(items: T[]): T[] => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return items.slice(startIndex, endIndex);
  };

  return {
    currentPage,
    goToPrevPage,
    goToNextPage,
    getPaginationSlice,
  };
};

export default usePagination;
