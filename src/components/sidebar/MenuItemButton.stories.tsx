import type { Meta, StoryObj } from '@storybook/react';
import { MenuItemButton } from '@/components/sidebar/MenuItemButton';
import { Book, Settings } from 'lucide-react';

const meta = {
  title: 'Sidebar/MenuItemButton',
  component: MenuItemButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-64 bg-blue-700 p-4">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof MenuItemButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: Book,
    children: '내 수업',
  },
};

export const Active: Story = {
  args: {
    icon: Book,
    children: '내 수업',
    active: true,
  },
};

export const WithClick: Story = {
  args: {
    icon: Settings,
    children: '설정',
    onClick: () => alert('Clicked!'),
  },
};