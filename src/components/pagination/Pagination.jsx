import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useApiStore } from '../../store/ApiStore';
import { Icon } from '@iconify/react';

export const Pagination = ({ info }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const { pageNumber, setPageNumber } = useApiStore();

  const pageChange = ({ selected }) => {
    setPageNumber(selected + 1);
  };

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <ReactPaginate
      containerClassName="flex flex-wrap justify-center items-center gap-2 my-6 text-sm"
      activeClassName="bg-green-600 dark:bg-blue-600 text-white"
      pageClassName="border border-gray-300 dark:border-gray-600 text-black dark:text-white rounded px-3 py-1 sm:px-4 sm:py-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
      pageLinkClassName="block"
      previousClassName="border px-3 py-1 sm:px-4 sm:py-2 rounded bg-green-500 dark:bg-blue-500 text-white cursor-pointer"
      nextClassName="border px-3 py-1 sm:px-4 sm:py-2 rounded bg-green-500 dark:bg-blue-500 text-white cursor-pointer"
      breakClassName="px-2 text-black dark:text-white"
      previousLabel={<Icon icon="ooui:next-rtl" width="20" height="20" />}
      nextLabel={<Icon icon="ooui:next-ltr" width="20" height="20" />}
      marginPagesDisplayed={width < 640 ? 1 : 2}
      pageRangeDisplayed={width < 640 ? 1 : 2}
      pageCount={info?.pages || 1}
      forcePage={pageNumber - 1}
      onPageChange={pageChange}
    />
  );
};
