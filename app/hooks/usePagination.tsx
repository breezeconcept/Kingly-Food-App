import { useState } from 'react';
import { Product } from '../types';

export const usePagination = ({ products }: { products: Product[] }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;

  const endOffset = itemOffset + itemsPerPage;
  const currentProducts = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = event.selected * itemsPerPage;
    setItemOffset(newOffset);
  };

  return {
    currentProducts,
    itemsPerPage,
    handlePageClick,
    pageCount,
  };
};
