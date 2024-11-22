import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { SubmissionStatus } from '@/components/layout/Submission/SubmissionStatus';

const meta: Meta<typeof SubmissionStatus> = {
  title: 'Components/Submission/SubmissionStatus',
  component: SubmissionStatus,
  tags: ['autodocs'],
};

export default meta;

const Template: StoryFn<typeof SubmissionStatus> = (args) => (
  <SubmissionStatus />
);

export const Default = Template.bind({});
