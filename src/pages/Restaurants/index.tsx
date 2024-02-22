// import { Header } from '../../components/Header'
// import { useEffect, useState } from 'react'
// import { Restaurant } from '../../pages/Home'
// import { useParams } from 'react-router-dom'
// import Hero from '../../components/Hero'
// import {
//   ContainerDishes,
//   ListDishes
// } from '../../components/ProductsList/styles'
// import { RestDishes } from '../../components/Product/Index'
// import { DishesList } from '../../components/ProductsList'

// const MenuOptions = () => {
//   const { id } = useParams()

//   const [dish, setDish] = useState<Restaurant>()

//   const [dishesList, setDishesList] = useState<Restaurant[]>([])

//   useEffect(() => {
//     fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
//       .then((res) => res.json())
//       .then((res) => setDish(res))
//   }, [id])

//   useEffect(() => {
//     fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
//       .then((res) => res.json())
//       .then((res) => setDishesList(res))
//   }, [])

//   if (!dish) {
//     return <h3>Loading...</h3>
//   }

//   return (
//     <>
//       <Header />
//       <Hero dish={dish}></Hero>
//       <ContainerDishes>
//         <div className="container">
//           <ListDishes>
//             <RestDishes
//               description={dish.cardapio}
//               image={dish.cardapio[1].foto}
//               title={dish.cardapio[1].nome}
//             />
//           </ListDishes>
//         </div>
//       </ContainerDishes>
//     </>
//   )
// }

// export default MenuOptions

import { useParams } from 'react-router-dom'

import { Header } from '../../components/Header'
import MenuList from '../../components/MenuList'

import { useEffect, useState } from 'react'
import { RestaurantApiProps } from '../../utilities/Types'

const MenuOptions = () => {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState<RestaurantApiProps>()
  useEffect(() => {
    console.log(id)

    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes/' + id)
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        setRestaurant(res)
      })
  }, [id])
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
