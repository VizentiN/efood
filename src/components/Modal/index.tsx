import StyledModal, { StyledModalContainer } from './styles'
import btn_close from '../../assets/images/close.png'

import { getCurrency } from '../../utilities/Helpers'
import { MenuItemsModalProps } from '../../utilities/Types'
import { ButtonDishesContainer } from '../Button/styles'

const ModalItem = (props: MenuItemsModalProps) => {
  if (!props.showModal) return <></>

  return (
    <StyledModal onClick={props.toggleModal}>
      <StyledModalContainer className="container">
        <img
          id="btn_close"
          src={btn_close}
          alt="X"
          onClick={props.toggleModal}
        />
        <img id="image_item" src={props.foto} alt="imagem" />
        <div id="details">
          <h3>{props.nome}</h3>
          <p>
            {props.descricao}
            <br />
            <br />
            Serve: de {props.porcao}
          </p>
          <ButtonDishesContainer
            onClick={() => {
              const { id, nome, descricao, foto, porcao, preco } = props
              const data = { id, nome, descricao, foto, porcao, preco }
            }}
          >
            Adicionar ao carrinho - {getCurrency(props.preco)}
          </ButtonDishesContainer>
        </div>
      </StyledModalContainer>
    </StyledModal>
  )
}

export default ModalItem
