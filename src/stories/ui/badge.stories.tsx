import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@/components/ui/feedback/badge';

const meta: Meta<typeof Badge> = {
  title: 'UI/Feedback/Badge',
  component: Badge,
  args: { children: 'Badge' },
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {};
