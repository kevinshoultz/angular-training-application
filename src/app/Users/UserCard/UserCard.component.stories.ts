import type { Meta, StoryObj } from '@storybook/angular';

import { UserCardComponent } from './UserCard.component';
import { fn } from '@storybook/test';

const meta: Meta<UserCardComponent> = {
  title: 'Business Objects/Users/UserCard',
  component: UserCardComponent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<UserCardComponent>;

export const EmptyUserCard: Story = {
  args: {},
};