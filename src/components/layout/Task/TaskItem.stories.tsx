import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { TaskItem, TaskItemProps } from '@/components/layout/Task/TaskItem';

export default {
  title: 'Components/TaskItem',
  component: TaskItem,
  argTypes: {
    title: { control: 'text' },
    deadline: { control: 'text' },
    submitted: { control: 'number' },
    total: { control: 'number' },
  },
} as Meta<typeof TaskItem>;

const Template: StoryFn<TaskItemProps> = (args) => <TaskItem {...args} />;
export const Default = Template.bind({});
Default.args = {
  title: '1차시 파이썬 기초 문법',
  deadline: '2024.03.20',
  submitted: 25,
  total: 32,
};
