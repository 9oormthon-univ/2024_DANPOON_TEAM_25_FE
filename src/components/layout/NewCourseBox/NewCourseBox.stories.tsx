import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { NewCourseBox } from '@/components/layout/NewCourseBox/NewCourseBox';

const meta: Meta<typeof NewCourseBox> = {
  title: 'Components/NewCourseBox',
  component: NewCourseBox,
  tags: ['autodocs'],
};

export default meta;

const Template: StoryFn<typeof NewCourseBox> = () => <NewCourseBox />;

export const Default = Template.bind({});
