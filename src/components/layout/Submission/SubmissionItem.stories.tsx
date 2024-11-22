import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { SubmissionItem } from '@/components/layout/Submission/SubmissionItem';

const meta: Meta<typeof SubmissionItem> = {
  title: 'Components/Submission/SubmissionItem',
  component: SubmissionItem,
  tags: ['autodocs'],
  argTypes: {
    student: { control: 'text' },
    status: { control: 'text' },
    time: { control: 'text' },
    comment: { control: 'text' },
  },
};

export default meta;

const Template: StoryFn<typeof SubmissionItem> = (args) => (
  <SubmissionItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  student: '김누구',
  status: 'submitted',
  time: '03.18 14:30',
  comment: '제출완료',
};
