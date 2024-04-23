import Hero from '../Hero'

import MenuItem from '../Menu'
import { RestaurantApiProps } from '../../utilities/Types'
import { ListDishes } from './styles'

const MenuList = (props: RestaurantApiProps) => {
  return (
    <>
      <Hero {...props} />
      <div className="container">
        <ListDishes>
          {props.cardapio.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </ListDishes>
      </div>
    </>
  )
}
export default MenuList
