import React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { CodeBox } from '@/components/common/Box/CodeBox';

const meta: Meta<typeof CodeBox> = {
  title: 'Components/Box/Code Box',
  component: CodeBox,
  tags: ['autodocs'],
  argTypes: {
    code: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof CodeBox> = (args) => <CodeBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  code: '14SE2W',
};
