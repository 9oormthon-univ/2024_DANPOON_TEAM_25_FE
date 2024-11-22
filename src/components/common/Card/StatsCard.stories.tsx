import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Book, CheckCircle, Clock } from 'lucide-react';
import StatCard, { StatCardProps } from './StatsCard';

export default {
  title: 'Components/Card/StatCard',
  component: StatCard,
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
    icon: { control: false },
  },
} as Meta<typeof StatCard>;

const Template: StoryFn<StatCardProps> = (args) => <StatCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: '총 워크',
  value: '6개',
  icon: Book,
};

export const Submitted = Template.bind({});
Submitted.args = {
  label: '제출한 워크',
  value: '4개',
  icon: CheckCircle,
};

export const Remaining = Template.bind({});
Remaining.args = {
  label: '남은 워크',
  value: '2개',
  icon: Clock,
};
