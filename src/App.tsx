import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Main } from './pages/Main/Main'
import { GlobalStyle } from './globalStyle'

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
