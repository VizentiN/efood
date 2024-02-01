import styled from 'styled-components'
import { colors } from '../../styles'

export const HeaderBar = styled.header`
  padding: 24px;

  div {
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  a {
    color: ${colors.pink};
    text-decoration: none;
    font-weight: bold;
  }
`

export const LinkCart = styled.a`
  display: flex;

  img {
    margin-left: 16px;
  }
`
