import type { Meta, StoryObj } from '@storybook/react';
import { NotificationBadge } from '@/components/common/NotificationBadge/NotificationBadge';

const meta = {
  title: 'Common/NotificationBadge',
  component: NotificationBadge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'danger'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof NotificationBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Variants: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <NotificationBadge variant="default" />
      <NotificationBadge variant="primary" />
      <NotificationBadge variant="danger" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <NotificationBadge size="sm" variant="danger" />
      <NotificationBadge size="md" variant="danger" />
      <NotificationBadge size="lg" variant="danger" />
    </div>
  ),
};
