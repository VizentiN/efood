import { BrowserRouter } from 'react-router-dom'

import Footer from './container/Footer'
import { GlobalCss } from './styles'

import Rotas from './routes'
import Cart from './components/Cart'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <Rotas />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
