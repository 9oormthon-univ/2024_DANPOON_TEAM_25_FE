import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta = {
  title: 'Common/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    alt: 'User Avatar',
  },
};

export const WithImage: Story = {
  args: {
    src: 'https://via.placeholder.com/150',
    alt: 'User Avatar',
    size: 'md',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar size="sm" src="https://via.placeholder.com/150" alt="Small" />
      <Avatar size="md" src="https://via.placeholder.com/150" alt="Medium" />
      <Avatar size="lg" src="https://via.placeholder.com/150" alt="Large" />
    </div>
  ),
};