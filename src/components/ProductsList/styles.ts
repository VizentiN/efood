import styled from 'styled-components'

import { colors } from '../../styles'
import { Card } from '../Product/styles'

export const Container = styled.section`
  padding-top: 80px;
  padding-bottom: 120px;
  background-color: ${colors.light_cream};

  ${Card} {
    background-color: ${colors.white};
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
export const ContainerDishes = styled.section`
  padding: 32px;
  background-color: ${colors.light_cream};
  color: ${colors.cream};

  ${Card} {
    background-color: ${colors.pink};
  }
`
export const ListDishes = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  row-gap: 32px;
  margin-top: 56px;
`
export const TitleDishes = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin-left: 8px;
`
