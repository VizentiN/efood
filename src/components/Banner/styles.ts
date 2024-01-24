import styled from 'styled-components'
import { colors } from '../../styles'

export const Image = styled.div`
  width: 100%;
  height: 384px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;

  .containerBanner {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
export const Logo = styled.img`
  width: 124px;
  padding-top: 64px;
  margin: 0 auto;
`

export const Title = styled.h2`
  font-size: 36px;
  max-width: 539px;
  text-align: center;
  margin-top: 138.5px;
`

export const TitleCart = styled.h2`
  font-size: 32px;
  color: ${colors.white};
  position: absolute;
  margin-top: 300px;
`

export const TitleLight = styled.h2`
  font-size: 32px;
  color: ${colors.white};
  font-weight: normal;
  opacity: 0.7;
  position: absolute;
  margin-top: 32px;
`

export const ImageCart = styled.div`
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
