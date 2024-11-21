import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Card, CharacterCard } from '@/components/common/Card/Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
    className: { control: 'text' },
  },
};

export default meta;

const Template: StoryFn<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: '기본 카드',
};

const CharacterTemplate: StoryFn<typeof CharacterCard> = (args) => (
  <CharacterCard {...args} />
);
export const CharacterCardExample = CharacterTemplate.bind({});
CharacterCardExample.args = {
  type: 'mentor',
};
