import { Link } from 'react-router-dom'

import { Image, Title, Logo, ImageCart, TitleCart, TitleLight } from './styles'

import bannerImg from '../../assets/images/back_banner.png'
import bannerLaDolce from '../../assets/images/rest2.png'
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

export const BannerLaDolce = () => (
  <ImageCart style={{ backgroundImage: `url(${bannerLaDolce})` }}>
    <div className="container">
      <div>
        <TitleLight>Italian</TitleLight>
        <TitleCart>La Dolce Vita Trattoria</TitleCart>
      </div>
    </div>
  </ImageCart>
)

export default Banner
