import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import WorkStatus, { WorkStatusProps } from './WorkStatus';

export default {
  title: 'Components/WorkStatus', 
  component: WorkStatus, 
  argTypes: {
    status: {
      control: { type: 'select' }, 
      options: ['submitted', 'pending', 'late'], 
    },
  },
} as Meta<typeof WorkStatus>;

const Template: StoryFn<WorkStatusProps> = (args) => <WorkStatus {...args} />;

export const Submitted = Template.bind({});
Submitted.args = {
  status: 'submitted',
};

export const Pending = Template.bind({});
Pending.args = {
  status: 'pending',
};

export const Late = Template.bind({});
Late.args = {
  status: 'late',
};
