import { DEFAULT_PAGE_SIZE } from 'constants/Pagination';
import { useRecipesList } from 'hooks';
import { FC, useState } from 'react';
import { Row } from './Row';
import {
  TBody, TH, THead, Table,
} from '../Table';
import { Loading } from '../Loading';
import { Pagination } from '../Pagination';

type Props = {
  canOrder?: boolean;
  canUpdate?: boolean;
  filter?: {
    search?: string;
    filter?: number[];
  };
};

export const RecipesTable: FC<Props> = ({
  canOrder, canUpdate, filter,
}) => {
  const [page, setPage] = useState<number>(0);
  const {
    data, isInitialLoading,
  } = useRecipesList({
    page,
    limit: DEFAULT_PAGE_SIZE,
    search: filter?.search,
    filter: filter?.filter,
  });
  if (isInitialLoading) {
    return (
      <div className="flex justify-center">
        <Loading />
      </div>
    );
  }
  return (
    <div>
      <Table>
        <THead>
          <tr>
            <TH>Name</TH>
            <TH>Ingredients</TH>
            {canUpdate && <TH />}
            {canOrder && <TH />}
          </tr>
        </THead>
        <TBody>
          {data?.data.results.map((recipe) => (
            <Row key={recipe.id} recipe={recipe} canUpdate={!!canUpdate} canOrder={!!canOrder} />
          ))}
        </TBody>
      </Table>
      <div className="flex justify-center mt-6">
        <Pagination
          page={page}
          totalPages={data?.data?.totalPages ?? 0}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
};
RecipesTable.defaultProps = {
  canOrder: true,
  canUpdate: true,
};
