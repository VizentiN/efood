import { useParams } from 'react-router-dom'

import { Header } from '../../components/Header'
import MenuList from '../../components/MenuList'

import { useGetRestaurantQuery } from '../../services/api'

const MenuOptions = () => {
  const { id } = useParams()
  const { data: restaurant } = useGetRestaurantQuery(id!)

  if (!restaurant) return <h3>Carregando</h3>
  document.title = 'eFood | ' + restaurant.titulo

  return (
    <>
      <Header />
      <MenuList {...restaurant} />
    </>
  )
}

export default MenuOptions
