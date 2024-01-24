import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${colors.white};
  position: relative;

  .border {
    border: solid 1px ${colors.pink};
  }

  .restImage {
    width: 100%;
    display: block;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const Title = styled.h3`
  font-weight: bold;
  font-size: 18px;
  margin: 8px 8px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin: 16px 8px;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
export const Rating = styled.div`
  display: flex;
  font-weight: bold;
  font-size: 18px;
  margin: 8px;
  position: absolute;
  right: 8px;
  top: 228px;

  img {
    margin-left: 8px;
  }
`
export const CardDishes = styled.div`
  background-color: ${colors.white};
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
`
