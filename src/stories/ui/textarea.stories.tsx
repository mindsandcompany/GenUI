import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '@/components/ui/inputs/textarea';

const meta: Meta<typeof Textarea> = {
  title: 'UI/Inputs/Textarea',
  component: Textarea,
};
export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    placeholder: 'Write something...',
  },
};
