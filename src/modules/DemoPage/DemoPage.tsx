import { useToastNotification } from 'hooks';
import { Button } from '../../components/Button';
import { postQueue } from '../../api/Demo/demo';
import { getPresentIngredients } from '../../api/PresentDispenserIngredients/presentIngredients';

// This const is only for testing to communicate with the back-end api
const hardCodedJson = { recipeId: 7, machineId: 123 };
const hardCodedMachineID = 123;

export const DemoPage = () => {
  const { info } = useToastNotification();
  const { error } = useToastNotification();
  return (
    <div>
      <div className="flex flex-col items-center w-full">
        <Button
          type="button"
          className="w-2/5 my-10"
          // below is a proof of concept/demo that we can fetch our active containers
          // from the db by using the api call to the backend,
          // this is not thought to be a final product
          onClick={async () => {
            let ingredients = await getPresentIngredients(hardCodedMachineID);
            ingredients = ingredients.data.map((ingredient: any) => {
              return ingredient.name;
              console.log(ingredient.name);
            });
            console.log(ingredients);
          }}
        >
          Fetch current ingredients
        </Button>

      </div>
      <div className="flex flex-col items-center w-full">
        <Button
          type="button"
          className="w-4/5 my-6"
          onClick={async () => {
            const response = await postQueue(hardCodedJson);
            if (response.status === 200) {
              info('Your order has been placed');
            } else {
              error('Failed placing order');
            }
          }}
        >
          Place Order
        </Button>
      </div>
    </div>
  );
};
