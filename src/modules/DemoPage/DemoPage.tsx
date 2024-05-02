import { useToastNotification } from 'hooks';
import { Button } from '../../components/Button';

// This const is only for testing to communicate with the back-end api
const hardCodedJson = {
  recipeID: 7,
  machineID: null,
};

async function addToQueue(data: any) {
  const response = await fetch('http://localhost:3000/queue/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    return true;
  }
  return 'error';
}

export const DemoPage = () => {
  const { info } = useToastNotification();
  const { error } = useToastNotification();
  return (
    <div>
      <div className="flex flex-col items-center w-full">
        <Button
          type="button"
          className="w-4/5 my-6"
          onClick={() => {
            addToQueue(hardCodedJson)
              .then((value) => {
                if (value === true) {
                  info('Your order has been placed in the queue');
                } else {
                  error('Failed to place order');
                }
              });
          }}
        >
          Place Order
        </Button>
      </div>
    </div>
  );
};
