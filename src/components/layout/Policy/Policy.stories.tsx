import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import {
  SimplePolicy,
  PolicySection,
  PolicyList,
  PolicyTable,
} from '@/components/layout/Policy/Policy';
import { PrivacyPolicy } from '@/constants/privacyPolicy';

const meta: Meta<typeof SimplePolicy> = {
  title: 'Components/Policy',
  component: SimplePolicy,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    content: { control: 'text' },
  },
};

export default meta;

const Template: StoryFn<typeof SimplePolicy> = (args) => (
  <SimplePolicy {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: '기본 조항',
  content: '...',
};

const PolicySectionTemplate: StoryFn<typeof PolicySection> = (args) => (
  <PolicySection {...args} />
);

export const PolicySectionExample = PolicySectionTemplate.bind({});
PolicySectionExample.args = {
  title: '기본 조항',
  content: '...',
  children: <p>추가 컨텐츠</p>,
};

const PolicyListTemplate: StoryFn<typeof PolicyList> = (args) => (
  <PolicyList {...args} />
);

export const PolicyListExample = PolicyListTemplate.bind({});
PolicyListExample.args = {
  items: ['항목 1', '항목 2', '항목 3'],
};

const PolicyTableTemplate: StoryFn<typeof PolicyTable> = (args) => (
  <PolicyTable {...args} />
);

export const PolicyTableExample = PolicyTableTemplate.bind({});
PolicyTableExample.args = {
  data: PrivacyPolicy.legalRetention,
};
