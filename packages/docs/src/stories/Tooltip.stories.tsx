import {
  Tooltip,
  CheckboxProps,
  TooltipProps,
  Box,
  Button,
} from '@holanda-ignite-ui/react'
import type { StoryObj, Meta } from '@storybook/react'
export default {
  title: 'Form/Tooltip',
  component: Tooltip,
  args: {
    children: <Button>Hover me</Button>,
    content: 'This is a Tooltip',
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{
            flexDirection: 'row',
            gap: '$2',
            height: '200px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
  argTypes: {
    children: {
      control: {
        type: false,
      },
    },
  },
} as Meta<CheckboxProps>

export const Primary: StoryObj<TooltipProps> = {}
