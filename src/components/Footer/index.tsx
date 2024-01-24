import { Link } from 'react-router-dom'

import { Container, LogoFooter, SocialMedias } from './styles'

import logo from '../../assets/images/logo.svg'
import facebook from '../../assets/images/facebook.svg'
import insta from '../../assets/images/insta.svg'
import x from '../../assets/images/X.svg'

const Footer = () => (
  <Container>
    <div>
      <Link to="/">
        <LogoFooter className="containerImage" src={logo} alt="efood" />
      </Link>
      <SocialMedias>
        <Link to="/">
          <img src={insta} alt="Instagram" />
        </Link>
        <Link to="/">
          <img src={facebook} alt="Facebook" />
        </Link>
        <Link to="/">
          <img src={x} alt="Twitter(X)" />
        </Link>
      </SocialMedias>
      <p>
        efood is a platform for promoting establishments, the responsibility for
        delivery and quality of products lies entirely with the contracted
        establishment.
      </p>
    </div>
  </Container>
)

export default Footer
