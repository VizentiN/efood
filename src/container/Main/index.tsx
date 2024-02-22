import { useEffect, useState } from 'react'

import { RestaurantApiProps } from '../../utilities/Types'
import Product from '../../components/Product/Index'
import StyledMain from './styles'

const Main = () => {
  const [restaurantes, setRestaurantes] = useState<RestaurantApiProps[]>([])
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        setRestaurantes(res)
      })
  }, [])

  return (
    <>
      <StyledMain>
        {restaurantes.map((card) => (
          <Product key={card.id} {...card} />
        ))}
      </StyledMain>
    </>
  )
}

export default Main
