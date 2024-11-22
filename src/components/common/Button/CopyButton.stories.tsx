import React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { CopyButton } from '@/components/common/Button/CopyButton';

const meta: Meta<typeof CopyButton> = {
  title: 'Components/Button/Copy Button',
  component: CopyButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof CopyButton> = (args) => <CopyButton />;

export const Default = Template.bind({});
