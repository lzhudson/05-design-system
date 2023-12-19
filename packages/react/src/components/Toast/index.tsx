import * as React from 'react'
import * as ToastPrimitive from '@radix-ui/react-toast'
import { X } from 'phosphor-react'
import {
  ToastAction,
  ToastDescription,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from './style'

export type ToastProps = React.ComponentProps<typeof ToastPrimitive.Root> & {
  title: string
  description?: string
}

export function Toast({ title, description, ...props }: ToastProps) {
  return (
    <ToastPrimitive.Provider>
      <ToastRoot {...props}>
        <ToastTitle>{title}</ToastTitle>
        {description && <ToastDescription>{description}</ToastDescription>}
        <ToastAction asChild altText="Goto schedule to undo">
          <X weight="light" size={20} />
        </ToastAction>
      </ToastRoot>
      <ToastViewport />
    </ToastPrimitive.Provider>
  )
}

Toast.displayName = 'ToastPrimitive'
