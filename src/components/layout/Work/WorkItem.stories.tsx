import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import WorkItem, { WorkItemProps } from './WorkItem';

export default {
  title: 'Components/WorkItem', 
  component: WorkItem,
  argTypes: {
    title: { control: 'text' }, 
    dueDate: { control: 'text' }, 
    remainingDays: { control: 'number' }, 
    status: {
      control: { type: 'select' }, 
      options: ['submitted', 'pending', 'late'], 
    },
  },
} as Meta<typeof WorkItem>;

const Template: StoryFn<WorkItemProps> = (args) => <WorkItem {...args} />;

export const Submitted = Template.bind({});
Submitted.args = {
  id: 1,
  title: '1차시: 파이썬 기초 문법',
  dueDate: '2024.03.20',
  remainingDays: 0,
  status: 'submitted',
};

export const Pending = Template.bind({});
Pending.args = {
  id: 2,
  title: '2차시: 조건문과 반복문',
  dueDate: '2024.03.22',
  remainingDays: 2,
  status: 'pending',
};

export const Late = Template.bind({});
Late.args = {
  id: 3,
  title: '3차시: 함수와 모듈',
  dueDate: '2024.03.18',
  remainingDays: -3,
  status: 'late',
};
