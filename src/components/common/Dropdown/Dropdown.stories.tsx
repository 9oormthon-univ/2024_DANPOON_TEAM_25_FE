import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Dropdown } from '@/components/common/Dropdown/Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
};

export default meta;

const Template: StoryFn<typeof Dropdown> = (args) => <Dropdown />;

export const Default = Template.bind({});
Default.args = {
  label: '수업 명',
  inputSize: 'medium',
  placeholder: '수업 이름을 입력해주세요.',
};
