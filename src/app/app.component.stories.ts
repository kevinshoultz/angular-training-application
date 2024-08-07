import type { Meta, StoryObj } from '@storybook/angular';

import { AppComponent } from './app.component';
import { fn } from '@storybook/test';

const meta: Meta<AppComponent> = {
  title: 'Business Objects/app',
  component: AppComponent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;
type Story = StoryObj<AppComponent>;

export const Emptyapp: Story = {
  args: {},
};