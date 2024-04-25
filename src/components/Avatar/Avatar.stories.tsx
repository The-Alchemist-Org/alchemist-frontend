import { Story, Meta } from '@storybook/react';
import { Avatar, AvatarFallback, AvatarImage } from './Avatar';

export default {
  title: 'Components/Avatar',
  component: Avatar,
} as Meta;

export const AvatarWithImage: Story = () => (
  <Avatar>
    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
);

export const AvatarWithFallback: Story = () => (
  <Avatar>
    <AvatarImage src="" alt="" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
);
