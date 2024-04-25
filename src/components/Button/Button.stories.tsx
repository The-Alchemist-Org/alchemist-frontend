// eslint-disable-next-line import/no-extraneous-dependencies
import { StoryFn, Meta } from '@storybook/react';
import { Add } from '@mui/icons-material';
import { Button, ButtonProps } from './Button';
import { IconButton } from './IconButton';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['default', 'sm', 'lg', 'icon'],
      },
    },
  },
} as Meta;

export const Default: StoryFn<ButtonProps> = (args) => (
  <Button {...args}>Button</Button>
);

Default.args = {
  variant: 'default',
  disabled: false,
};

export const WithIcon: StoryFn<ButtonProps> = (args) => (
  <Button withIcon="left" {...args}>
    <Add fontSize="small" />
    Button with Icon
  </Button>
);
WithIcon.args = {
  variant: 'default',
};

export const OnlyIcon: StoryFn<ButtonProps> = (args) => (
  <IconButton {...args}>
    <Add fontSize="small" />
  </IconButton>
);
OnlyIcon.args = {
  variant: 'default',
};

export const Loading: StoryFn<ButtonProps> = (
  args,
) => <Button {...args} disabled>Loading...</Button>;
Loading.args = {
  variant: 'default',
};

export const AllVariants: StoryFn<ButtonProps> = (args) => (
  <div>
    <Button {...args}>Default</Button>
    <Button variant="outline" {...args}>Outline</Button>
    <Button variant="ghost" {...args}>Ghost</Button>
  </div>
);

AllVariants.args = {};
