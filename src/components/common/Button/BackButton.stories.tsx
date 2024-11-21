import React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { BackButton } from '@/components/common/Button/BackButton';

const meta: Meta<typeof BackButton> = {
  title: 'Components/Button/Back Button',
  component: BackButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof BackButton> = (args) => <BackButton {...args} />;

export const Default = Template.bind({});
