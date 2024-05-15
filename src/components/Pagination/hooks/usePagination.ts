import { useMemo } from 'react';

type UsePaginationProps = {
  page: number;
  totalPages: number;
};

export const usePagination = ({
  page,
  totalPages,
}: UsePaginationProps) => {
  const itemsRange = useMemo<number[]>(() => {
    if (page > totalPages) {
      return [];
    }

    const minPage = Math.max(page - 1, 1);
    const maxPage = Math.min(page + 1, totalPages);
    return Array<number>(maxPage - minPage + 1)
      .fill(0)
      .map((_, index) => minPage + index);
  }, [totalPages, page]);

  const hasLinkToLastPage = useMemo<boolean>(
    () => !itemsRange.some((itemPage) => itemPage === totalPages),
    [itemsRange, totalPages],
  );
  const hasLinkToFirstPage = useMemo<boolean>(
    () => !itemsRange.some((itemPage) => itemPage === 1),
    [itemsRange],
  );

  return {
    itemsRange,
    hasLinkToFirstPage,
    hasLinkToLastPage,
    isOnFirstPage: page === 1,
    isOnLastPage: page === totalPages,
  };
};
