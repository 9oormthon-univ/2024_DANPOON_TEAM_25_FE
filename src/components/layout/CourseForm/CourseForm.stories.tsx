import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { CourseForm } from '@/components/layout/CourseForm/CourseForm';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof CourseForm> = {
  title: 'Components/CourseForm',
  component: CourseForm,
  tags: ['autodocs'],
  argTypes: {
    courseName: { control: 'text', description: '수업 명' },
    courseDescription: {
      control: 'text',
      description: '수업 설명',
    },
    setCourseName: {
      action: 'setCourseName',
    },
    setCourseDescription: {
      action: 'setCourseDescription',
    },
    className: {
      control: 'text',
    },
  },
};

export default meta;

const Template: StoryFn<typeof CourseForm> = (args) => <CourseForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  courseName: '수업 명',
  setCourseName: action('setCourseName'),
  courseDescription: '수업 설명',
  setCourseDescription: action('setCourseDescription'),
  className: '',
};
