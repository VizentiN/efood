// import { useEffect, useState } from 'react'

import Banner from '../../components/Banner'
// import ProductsList from '../../components/ProductsList'
import Main from '../../container/Main'
// import { Menu } from '../../components/Menu'

// export type Restaurant = {
//   id: number
//   titulo: string
//   destacado: boolean
//   tipo: string
//   avaliacao: number
//   descricao: string
//   capa: string
//   cardapio: Menu[]
// }

const Home = () => {
  return (
    <>
      <Banner />
      <Main />
    </>
  )
}

export default Home
