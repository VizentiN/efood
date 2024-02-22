import { styled } from 'styled-components'
import { colors } from '../../styles'

export const Title = styled.h2`
  font-size: 32px;
  color: ${colors.white};
  position: absolute;
  margin-top: 300px;
`

export const TitleLight = styled.h2`
  font-size: 32px;
  color: ${colors.white};
  font-weight: 100;
  opacity: 0.7;
  position: absolute;
  margin-top: 32px;
`

export const Banner = styled.div`
  width: 100%;
  height: 384px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  font-weight: bold;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .container {
    position: relative;
    z-index: 1;
  }
`
