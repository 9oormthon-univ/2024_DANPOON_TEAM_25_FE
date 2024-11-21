import React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { TextButton } from '@/components/common/Button/TextButton';

const meta: Meta<typeof TextButton> = {
  title: 'Components/Button/Text Button',
  component: TextButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof TextButton> = (args) => <TextButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: '이용약관',
};
