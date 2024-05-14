import { Meta, StoryFn } from '@storybook/react';
import { Pagination } from './Pagination';

export default {
  title: 'Components/Pagination',
  component: Pagination,
} as Meta;

const Template: StoryFn<typeof Pagination> = (args) => <Pagination {...args} />;

export const Default = Template.bind({});
Default.args = {
  page: 1,
  totalPages: 5,
};

export const TwoPages = Template.bind({});
TwoPages.args = {
  page: 5,
  totalPages: 5,
};

export const OnePage = Template.bind({});
OnePage.args = {
  totalPages: 5,
  page: 3,
};
