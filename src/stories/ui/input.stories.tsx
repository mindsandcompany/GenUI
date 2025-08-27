import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@/components/ui/inputs/input';

const meta: Meta<typeof Input> = {
  title: 'UI/Inputs/Input',
  component: Input,
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Type here...',
  },
};
