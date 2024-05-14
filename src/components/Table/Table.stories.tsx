import { Meta, StoryFn } from '@storybook/react';
import {
  Table, TBody, TD, TH, THead, TRow,
} from './Table';

export default {
  title: 'Components/Table',
  component: Table,
} as Meta;

const Template: StoryFn<typeof Table> = (args) => (
  <Table {...args}>
    <THead>
      <tr>
        <TH>Name</TH>
        <TH>Age</TH>
        <TH>Country</TH>
      </tr>
    </THead>
    <TBody>
      <TRow>
        <TD>John</TD>
        <TD>21</TD>
        <TD>USA</TD>
      </TRow>
      <TRow>
        <TD>Doe</TD>
        <TD>21</TD>
        <TD>Canada</TD>
      </TRow>
      <TRow>
        <TD>Bob</TD>
        <TD>35</TD>
        <TD>Mexico</TD>
      </TRow>
    </TBody>
  </Table>
);
export const Basic = Template.bind({});
