import Tag from '../Tag'
import estrela from '../../assets/images/star.png'

import * as S from './styles'

type Props = {
  name: string
  description: string
  image: string
  rating: number
  destacado: boolean
  infos: string
  link: string
}

const RestaurantCard = ({
  name,
  description,
  image,
  rating,
  infos,
  destacado,
  link
}: Props) => {
  return (
    <S.Card>
      <img src={image} alt="teste" />
      <S.Infos>
        {destacado && <Tag>Destaque do dia</Tag>}
        <Tag>{infos}</Tag>
      </S.Infos>
      <S.CardDescription>
        <S.Title>
          <h2>{name}</h2>
          <S.Rating>
            {rating}
            <img src={estrela} alt="" />
          </S.Rating>
        </S.Title>
        <p>{description}</p>
        <S.Botao to={link}>Saiba mais</S.Botao>
      </S.CardDescription>
    </S.Card>
  )
}

export default RestaurantCard
