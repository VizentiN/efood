import { Link } from 'react-router-dom'

import { Image, Title, Logo } from './styles'

import bannerImg from '../../assets/images/back_banner.png'
import logo from '../../assets/images/logo.svg'

const Banner = () => (
  <Image style={{ backgroundImage: `url(${bannerImg})` }}>
    <Link to="/">
      <Logo className="containerBanner" src={logo} alt="efood" />
    </Link>
    <div className="containerBanner">
      <Title>Live gastronomic experiences in the comfort of your home</Title>
    </div>
  </Image>
)

export default Banner
