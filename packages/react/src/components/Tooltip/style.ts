import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipContent = styled(Tooltip.Content, {
  borderRadius: '5px',
  padding: '$3 $4',
  background: '$gray900',
  boxShadow: '4px 16px 24px 0px rgba(0, 0, 0, 0.25)',
  color: '$gray100',
  fontFamily: '$default',
  fontSize: '0.875rem',
  fontWeight: '$medium',
  letterSpacing: '-0.09px',
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  color: '$gray900',
})
