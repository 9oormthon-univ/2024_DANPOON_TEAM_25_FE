import type { Meta, StoryObj } from '@storybook/react';
import { CourseCard } from './CourseCard';

const meta = {
  title: 'Components/Card/Course Card',
  component: CourseCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CourseCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '모두 함께 파이썬',
    description: '기초부터 시작하는 파이썬 프로그래밍',
    students: '45',
    isNew: false,
  },
};

export const NewCourse: Story = {
  args: {
    title: '새로운 강좌',
    description: '새롭게 시작하는 프로그래밍 강좌',
    students: '32',
    isNew: true,
  },
};

export const WithManyStudents: Story = {
  args: {
    title: '인기 강좌',
    description: '많은 학생들이 수강중인 강좌',
    students: '128',
    isNew: false,
  },
};