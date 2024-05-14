import { FC, useCallback, useMemo } from 'react';
import {
  NavigateNextOutlined, NavigateBeforeOutlined, LastPageOutlined, FirstPageOutlined,
} from '@mui/icons-material';
import { Button, IconButton } from 'components/Button';
import { usePagination } from './hooks';

interface Props {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: FC<Props> = ({
  page, totalPages, onPageChange,
}) => {
  const selectedPage = useMemo<number>(() => page + 1, [page]);
  const {
    itemsRange,
    hasLinkToFirstPage,
    hasLinkToLastPage,
    isOnFirstPage,
    isOnLastPage,
  } = usePagination({ page: page + 1, totalPages });
  const showLinkToLastPage = hasLinkToLastPage && !isOnLastPage && itemsRange.length > 1;

  const handlePageChange = useCallback((newPage: number) => () => {
    // Reducing by one as API pagination starts from 0
    onPageChange(newPage - 1);
  }, [onPageChange]);

  const handleNextPage = useCallback(() => {
    onPageChange(page + 1);
  }, [page, onPageChange]);

  const handlePreviousPage = useCallback(() => {
    onPageChange(page - 1);
  }, [page, onPageChange]);

  return (
    <div className="flex">
      <IconButton
        className="disabled:!text-cool-gray-400"
        variant="ghost"
        disabled={isOnFirstPage}
        onClick={handlePageChange(1)}
      >
        <FirstPageOutlined fontSize="small" />
      </IconButton>
      <IconButton
        className="disabled:!text-cool-gray-400"
        variant="ghost"
        disabled={isOnFirstPage}
        onClick={handlePreviousPage}
      >
        <NavigateBeforeOutlined fontSize="small" />
      </IconButton>
      {hasLinkToFirstPage && (
        <>
          <Button
            className="!min-w-[44px] px-4"
            variant={itemsRange.length > 1 ? 'ghost' : 'default'}
            onClick={handlePageChange(1)}
          >
            1
          </Button>
          {itemsRange.length > 1 && <span className="py-2.5 px-4 self-center">...</span>}
        </>
      )}
      {itemsRange.map((item) => (
        <Button
          className="!min-w-[44px] px-4"
          variant={selectedPage === item ? 'default' : 'ghost'}
          onClick={handlePageChange(item)}
          key={item}
        >
          { item}
        </Button>
      ))}
      {showLinkToLastPage && (
        <>
          <span className="py-2.5 px-4 self-center">...</span>
          <Button className="!min-w-[44px] px-4" variant="ghost" onClick={handlePageChange(totalPages)}>
            {totalPages}
          </Button>
        </>
      )}
      <IconButton
        className="disabled:!text-cool-gray-400"
        variant="ghost"
        disabled={isOnLastPage}
        onClick={handleNextPage}
      >
        <NavigateNextOutlined fontSize="small" />
      </IconButton>
      <IconButton
        className="disabled:!text-cool-gray-400"
        variant="ghost"
        disabled={isOnLastPage}
        onClick={handlePageChange(totalPages)}
      >
        <LastPageOutlined fontSize="small" />
      </IconButton>
    </div>
  );
};
