import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Book } from 'lucide-react';
import WorkInfoCard, { WorkInfoCardProps } from './WorkInfoCard';

export default {
  title: 'Components/WorkInfoCard',
  component: WorkInfoCard,
} as Meta<typeof WorkInfoCard>;

const Template: StoryFn<WorkInfoCardProps> = (args) => <WorkInfoCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: '워크 설명',
  remainingDays: 3,
  dueDate: '2024-12-01',
  status: '진행 중',
  description: '이 워크는 기본 예시로 작성된 설명입니다.',
  icon: <Book size={24} className="text-blue-800" />,
};