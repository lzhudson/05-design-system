import * as TooltipRadix from '@radix-ui/react-tooltip'
import { ComponentProps, ReactNode } from 'react'
import { TooltipArrow, TooltipContent } from './style'

export type TooltipProps = ComponentProps<typeof TooltipRadix.Root> & {
  content: string | ReactNode
}
export function Tooltip({ content, children, ...props }: TooltipProps) {
  return (
    <TooltipRadix.Provider>
      <TooltipRadix.Root {...props}>
        <TooltipRadix.Trigger asChild>{children}</TooltipRadix.Trigger>
        <TooltipRadix.Portal>
          <TooltipContent sideOffset={5}>
            {content}
            <TooltipArrow />
          </TooltipContent>
        </TooltipRadix.Portal>
      </TooltipRadix.Root>
    </TooltipRadix.Provider>
  )
}
