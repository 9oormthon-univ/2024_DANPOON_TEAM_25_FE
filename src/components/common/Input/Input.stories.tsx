import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Input } from '@/components/common/Input/Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input/Base Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    inputSize: { control: 'text' },
    className: { control: 'text' },
  },
};

export default meta;

const Template: StoryFn<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: '수업 명',
  inputSize: 'small',
  placeholder: '수업 이름을 입력해주세요.',
};

const MediumTemplate: StoryFn<typeof Input> = (args) => <Input {...args} />;

export const MediumInputExample = MediumTemplate.bind({});
MediumInputExample.args = {
  label: '수업 내용',
  inputSize: 'medium',
  placeholder: '수업 내용을 입력해주세요.',
};

const LargeTemplate: StoryFn<typeof Input> = (args) => <Input {...args} />;

export const LargeInputExample = LargeTemplate.bind({});
LargeInputExample.args = {
  label: '수업 내용',
  inputSize: 'large',
  placeholder: '수업 내용을 입력해주세요.',
};
