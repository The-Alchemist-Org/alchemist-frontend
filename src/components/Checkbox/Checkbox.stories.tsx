/* eslint-disable max-len */
import { Story, Meta } from '@storybook/react';
import { Checkbox } from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    checked: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
} as Meta;

export const Default: Story<React.ComponentProps<typeof Checkbox>> = (args) => (<Checkbox {...args} />);

Default.args = {
};

export const Checked: Story<React.ComponentProps<typeof Checkbox>> = (args) => <Checkbox {...args} />;
Checked.args = {
  checked: true,
};

export const Disabled: Story<React.ComponentProps<typeof Checkbox>> = (args) => <Checkbox {...args} />;
Disabled.args = {
  checked: false,
  disabled: true,
};

export const DisabledChecked: Story<React.ComponentProps<typeof Checkbox>> = (args) => <Checkbox {...args} />;
DisabledChecked.args = {
  checked: true,
  disabled: true,
};
