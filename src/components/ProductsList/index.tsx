import Food from '../../models/Food'
import Product, { RestDishes } from '../Product/Index'

import { List, Container, ContainerDishes, ListDishes } from './styles'

export type Props = {
  dishes: Food[]
}

export type Props2 = {
  dishes: Food[]
}

const ProductsList = ({ dishes }: Props) => (
  <Container>
    <div className="container">
      <List>
        {dishes.map((dish) => (
          <Product
            key={dish.id}
            rating={dish.rating as number}
            description={dish.description}
            image={dish.image}
            title={dish.title}
            infos={dish.infos as string[]}
            id={dish.id}
          />
        ))}
      </List>
    </div>
  </Container>
)

export const Dishes = ({ dishes }: Props2) => (
  <ContainerDishes>
    <div className="container">
      <ListDishes>
        {dishes.map((dish) => (
          <RestDishes
            key={dish.id}
            description={dish.description}
            image={dish.image}
            title={dish.title}
          />
        ))}
      </ListDishes>
    </div>
  </ContainerDishes>
)

export default ProductsList
