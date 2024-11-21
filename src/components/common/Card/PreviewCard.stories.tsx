import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { PreviewCard } from '@/components/common/Card/PreviewCard';

const meta: Meta<typeof PreviewCard> = {
  title: 'Components/Card/PreviewCard',
  component: PreviewCard,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
  },
};

export default meta;

const Template: StoryFn<typeof PreviewCard> = (args) => (
  <PreviewCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: '수업 명',
  description: '수업 설명이 이곳에 표시됩니다.',
};
