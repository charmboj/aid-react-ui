import type { Meta, StoryObj } from '@storybook/react';

import { Flex } from './Flex';
import { Button } from '../Button/Button';

const meta = {
  title: 'Base Components/Flex',
  component: Flex,
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'none' },
    children: { control: 'none' }
  },
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    children: [
      Button({label: 'button1'}), 
      Button({label: 'button2'}), 
      Button({label: 'button3'}), 
      Button({label: 'button4'})
    ]
  },
};