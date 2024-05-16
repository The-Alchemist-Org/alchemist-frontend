import { useQueryClient } from '@tanstack/react-query';
import { RecipeDTO, deleteRecipe } from 'api/Recepies';
import {
  AlertDialogContentType, AlertDialogFooter,
  AlertDialogContent, AlertDialogTitle, AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogConfirm,
  AlertDialogType,
} from 'components/Alert';
import { Button } from 'components/Button';
import { queryKeys } from 'constants/QueryKeys';
import { useToastNotification } from 'hooks';
import { FC } from 'react';

type Props = {
  recipe: RecipeDTO;
};

export const AlertDelete:FC<Props> = ({
  recipe,
}) => {
  const { success, error } = useToastNotification();
  const queryClient = useQueryClient();
  const orderDrink = async () => {
    try {
      const response = await deleteRecipe(recipe.id);
      if (response.status === 204) {
        success('Your recipe has been deleted');
      } else {
        error('Failed deleting recipe');
      }
      queryClient.invalidateQueries([queryKeys.RECIPES]);
    } catch (_error) {
      error('Failed deleting recipe');
    }
  };
  return (
    <AlertDialogContent>
      <AlertDialogContentType type={AlertDialogType.WARNING}>
        <AlertDialogTitle>Confirm recipe deletion</AlertDialogTitle>
        <AlertDialogDescription>
          You are about to delete the recipe:
          <br />
          <b>{recipe.name}</b>
        </AlertDialogDescription>
      </AlertDialogContentType>
      <AlertDialogFooter>
        <AlertDialogCancel>
          <Button variant="outline">Cancel</Button>
        </AlertDialogCancel>
        <AlertDialogConfirm onClick={orderDrink}>
          <Button>Confirm</Button>
        </AlertDialogConfirm>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
};
