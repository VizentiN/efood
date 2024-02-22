import { Link } from 'react-router-dom'
import Tag from '../Tag'

import StyledCard, { CardImg } from './styles'
import star from '../../assets/images/estrela.svg'
import Button from '../Button'
import { RestaurantApiProps } from '../../utilities/Types'
import { getTagsFromData } from '../../utilities/Helpers'
// import { Container } from '../Footer/styles'
// import Button, { ButtonDishes } from '../Button'

// type Props2 = {
//   title: string
//   description: string
//   image: string
// }

// const getDescription = (description: string) => {
//   if (description.length > 173) {
//     return description.slice(0, 170) + '...'
//   }

//   if (description.length > 132) {
//     return description.slice(0, 129) + '...'
//   }

//   return description
// }

// const getDestaque = (destaque: boolean) => {
//   if (destaque) {
//     return <Tag>Destaque da Semana</Tag>
//   }
// }

// const Product = (props: RestaurantApiProps) => (
//   <Container>
//     <div className="container">
//       <Card>
//         <img className="restImage" src={props.capa} alt={props.titulo} />
//         <div className="border">
//           <Infos>
//             {getTagsFromData(props).map((tag, index) => (
//               <Tag key={index}>{tag}</Tag>
//             ))}
//           </Infos>
//           <Title>{props.titulo}</Title>
//           <Rating>
//             <span>{props.avaliacao}</span>
//             <img src={star} alt="star" />
//           </Rating>
//           <Description>{getDescription(props.descricao)}</Description>
//           <Link to={`/restaurant/${props.id}`}>
//             <Button title={'More about'}></Button>
//           </Link>
//         </div>
//       </Card>
//     </div>
//   </Container>
// )

const Product = (props: RestaurantApiProps) => (
  <StyledCard>
    <div id="card_container">
      {getTagsFromData(props).map((tag, index) => (
        <Tag key={index}>{tag.charAt(0).toUpperCase() + tag.slice(1)}</Tag>
      ))}
    </div>
    <CardImg src={props.capa} alt={props.titulo} />
    <div id="desc" className="border">
      <div id="card_header">
        <h3>{props.titulo}</h3>{' '}
        <div id="card_point">
          <span>{props.avaliacao}</span>
          <img src={star} />
        </div>
      </div>
      <p>{props.descricao.substring(0, 170) + '...'}</p>
      <Link to={`/restaurant/${props.id}`}>
        <Button title={'More about'}></Button>
      </Link>
    </div>
  </StyledCard>
)

// export const RestDishes = ({ title, description, image }: Props2) => (
//   <CardDishes>
//     <DishImage className="S.dishesImage" src={image} alt={title} />
//     <TitleDishes>{title}</TitleDishes>
//     <DescriptionDishes>{getDescription(description)}</DescriptionDishes>
//     <ButtonDishes title={'Add to cart'}></ButtonDishes>
//   </CardDishes>
// )

export default Product
