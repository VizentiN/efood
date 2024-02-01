import Tag from '../Tag'

import {
  Card,
  Title,
  Description,
  Infos,
  Rating,
  DescriptionDishes,
  DishImage
} from './styles'
import star from '../../assets/images/estrela.svg'
import Button, { ButtonDishes } from '../Button'
import { TitleDishes } from '../ProductsList/styles'
import { Link } from 'react-router-dom'

type Props = {
  id?: number
  title: string
  rating: number
  infos: string[]
  description: string
  image: string
}

type Props2 = {
  title: string
  description: string
  image: string
}

const Product = ({ title, description, infos, image, rating, id }: Props) => (
  <Card>
    <img className="restImage" src={image} alt={title} />
    <div className="border">
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <Title>{title}</Title>
      <Rating>
        <span>{rating}</span>
        <img src={star} alt="star" />
      </Rating>
      <Description>{description}</Description>
      <Link to={`/restaurant/${id}`}>
        <Button title={'More about'}></Button>
      </Link>
    </div>
  </Card>
)

export const RestDishes = ({ title, description, image }: Props2) => (
  <Card>
    <DishImage className="S.dishesImage" src={image} alt={title} />
    <TitleDishes>{title}</TitleDishes>
    <DescriptionDishes>{description}</DescriptionDishes>
    <ButtonDishes title={'Add to cart'}></ButtonDishes>
  </Card>
)

export default Product
