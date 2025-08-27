import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '@/components/ui/inputs/switch';

const meta: Meta<typeof Switch> = {
  title: 'UI/Inputs/Switch',
  component: Switch,
};
export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    checked: false,
    id: 'switch-1',
  },
};
