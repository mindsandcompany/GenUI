import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/ui/actions/button'; // 경로 alias는 아래 참고

const meta: Meta<typeof Button> = {
  title: 'UI/Actions/Button',
  component: Button,
  args: { children: 'Button' },
};
export default meta;

type Story = StoryObj<typeof Button>;
export const Default: Story = {};
