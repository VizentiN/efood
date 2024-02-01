import { Routes as Rt, Route } from 'react-router-dom'

import Home from './pages/Home'
import LaDolce from './pages/Restaurants/LaDolce'
import Hioki from './pages/Restaurants/Hioki'

const Routes = () => (
  <Rt>
    <Route path="/" element={<Home />} />
    <Route path="/restaurant/1" element={<Hioki />} />
    <Route path="/restaurant/2" element={<LaDolce />} />
  </Rt>
)

export default Routes
