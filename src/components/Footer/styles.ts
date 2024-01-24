import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.footer`
  background-color: ${colors.cream};
  padding: 40px 680px;
  font-size: 10px;

  .containerImage {
    display: flex;
  }

  p {
    text-align: center;
  }
`

export const SocialMedias = styled.ul`
  margin-top: 32px;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-left: 8px;
  }
`

export const LogoFooter = styled.img`
  width: 124px;
  margin: 0 auto;
`
