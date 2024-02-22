import { styled } from 'styled-components'
import { colors } from '../../styles'

export const CardDishes = styled.div`
  background-color: ${colors.pink};
  position: relative;
`
export const DescriptionDishes = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin: 8px 8px;
`
export const DishImage = styled.img`
  margin: 8px;
  width: 304px;
  height: 167px;
  object-fit: cover;
`
