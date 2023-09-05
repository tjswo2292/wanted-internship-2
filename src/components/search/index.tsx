import { styled } from 'styled-components'
import SearchInput from './SearchInput'

const Main = () => {
  return (
    <Box>
      <SearchInput />
    </Box>
  )
}

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 49rem;
  height: 7rem;
  border-radius: 4.2rem;
  background-color: #fff;
`

export default Main
