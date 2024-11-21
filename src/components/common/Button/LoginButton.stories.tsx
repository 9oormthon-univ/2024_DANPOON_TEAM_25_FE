import React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { LoginButton } from '@/components/common/Button/LoginButton';

const meta: Meta<typeof LoginButton> = {
  title: 'Components/Button/Login Button',
  component: LoginButton,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'text' },
    className: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof LoginButton> = (args) => (
  <LoginButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  type: 'email',
  children: '이메일로 시작하기',
  className: 'px-16 bg-[#D0E4FF]',
};

export const All: Story = {
  args: {
    type: 'email',
    children: '이메일로 시작하기',
    className: 'px-16 bg-[#D0E4FF]',
  },
  render: (args) => (
    <ul>
      <li>
        <h3>이메일 로그인</h3>
        <LoginButton {...args} />
      </li>
      <li className="mt-3">
        <h3>카카오 로그인</h3>
        <LoginButton
          {...{
            ...args,
            type: 'kakao',
            children: '카카오로 3초만에 시작하기',
            className: 'bg-[#FEE500]',
          }}
        />
      </li>
      <li className="mt-3">
        <h3>네이버 로그인</h3>
        <LoginButton
          {...{
            ...args,
            type: 'naver',
            children: '네이버로 3초만에 시작하기',
            className: 'bg-[#03C75A]',
          }}
        />
      </li>
      <li className="mt-3">
        <h3>구글 로그인</h3>
        <LoginButton
          {...{
            ...args,
            type: 'google',
            children: '구글로 3초만에 시작하기',
            className: 'bg-white border-[#E7E7E7] border px-11',
          }}
        />
      </li>
    </ul>
  ),
};
