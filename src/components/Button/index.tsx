import { ButtonContainer, ButtonDishesContainer } from './styles'

type Props = {
  to?: string
  title: string
  onClick?: () => void
}

const Button = ({ title, onClick }: Props) => {
  return (
    <ButtonContainer type="button" title={title} onClick={onClick}>
      {title}
    </ButtonContainer>
  )
}

export const ButtonDishes = ({ title, onClick }: Props) => {
  return (
    <ButtonDishesContainer type="button" title={title} onClick={onClick}>
      {title}
    </ButtonDishesContainer>
  )
}

export default Button
