import type { Meta, StoryObj } from '@storybook/angular';

import { ModalComponent } from './Modal.component';
import { fn } from '@storybook/test';

const meta: Meta<ModalComponent> = {
  title: 'Common/Modal',
  component: ModalComponent,
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
type Story = StoryObj<ModalComponent>;

export const EmptyModal: Story = {
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
};