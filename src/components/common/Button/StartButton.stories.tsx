import React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { StartButton } from '@/components/common/Button/StartButton';

const meta: Meta<typeof StartButton> = {
  title: 'Components/Button/Start Button',
  component: StartButton,
  tags: ['autodocs'],
  argTypes: {
    hasIcon: { control: 'boolean' },
    className: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof StartButton> = (args) => (
  <StartButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  hasIcon: true,
};

export const All: Story = {
  args: {
    hasIcon: true,
  },
  render: (args) => (
    <ul>
      <li>
        <h3>아이콘 있을 때</h3>
        <StartButton {...args} />
      </li>
      <li className="mt-3">
        <h3>아이콘 없을 때</h3>
        <StartButton {...{ ...args, hasIcon: false }} />
      </li>
    </ul>
  ),
};
