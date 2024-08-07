import type { Meta, StoryObj } from '@storybook/angular';

import { ItemComponent } from './Item.component';
import { fn } from '@storybook/test';

const meta: Meta<ItemComponent> = {
  title: 'Common/Item',
  component: ItemComponent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn(),
  },
};

export default meta;
type Story = StoryObj<ItemComponent>;

export const EmptyItem: Story = {
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
};