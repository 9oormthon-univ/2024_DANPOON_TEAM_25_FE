import React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { AddButton } from '@/components/common/Button/AddButton';

const meta: Meta<typeof AddButton> = {
  title: 'Components/Button/AddButton',
  component: AddButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof AddButton> = (args) => <AddButton {...args} />;

export const Default = Template.bind({});
