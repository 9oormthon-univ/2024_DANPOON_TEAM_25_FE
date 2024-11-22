import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { PageHeader } from '@/components/layout/PageHeader/PageHeader';

const meta: Meta<typeof PageHeader> = {
  title: 'Components/PageHeader',
  component: PageHeader,
  tags: ['autodocs'],
  argTypes: {
    hasBackButton: { control: 'boolean' },
    hasSubtitle: { control: 'boolean' },
    isDetailPage: { control: 'boolean' },
    pageTitle: { control: 'text' },
    subtitle: { control: 'text' },
    role: {
      control: 'select',
      options: ['teacher', 'student'],
    },
    status: {
      control: 'select',
      options: ['pending', 'in-progress', 'completed'],
    },
  },
};

export default meta;

const Template: StoryFn<typeof PageHeader> = (args) => <PageHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  hasBackButton: false,
  isDetailPage: true,
  pageTitle: 'MY COURSE',
  hasSubtitle: true,
  subtitle: '새로운 수업을 등록하고 관리하세요',
  role: 'teacher',
  status: 'in-progress',
};
