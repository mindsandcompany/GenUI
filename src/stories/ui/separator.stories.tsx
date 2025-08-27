import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from '@/components/ui/layout/separator';

const meta: Meta<typeof Separator> = {
  title: 'UI/Layout/Separator',
  component: Separator,
};
export default meta;

type Story = StoryObj<typeof Separator>;

export const Horizontal: Story = {
  render: () => <Separator className='my-4' />,
};

export const Vertical: Story = {
  render: () => (
    <div className='flex h-10 items-center'>
      <div>Left</div>
      <Separator orientation='vertical' className='mx-4' />
      <div>Right</div>
    </div>
  ),
};
