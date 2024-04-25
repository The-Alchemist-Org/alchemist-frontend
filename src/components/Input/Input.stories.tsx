// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryFn } from '@storybook/react';
import { Input, InputProps } from './Input';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['text', 'email', 'password'],
      },
    },
    placeholder: {
      control: 'text',
    },
    className: {
      control: 'text',
    },
  },
} as Meta;

const Template: StoryFn<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'text',
  placeholder: 'Enter text',
};

export const WithCurrency = Template.bind({});
WithCurrency.args = {
  type: 'text',
  placeholder: 'Enter amount',
  suffix: 'ml',
};

export const AllVariants: StoryFn<InputProps> = (args) => (
  <div className="flex flex-col gap-4" style={{ maxWidth: 300 }}>
    <Input {...args} />
    <div className="group error">
      <Input {...args} />
    </div>
    <Input disabled {...args} />
    <Input suffix="ml" {...args} />
    <div className="group error">
      <Input suffix="ml" {...args} />
    </div>
  </div>
);
AllVariants.args = {
  placeholder: 'This is a field',
};
