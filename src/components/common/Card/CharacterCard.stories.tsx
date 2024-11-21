import React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { CharacterCard } from '@/components/common/Card/CharacterCard';

const meta: Meta<typeof CharacterCard> = {
  title: 'Components/Card/CharacterCard',
  component: CharacterCard,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'text' },
    className: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof CharacterCard> = (args) => (
  <CharacterCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  type: 'mentor',
};

export const All: Story = {
  args: {
    type: 'mentor',
  },
  render: (args) => (
    <ul>
      <li>
        <h3>눈솔</h3>
        <CharacterCard {...args} />
      </li>
      <li className="mt-3">
        <h3>눈송이</h3>
        <CharacterCard {...{ ...args, type: 'mentee' }} />
      </li>
    </ul>
  ),
};
