import type { Meta, StoryObj } from '@storybook/angular';

import { TaskFormComponent } from './TaskForm.component';
import { fn } from '@storybook/test';

const meta: Meta<TaskFormComponent> = {
  title: 'Business Objects/Tasks/TaskForm',
  component: TaskFormComponent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<TaskFormComponent>;

export const EmptyTaskForm: Story = {
  args: {},
};