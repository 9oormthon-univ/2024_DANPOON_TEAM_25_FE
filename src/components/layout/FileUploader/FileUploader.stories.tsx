import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { FileUploader } from '@/components/layout/FileUploader/FileUploader';

const meta: Meta<typeof FileUploader> = {
  title: 'Components/FileUploader',
  component: FileUploader,
  tags: ['autodocs'],
};

export default meta;

const Template: StoryFn<typeof FileUploader> = (args) => <FileUploader />;

export const Default = Template.bind({});
