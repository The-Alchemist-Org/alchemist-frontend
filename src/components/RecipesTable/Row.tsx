import { Delete, Edit, LocalDrink } from '@mui/icons-material';
import { RecipeDTO } from 'api/Recepies';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertDialogRoot, AlertDialogTrigger } from 'components/Alert';
import { TD, TRow } from '../Table';
import { IconButton } from '../Button';
import { AlertOrder } from './AlertOrder';
import { AlertDelete } from './AlertDelete';

type Props = {
  recipe: RecipeDTO;
  canUpdate: boolean;
  canOrder: boolean;
};

export const Row: FC<Props> = ({
  recipe, canUpdate, canOrder,
}) => {
  const navigate = useNavigate();

  return (
    <TRow>
      <TD>{recipe.name}</TD>
      <TD>
        {recipe.ingredients.map(
          (ingredient, index) => `${ingredient.quantity ?? 1}cl ${ingredient.ingredient.name}${recipe.ingredients.length !== index + 1 ? ',' : ''} `,
        )}
      </TD>
      {canUpdate && (
        <TD className="flex flex-row gap-2 justify-end">
          <IconButton
            variant="ghost"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => navigate(`${recipe.id}/edit`)}
          >
            <Edit fontSize="small" />
          </IconButton>
          <AlertDialogRoot>
            <AlertDialogTrigger>

              <IconButton
                variant="ghost"
                className="hidden h-8 w-8 p-0 lg:flex"
              >
                <Delete fontSize="small" />
              </IconButton>
            </AlertDialogTrigger>
            <AlertDelete
              recipe={recipe}
            />
          </AlertDialogRoot>
        </TD>
      )}
      {canOrder && (
        <TD className="flex flex-row gap-2 justify-end">
          <AlertDialogRoot>
            <AlertDialogTrigger>
              <IconButton
                variant="ghost"
                className="h-8 w-8 p-0 lg:flex"
              >
                <LocalDrink fontSize="small" />
              </IconButton>
            </AlertDialogTrigger>
            <AlertOrder
              recipe={recipe}
            />
          </AlertDialogRoot>
        </TD>
      )}
    </TRow>
  );
};
