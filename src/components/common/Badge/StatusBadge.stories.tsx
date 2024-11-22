import React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { StatusBadge } from '@/components/common/Badge/StatusBadge';

const meta: Meta<typeof StatusBadge> = {
  title: 'Components/Badge/Status Badge',
  component: StatusBadge,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    className: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof StatusBadge> = (args) => (
  <StatusBadge {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: '진행중',
  className: 'text-blue-800 bg-blue-100',
};

export const All: Story = {
  args: {
    label: '진행중',
    className: 'text-blue-800 bg-blue-100',
  },
  render: (args) => (
    <ul>
      <li>
        <p>진행중</p>
        <StatusBadge {...args} />
      </li>
      <li className="mt-3 space-y-3">
        <p>진행전</p>
        <StatusBadge
          {...{
            ...args,
            label: '진행전',
            className: 'text-gray-500 bg-gray-100',
          }}
        />
      </li>
      <li className="mt-3 space-y-3">
        <p>진행 완료</p>
        <StatusBadge
          {...{
            ...args,
            label: '진행완료',
            className: 'text-green-800 bg-green-100',
          }}
        />
      </li>
    </ul>
  ),
};
