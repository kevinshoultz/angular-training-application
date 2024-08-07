import type { Meta, StoryObj } from '@storybook/angular';

import { CardComponent } from './Card.component';
import { fn } from '@storybook/test';

const meta: Meta<CardComponent> = {
  title: 'Common/Card',
  component: CardComponent,
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
type Story = StoryObj<CardComponent>;

export const Empty: Story = {
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
};