import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '@/components/ui/inputs/label';

const meta: Meta<typeof Label> = {
  title: 'UI/Inputs/Label',
  component: Label,
};
export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: 'Label',
    htmlFor: 'input-1',
  },
};
