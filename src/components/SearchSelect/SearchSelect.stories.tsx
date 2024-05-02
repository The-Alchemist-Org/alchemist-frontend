import { Meta, StoryFn } from '@storybook/react';
import { SearchSelect, SearchSelectProps } from './SearchSelect';
import { SearchSelectItem } from './SearchSelectItem';

export default {
  title: 'Components/SearchSelect',
  component: SearchSelect,
} as Meta;

const children = (
  <>
    <SearchSelectItem value="1" label="Item 1" />
    <SearchSelectItem value="2" label="Item 2" />
    <SearchSelectItem value="3" label="Item 3" />
    <SearchSelectItem value="4" label="Item 4" />
    <SearchSelectItem value="5" label="Item 5" />
    <SearchSelectItem value="6" label="Item 6" />
    <SearchSelectItem value="7" label="Item 7" />
    <SearchSelectItem value="8" label="Item 8" />
    <SearchSelectItem value="9" label="Item 9" />
    <SearchSelectItem value="10" label="Item 10" />
  </>
);

const Template: StoryFn<SearchSelectProps> = (args) => (
  <div>
    <SearchSelect
      placeholder="Select an option"
      value={{ 2: 'Item 2' }}
      {...args}
    >
      {children}
    </SearchSelect>
  </div>
);

export const Default = Template.bind({});
Default.args = {};

export const AllVariants: StoryFn<SearchSelectProps> = (args) => (
  <div className="flex flex-col gap-4" style={{ maxWidth: 300 }}>
    <SearchSelect {...args}>{children}</SearchSelect>
    <div className="group error">
      <SearchSelect {...args}>{children}</SearchSelect>
    </div>
    <SearchSelect disabled {...args}>{children}</SearchSelect>
  </div>
);
AllVariants.args = {
  placeholder: 'This is a field',
};

export const SingleSelect: StoryFn<SearchSelectProps> = (args) => (
  <div className="flex flex-col gap-4" style={{ maxWidth: 300 }}>
    <SearchSelect {...args}>{children}</SearchSelect>
    <div className="group error">
      <SearchSelect {...args}>{children}</SearchSelect>
    </div>
    <SearchSelect disabled {...args}>{children}</SearchSelect>
  </div>
);
SingleSelect.args = {
  placeholder: 'This is a single select field',
  singleSelect: true,
};
