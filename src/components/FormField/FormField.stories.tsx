// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryFn } from '@storybook/react';
import { FormFieldText, FormFieldTextProps } from './FormFieldText';

export default {
  title: 'Components/FormField',
  component: FormFieldText,
} as Meta;

const Template: StoryFn<FormFieldTextProps> = (args) => <FormFieldText {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Name',
  placeholder: 'Enter name',
  helperText: 'Fill this',
};

export const AllVariantsFormFieldText: StoryFn<FormFieldTextProps> = (args) => (
  <div className="flex flex-col gap-4" style={{ maxWidth: 300 }}>
    <FormFieldText {...args} />
    <FormFieldText error="Something went wrong" {...args} />
    <FormFieldText disabled {...args} />
    <FormFieldText suffix="SEK" {...args} />
    <FormFieldText suffix="SEK" error="Something went wrong" {...args} />
  </div>
);
AllVariantsFormFieldText.args = {
  label: 'Some input',
  placeholder: 'This is a field',
  helperText: 'This should help you',
};
