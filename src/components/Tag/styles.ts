import styled from 'styled-components'
import { colors } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${colors.pink};
  color: ${colors.cream};
  font-size: 12px;
  font-weight: bold;
  padding: 4px 6px;
  display: inline-block;
`
