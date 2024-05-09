import { Meta, StoryFn } from '@storybook/react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
} from './DropDownMenu';

export default {
  title: 'Components/DropdownMenu',
  component: DropdownMenu,
  subcomponents: {
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuCheckboxItem,
    DropdownMenuRadioItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuGroup,
    DropdownMenuPortal,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuRadioGroup,
  },
} as Meta;

const Template: StoryFn = (args) => (
  <DropdownMenu {...args}>
    <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem onSelect={() => alert('Item 1 clicked!')}>Item 1</DropdownMenuItem>
      <DropdownMenuItem onSelect={() => alert('Item 2 clicked!')}>Item 2</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuCheckboxItem>Check this out</DropdownMenuCheckboxItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

export const Default = Template.bind({});
Default.args = {};

export const WithSubmenu = Template.bind({});
WithSubmenu.args = {};
WithSubmenu.storyName = 'With Submenu';
WithSubmenu.decorators = [() => (
  <DropdownMenu>
    <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem onSelect={() => alert('Item 1 clicked!')}>Item 1</DropdownMenuItem>
      <DropdownMenuSub>
        <DropdownMenuSubTrigger>Submenu</DropdownMenuSubTrigger>
        <DropdownMenuSubContent>
          <DropdownMenuItem onSelect={() => alert('Subitem 1 clicked!')}>Subitem 1</DropdownMenuItem>
        </DropdownMenuSubContent>
      </DropdownMenuSub>
    </DropdownMenuContent>
  </DropdownMenu>
)];

export const WithRadioItems = Template.bind({});
WithRadioItems.args = {};
WithRadioItems.storyName = 'With Radio Items';
WithRadioItems.decorators = [() => (
  <DropdownMenu>
    <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuRadioGroup value="item1">
        <DropdownMenuRadioItem value="item1">Radio Item 1</DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="item2">Radio Item 2</DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
    </DropdownMenuContent>
  </DropdownMenu>
)];

export const WithCheckboxes = Template.bind({});
WithCheckboxes.args = {};
WithCheckboxes.storyName = 'With Checkboxes';
WithCheckboxes.decorators = [() => (
  <DropdownMenu>
    <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem onSelect={() => alert('Item 1 clicked!')}>Item 1</DropdownMenuItem>
      <DropdownMenuCheckboxItem onCheckedChange={() => alert('Checkbox 1 toggled!')} checked>Checkbox 1</DropdownMenuCheckboxItem>
      <DropdownMenuCheckboxItem onCheckedChange={() => alert('Checkbox 2 toggled!')}>Checkbox 2</DropdownMenuCheckboxItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem onSelect={() => alert('Item 2 clicked!')}>Item 2</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
)];
