import * as ToastPrimitive from '@radix-ui/react-toast'
import { styled, keyframes } from '../../styles'

const VIEWPORT_PADDING = 25

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
})

export const ToastRoot = styled(ToastPrimitive.Root, {
  display: 'flex',
  width: '360px',
  padding: '$3 $5',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '$1',
  borderRadius: '$sm',
  border: '1px solid $gray600',
  background: '$gray800',

  position: 'relative',

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },
  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },
  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
})

export const ToastTitle = styled(ToastPrimitive.Title, {
  color: '$white',
  fontSize: '$xl',
  fontWeight: '$bold',
  lineHeight: '160%',
  fontFamily: '$default',
})

export const ToastDescription = styled(ToastPrimitive.Description, {
  color: '$gray200',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$regular',
  lineHeight: '160%',
})

export const ToastAction = styled(ToastPrimitive.Action, {
  position: 'absolute',
  top: '12px',
  right: '20px',

  color: '$gray200',
})

export const ToastViewport = styled(ToastPrimitive.Viewport, {
  position: 'fixed',
  bottom: 32,
  right: 32,
  display: 'flex',
  flexDirection: 'column',
  // padding: VIEWPORT_PADDING,
  gap: 10,
  width: 390,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
})
