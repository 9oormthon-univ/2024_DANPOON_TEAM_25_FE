import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Footer } from '@/components/layout/Footer/Footer';

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
  tags: ['autodocs'],
};

export default meta;

const Template: StoryFn<typeof Footer> = (args) => <Footer />;

export const Default = Template.bind({});
