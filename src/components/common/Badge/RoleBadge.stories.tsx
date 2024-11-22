import React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { RoleBadge } from '@/components/common/Badge/RoleBadge';

const meta: Meta<typeof RoleBadge> = {
  title: 'Components/Badge/Role Badge',
  component: RoleBadge,
  tags: ['autodocs'],
  argTypes: {
    role: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof RoleBadge> = (args) => <RoleBadge {...args} />;

export const Default = Template.bind({});
Default.args = {
  role: '눈송이',
};

export const All: Story = {
  args: {
    role: '눈송이',
  },
  render: (args) => (
    <ul>
      <li>
        <p>눈송이</p>
        <RoleBadge {...args} />
      </li>
      <li className="mt-3 space-y-3">
        <p>눈솔</p>
        <RoleBadge {...{ ...args, role: '눈솔' }} />
      </li>
    </ul>
  ),
};
