import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import {
  Book,
  Calendar,
  CheckCircle,
  CirclePlus,
  Clock,
  Users,
} from 'lucide-react';
import {
  SummaryCard,
  SummaryCardProps,
} from '@/components/common/Card/SummaryCard';

export default {
  title: 'Components/Card/SummaryCard',
  component: SummaryCard,
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
    icon: { control: false },
  },
} as Meta<typeof SummaryCard>;

const Template: StoryFn<SummaryCardProps> = (args) => <SummaryCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: '수강생',
  value: '32명',
  icon: Users,
};

export const TotalWorks = Template.bind({});
TotalWorks.args = {
  label: '총 워크',
  value: '12개',
  icon: Book,
};

export const Completion = Template.bind({});
Completion.args = {
  label: '완료율',
  value: '78%',
  icon: Calendar,
};

export const Training = Template.bind({});
Training.args = {
  label: '트레이닝',
  value: '6개',
  icon: CirclePlus,
};
