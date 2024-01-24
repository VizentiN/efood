import { BrowserRouter } from 'react-router-dom'

import { GlobalCss } from './styles'

import Routes from './routes'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Routes />
      <Footer />
    </BrowserRouter>
  )
}

export default App
