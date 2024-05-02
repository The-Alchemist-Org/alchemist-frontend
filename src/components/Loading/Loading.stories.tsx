import { Meta, StoryFn } from '@storybook/react';
import { Loading as Component } from './Loading';

export default {
  title: 'Components/Loading',
  component: Component,
} as Meta;

const Template: StoryFn<typeof Component> = (args) => (
  <Component {...args} />
);

export const Default = Template.bind({});

export const WithCustomClass = Template.bind({});
WithCustomClass.args = {
  className: 'w-20',
};
