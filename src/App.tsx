import { Provider } from 'react-redux'

import Router from './routes/Router'
import { GlobalStyle } from './style/GlobalStyle'
import { store } from './store/store'

function App() {
  return (
    <Provider store={store}>
      <Router />
      <GlobalStyle />
    </Provider>
  )
}

export default App
