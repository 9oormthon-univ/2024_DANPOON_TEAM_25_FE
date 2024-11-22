import React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { RoleCard } from '@/components/common/Card/RoleCard';

const meta: Meta<typeof RoleCard> = {
  title: 'Components/Card/Role Card',
  component: RoleCard,
  tags: ['autodocs'],
  argTypes: {
    role: { control: 'text' },
    className: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof RoleCard> = (args) => <RoleCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  role: 'teacher',
};

export const All: Story = {
  args: {
    role: 'teacher',
  },
  render: (args) => (
    <ul>
      <li>
        <h3>눈솔</h3>
        <RoleCard {...args} />
      </li>
      <li className="mt-3">
        <h3>눈송이</h3>
        <RoleCard {...{ ...args, role: 'student' }} />
      </li>
    </ul>
  ),
};
