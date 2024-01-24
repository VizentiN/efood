import { Routes as Rt, Route } from 'react-router-dom'

import Home from './pages/Home'
import LaDolce from './pages/Restaurants/LaDolce'
import Hioki from './pages/Restaurants/Hioki'

const Routes = () => (
  <Rt>
    <Route path="/" element={<Home />} />
    <Route path="/restaurant/ladolce" element={<LaDolce />} />
    <Route path="/restaurant/hioki" element={<Hioki />} />
  </Rt>
)

export default Routes
