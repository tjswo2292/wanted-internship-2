import { HTMLAttributes } from 'react'

export interface StyledProps extends HTMLAttributes<HTMLOListElement> {
  $isHover: boolean
}
