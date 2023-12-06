import { Box, BoxProps } from '@ignite-ui/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Box',
  component: Box,
  args: {
    children: (
      <>
        <span>Testando o elemento Box</span>
      </>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: false,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
