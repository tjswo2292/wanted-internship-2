import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../components/layout/Layout'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>{/* <Route path='/' element={}/> */}</Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
