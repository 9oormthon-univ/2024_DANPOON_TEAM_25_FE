import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Button, LoginButton, StartButton, TextButton } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
    children: { control: 'text' },
    className: { control: 'text' },
  },
};

export default meta;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: '기본 버튼',
};

const StartTemplate: StoryFn<typeof StartButton> = (args) => (
  <StartButton {...args} />
);

export const StartButtonExample = StartTemplate.bind({});
StartButtonExample.args = {
  children: '시작하기 버튼',
  hasIcon: true,
};

const TextTemplate: StoryFn<typeof TextButton> = (args) => (
  <TextButton {...args} />
);

export const TextButtonExample = TextTemplate.bind({});
TextButtonExample.args = {
  children: '이용약관',
};

const LoginTemplete: StoryFn<typeof LoginButton> = (args) => (
  <LoginButton {...args} />
);

export const LoginButtonExample = LoginTemplete.bind({});
LoginButtonExample.args = {
  children: '카카오로 3초 만에 시작하기',
  type: 'kakao',
};
