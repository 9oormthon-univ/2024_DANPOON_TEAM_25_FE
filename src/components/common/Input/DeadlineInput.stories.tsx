import React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import DeadlineInput from '@/components/common/Input/DeadlineInput';

const meta: Meta<typeof DeadlineInput> = {
  title: 'Components/Input/DeadlineInput',
  component: DeadlineInput,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof DeadlineInput> = (args) => (
  <DeadlineInput {...args} />
);

export const Default = Template.bind({});
