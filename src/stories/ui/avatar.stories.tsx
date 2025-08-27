import type { Meta, StoryObj } from '@storybook/react';
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from '@/components/ui/data-display/avatar';

const meta: Meta<typeof Avatar> = {
  title: 'UI/Data Display/Avatar',
  component: Avatar,
};
export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src='https://i.pravatar.cc/100' alt='avatar' />
      <AvatarFallback>AV</AvatarFallback>
    </Avatar>
  ),
};
