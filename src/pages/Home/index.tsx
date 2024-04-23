import Header from '../../container/Header'
import RestaurantsList from '../../container/RestaurantList'

import { useGetRestaurantsListQuery } from '../../services/api'

const Home = () => {
  const { data: restaurants } = useGetRestaurantsListQuery()
  if (restaurants) {
    return (
      <>
        <Header />
        <RestaurantsList restaurants={restaurants} />
      </>
    )
  }
  return <h4>Carregando...</h4>
}
export default Home
