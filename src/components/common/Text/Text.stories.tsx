import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

const meta = {
  title: 'Common/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'body', 'small', 'tiny'],
    },
    color: {
      control: 'select',
      options: ['default', 'muted', 'white', 'primary', 'secondary'],
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Sample Text',
  },
};

// export const Variants: Story = {
//   render: () => (
//     <div className="space-y-2">
//       <Text variant="h1">Heading 1</Text>
//       <Text variant="h2">Heading 2</Text>
//       <Text variant="h3">Heading 3</Text>
//       <Text variant="body">Body Text</Text>
//       <Text variant="small">Small Text</Text>
//       <Text variant="tiny">Tiny Text</Text>
//     </div>
//   ),
// };

// export const Colors: Story = {
//   render: () => (
//     <div className="space-y-2">
//       <Text color="default">Default Color</Text>
//       <Text color="muted">Muted Color</Text>
//       <div className="bg-blue-800 p-2">
//         <Text color="white">White Color</Text>
//       </div>
//       <Text color="primary">Primary Color</Text>
//       <Text color="secondary">Secondary Color</Text>
//     </div>
//   ),
// };