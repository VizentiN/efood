import { BrowserRouter } from 'react-router-dom'

import { GlobalCss } from './styles'

import Routes from './routes'
import Footer from './components/Footer'
import { Provider } from 'react-redux'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <Routes />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
