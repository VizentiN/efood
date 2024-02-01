import { Link } from 'react-router-dom'

import { HeaderBar, LinkCart } from './styles'

import logo from '../../assets/images/logo.svg'
import bannerImg from '../../assets/images/back_banner.png'

export const Header = () => (
  <HeaderBar style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Link to="/">
        <h4>Restaurants</h4>
      </Link>
      <div>
        <Link to="/">
          <img src={logo} alt="efood" />
        </Link>
      </div>
      <LinkCart href="#">0 - product(s)</LinkCart>
    </div>
  </HeaderBar>
)
