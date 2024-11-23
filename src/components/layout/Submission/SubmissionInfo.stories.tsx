import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { SubmissionInfo } from '@/components/layout/Submission/SubmissionInfo';

const meta: Meta<typeof SubmissionInfo> = {
  title: 'Components/Submission/SubmissionInfo',
  component: SubmissionInfo,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    status: { control: 'text' },
    index: { control: 'text' },
  },
};

export default meta;

const Template: StoryFn<typeof SubmissionInfo> = (args) => (
  <SubmissionInfo {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: '1차시: 파이썬 기초 문법',
  status: 'submitted',
  index: 0,
};
