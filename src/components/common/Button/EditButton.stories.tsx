import React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { EditButton } from '@/components/common/Button/EditButton';

const meta: Meta<typeof EditButton> = {
  title: 'Components/Button/Edit Button',
  component: EditButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof EditButton> = (args) => <EditButton />;

export const Default = Template.bind({});
