import { Meta, StoryFn } from '@storybook/react';
import { Tag } from './Tag';

export default {
  title: 'Components/Tag',
  component: Tag,
} as Meta;

const Template: StoryFn<typeof Tag> = (args) => (
  <div className="flex flex-col gap-2">
    <Tag {...args} />
    <Tag variant="passive" {...args} />
    <Tag {...args}>
      This is a super long tag that will be clipped
    </Tag>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Tag',
};
