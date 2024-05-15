import {
  TablePage, RecipesTable, FormFieldText,
} from 'components';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

export const Overview = () => {
//   const navigate = useNavigate();
  const [filter, setFilter] = useState<{ filter: number[], search:string }>({ filter: [], search: '' });

  return (
    <TablePage
      title="List recipes"
      subTitle="Here you can find and order different recipes"
      actions={(
        <div className="flex flex-row gap-2">
          <FormFieldText
            label="Search recipes by name"
            placeholder="Search..."
            value={filter.search}
            onChange={(e) => setFilter({ ...filter, search: e.target.value })}
            className="w-auto"
          />
        </div>
      )}
    >
      <div>
        <RecipesTable canUpdate={false} filter={filter} />
      </div>
    </TablePage>
  );
};
