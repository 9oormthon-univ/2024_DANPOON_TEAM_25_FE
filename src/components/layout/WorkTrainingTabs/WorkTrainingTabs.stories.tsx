import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import {
  WorkTrainingTabs,
  WorkTrainingTabsProps,
} from '@/components/layout/WorkTrainingTabs/WorkTrainingTabs';

export default {
  title: 'Components/WorkTrainingTabs',
  component: WorkTrainingTabs,
  argTypes: {
    activeTab: { control: 'number' },
    onTabChange: { action: 'tabChanged' },
  },
} as Meta<typeof WorkTrainingTabs>;

const Template: StoryFn<WorkTrainingTabsProps> = (args) => (
  <WorkTrainingTabs {...args} />
);

export const Default = Template.bind({});
Default.args = {
  activeTab: 0,
  onTabChange: (index) => {
    console.log(`${index}`);
  },
};
