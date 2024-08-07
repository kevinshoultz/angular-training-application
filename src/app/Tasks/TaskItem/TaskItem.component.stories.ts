import type { Meta, StoryObj } from '@storybook/angular';

import { TaskItemComponent } from './TaskItem.component';
import { fn } from '@storybook/test';

const meta: Meta<TaskItemComponent> = {
  title: 'Business Objects/Tasks/TaskItem',
  component: TaskItemComponent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<TaskItemComponent>;

export const EmptyTaskItem: Story = {
  args: {},
};