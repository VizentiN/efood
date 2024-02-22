import { styled } from 'styled-components'
import { colors } from '../../styles'
import { ButtonDishesContainer } from '../Button/styles'

const StyledModal = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledModalContainer = styled.div`
  width: 100%;
  height: 344px;
  padding: 32px;
  display: flex;
  gap: 24px;
  background-color: ${colors.pink};

  position: relative;

  > #btn_close {
    width: 16px;
    height: 16px;

    position: absolute;
    top: 8px;
    right: 8px;

    cursor: pointer;
  }

  > #image_item {
    width: 280px;
    height: 280px;
  }

  #details {
    display: flex;
    flex-direction: column;
    gap: 16px;
    h3 {
      font-weight: 900;
      font-size: 18px;
      line-height: 21px;
      color: white;
    }

    p {
      font-size: 14px;
      line-height: 22px;
      font-weight: 400;
    }
    ${ButtonDishesContainer} {
      width: max-content;
      padding: 4px 7px;
      margin-left: -4px;
    }
  }
`

export default StyledModal
