// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryFn } from '@storybook/react';
import { NumberInput } from './NumberInput';

export default {
  title: 'Components/NumberInput',
  component: NumberInput,
  argTypes: {
    placeholder: {
      control: 'text',
    },
    thousandSeparator: {
      control: 'text',
    },
  },
} as Meta;

const Template: StoryFn<typeof NumberInput> = (args) => <NumberInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'text',
  placeholder: 'Enter text',
  thousandSeparator: ',',
};

export const AllVariants: StoryFn<typeof NumberInput> = (args) => (
  <div className="flex flex-col gap-4" style={{ maxWidth: 300 }}>
    <NumberInput {...args} />
    <div className="group error">
      <NumberInput {...args} />
    </div>
    <NumberInput disabled {...args} />
  </div>
);
AllVariants.args = {
  placeholder: 'This is a field',
};
