import type { Meta, StoryObj } from '@storybook/react';
import { BaseCard } from './BaseCard';

const meta = {
  title: 'Components/Card/Base Card',
  component: BaseCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'dashed'],
    },
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof BaseCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <div className="p-4">기본 카드 컨텐츠</div>,
  },
};

export const Dashed: Story = {
  args: {
    variant: 'dashed',
    children: <div className="p-4">점선 카드 컨텐츠</div>,
  },
};

export const Interactive: Story = {
  args: {
    children: <div className="p-4">클릭 가능한 카드</div>,
    onClick: () => alert('카드 클릭!'),
  },
};