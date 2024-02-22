import { styled } from 'styled-components'
import { colors } from '../../styles'
import { Card } from '../Product/styles'

export const ContainerDishes = styled.section`
  margin-top: 56px;
  margin-bottom: 120px;
  background-color: ${colors.light_cream};

  ${Card} {
    background-color: ${colors.pink};
  }
`
export const ListDishes = styled.ul`
  color: ${colors.cream};
  font-size: 14px;
  margin-top: 56px;
  margin-bottom: 120px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  row-gap: 32px;
`
export const TitleDishes = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin-left: 8px;
`
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  max-width: 960px;
  position: relative;
  z-index: 1;

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;

    h4 {
      font-size: 18px;
      font-weight: bold;
    }
  }

  > img {
    width: 100%;
  }

  img,
  iframe {
    display: block;
    max-width: 100%;
  }

  iframe {
    width: 100%;
    height: 480px;
  }
`
