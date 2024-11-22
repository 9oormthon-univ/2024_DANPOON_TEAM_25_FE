import React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { NewBadge } from '@/components/common/Badge/NewBadge';

const meta: Meta<typeof NewBadge> = {
  title: 'Components/Badge/New Badge',
  component: NewBadge,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof NewBadge> = (args) => <NewBadge {...args} />;

export const Default = Template.bind({});
