import type { Meta, StoryObj } from '@storybook/react';
import { ProfileSection } from '@/components/sidebar/ProfileSection';

const meta = {
  title: 'Sidebar/ProfileSection',
  component: ProfileSection,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-72 bg-blue-700 p-6">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ProfileSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: '닉네임1 님',
    subtitle: '환영합니다',
    showBadge: true,
    avatar: {
      src: 'https://via.placeholder.com/150',
      alt: 'Profile Image',
    },
  },
};

export const WithoutBadge: Story = {
  args: {
    name: '닉네임1 님',
    subtitle: '환영합니다',
    showBadge: false,
    avatar: {
      src: 'https://via.placeholder.com/150',
      alt: 'Profile Image',
    },
  },
};