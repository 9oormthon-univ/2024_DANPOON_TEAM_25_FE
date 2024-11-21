import React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { NotificationButton } from '@/components/common/Button/NotificationButton';

const meta: Meta<typeof NotificationButton> = {
  title: 'Components/Button/Notification Button',
  component: NotificationButton,
  tags: ['autodocs'],
  argTypes: {
    isNew: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof NotificationButton> = (args) => (
  <NotificationButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  isNew: false,
};

export const All: Story = {
  args: {
    isNew: false,
  },
  render: (args) => (
    <ul>
      <li>
        <p>기본 </p>
        <NotificationButton {...args} />
      </li>
      <li className="mt-3 space-y-3">
        <p>새로운 알림이 있을때</p>
        <NotificationButton {...{ ...args, isNew: true }} />
      </li>
    </ul>
  ),
};
