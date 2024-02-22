export interface MenuItemsProps {
  id: number
  nome: string
  descricao: string
  preco: number
  porcao: string
  foto: string
}

export interface MenuItemsModalProps extends MenuItemsProps {
  showModal: boolean
  toggleModal: () => void
}

export interface RestaurantApiProps {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: MenuItemsProps[]
}
