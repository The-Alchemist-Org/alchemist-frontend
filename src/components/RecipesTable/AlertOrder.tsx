import { postQueue } from 'api/Queue';
import { RecipeDTO } from 'api/Recepies';
import {
  AlertDialogContentType, AlertDialogFooter,
  AlertDialogContent, AlertDialogTitle, AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogConfirm,
} from 'components/Alert';
import { Button } from 'components/Button';
import { useToastNotification } from 'hooks';
import { FC } from 'react';

type Props = {
  recipe: RecipeDTO;
};

export const AlertOrder:FC<Props> = ({
  recipe,
}) => {
  const { success, error } = useToastNotification();
  const orderDrink = async () => {
    try {
      const response = await postQueue({ recipeId: recipe.id, machineId: 3 });
      if (response.status === 200) {
        success('Your order has been placed');
      } else {
        error('Failed placing order');
      }
    } catch (_error) {
      error('Failed placing order');
    }
  };
  return (
    <AlertDialogContent>
      <AlertDialogContentType>
        <AlertDialogTitle>Confirm drink order</AlertDialogTitle>
        <AlertDialogDescription>
          You are about to order the drink:
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
