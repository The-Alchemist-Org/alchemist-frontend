import { Meta, Story } from '@storybook/react';

import { Button } from '../Button';
import {
  Modal,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTrigger,
} from './Modal';

export default {
  title: 'Components/Modal',
  component: Modal,
} as Meta;

const Template: Story = (args) => (
  <Modal {...args}>
    <ModalTrigger>Open Modal</ModalTrigger>
    <ModalContent>
      <ModalHeader>
        <ModalTitle>Modal Title</ModalTitle>
        <ModalDescription>Modal description goes here.</ModalDescription>
      </ModalHeader>
      <div className="mx-4">Modal body goes here.</div>
      <ModalFooter>
        <Button variant="outline">Cancel</Button>
        <Button>Confirm</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
);

export const Default = Template.bind({});
Default.args = {};
