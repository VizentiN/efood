import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${colors.white};
  position: relative;
  text-decoration: none;
  color: ${colors.pink};
  display: block;

  > img {
    display: block;
    width: 472px;
    height: 217px;
    object-fit: cover;
  }

  .border {
    border: solid 1px ${colors.pink};
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`

// export const Title = styled.h3`
//   font-weight: bold;
//   font-size: 18px;
//   margin: 8px;
// `

// export const Description = styled.p`
//   font-size: 14px;
//   line-height: 22px;
//   display: block;
//   margin: 16px 8px;
// `
// export const Infos = styled.div`
//   font-weight: 700;
//   position: absolute;
//   top: 16px;
//   right: 8px;
// `
// export const Rating = styled.div`
//   display: flex;
//   font-weight: bold;
//   font-size: 18px;
//   margin: 8px;
//   position: absolute;
//   right: 8px;
//   top: 218px;

//   img {
//     margin-left: 8px;
//   }
// `

// export const Container = styled.section`
//   padding-top: 80px;
//   padding-bottom: 120px;
//   background-color: ${colors.light_cream};

//   ${Card} {
//     background-color: ${colors.white};
//   }
// `

// export const List = styled.ul`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   column-gap: 80px;
//   row-gap: 48px;
// `

const StyledCard = styled.div`
  background-color: ${colors.white};
  position: relative;
  display: block;

  #card_container {
    position: absolute;
    top: 16px;
    right: 16px;
    display: flex;
    gap: 8px;
  }

  .border {
    border: solid 1px ${colors.pink};
    border-top: none;
  }

  #desc {
    padding: 8px;

    #card_header {
      display: flex;
      justify-content: space-between;

      h3 {
        font-size: 18px;
        font-weight: bold;
        line-height: 22px;
        text-align: center;
      }

      #card_point {
        display: flex;
        gap: 8px;
        font-weight: bold;
        font-size: 18px;
        line-height: 24px;
      }
    }

    p {
      font-size: 14px;
      margin: 16px 0;
    }
  }
`

const CardImg = styled.img`
  display: block;
  width: 472px;
  height: 217px;
  object-fit: cover;
`

// export const CardDishes = styled.div`
//   background-color: ${colors.pink};
//   position: relative;
// `
// export const DescriptionDishes = styled.p`
//   font-size: 14px;
//   line-height: 22px;
//   display: block;
//   margin: 8px 8px;
// `
// export const DishImage = styled.img`
//   margin: 8px;
//   width: 304px;
//   height: 167px;
//   object-fit: cover;
// `

export default StyledCard

export { CardImg }
