import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import PracticeButton, { PracticeButtonProps } from './PracticeButton';

export default {
  title: 'Components/PracticeButton', 
  component: PracticeButton, 
  argTypes: {
    url: { control: 'text' }, 
  },
} as Meta<typeof PracticeButton>;

const Template: StoryFn<PracticeButtonProps> = (args) => <PracticeButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  url: 'https://example.com/ide',
};