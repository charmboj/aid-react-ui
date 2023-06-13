import type { Meta, StoryObj } from '@storybook/react';

import { Textbox } from './Textbox';

const meta = {
  title: 'Base Components/Textbox',
  component: Textbox,
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'none' },
  },
} satisfies Meta<typeof Textbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    label: 'Test Field',
    placeholder: 'Type text here',
  },
};