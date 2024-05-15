import { Meta, StoryFn } from '@storybook/react';
import { Button } from '../Button';
import {
  AlertDialogContent,
  AlertDialogContentType,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogRoot,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogType,
} from './Alert';

// @ts-ignore
export default {
  title: 'Components/Alert',
  component: AlertDialogContentType,
  argTypes: {
    type: {
      type: 'select',
      options: [AlertDialogType.WARNING, AlertDialogType.INFO, undefined],
    },
  },
} as Meta;

const Template: StoryFn<typeof AlertDialogContentType> = (args) => (
  <AlertDialogRoot open>
    <AlertDialogTrigger>Open</AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogContentType {...args}>
        <AlertDialogTitle>Alert Title</AlertDialogTitle>
        <AlertDialogDescription>Alert description goes here.</AlertDialogDescription>
      </AlertDialogContentType>
      <AlertDialogFooter>
        <Button variant="outline">Cancel</Button>
        <Button>Confirm</Button>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialogRoot>
);

export const Default = Template.bind({});
Default.args = {};
