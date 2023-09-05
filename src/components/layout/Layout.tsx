import { Outlet } from 'react-router-dom'
import { styled } from 'styled-components'

const Layout = () => {
  return (
    <Box>
      <Outlet />
    </Box>
  )
}

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #cae9ff;
`

export default Layout
