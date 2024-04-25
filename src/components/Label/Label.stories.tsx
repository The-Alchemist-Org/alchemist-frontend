import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Story, Meta } from '@storybook/react';
import { Label } from './Label';

export default {
  title: 'Components/Label',
  component: Label,
} as Meta;

// eslint-disable-next-line jsx-a11y/label-has-associated-control
const Template: Story<React.ComponentPropsWithoutRef<typeof Label>> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default Label',
};

export const WithCustomClass = Template.bind({});
WithCustomClass.args = {
  children: 'Custom Styled Label',
  className: 'text-blue-500',
};
