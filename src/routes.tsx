import { Routes as Rt, Route } from 'react-router-dom'

import Home from './pages/Home'
import MenuOptions from './pages/Restaurants'

const Routes = () => (
  <Rt>
    <Route path="/" element={<Home />} />
    <Route path="/restaurant/:id" element={<MenuOptions />} />
  </Rt>
)

export default Routes
