import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { HeaderBar, LinkCart } from './styles'
import logo from '../../assets/images/logo.svg'
import bannerImg from '../../assets/images/back_banner.png'
import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'

export const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
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
        <LinkCart onClick={openCart}>{items.length} - product(s)</LinkCart>
      </div>
    </HeaderBar>
  )
}
