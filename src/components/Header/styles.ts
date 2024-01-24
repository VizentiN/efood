import styled from 'styled-components'
import { colors } from '../../styles'

export const HeaderBar = styled.header`
  font-size: 18px;
  background-size: cover;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  a {
    color: ${colors.pink};
    text-decoration: none;
    font-weight: bold;
    margin: 0 auto;
  }
`

export const LinkCart = styled.a`
  display: flex;

  img {
    margin-left: 16px;
  }
`
