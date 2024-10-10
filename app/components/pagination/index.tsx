import ReactPaginate from 'react-paginate';
import Image from 'next/image';
import { IconContext } from 'react-icons';
import leftIcon from '@/public/images/arrow-left.svg';
import rightIcon from '@/public/images/arrow-right.svg';
import { PerginationProps } from '@/app/types';

export function Pagination({ pageCount, handlePageClick }: PerginationProps) {
  return (
    <>
      <ReactPaginate
        containerClassName={'pagination-container'}
        pageClassName={'pagination-page'}
        activeClassName={'pagination-page__active'}
        nextLinkClassName={'pagination-next'}
        previousLinkClassName={'pagination-prev'}
        breakLabel="..."
        previousLabel={
          <IconContext.Provider value={{ color: '#344054', size: '36px' }}>
            <span className="hidden md:block md:mr-1 md:ml-3 text-gray-500 text-sm font-medium font-['Inter'] leading-tight">
              Prev
            </span>
            <Image src={leftIcon} alt="Prev" />{' '}
          </IconContext.Provider>
        }
        nextLabel={
          <IconContext.Provider value={{ color: '#344054', size: '36px' }}>
            <span className="hidden md:block md:mr-1 text-gray-500 text-sm font-medium font-['Inter'] leading-tight">
              Next
            </span>
            <Image src={rightIcon} alt="Next" />{' '}
          </IconContext.Provider>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
      />
    </>
  );
}
