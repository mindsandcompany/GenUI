import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from '@/components/ui/data-display/skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'UI/Data Display/Skeleton',
  component: Skeleton,
};
export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  render: () => <Skeleton className='h-6 w-40' />,
};
