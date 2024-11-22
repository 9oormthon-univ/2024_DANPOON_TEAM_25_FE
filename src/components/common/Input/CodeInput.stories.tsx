import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CodeInput, { CodeInputProps } from './CodeInput';

export default {
  title: 'Components/CodeInput',
  component: CodeInput,
  argTypes: {
    length: {
      control: { type: 'number' },
      defaultValue: 6,
      description: 'Number of input fields',
    },
    onChange: {
      action: 'changed',
      description: 'Callback function triggered when code changes',
    },
  },
} as Meta<typeof CodeInput>;

const Template: StoryFn<CodeInputProps> = (args) => {
  const [code, setCode] = useState('');

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h1 style={{ fontSize: '18px', marginBottom: '10px' }}>Code Input Example</h1>
      <CodeInput {...args} onChange={(value) => setCode(value)} />
      <p style={{ marginTop: '20px', color: 'gray' }}>
        입력된 코드: <strong>{code}</strong>
      </p>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  length: 6,
};

export const FourDigitCode = Template.bind({});
FourDigitCode.args = {
  length: 4,
};
