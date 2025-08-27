import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '@/components/ui/inputs/checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'UI/Inputs/Checkbox',
  component: Checkbox,
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    checked: false,
    id: 'checkbox-1',
  },
};
