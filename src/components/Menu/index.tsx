import { MenuItemsProps } from '../../utilities/Types'
import { CardDishes, DescriptionDishes, DishImage } from './styles'
import { TitleDishes } from '../MenuList/styles'
import { ButtonDishes } from '../Button'
import ModalItem from '../Modal'
import { useState } from 'react'

const MenuItem = (props: MenuItemsProps) => {
  const [showModal, setShowModal] = useState(false)
  return (
    <CardDishes>
      <DishImage src={props.foto} alt={props.nome} />
      <TitleDishes>{props.nome}</TitleDishes>
      <DescriptionDishes>
        {props.descricao.substring(0, 167) + '...'}
      </DescriptionDishes>
      <ButtonDishes
        onClick={() => setShowModal(true)}
        title={'Add to cart'}
      ></ButtonDishes>
      <ModalItem
        {...props}
        showModal={showModal}
        toggleModal={() => {
          setShowModal(false)
        }}
      />
    </CardDishes>
  )
}

export default MenuItem
