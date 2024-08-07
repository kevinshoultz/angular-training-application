import type { Meta, StoryObj } from '@storybook/angular';

import { TaskModalComponent } from './TaskModal.component';
import { fn } from '@storybook/test';

const meta: Meta<TaskModalComponent> = {
  title: 'Business Objects/Tasks/TaskModal',
  component: TaskModalComponent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<TaskModalComponent>;

export const EmptyTaskModal: Story = {
  args: {},
};