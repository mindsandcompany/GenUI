import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/inputs/radio-group';
import { Label } from '@/components/ui/inputs/label';

const meta: Meta<typeof RadioGroup> = {
  title: 'UI/Inputs/RadioGroup',
  component: RadioGroup,
};
export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue='option-1'>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='option-1' id='option-1' />
        <Label htmlFor='option-1'>Option 1</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='option-2' id='option-2' />
        <Label htmlFor='option-2'>Option 2</Label>
      </div>
    </RadioGroup>
  ),
};
