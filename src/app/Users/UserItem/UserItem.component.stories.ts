import type { Meta, StoryObj } from '@storybook/angular';

import { UserItemComponent } from './UserItem.component';
import { fn } from '@storybook/test';

const meta: Meta<UserItemComponent> = {
  title: 'Business Objects/Users/UserItem',
  component: UserItemComponent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<UserItemComponent>;

export const EmptyUserItem: Story = {
  args: {},
};