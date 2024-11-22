import React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { InviteButton } from '@/components/common/Button/InviteButton';

const meta: Meta<typeof InviteButton> = {
  title: 'Components/Button/Invite Button',
  component: InviteButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof InviteButton> = (args) => <InviteButton />;

export const Default = Template.bind({});
