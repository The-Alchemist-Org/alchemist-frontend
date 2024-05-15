import { Add } from '@mui/icons-material';
import { Button, TablePage, RecipesTable } from 'components';
import { useNavigate } from 'react-router-dom';

export const Overview = () => {
  const navigate = useNavigate();

  return (
    <TablePage
      title="My recipes"
      subTitle="Here you can manage all your recipes"
      actions={(
        <div className="flex flex-row gap-2">
          <Button withIcon="left" onClick={() => navigate('create')}>
            <Add />
            New recipe
          </Button>
        </div>
      )}
    >
      <div>
        <RecipesTable canOrder={false} />
      </div>
    </TablePage>
  );
};
