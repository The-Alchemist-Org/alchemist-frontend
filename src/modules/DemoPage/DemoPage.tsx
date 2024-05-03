import { useToastNotification } from 'hooks';
import { Button } from '../../components/Button';
import { postQueue } from '../../api/Demo/demo';

// This const is only for testing to communicate with the back-end api
const hardCodedJson = { recipeID: 7, machineID: 123 };

export const DemoPage = () => {
  const { info } = useToastNotification();
  const { error } = useToastNotification();
  return (
    <div>
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
