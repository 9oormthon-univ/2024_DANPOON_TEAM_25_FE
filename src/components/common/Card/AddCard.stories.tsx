import type { Meta, StoryObj } from '@storybook/react';
import { Plus, BookPlus, FolderPlus } from 'lucide-react';
import { AddCard } from './AddCard';
import { CourseCard } from './CourseCard';

const meta = {
  title: 'Components/Card/Add Card',
  component: AddCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof AddCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: '새 수업 추가하기',
  },
};

export const CustomIcon: Story = {
  args: {
    icon: BookPlus,
    text: '새 강좌 만들기',
  },
};

export const Different: Story = {
  args: {
    icon: FolderPlus,
    text: '새 폴더 추가',
  },
};

export const CardGrid: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-5 p-5">
      <CourseCard
        title="모두 함께 파이썬"
        description="기초부터 시작하는 파이썬 프로그래밍"
        students="45"
        isNew={true}
      />
      <CourseCard
        title="공부를 해볼까요?"
        description="새로운 강의를 시작해보세요"
        students="32"
      />
      <AddCard />
    </div>
  ),
};