import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from '@/components/sidebar/Sidebar';
import { Book, PlusCircle, Layout, Briefcase, Settings } from 'lucide-react';

const meta = {
  title: 'Sidebar/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

const menuItems = [
  { id: 'courses', icon: Book, text: '내 수업' },
  { id: 'add-course', icon: PlusCircle, text: '수업 등록' },
  { id: 'course-page', icon: Layout, text: '수업 페이지' },
  { id: 'work-list', icon: Briefcase, text: '워크 목록' },
  { id: 'settings', icon: Settings, text: '설정' }
];

export const Default: Story = {
  args: {
    profile: {
      avatar: {
        src: 'https://via.placeholder.com/150',
        alt: 'Profile Image',
      },
      name: '닉네임1 님',
      subtitle: '환영합니다',
      showBadge: true,
    },
    menuItems,
    activeMenuItem: 'courses',
  },
};

export const NoProfile: Story = {
  args: {
    menuItems,
    activeMenuItem: 'courses',
  },
};
