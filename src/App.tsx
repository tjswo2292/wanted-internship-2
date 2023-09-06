import { GlobalStyle } from './style/GlobalStyle'

import Router from './routes/Router'
import InputModalProvider from './context/InputModalProvider'
import SeachKeywordProvider from './context/SeachKeywordProvider'

function App() {
  return (
    <InputModalProvider>
      <SeachKeywordProvider>
        <Router />
        <GlobalStyle />
      </SeachKeywordProvider>
    </InputModalProvider>
  )
}

export default App
